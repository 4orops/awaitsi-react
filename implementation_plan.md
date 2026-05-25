# Support & CRM System (PulseCRM) Implementation Plan

Design and develop a high-performance, modern customer support and CRM system (internally named **PulseCRM**) integrated into the Awaitsi platform. This system will handle multi-channel communications, ticket lifecycle management, and AI-driven automation.

## User Review Required

> [!IMPORTANT]
> **Database Access**: We will use the existing Supabase instance. We need to ensure that the environment variables (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) are correctly set in the local `.env` and deployment environment for server-side operations.
>
> **AI Provider**: For AI features (chatbot, sentiment analysis), I propose using OpenAI (GPT-4o/o1) or Anthropic (Claude 3.5 Sonnet). Do you have a preferred provider or existing API keys?
>
> **Email Integration**: For multi-channel email support, we should decide on an email service provider (e.g., Postmark, Resend, or AWS SES). I recommend **Resend** for its modern developer experience and ease of integration.

## Proposed Changes

### 1. Database Schema (Supabase)

We need to create several new tables to support the CRM functionality.

- **`customers`**: Profiles for all external users interacting with the system.
- **`tickets`**: Core entity for tracking issues/requests.
- **`ticket_messages`**: All communication (email, chat, internal notes) associated with a ticket.
- **`teams`**: For grouping agents and assigning roles.
- **`automations`**: Rules for auto-routing and replies.
- **`analytics_events`**: Tracking response times and performance.

### 2. Frontend: PulseCRM Dashboard

The CRM will be hosted under `/portfolio/crm` or a new dedicated route like `/admin/crm`.

#### [MODIFY] [CrmLayout.tsx](file:///c:/Users/4waya/OneDrive/Documents/Awaitsi/awaitsi-react/src/projects/crm/CrmLayout.tsx)
- Transform the existing mockup into a functional dashboard.
- Implement sidebar navigation with sections: **Inbox, Tickets, Customers, Automations, AI Insights, Reports**.

#### [NEW] `src/projects/crm/components/`
- `TicketList.tsx`: Searchable list of active/resolved tickets with priority badges.
- `TicketDetail.tsx`: Threaded conversation view with internal notes tab.
- `CustomerProfile.tsx`: Timeline of customer interactions and metadata.
- `ChatWidget.tsx`: Live chat component for the public-facing site.

### 3. Backend: Enhanced API

#### [MODIFY] [server.mjs](file:///c:/Users/4waya/OneDrive/Documents/Awaitsi/awaitsi-react/server.mjs)
- Add endpoints for Ticket CRUD operations.
- Implement WebSocket or Server-Sent Events (SSE) for real-time chat updates.
- Integrate AI middleware for:
    - **Sentiment Analysis**: Scan incoming messages.
    - **Suggested Replies**: Generate drafts for agents.
    - **Auto-Summarization**: Summarize long ticket threads.

### 4. Multi-channel Support

- **Live Chat**: A custom-built floating action button (FAB) widget for the main Awaitsi site.
- **Email**: Webhook listener for incoming emails (via Resend/Postmark) to automatically create/update tickets.
- **Social**: WhatsApp integration (as requested in conversation history) to sync messages into the CRM.

## Open Questions

- **Authentication**: Should agents use the same login system as customers, or a separate "Admin Login" portal?
- **Mobile App**: Do you want a dedicated PWA (Progressive Web App) manifest for mobile agents, or just a responsive web design?
- **Performance Metrics**: Which specific KPIs (Key Performance Indicators) are most important for your analytics dashboard (e.g., First Response Time, Resolution Time, CSAT)?

## Verification Plan

### Automated Tests
- Script to simulate multi-channel message ingestion.
- API tests for ticket state transitions.
- AI prompt evaluation tests.

### Manual Verification
1. Send a message via the website chat widget and verify it appears in the CRM dashboard.
2. Assign the ticket to an agent and add an internal note.
3. Generate an AI reply and send it back to the customer.
4. Check the analytics dashboard for updated volume metrics.
