//  * 3. Return a consistent response for the frontend
//  */
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

        // 3. Store in Supabase — insert into 'messages' table
        const { error: dbError } = await supabase
            .from('messages')
            .insert([
                {
                    name,
                    email,
                    phone: phone || null,
                    project_type: projectType || null,
                    message: message || description,
                }
            ]);

        if (dbError) {
            console.error('[SUPABASE_ERROR]', dbError);
            return {
                statusCode: 500,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'Failed to save your message. Please try again or email info@awaitsi.co.za.' }),
            };
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
