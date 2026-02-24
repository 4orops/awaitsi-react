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

The project follows a modular architecture to separate core website logic from portfolio projects.

```
/
├── api/                  # Backend implementation (future expansion)
├── public/               # Static assets
├── src/
│   ├── components/       # Shared UI components (Hero, Navigation, etc.)
│   ├── containers/       # Smart components managing page logic
│   ├── pages/            # Page layouts
│   ├── projects/         # Modular portfolio sub-projects
│   │   ├── ai/
│   │   ├── crm/
│   │   ├── mobile/
│   │   ├── real-estate/
│   │   └── salon/
│   └── routes/           # Centralized routing configuration
├── server.mjs            # Local development backend server
├── netlify.toml          # Netlify deployment configuration
```

### Architecture Highlights
- **Lazy Loading**: Portfolio projects (`src/projects/*`) are lazy-loaded to improve initial load performance.
- **Suspense**: Routes are protected with `React.Suspense` to ensure smooth transitions and prevent crashes during loading.

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
