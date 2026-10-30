-- =============================================================================
-- MIGRATION 001: Public Lead Capture Tables
-- Project      : Awaitsi Business Cloud
-- Description  : Creates and secures the public-facing lead capture tables
--                (contact messages and quote requests). Replaces the legacy
--                setup_messages_table.sql.
-- Run on       : Supabase SQL Editor or via Supabase CLI (supabase db push)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- EXTENSION: Enable uuid-ossp for UUID primary keys
-- -----------------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================================
-- TABLE: messages
-- Purpose: Stores contact form submissions from ContactPage.tsx
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.messages (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  email         TEXT NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone         TEXT CHECK (phone IS NULL OR char_length(phone) <= 20),
  project_type  TEXT CHECK (project_type IS NULL OR char_length(project_type) <= 100),
  message       TEXT NOT NULL CHECK (char_length(message) BETWEEN 5 AND 5000),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.messages IS
  'Contact form submissions from the public website. Read by authenticated admins only.';

-- Enable Row-Level Security
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can INSERT (public contact form)
CREATE POLICY "messages_public_insert" ON public.messages
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users (admins) can SELECT
CREATE POLICY "messages_authenticated_select" ON public.messages
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Deny public UPDATE / DELETE (admins manage via Supabase dashboard)
-- No UPDATE or DELETE policies means those operations are implicitly denied
-- for the anon role by RLS.

-- =============================================================================
-- TABLE: quotes
-- Purpose: Stores quote / consultation requests from ConsultationModal.tsx
--          and the /api/quote endpoint.
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.quotes (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name            TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  email           TEXT NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone           TEXT CHECK (phone IS NULL OR char_length(phone) <= 20),
  project_type    TEXT CHECK (project_type IS NULL OR char_length(project_type) <= 100),
  business_stage  TEXT CHECK (business_stage IS NULL OR char_length(business_stage) <= 100),
  budget          TEXT CHECK (budget IS NULL OR char_length(budget) <= 100),
  description     TEXT CHECK (description IS NULL OR char_length(description) <= 5000),
  message         TEXT CHECK (message IS NULL OR char_length(message) <= 5000),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.quotes IS
  'Quote and consultation requests from the website. Read by authenticated admins only.';

ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "quotes_public_insert" ON public.quotes
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "quotes_authenticated_select" ON public.quotes
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- =============================================================================
-- TABLE: assessment_leads
-- Purpose: Stores Digital Assessment lead capture (name + email captured at the
--          results gate in DigitalAssessmentPage.tsx via /api/contact).
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.assessment_leads (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  email       TEXT NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  score       SMALLINT CHECK (score BETWEEN 0 AND 100),
  answers     JSONB,                    -- Raw assessment answers for analytics
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.assessment_leads IS
  'Lead capture from the Digital Readiness Assessment tool. Score and raw answers stored for analysis.';

ALTER TABLE public.assessment_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "assessment_leads_public_insert" ON public.assessment_leads
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "assessment_leads_authenticated_select" ON public.assessment_leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- =============================================================================
-- INDEXES: Optimise common admin queries
-- =============================================================================
CREATE INDEX IF NOT EXISTS idx_messages_created_at       ON public.messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_email            ON public.messages (email);
CREATE INDEX IF NOT EXISTS idx_quotes_created_at         ON public.quotes (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_email              ON public.quotes (email);
CREATE INDEX IF NOT EXISTS idx_assessment_leads_email    ON public.assessment_leads (email);
CREATE INDEX IF NOT EXISTS idx_assessment_leads_score    ON public.assessment_leads (score);
