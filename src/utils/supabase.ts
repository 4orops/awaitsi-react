/**
 * supabase.ts — Awaitsi Business Cloud Supabase Client
 *
 * Exports a typed, singleton Supabase client for use in the React frontend.
 * This client uses the ANON key and is subject to Row-Level Security (RLS).
 *
 * Usage:
 *   import { supabase } from '../utils/supabase';
 *   const { data, error } = await supabase.from('projects').select('*');
 *
 * For server-side operations (Netlify Functions), use the SERVICE_ROLE key
 * from process.env — never import this file in Netlify Functions.
 */

import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

// ---------------------------------------------------------------------------
// Database type definitions (Phase 1 schema — mirrors migration 002 & 003)
// ---------------------------------------------------------------------------

export type PlanTier = 'starter' | 'growth' | 'enterprise';
export type OrgRole = 'owner' | 'admin' | 'member' | 'viewer';
export type ProjectStatus = 'draft' | 'active' | 'on_hold' | 'completed' | 'cancelled';
export type ContactType = 'client' | 'prospect' | 'partner' | 'supplier';
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
export type TaskStatus = 'backlog' | 'todo' | 'in_progress' | 'in_review' | 'done' | 'cancelled';

export interface Organisation {
  id: string;
  name: string;
  slug: string;
  plan: PlanTier;
  country_code: string;
  currency_code: string;
  vat_number: string | null;
  logo_url: string | null;
  is_active: boolean;
  trial_ends_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  organisation_id: string;
  role: OrgRole;
  full_name: string | null;
  avatar_url: string | null;
  job_title: string | null;
  phone: string | null;
  is_active: boolean;
  last_seen_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  organisation_id: string;
  type: ContactType;
  company_name: string | null;
  first_name: string;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  industry: string | null;
  notes: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  organisation_id: string;
  contact_id: string | null;
  name: string;
  description: string | null;
  status: ProjectStatus;
  start_date: string | null;
  due_date: string | null;
  budget_zar: number | null;
  tags: string[];
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: string;
  organisation_id: string;
  project_id: string | null;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: 1 | 2 | 3 | 4;
  assigned_to: string | null;
  due_date: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface Invoice {
  id: string;
  organisation_id: string;
  contact_id: string | null;
  project_id: string | null;
  invoice_number: string;
  status: InvoiceStatus;
  issue_date: string;
  due_date: string;
  subtotal_zar: number;
  vat_rate: number;
  vat_amount_zar: number;   // GENERATED ALWAYS — read-only
  total_zar: number;        // GENERATED ALWAYS — read-only
  line_items: InvoiceLineItem[];
  notes: string | null;
  paid_at: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface InvoiceLineItem {
  description: string;
  qty: number;
  unit_price_zar: number;
}

export interface ActivityLog {
  id: string;
  organisation_id: string;
  actor_id: string | null;
  entity_type: string;
  entity_id: string | null;
  action: string;
  diff: Record<string, unknown> | null;
  ip_address: string | null;
  created_at: string;
}

// ---------------------------------------------------------------------------
// Database schema map — used by createClient for type safety
// ---------------------------------------------------------------------------

export interface Database {
  public: {
    Tables: {
      organisations: { Row: Organisation; Insert: Omit<Organisation, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Organisation>; };
      user_profiles: { Row: UserProfile; Insert: Omit<UserProfile, 'created_at' | 'updated_at'>; Update: Partial<UserProfile>; };
      contacts: { Row: Contact; Insert: Omit<Contact, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Contact>; };
      projects: { Row: Project; Insert: Omit<Project, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Project>; };
      tasks: { Row: Task; Insert: Omit<Task, 'id' | 'created_at' | 'updated_at'>; Update: Partial<Task>; };
      invoices: { Row: Invoice; Insert: Omit<Invoice, 'id' | 'vat_amount_zar' | 'total_zar' | 'created_at' | 'updated_at'>; Update: Partial<Invoice>; };
      activity_log: { Row: ActivityLog; Insert: never; Update: never; }; // Append-only via service role
    };
  };
}

// ---------------------------------------------------------------------------
// Singleton client instance
// ---------------------------------------------------------------------------

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables. ' +
    'Add them to your .env file and restart the dev server.'
  );
}

export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,          // Keep session across page reloads
      autoRefreshToken: true,        // Auto-refresh JWTs before expiry
      detectSessionInUrl: true,      // Handle magic link / OAuth callbacks
    },
  }
);

// ---------------------------------------------------------------------------
// Auth helpers
// ---------------------------------------------------------------------------

/** Sign in with a magic link (email OTP) */
export const signInWithMagicLink = (email: string) =>
  supabase.auth.signInWithOtp({ email, options: { shouldCreateUser: true } });

/** Sign in with email + password */
export const signInWithPassword = (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

/** Sign up with email + password */
export const signUpWithPassword = (email: string, password: string, fullName?: string) =>
  supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName ?? '' } },
  });

/** Sign out the current user */
export const signOut = () => supabase.auth.signOut();

/** Get the currently authenticated user (null if not signed in) */
export const getCurrentUser = () => supabase.auth.getUser();

/** Subscribe to auth state changes */
export const onAuthStateChange = (
  callback: Parameters<typeof supabase.auth.onAuthStateChange>[0]
) => supabase.auth.onAuthStateChange(callback);

// ---------------------------------------------------------------------------
// Profile helpers
// ---------------------------------------------------------------------------

/** Fetch the current user's profile (includes organisation_id and role) */
export const getMyProfile = async (): Promise<UserProfile | null> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('[Supabase] getMyProfile error:', error);
    return null;
  }
  return data;
};

/** Update the current user's own profile */
export const updateMyProfile = (updates: Partial<Pick<UserProfile, 'full_name' | 'avatar_url' | 'job_title' | 'phone'>>) =>
  supabase.from('user_profiles').update(updates).eq('id', supabase.auth.getUser().then(r => r.data.user?.id ?? ''));
