/**
 * Netlify Function: subscribe
 * Handles email subscription requests.
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
    const { email } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email is required' }),
      };
    }

    // 2. Database Integration Placeholder
    // Example for Supabase:
    // const { data, error } = await supabase.from('subscribers').insert([{ email, created_at: new Date() }]);

    console.log('Received subscription:', { email, timestamp: new Date() });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully subscribed!' }),
    };

  } catch (error) {
    console.error('Subscribe function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
