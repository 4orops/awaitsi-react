/**
 * Netlify Function: contact
 * Handles POST requests from the Contact form.
 * 
 * Flow:
 * 1. Validate request
 * 2. Log submission for security and debugging
 * 3. Return a consistent response for the frontend
 */
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
        const { name, email, phone, projectType, message } = payload;

        // 1. Core Validation
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'Please provide name, email, and message.' }),
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
        console.log(`Message: ${message}`);

        /**
         * FUTURE ENHANCEMENT:
         * To send emails automatically, you can add:
         * await sendgrid.send({ ... }) 
         * or 
         * await supabase.from('leads').insert({ ... })
         */

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
