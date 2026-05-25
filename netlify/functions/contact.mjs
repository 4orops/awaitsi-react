 * 3. Return a consistent response for the frontend
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    try {
        if (!event.body) {
            throw new Error('Missing request body');
        }

        const payload = JSON.parse(event.body);
        const { name, email, phone, projectType, message, businessStage, budget, description } = payload;

        // 1. Core Validation
        if (!name || !email || (!message && !description)) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'Please provide name, email, and description.' }),
            };
        }

        // Email regex check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'Please provide a valid email address.' }),
            };
        }

        // 2. Logging (Visible in Netlify logs)
        console.log(`[CONTACT_SUBMISSION] ${new Date().toISOString()}`);
        console.log(`From: ${name} <${email}>`);
        console.log(`Phone: ${phone || 'N/A'}`);
        console.log(`Interest: ${projectType || 'General'}`);
        console.log(`Message: ${message || description}`);

        // 3. Store in Supabase
        const { error: dbError } = await supabase
            .from('quotes')
            .insert([
                {
                    name,
                    email,
                    phone,
                    project_type: projectType,
                    description: message || description,
                    business_stage: businessStage,
                    budget: budget
                }
            ]);

        if (dbError) {
            console.error('[SUPABASE_ERROR]', dbError);
            // We still log it but maybe we don't fail the entire response if we want to be resilient
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: 'Thank you for reaching out! We will be in touch soon.',
                status: 'success'
            }),
        };

    } catch (error) {
        console.error('[CONTACT_ERROR]', error);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Something went wrong. Please try again later.' }),
        };
    }
};
