-- =============================================================================
-- MIGRATION 002: Multi-Tenant Core — Organisations & User Profiles
-- Project      : Awaitsi Business Cloud
-- Description  : Establishes the foundational multi-tenant data model.
--                Every row in every business table is scoped to an
--                organisation_id. Row-Level Security policies enforce that
--                users can ONLY see data belonging to their own organisation.
--
-- Tenant Isolation Strategy
-- --------------------------
-- 1. organisations  — the "tenant" root table.
-- 2. user_profiles  — extends Supabase auth.users; maps each user to one org
--                     and carries their role (owner | admin | member | viewer).
-- 3. All future business tables will carry:
--       organisation_id UUID NOT NULL REFERENCES organisations(id)
--    and RLS policies using the helper function current_user_org_id().
--
-- Auth Flow
-- ---------
-- Sign-up  → creates auth.user → trigger creates user_profile with role='owner'
--            and a new organisation row.
-- Invite   → admin calls invite_user() → creates draft user_profile with
--            role assigned; user completes sign-up via Supabase magic link.
-- Sign-in  → JWT contains user_id; RLS policies resolve org via user_profiles.
-- =============================================================================

-- =============================================================================
-- ENUM: Organisation plan tiers
-- =============================================================================
DO $$ BEGIN
  CREATE TYPE public.plan_tier AS ENUM ('starter', 'growth', 'enterprise');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- ENUM: User roles within an organisation
-- =============================================================================
DO $$ BEGIN
  CREATE TYPE public.org_role AS ENUM ('owner', 'admin', 'member', 'viewer');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- TABLE: organisations
