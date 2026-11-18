import { test, expect } from '@playwright/test';

const ARTICLES = [
  {
    slug: 'putting-kingspath-transport-on-the-road-online',
    title: 'Case Study: Putting Kingspath Transport on the Road Online',
    firstSentence: 'At Awaitsi, we believe a great South African SME deserves a website that works as hard as it does.',
    lastLine: 'See the live site at kingspathtransport.co.za, and start your project at awaitsi.co.za.',
    headings: [
      'The client',
      'The challenge',
      'What Awaitsi built',
      'The result',
      'Is your business next?',
    ],
  },
  {
    slug: 'closing-the-digital-gap-for-south-african-smes',
    title: "Closing the Digital Gap for South Africa's SMEs",
    firstSentence: "Small and medium-sized businesses are the backbone of South Africa's economy.",
    lastLine: 'Ready to modernise your business? Visit awaitsi.co.za.',
    headings: [
      'The problems we are solving',
      'An example: a family auto repair shop in Bloemfontein',
      'Why it matters',
    ],
  },
];

const OLD_TITLES = [
  'Where Professionalism Meets Every Journey',
  'Why Every South African SME Needs a Professional Website in 2026',
  'Custom Website vs Website Builder Template',
  'Page Speed is a Business Problem',
];

const trackErrors = (page: import('@playwright/test').Page) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));
  return errors;
};

test.describe('Insights', () => {
  test('listing shows exactly the two articles and no old ones', async ({ page }) => {
    const errors = trackErrors(page);
    await page.goto('/insights');
    await expect(page.locator('h1')).toHaveText('Insights');
    const cards = page.locator('main article');
    await expect(cards).toHaveCount(2);
    for (const a of ARTICLES) {
      await expect(page.getByRole('link', { name: a.title })).toHaveAttribute('href', `/insights/${a.slug}`);
    }
    for (const old of OLD_TITLES) await expect(page.getByText(old)).toHaveCount(0);
    await expect(page).toHaveTitle(/Insights/);
    await expect(page.locator("link[rel='canonical']")).toHaveAttribute('href', 'https://awaitsi.co.za/insights');
    expect(errors).toEqual([]);
  });

  for (const a of ARTICLES) {
    test(`article ${a.slug} renders full content and SEO`, async ({ page }) => {
      const errors = trackErrors(page);
      await page.goto(`/insights/${a.slug}`);
      await expect(page.locator('h1')).toHaveText(a.title);
      await expect(page.locator('main article h2')).toHaveText(a.headings);
      await expect(page.getByText(a.firstSentence, { exact: false }).first()).toBeVisible();
      await expect(page.getByText(a.lastLine)).toBeVisible();

      const url = `https://awaitsi.co.za/insights/${a.slug}`;
      await expect(page.locator("link[rel='canonical']")).toHaveAttribute('href', url);
      await expect(page.locator("meta[property='og:type']")).toHaveAttribute('content', 'article');
      await expect(page.locator("meta[property='og:url']")).toHaveAttribute('content', url);
      const ld = JSON.parse((await page.locator('#awaitsi-page-jsonld').textContent()) ?? '{}');
      expect(ld['@type']).toBe('Article');
      expect(ld.headline).toBe(a.title);

      // Reload (deep link) still works
      await page.reload();
      await expect(page.locator('h1')).toHaveText(a.title);
      expect(errors).toEqual([]);
    });
  }

  test('card navigates to article and back link returns to listing', async ({ page }) => {
    await page.goto('/insights');
    await page.getByRole('link', { name: ARTICLES[1].title }).click();
    await expect(page).toHaveURL(new RegExp(`/insights/${ARTICLES[1].slug}$`));
    await page.locator('#article-back-to-insights').click();
    await expect(page).toHaveURL(/\/insights$/);
    // Canonical/structured data from the article do not leak to other pages
    await page.goto('/about');
    await expect(page.locator('#awaitsi-page-jsonld')).toHaveCount(0);
  });

  test('case study renders the italic tagline without raw markdown', async ({ page }) => {
    await page.goto(`/insights/${ARTICLES[0].slug}`);
    const article = page.locator('article[aria-labelledby="article-title"]');
    await expect(article.locator('em')).toHaveText('"Where Professionalism Meets Every Journey."');
    await expect(article).not.toContainText('*');
  });

  test('unknown article slug shows 404', async ({ page }) => {
    await page.goto('/insights/does-not-exist');
    await expect(page.locator('h1').first()).toContainText('Page Not Found');
  });

  test('article is readable on mobile without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    for (const a of ARTICLES) {
      await page.goto(`/insights/${a.slug}`);
      await expect(page.locator('h1')).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    }
    await page.goto('/insights');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});
