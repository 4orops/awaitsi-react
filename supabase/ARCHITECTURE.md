# Awaitsi Business Cloud — Multi-Tenant Architecture Specification
**Version:** 1.0  
**Status:** Approved for Phase 1 Implementation  
**Maintainer:** Awaitsi Engineering

---

## 1. Overview

Awaitsi Business Cloud is a multi-tenant SaaS platform built on:

| Layer | Technology |
| :--- | :--- |
| Frontend | React 18 + Vite + TypeScript |
| Hosting | Netlify (static) + Netlify Functions (serverless) |
| Database | Supabase (PostgreSQL 15) |
| Auth | Supabase Auth (magic link, OAuth, password) |
| Storage | Supabase Storage (future: logos, attachments) |
| Infra | Fully managed — no self-hosted servers required |

---

## 2. Tenant Isolation Model

### 2.1 Core Principle

Every business data row is scoped to an **organisation** via:

```sql
organisation_id UUID NOT NULL REFERENCES public.organisations(id)
```

PostgreSQL Row-Level Security (RLS) is **enabled on every table**. Two helper functions are used in all policies:

```sql
public.current_user_org_id()  -- resolves org from auth.uid()
public.current_user_role()    -- resolves role from auth.uid()
```

Both are `SECURITY DEFINER` functions, preventing recursive RLS evaluation.

### 2.2 Isolation Boundary

```
[Organisation A]            [Organisation B]
  users, projects, contacts   users, projects, contacts
       | RLS enforced               | RLS enforced
       PostgreSQL (shared schema, isolated data)
```

**Cross-tenant data leakage is prevented at the database level**, regardless of application logic. Even a buggy query will return an empty result set for rows belonging to other tenants.

---

## 3. Database Schema

### 3.1 Migration Files

| File | Scope |
| :--- | :--- |
| `supabase/migrations/001_public_lead_tables.sql` | Public website: messages, quotes, assessment_leads |
| `supabase/migrations/002_multitenant_core.sql` | Tenant root: organisations, user_profiles, RLS helpers, auth trigger |
| `supabase/migrations/003_business_cloud_tables.sql` | Phase 1 features: contacts, projects, tasks, invoices, activity_log |

### 3.2 Entity Relationships (Phase 1)

```
auth.users (Supabase managed)
    |  1:1 via trigger
    v
user_profiles ----------- organisations  <------- contacts
    (role: owner/               |                     |
     admin/member/viewer)       |                     |
                           projects <-----------------+
                                |
                            tasks
                                |
                          invoices ---------> contacts
                                |
                        activity_log
```

### 3.3 Key Tables Summary

| Table | Primary Purpose | RLS Read | RLS Write |
| :--- | :--- | :--- | :--- |
| `organisations` | Tenant root | Own org only | Admin+ only |
| `user_profiles` | User to org mapping + role | Own org members | Self (own row), Admin+ (others) |
| `contacts` | CRM — clients and prospects | Own org | Member+ insert/update; Admin+ delete |
| `projects` | Client project tracking | Own org | Member+ insert/update; Admin+ delete |
| `tasks` | Project task management | Own org | Member+ insert/update; Admin+ delete |
| `invoices` | Billing records (ZAR + 15% VAT) | Own org | Member+ insert/update; Admin+ delete |
| `activity_log` | Immutable audit trail | Own org | Append-only (service role) |
| `messages` | Contact form submissions | Authenticated admin | Public insert (anon) |
| `quotes` | Quote requests | Authenticated admin | Public insert (anon) |
| `assessment_leads` | Digital assessment leads | Authenticated admin | Public insert (anon) |

---

## 4. Authentication and Authorisation Flow

### 4.1 New User Sign-Up (Self-Service)

