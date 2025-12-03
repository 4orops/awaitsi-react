
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import client from '@sendgrid/client';

// Load environment variables from .env file
dotenv.config();

const app = express();
// You can choose any port that doesn't conflict with your Vite dev server
const port = 3001; 

// Awaitsi frontend runs on a different port, so we need CORS
app.use(cors()); 
app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
  console.log('--- New /api/subscribe request ---');
  const { email } = req.body;
  console.log(`Received email: ${email}`);

  if (!email) {
    console.error('Email is missing from request body.');
    return res.status(400).json({ message: 'Email is required' });
  }

  // Make sure to set VITE_SENDGRID_API_KEY in your .env file
  const sendGridApiKey = process.env.VITE_SENDGRID_API_KEY;
  if (!sendGridApiKey || sendGridApiKey === 'YOUR_SENDGRID_API_KEY_HERE') {
    console.error('SERVER ERROR: SendGrid API key is not configured in .env file.');
    return res.status(500).json({ message: 'Server configuration error.' });
  }
  console.log('SendGrid API Key found.');
  client.setApiKey(sendGridApiKey);

  // Make sure to set VITE_SENDGRID_LIST_ID in your .env file
  const listId = process.env.VITE_SENDGRID_LIST_ID;
  if (!listId || listId === 'YOUR_SENDGRID_LIST_ID_HERE') {
    console.error('SERVER ERROR: SendGrid List ID is not configured in .env file.');
    return res.status(500).json({ message: 'Server configuration error.' });
  }
  console.log('SendGrid List ID found.');

  const data = {
    list_ids: [listId],
    contacts: [{ email }],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: 'PUT',
    body: JSON.stringify(data),
  };

  console.log('Sending request to SendGrid...');
  try {
    const [response] = await client.request(request);
    console.log(`SendGrid response status code: ${response.statusCode}`);
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log('Successfully subscribed email.');
      return res.status(200).json({ message: 'Successfully subscribed!' });
    } else {
      console.error('SendGrid API returned a non-2xx status code.');
      console.error('Full SendGrid response body:', response.body);
      return res.status(response.statusCode).json({ message: 'Error subscribing.' });
    }
  } catch (error) {
    console.error('!!!!!!!!!! CATCH BLOCK ACTIVATED !!!!!!!!!!');
    console.error('An error occurred while trying to contact SendGrid.');
    console.error('Full error object:', JSON.stringify(error, null, 2));
    if (error.response) {
      console.error('Error response body from SendGrid:', error.response.body);
      return res.status(500).json({ message: 'Error subscribing', error: error.response.body });
    }
    return res.status(500).json({ message: 'An unknown error occurred.' });
  }
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
