/**
 * Netlify Function: contact
 * Handles POST requests from the Contact form.
 * 
 * Flow:
 * 1. Validate request
 * 2. [Optional] Save to Database (Supabase/MongoDB/Firestore)
 */
export const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    try {
        const payload = JSON.parse(event.body);
        const { name, email, phone, projectType, message } = payload;

        // 1. Basic Validation
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Name, email, and message are required.' }),
            };
        }

        // 2. Database Integration Placeholder
        // Example for Supabase:
        // const { data, error } = await supabase.from('contact_submissions').insert([{ 
        //   name, email, phone, project_type: projectType, message, created_at: new Date() 
        // }]);

        console.log('Received submission:', { name, email, projectType, timestamp: new Date() });

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Submission successful.',
                submissionId: Date.now().toString() // Placeholder ID
            }),
        };

    } catch (error) {
        console.error('Contact function error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