```
1. User fills sign-up form → Supabase Auth creates auth.users row
2. Database trigger on_auth_user_created fires automatically
3. Trigger creates:
     a. organisations row  (name = email prefix, slug = name + 6-char UUID suffix)
     b. user_profiles row  (id = auth.uid(), role = 'owner')
4. Supabase sends magic link / confirmation email
5. User confirms → JWT issued with user_id
6. All subsequent queries use RLS to enforce org scoping
```

### 4.2 Member Invitation Flow

```
1. Owner/Admin calls invite_user() (Edge Function — Phase 2)
2. Creates a user_profiles row with role = 'member' (or as specified)
3. Supabase Auth sends invite email with sign-up link
4. Invited user sets password → auth.users row created
5. Trigger fires but detects existing user_profiles row → skips org creation
6. User logs in; RLS resolves to the invited organisation
```

### 4.3 Role Hierarchy

| Role | Permissions |
| :--- | :--- |
| `owner` | Full control: billing, delete org, manage all members |
| `admin` | Manage members, update org settings, delete any entity |
| `member` | Create and update records; cannot delete |
| `viewer` | Read-only access to all org data (Phase 2) |

### 4.4 JWT Claims

RLS functions use `auth.uid()` which is always available in the Supabase JWT. No custom JWT claims or additional middleware is required for Phase 1 isolation.

---

## 5. Security Controls

| Control | Implementation |
| :--- | :--- |
| **Tenant isolation** | PostgreSQL RLS on all tables |
| **Principle of least privilege** | anon role can only INSERT into public lead tables |
| **Input validation** | CHECK constraints on all text columns (length + regex) |
| **Injection prevention** | Parameterised queries via Supabase JS client |
| **Audit trail** | Immutable `activity_log` table (no UPDATE/DELETE policies) |
| **VAT compliance** | `vat_amount_zar` and `total_zar` are GENERATED ALWAYS columns |
| **Cascading deletes** | ON DELETE CASCADE on org-scoped tables |
| **Updated-at integrity** | Trigger enforces `updated_at` — not trusting client-supplied values |

---

## 6. Data Residency and Compliance

- **Region**: Deploy Supabase project in `af-south-1` (Cape Town, AWS) for South African data residency.
- **POPIA**: Contact form submissions are minimal (name, email, phone). Assessment data is pseudonymised. Supabase provides GDPR-compliant infrastructure — equivalent standard for POPIA.
- **VAT**: Invoices store `vat_rate` (default 15%) and auto-compute amounts via GENERATED columns, matching SARS requirements.

---

## 7. How to Apply Migrations

### Option A — Supabase Dashboard (Quick Start)

1. Go to your Supabase project → **SQL Editor**
2. Run each migration file in order: `001` then `002` then `003`
3. Verify in **Table Editor** that all tables appear

### Option B — Supabase CLI (Recommended for CI/CD)

```bash
# Install Supabase CLI
npm install -g supabase

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Apply all migrations
supabase db push
```

> **Note**: Migrations must be run in numeric order. Running `002` before `001` will fail on the `uuid_generate_v4()` extension dependency.

---

## 8. Environment Variables Required

Add to your `.env` file and Netlify environment variables:

```env
# Already configured — public Supabase client (frontend)
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY

# Required for Netlify Functions (server-side — NEVER expose to browser)
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
```

> **Critical**: The `SUPABASE_SERVICE_ROLE_KEY` bypasses RLS entirely. It must **only** be used in `netlify/functions/`, never in frontend code.

---

## 9. Phase 2 Roadmap

| Feature | Notes |
| :--- | :--- |
| Supabase Storage | File attachments for projects and invoices |
| Edge Functions | invite_user(), send_invoice_email(), webhook handlers |
| Stripe integration | Subscription billing for Awaitsi plan tiers |
| Realtime subscriptions | Live task board updates via supabase.channel() |
| Multi-org support | Allow one user to belong to multiple organisations |
| Custom JWT claims | Embed org_id and role in JWT for Edge Function use |
| Africa expansion | Additional country_code, currency_code, vat_rate per org |
