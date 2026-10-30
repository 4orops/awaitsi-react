import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const handler = async (event) => {
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
        const { projectType, businessStage, name, email, phone, budget, description } = payload;

        if (!name || !email) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'Please provide name and email.' }),
            };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'Please provide a valid email address.' }),
            };
        }

        console.log(`[QUOTE_SUBMISSION] ${new Date().toISOString()}`);
        console.log(`From: ${name} <${email}>`);
        console.log(`Interest: ${projectType || 'General'}`);

        // --- ROUTE: Digital Assessment leads go to assessment_leads table ---
        const isAssessment = projectType === 'Digital Maturity Assessment';

        if (isAssessment) {
            // Parse overall score from businessStage: "Overall Readiness: 55%" -> 55
            const scoreMatch = (businessStage || '').match(/(\d+)/);
            const score = scoreMatch ? parseInt(scoreMatch[1], 10) : null;

            // Parse raw answer breakdown from description into a JSONB-compatible object
            let answers = null;
            if (description) {
                try {
                    const parts = description.split('.').join('').split(',').map(s => s.trim()).filter(Boolean);
                    answers = Object.fromEntries(
                        parts.map(p => {
                            const [key, val] = p.split('=');
                            return key && val ? [key.trim(), parseInt(val, 10)] : null;
                        }).filter(Boolean)
                    );
                } catch { /* best-effort — answers left null */ }
            }

            const { error: dbError } = await supabase
                .from('assessment_leads')
                .insert([{ name, email, score, answers }]);

            if (dbError) {
                console.error('[SUPABASE_ASSESSMENT_ERROR]', dbError);
                return {
                    statusCode: 500,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: 'Failed to save your assessment. Please try again.' }),
                };
            }

            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'Assessment lead captured successfully!', status: 'success' }),
            };
        }

        // --- ROUTE: Regular quote/consultation requests ---
        const { error: dbError } = await supabase
            .from('quotes')
            .insert([{
                project_type: projectType || null,
                business_stage: businessStage || null,
                name,
                email,
                phone: phone || null,
                budget: budget || null,
                description: description || null,
            }]);

        if (dbError) {
            console.error('[SUPABASE_QUOTE_ERROR]', dbError);
            return {
                statusCode: 500,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'Failed to save your quote request. Please try again or email info@awaitsi.co.za.' }),
            };
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: 'Quote request stored successfully!',
                status: 'success'
            }),
        };

    } catch (error) {
        console.error('[QUOTE_ERROR]', error);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Failed to store quote request. Please try again later.' }),
        };
    }
};
