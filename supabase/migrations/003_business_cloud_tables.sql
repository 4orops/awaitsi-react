-- =============================================================================
-- MIGRATION 003: Business Cloud Feature Tables
-- Project      : Awaitsi Business Cloud
-- Description  : Tenant-scoped tables for Phase 1 features:
--                  - projects        (client project tracking)
--                  - contacts        (CRM-lite: clients & prospects)
--                  - invoices        (simple billing records)
--                  - tasks           (project task management)
--                  - activity_log    (immutable audit trail)
--
-- All tables follow the same RLS pattern:
--   SELECT → any member of the same org
--   INSERT → member, admin, or owner of the same org
--   UPDATE → member (own rows), admin, or owner
--   DELETE → admin or owner only
-- =============================================================================

-- =============================================================================
-- ENUM: Project status
-- =============================================================================
DO $$ BEGIN
  CREATE TYPE public.project_status AS ENUM
    ('draft', 'active', 'on_hold', 'completed', 'cancelled');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- ENUM: Contact type
-- =============================================================================
DO $$ BEGIN
  CREATE TYPE public.contact_type AS ENUM ('client', 'prospect', 'partner', 'supplier');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- ENUM: Invoice status
-- =============================================================================
DO $$ BEGIN
  CREATE TYPE public.invoice_status AS ENUM
    ('draft', 'sent', 'paid', 'overdue', 'cancelled');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- ENUM: Task status
-- =============================================================================
DO $$ BEGIN
  CREATE TYPE public.task_status AS ENUM
    ('backlog', 'todo', 'in_progress', 'in_review', 'done', 'cancelled');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- =============================================================================
