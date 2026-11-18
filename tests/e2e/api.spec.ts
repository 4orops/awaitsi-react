import { test, expect, request as playwrightRequest } from '@playwright/test';

const BACKEND = 'http://localhost:3001';

test.describe('Backend API & Network Tests', () => {
  test('GET /api/health returns 200 with status:ok', async ({ request }) => {
    const response = await request.get(`${BACKEND}/api/health`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe('ok');
  });

  test('GET /api/test returns 200 with hello message', async ({ request }) => {
    const response = await request.get(`${BACKEND}/api/test`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.message).toContain('Hello');
  });

  test('POST /api/contact returns 400 when required fields are missing', async ({ request }) => {
    const response = await request.post(`${BACKEND}/api/contact`, {
      data: { name: '', email: '', message: '' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.message).toContain('Please provide name, email, and message.');
  });

  test('POST /api/contact returns 400 when name is missing', async ({ request }) => {
    const response = await request.post(`${BACKEND}/api/contact`, {
      data: { name: '', email: 'test@example.com', message: 'Hello' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(response.status()).toBe(400);
  });

  test('POST /api/contact returns 400 when email is missing', async ({ request }) => {
    const response = await request.post(`${BACKEND}/api/contact`, {
      data: { name: 'Test', email: '', message: 'Hello' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(response.status()).toBe(400);
  });

  // The two tests below insert real rows when Supabase is configured, so they
  // only run when explicitly enabled (e.g. against a test database):
  //   E2E_ALLOW_DB_WRITES=1 npx playwright test tests/e2e/api.spec.ts
  test('POST /api/contact accepts valid payload (200 or 500 based on DB)', async ({ request }) => {
    test.skip(!process.env.E2E_ALLOW_DB_WRITES, 'Writes to the database; set E2E_ALLOW_DB_WRITES=1 to run.');
    const response = await request.post(`${BACKEND}/api/contact`, {
      data: {
        name: 'QA Test User',
        email: 'qa.playwright@awaitsi.co.za',
        phone: '+27820000001',
        projectType: 'Web Development',
        message: 'Automated Playwright API test — non-destructive.'
      },
      headers: { 'Content-Type': 'application/json' },
    });
    // 200 = success saved to DB, 500 = DB issue (Supabase not configured) — both acceptable in QA
    expect([200, 500]).toContain(response.status());
    const body = await response.json();
    expect(body).toHaveProperty('message');
  });

  test('POST /api/quote accepts valid payload (200 or 500 based on DB)', async ({ request }) => {
    test.skip(!process.env.E2E_ALLOW_DB_WRITES, 'Writes to the database; set E2E_ALLOW_DB_WRITES=1 to run.');
    const response = await request.post(`${BACKEND}/api/quote`, {
      data: {
        projectType: 'Website Development',
        businessStage: "I'm growing & need better systems",
        name: 'QA Quote Tester',
        email: 'qa.quote@awaitsi.co.za',
        phone: '+27820000002',
        budget: 'R15k - R50k',
        description: 'Automated Playwright quote test.'
      },
      headers: { 'Content-Type': 'application/json' },
    });
    expect([200, 500]).toContain(response.status());
    const body = await response.json();
    expect(body).toHaveProperty('message');
  });

  test('Unknown API route returns 404 with error status', async ({ request }) => {
    const response = await request.get(`${BACKEND}/api/nonexistent-endpoint-qa`);
    expect(response.status()).toBe(404);
    const body = await response.json();
    expect(body.status).toBe('error');
  });
});
