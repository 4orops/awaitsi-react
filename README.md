# Awaitsi Website

**Building Technology with Heart, for Generations to Come.**

## About Awaitsi

Awaitsi is a family-oriented South African technology company specializing in:
- **Web Development**: Custom, mobile-first websites.
- **Mobile Applications**: Cross-platform Android & iOS apps.
- **CRM Solutions**: Custom systems to simplify workflows.
- **AI Integration**: Smart automation and analytics.

## Tech Stack

- **Frontend**: React 19, React Router 7, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Backend (Dev)**: Express (Node.js)

## Project Structure

The project follows a modular React 19 architecture:

```
/
├── netlify/functions/    # Production serverless functions (contact, quote)
├── public/               # Public assets and branding
├── src/
│   ├── components/       # Shared UI components (Navigation, Footer, SEO, Modals)
│   ├── data/             # Service and business content definitions
│   ├── pages/            # Page views (Home, Pillars, Case Studies, Contact, Assessment)
│   ├── routes/           # Centralized React Router configuration
│   └── utils/            # Shared client API helpers
├── supabase/             # Database schemas and DDL scripts
├── tests/                # Playwright end-to-end and API test suites
├── server.mjs            # Local development backend server (Express)
├── netlify.toml          # Netlify routing and deployment configuration
└── playwright.config.ts  # Playwright automated test configuration
```

### Architecture Highlights
- **Service Pillars**: Dedicated pages for Digital Systems, Business Systems, Data Intelligence, AI Automation, and Digital Transformation.
- **Interactive Tools**: Built-in Digital Maturity Assessment and consultation scheduling.
- **Unified API Client**: Standardized submission handling for contact inquiries and quotations across local Express and Netlify serverless.
- **Suspense & Code Splitting**: Routes are dynamically imported with `React.lazy` and wrapped in `React.Suspense` with an editorial loading state.


## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

To run the frontend and local backend server concurrently:

```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3001](http://localhost:3001)

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Backend API

A local Express server (`server.mjs`) is included for development purposes to mock API endpoints.
- **Start API only**: `npm run start:api`
- **Health Check**: `GET http://localhost:3001/api/health`

**Note**: In production (Netlify), backend logic is handled via Netlify Functions (`netlify/functions`).

## Contact

- **Phone:** +27 83 867 2031
- **Email:** info@awaitsi.co.za
- **Location:** South Africa

## License

Copyright © 2025 Awaitsi (Pty) Ltd. All rights reserved.
