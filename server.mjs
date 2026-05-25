import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Supabase Configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseKey || supabaseKey === "YOUR_SUPABASE_ANON_KEY") {
    console.warn('\x1b[33m%s\x1b[0m', '[WARNING] SUPABASE_ANON_KEY is missing or using placeholder. Database operations will fail.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 1. TOP-LEVEL LOGGER (Before ANY other middleware)
app.use((req, res, next) => {
    console.log(`[EXPRESS_SEEING] ${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.use(cors());
app.use(express.json());

// 2. ERROR HANDLER FOR MIDDLEWARE (Like JSON parsing)
app.use((err, req, res, next) => {
    if (err) {
        console.error('[MIDDLEWARE_ERROR]', {
            status: err.status,
            message: err.message,
            stack: err.stack
        });
        return res.status(err.status || 400).json({ error: 'Malformed request body or middleware error' });
    }
    next();
});

// Legacy request logger (redundant but harmless)
app.use((req, res, next) => {
    // console.log(`[REQUEST] ${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Basic API route example
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Quote submission endpoint (supports multiple path variations)
app.post(['/api/quote', '/quote'], async (req, res) => {
    const { projectType, businessStage, name, email, phone, budget, description } = req.body;

    console.log('[QUOTE_REQUEST] Received:', { name, email, projectType });

    try {
        const { data, error } = await supabase
            .from('quotes')
            .insert([
                { 
                    project_type: projectType, 
                    business_stage: businessStage, 
                    name, 
                    email, 
                    phone, 
                    budget, 
                    description 
                }
            ]);

        if (error) {
            console.error('[SUPABASE_ERROR]', error);
            throw error;
        }

        res.status(200).json({ 
            message: 'Quote request stored successfully!', 
            status: 'success',
            data 
        });
    } catch (error) {
        console.error('[API_ERROR]', error);
        res.status(500).json({ 
            message: 'Failed to store quote request.', 
            error: error.message 
        });
    }
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, projectType, message } = req.body;

    console.log('[CONTACT_REQUEST] Received:', { name, email, projectType });

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            message: 'Please provide name, email, and message.',
            status: 'error'
        });
    }

    try {
        const { data, error } = await supabase
            .from('messages')
            .insert([
                { 
                    name, 
                    email, 
                    phone, 
                    project_type: projectType, 
                    message 
                }
            ]);

        if (error) {
            console.error('[SUPABASE_ERROR]', error);
            throw error;
        }

        res.status(200).json({ 
            message: 'Message sent successfully!', 
            status: 'success',
            data 
        });
    } catch (error) {
        console.error('[API_ERROR]', error);
        res.status(500).json({ 
            message: 'Failed to send message.', 
            error: error.message 
        });
    }
});

// Catch-all 404 handler for API
app.use((req, res) => {
    console.log(`[404] Not Found: ${req.method} ${req.url}`);
    res.status(404).json({ 
        message: `Route ${req.method} ${req.url} not found on backend.`,
        status: 'error'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`[STARTUP] POST /api/quote & /quote registered.`);
    console.log(`[STARTUP] GET /api/health registered.`);
});