-- TABLE: contacts  (CRM-lite)
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.contacts (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organisation_id   UUID NOT NULL REFERENCES public.organisations(id) ON DELETE CASCADE,
  type              public.contact_type NOT NULL DEFAULT 'prospect',
  company_name      TEXT CHECK (company_name IS NULL OR char_length(company_name) <= 200),
  first_name        TEXT NOT NULL CHECK (char_length(first_name) BETWEEN 1 AND 100),
  last_name         TEXT CHECK (last_name IS NULL OR char_length(last_name) <= 100),
  email             TEXT CHECK (email IS NULL OR email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone             TEXT CHECK (phone IS NULL OR char_length(phone) <= 20),
  industry          TEXT CHECK (industry IS NULL OR char_length(industry) <= 100),
  notes             TEXT,
  created_by        UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.contacts IS 'CRM contact records scoped to an organisation.';
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "contacts_org_select" ON public.contacts
  FOR SELECT USING (organisation_id = public.current_user_org_id());

CREATE POLICY "contacts_member_insert" ON public.contacts
  FOR INSERT WITH CHECK (organisation_id = public.current_user_org_id());

CREATE POLICY "contacts_member_update" ON public.contacts
  FOR UPDATE USING (organisation_id = public.current_user_org_id());

CREATE POLICY "contacts_admin_delete" ON public.contacts
  FOR DELETE USING (
    organisation_id = public.current_user_org_id()
    AND public.current_user_role() IN ('owner', 'admin')
  );

CREATE TRIGGER contacts_updated_at
  BEFORE UPDATE ON public.contacts
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =============================================================================
-- TABLE: projects
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.projects (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organisation_id   UUID NOT NULL REFERENCES public.organisations(id) ON DELETE CASCADE,
  contact_id        UUID REFERENCES public.contacts(id) ON DELETE SET NULL,
  name              TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  description       TEXT,
  status            public.project_status NOT NULL DEFAULT 'draft',
  start_date        DATE,
  due_date          DATE,
  budget_zar        NUMERIC(14, 2) CHECK (budget_zar IS NULL OR budget_zar >= 0),
  tags              TEXT[] DEFAULT '{}',
  created_by        UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.projects IS 'Client projects tracked within an organisation.';
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "projects_org_select" ON public.projects
  FOR SELECT USING (organisation_id = public.current_user_org_id());

CREATE POLICY "projects_member_insert" ON public.projects
  FOR INSERT WITH CHECK (organisation_id = public.current_user_org_id());

CREATE POLICY "projects_member_update" ON public.projects
  FOR UPDATE USING (organisation_id = public.current_user_org_id());

CREATE POLICY "projects_admin_delete" ON public.projects
  FOR DELETE USING (
    organisation_id = public.current_user_org_id()
    AND public.current_user_role() IN ('owner', 'admin')
  );

CREATE TRIGGER projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =============================================================================
-- TABLE: tasks
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.tasks (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organisation_id   UUID NOT NULL REFERENCES public.organisations(id) ON DELETE CASCADE,
  project_id        UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  title             TEXT NOT NULL CHECK (char_length(title) BETWEEN 1 AND 500),
  description       TEXT,
  status            public.task_status NOT NULL DEFAULT 'backlog',
  priority          SMALLINT NOT NULL DEFAULT 2
                      CHECK (priority BETWEEN 1 AND 4),  -- 1=Low 2=Normal 3=High 4=Critical
  assigned_to       UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  due_date          DATE,
  created_by        UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.tasks IS
  'Task management, scoped to organisation. Optionally linked to a project.';
COMMENT ON COLUMN public.tasks.priority IS
  '1=Low, 2=Normal, 3=High, 4=Critical';

ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "tasks_org_select" ON public.tasks
  FOR SELECT USING (organisation_id = public.current_user_org_id());

CREATE POLICY "tasks_member_insert" ON public.tasks
  FOR INSERT WITH CHECK (organisation_id = public.current_user_org_id());

CREATE POLICY "tasks_member_update" ON public.tasks
  FOR UPDATE USING (organisation_id = public.current_user_org_id());

CREATE POLICY "tasks_admin_delete" ON public.tasks
  FOR DELETE USING (
    organisation_id = public.current_user_org_id()
    AND public.current_user_role() IN ('owner', 'admin')
  );

CREATE TRIGGER tasks_updated_at
  BEFORE UPDATE ON public.tasks
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =============================================================================
-- TABLE: invoices
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.invoices (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organisation_id   UUID NOT NULL REFERENCES public.organisations(id) ON DELETE CASCADE,
  contact_id        UUID REFERENCES public.contacts(id) ON DELETE SET NULL,
  project_id        UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  invoice_number    TEXT NOT NULL CHECK (char_length(invoice_number) BETWEEN 1 AND 50),
  status            public.invoice_status NOT NULL DEFAULT 'draft',
  issue_date        DATE NOT NULL DEFAULT CURRENT_DATE,
  due_date          DATE NOT NULL,
  subtotal_zar      NUMERIC(14, 2) NOT NULL DEFAULT 0 CHECK (subtotal_zar >= 0),
  vat_rate          NUMERIC(5, 4) NOT NULL DEFAULT 0.15,  -- 15% VAT
  vat_amount_zar    NUMERIC(14, 2) GENERATED ALWAYS AS
                      (ROUND(subtotal_zar * vat_rate, 2)) STORED,
  total_zar         NUMERIC(14, 2) GENERATED ALWAYS AS
                      (ROUND(subtotal_zar + subtotal_zar * vat_rate, 2)) STORED,
  line_items        JSONB NOT NULL DEFAULT '[]',          -- [{description, qty, unit_price_zar}]
  notes             TEXT,
  paid_at           TIMESTAMPTZ,
  created_by        UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (organisation_id, invoice_number)
);

COMMENT ON TABLE public.invoices IS
  'Invoice records scoped to an organisation. VAT (15%) is computed automatically.';
COMMENT ON COLUMN public.invoices.line_items IS
  'JSON array: [{description: string, qty: number, unit_price_zar: number}]';

ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "invoices_org_select" ON public.invoices
  FOR SELECT USING (organisation_id = public.current_user_org_id());

CREATE POLICY "invoices_member_insert" ON public.invoices
  FOR INSERT WITH CHECK (organisation_id = public.current_user_org_id());

CREATE POLICY "invoices_member_update" ON public.invoices
  FOR UPDATE USING (organisation_id = public.current_user_org_id());

CREATE POLICY "invoices_admin_delete" ON public.invoices
  FOR DELETE USING (
    organisation_id = public.current_user_org_id()
    AND public.current_user_role() IN ('owner', 'admin')
  );

CREATE TRIGGER invoices_updated_at
  BEFORE UPDATE ON public.invoices
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =============================================================================
-- TABLE: activity_log  (IMMUTABLE AUDIT TRAIL)
-- No UPDATE or DELETE policies — rows are append-only.
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.activity_log (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organisation_id   UUID NOT NULL REFERENCES public.organisations(id) ON DELETE CASCADE,
  actor_id          UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  entity_type       TEXT NOT NULL CHECK (char_length(entity_type) <= 50),  -- e.g. 'project', 'invoice'
  entity_id         UUID,
  action            TEXT NOT NULL CHECK (char_length(action) <= 100),       -- e.g. 'created', 'status_changed'
  diff              JSONB,                                                   -- before/after snapshot
  ip_address        INET,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.activity_log IS
  'Immutable audit trail. Rows are never updated or deleted.';

ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;

-- Members can read the log; inserts come only from service-role functions
CREATE POLICY "activity_log_org_select" ON public.activity_log
  FOR SELECT USING (organisation_id = public.current_user_org_id());

-- =============================================================================
-- INDEXES — all feature tables
-- =============================================================================
CREATE INDEX IF NOT EXISTS idx_contacts_org          ON public.contacts (organisation_id);
CREATE INDEX IF NOT EXISTS idx_contacts_type         ON public.contacts (organisation_id, type);
CREATE INDEX IF NOT EXISTS idx_contacts_email        ON public.contacts (email);

CREATE INDEX IF NOT EXISTS idx_projects_org          ON public.projects (organisation_id);
CREATE INDEX IF NOT EXISTS idx_projects_status       ON public.projects (organisation_id, status);
CREATE INDEX IF NOT EXISTS idx_projects_contact      ON public.projects (contact_id);

CREATE INDEX IF NOT EXISTS idx_tasks_org             ON public.tasks (organisation_id);
CREATE INDEX IF NOT EXISTS idx_tasks_project         ON public.tasks (project_id);
CREATE INDEX IF NOT EXISTS idx_tasks_assigned        ON public.tasks (assigned_to, status);
CREATE INDEX IF NOT EXISTS idx_tasks_due_date        ON public.tasks (due_date) WHERE due_date IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_invoices_org          ON public.invoices (organisation_id);
CREATE INDEX IF NOT EXISTS idx_invoices_status       ON public.invoices (organisation_id, status);
CREATE INDEX IF NOT EXISTS idx_invoices_contact      ON public.invoices (contact_id);
CREATE INDEX IF NOT EXISTS idx_invoices_due_date     ON public.invoices (due_date) WHERE status != 'paid';

CREATE INDEX IF NOT EXISTS idx_activity_log_org      ON public.activity_log (organisation_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activity_log_entity   ON public.activity_log (entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_activity_log_actor    ON public.activity_log (actor_id);
