/**
 * Contact Database Model Definition
 * 
 * This file defines the structure for contact form submissions.
 * It can be used as a TypeScript interface for frontend/backend validation
 * and as a reference for creating tables in PostgreSQL (Supabase) or 
 * collections in MongoDB.
 */

export interface ContactSubmission {
    /** Unique ID (Primary Key) */
    id?: string;

    /** Submitter's Full Name */
    name: string;

    /** Submitter's Email Address */
    email: string;

    /** Submitter's Phone Number (Optional) */
    phone?: string;

    /** Category of service requested */
    projectType: string;

    /** Detailed message or project description */
    message: string;

    /** ISO Timestamp of submission */
    createdAt: string;

    /** Workflow status: 'new', 'read', 'responded', 'archived' */
    status: 'new' | 'read' | 'responded' | 'archived';

    /** IP Address (optional, for anti-spam) */
    ipAddress?: string;

    /** Source page or referral info */
    source?: string;
}

/**
 * SQL Schema (PostgreSQL/Supabase Example)
 * 
 * CREATE TABLE contact_submissions (
 *   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   phone TEXT,
 *   project_type TEXT NOT NULL,
 *   message TEXT NOT NULL,
 *   created_at TIMESTAMPTZ DEFAULT NOW(),
 *   status TEXT DEFAULT 'new',
 *   ip_address TEXT
 * );
 */