-- Purpose: Each row is a tenant. All business data references this table.
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.organisations (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name            TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  slug            TEXT NOT NULL UNIQUE
                    CHECK (slug ~ '^[a-z0-9\-]{2,80}$'),  -- URL-safe identifier
  plan            public.plan_tier NOT NULL DEFAULT 'starter',
  country_code    CHAR(2) NOT NULL DEFAULT 'ZA',           -- ISO 3166-1 alpha-2
  currency_code   CHAR(3) NOT NULL DEFAULT 'ZAR',          -- ISO 4217
  vat_number      TEXT,
  logo_url        TEXT,
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  trial_ends_at   TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.organisations IS
  'Root tenant table. Every business record is scoped to one organisation.';
COMMENT ON COLUMN public.organisations.slug IS
  'URL-safe, human-readable identifier used in subdomains and public URLs.';

ALTER TABLE public.organisations ENABLE ROW LEVEL SECURITY;

-- Organisations are readable only by members of that organisation.
-- The helper function current_user_org_id() (defined below) is used in policies.

-- =============================================================================
-- TABLE: user_profiles
-- Purpose: Extends auth.users. One row per Supabase auth user.
--          A user belongs to exactly one organisation.
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id                UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  organisation_id   UUID NOT NULL REFERENCES public.organisations(id) ON DELETE CASCADE,
  role              public.org_role NOT NULL DEFAULT 'member',
  full_name         TEXT CHECK (full_name IS NULL OR char_length(full_name) <= 200),
  avatar_url        TEXT,
  job_title         TEXT CHECK (job_title IS NULL OR char_length(job_title) <= 100),
  phone             TEXT CHECK (phone IS NULL OR char_length(phone) <= 20),
  is_active         BOOLEAN NOT NULL DEFAULT TRUE,
  last_seen_at      TIMESTAMPTZ,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.user_profiles IS
  'Extends auth.users. Maps every Supabase auth user to an organisation with a role.';
COMMENT ON COLUMN public.user_profiles.role IS
  'owner: full control (1 per org); admin: manage members & settings; member: standard access; viewer: read-only.';

ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- HELPER FUNCTION: current_user_org_id()
-- Returns the organisation_id for the currently authenticated user.
-- Used in all RLS policies on tenant-scoped tables.
-- Marked SECURITY DEFINER so it bypasses RLS when reading user_profiles.
-- =============================================================================
CREATE OR REPLACE FUNCTION public.current_user_org_id()
RETURNS UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT organisation_id
  FROM   public.user_profiles
  WHERE  id = auth.uid()
  LIMIT  1;
$$;

COMMENT ON FUNCTION public.current_user_org_id() IS
  'Returns the organisation_id of the currently authenticated user. Used in RLS policies.';

-- =============================================================================
-- HELPER FUNCTION: current_user_role()
-- Returns the org_role for the currently authenticated user.
-- Used in policies that gate write operations by role.
-- =============================================================================
CREATE OR REPLACE FUNCTION public.current_user_role()
RETURNS public.org_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role
  FROM   public.user_profiles
  WHERE  id = auth.uid()
  LIMIT  1;
$$;

COMMENT ON FUNCTION public.current_user_role() IS
  'Returns the org_role of the currently authenticated user. Used in RLS write-gate policies.';

-- =============================================================================
-- RLS POLICIES: organisations
-- =============================================================================

-- Members can read their own organisation's row
CREATE POLICY "organisations_member_select" ON public.organisations
  FOR SELECT
  USING (id = public.current_user_org_id());

-- Only owner or admin can update their org
CREATE POLICY "organisations_admin_update" ON public.organisations
  FOR UPDATE
  USING (
    id = public.current_user_org_id()
    AND public.current_user_role() IN ('owner', 'admin')
  );

-- INSERT is handled by the sign-up trigger (service role), not end users

-- =============================================================================
-- RLS POLICIES: user_profiles
-- =============================================================================

-- Users can read all profiles within their own organisation
CREATE POLICY "user_profiles_org_select" ON public.user_profiles
  FOR SELECT
  USING (organisation_id = public.current_user_org_id());

-- Users can update only their own profile
CREATE POLICY "user_profiles_self_update" ON public.user_profiles
  FOR UPDATE
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- Admins/owners can insert new member profiles (invitations)
CREATE POLICY "user_profiles_admin_insert" ON public.user_profiles
  FOR INSERT
  WITH CHECK (
    organisation_id = public.current_user_org_id()
    AND public.current_user_role() IN ('owner', 'admin')
  );

-- Only owner can delete a profile (remove member)
CREATE POLICY "user_profiles_owner_delete" ON public.user_profiles
  FOR DELETE
  USING (
    organisation_id = public.current_user_org_id()
    AND public.current_user_role() = 'owner'
  );

-- =============================================================================
-- TRIGGER: updated_at maintenance
-- =============================================================================
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER organisations_updated_at
  BEFORE UPDATE ON public.organisations
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER user_profiles_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =============================================================================
-- TRIGGER: Auto-create organisation + owner profile on first sign-up
-- When a user signs up via Supabase Auth (magic link / OAuth / password),
-- this trigger fires, creates a new organisation, and sets the user as owner.
-- =============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_org_id  UUID;
  v_slug    TEXT;
  v_name    TEXT;
BEGIN
  -- Derive a default org name from email (before the @)
  v_name := split_part(NEW.email, '@', 1);

  -- Build a URL-safe slug: lowercase, replace non-alphanumeric with hyphens
  v_slug := regexp_replace(lower(v_name), '[^a-z0-9]', '-', 'g');
  -- Append short UUID segment to guarantee uniqueness
  v_slug := v_slug || '-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 6);

  -- Create the organisation
  INSERT INTO public.organisations (name, slug)
  VALUES (v_name, v_slug)
  RETURNING id INTO v_org_id;

  -- Create the owner profile
  INSERT INTO public.user_profiles (id, organisation_id, role, full_name)
  VALUES (
    NEW.id,
    v_org_id,
    'owner',
    COALESCE(NEW.raw_user_meta_data->>'full_name', v_name)
  );

  RETURN NEW;
END;
$$;

-- Fire after INSERT on auth.users (Supabase's internal auth table)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================================================
-- INDEXES
-- =============================================================================
CREATE INDEX IF NOT EXISTS idx_user_profiles_org    ON public.user_profiles (organisation_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_role   ON public.user_profiles (organisation_id, role);
CREATE INDEX IF NOT EXISTS idx_organisations_slug   ON public.organisations (slug);
CREATE INDEX IF NOT EXISTS idx_organisations_plan   ON public.organisations (plan);
