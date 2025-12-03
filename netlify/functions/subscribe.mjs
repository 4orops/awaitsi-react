import client from '@sendgrid/client';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email is required' }),
    };
  }

  const sendGridApiKey = process.env.VITE_SENDGRID_API_KEY;
  if (!sendGridApiKey || sendGridApiKey === 'YOUR_SENDGRID_API_KEY_HERE') {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server configuration error.' }),
    };
  }
  client.setApiKey(sendGridApiKey);

  const listId = process.env.VITE_SENDGRID_LIST_ID;
  if (!listId || listId === 'YOUR_SENDGRID_LIST_ID_HERE') {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server configuration error.' }),
    };
  }

  const data = {
    list_ids: [listId],
    contacts: [{ email }],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: 'PUT',
    body: JSON.stringify(data),
  };

  try {
    const [response] = await client.request(request);
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Successfully subscribed!' }),
      };
    } else {
      return {
        statusCode: response.statusCode,
        body: JSON.stringify({ message: 'Error subscribing.' }),
      };
    }
  } catch (error) {
    console.error('An error occurred while trying to contact SendGrid.', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An unknown error occurred.' }),
    };
  }
};
