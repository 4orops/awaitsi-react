/**
 * Insights — central article registry.
 *
 * Each article's `body` is the original supplied text, kept verbatim in a
 * small Markdown subset (## headings, paragraphs, "- " lists, **bold**) and
 * rendered by <ArticleBody />. The article's H1 lives in `title`; the body
 * starts at the first paragraph after the title.
 *
 * To add or edit an article, change only this file.
 */

export const SITE_URL = 'https://awaitsi.co.za';

export interface RelatedLink {
  label: string;
  to: string;
}

export interface InsightArticle {
  slug: string;
  /** Article headline (H1), exactly as supplied. */
  title: string;
  /** Document title as supplied, used for the browser/SEO title. */
  seoTitle: string;
  /** Meta / Open Graph description (≤ ~160 chars), drawn from the article. */
  description: string;
  /** Card excerpt, quoted from the article's opening. */
  excerpt: string;
  /** Short label of what the article is about, shown above the title. */
  subject: string;
  /** Relevant internal pages shown at the end of the article. */
  related: RelatedLink[];
  /** Verbatim article body (Markdown subset). */
  body: string;
}

export const insights: InsightArticle[] = [
  {
    slug: 'putting-kingspath-transport-on-the-road-online',
    title: 'Case Study: Putting Kingspath Transport on the Road Online',
    seoTitle: "Case Study: How Awaitsi Built Kingspath Transport's Website",
    description:
      'How Awaitsi built Kingspath Transport a professional, mobile-first website with clear service pages, online booking and search-ready foundations.',
    excerpt:
      'At Awaitsi, we believe a great South African SME deserves a website that works as hard as it does. Kingspath Transport is a good example. Here is how we helped them build an online presence that matches the quality of their service.',
    subject: 'Case Study · Kingspath Transport',
    related: [
      { label: 'Kingspath Transport project', to: '/work/kingspath-transport' },
      { label: 'Digital systems', to: '/services/digital-systems' },
      { label: 'Contact Awaitsi', to: '/contact' },
    ],
    body: `
At Awaitsi, we believe a great South African SME deserves a website that works as hard as it does. Kingspath Transport is a good example. They are a professional shuttle and executive transport business serving clients across South Africa. Here is how we helped them build an online presence that matches the quality of their service.

## The client

Kingspath Transport offers **airport transfers, corporate travel, event transport and private charters**. Their brand is built on three values: **trust, punctuality and excellence**. Their tagline captures it: *"Where Professionalism Meets Every Journey."*

## The challenge

In the transport business, customers decide quickly. A corporate travel manager, a wedding planner or someone booking an airport pickup will compare a few options and choose the one that looks most reliable. Kingspath had the service to win that business, but they needed a website that could:

- **Build trust at first glance.** Executive and corporate clients expect a polished, professional brand before they book.
- **Explain four different services clearly**, so each type of customer immediately finds what they need.
- **Make booking easy.** Customers should be able to request a trip online, at any time, from anywhere in the country, without phone tag.
- **Work perfectly on mobile.** Many bookings happen on a phone, often from an airport or between meetings.
- **Be found on Google** by people searching for shuttle and executive transport services.

## What Awaitsi built

**A professional, brand-led design.** We built the site around Kingspath's tagline and values, with a clean, executive look that tells visitors straight away that this is a business they can trust with their clients, staff and guests.

**Clear service pages.** Airport transfers, corporate travel, event transport and private charters are each presented clearly, so a business traveller and an event organiser can both find the right service in seconds.

**Online booking.** Customers can book transport online, making it simple to arrange a trip anywhere in South Africa and turning website visitors into confirmed bookings.

**Fast and mobile-first.** The site is built to load quickly and work smoothly on any phone, tablet or desktop.

**Search-ready foundations.** The page structure, titles and keywords help Kingspath show up when customers search for shuttle and executive transport.

## The result

Kingspath Transport now has a modern website that reflects the professionalism of their service. It gives potential clients a reason to trust them before the first trip, explains exactly what they offer, and lets customers book in a few taps. Like every Awaitsi project, it was delivered affordably and without the complexity of a corporate agency.

## Is your business next?

Kingspath is one of many South African SMEs that are excellent at what they do but need a digital presence to match. Whether you need a website, a custom CRM to manage your customers and bookings, or practical AI to automate follow-ups, Awaitsi builds fast, affordable solutions for growing local businesses.

**See the live site at kingspathtransport.co.za, and start your project at awaitsi.co.za.**
`,
  },
  {
    slug: 'closing-the-digital-gap-for-south-african-smes',
    title: "Closing the Digital Gap for South Africa's SMEs",
    seoTitle: "Why South Africa's SMEs Need Digital Tools That Fit — Awaitsi",
    description:
      "Why South Africa's SMEs still run on paper diaries and spreadsheets, and how fast, affordable, human-centred digital solutions close the gap.",
    excerpt:
      "Small and medium-sized businesses are the backbone of South Africa's economy. Yet many of them still run on paper diaries, WhatsApp threads and spreadsheets that only one person understands.",
    subject: 'South African SMEs',
    related: [
      { label: 'Digital systems', to: '/services/digital-systems' },
      { label: 'Business systems & CRM', to: '/services/business-systems' },
      { label: 'AI & automation', to: '/services/ai-automation' },
      { label: 'Contact Awaitsi', to: '/contact' },
    ],
    body: `
Small and medium-sized businesses are the backbone of South Africa's economy. There are nearly 3 million of them, and by industry estimates they provide more than 60% of the country's jobs and around a third of GDP. Yet many of them still run on paper diaries, WhatsApp threads and spreadsheets that only one person understands. At Awaitsi, based in Bloemfontein, our mission is simple: modernise South Africa's SMEs with fast, affordable, human-centred digital solutions.

## The problems we are solving

**1. Digital tools feel too expensive to start.** Most SME owners know they need a proper website or a system to manage customers, but agency quotes and enterprise software licences are built for corporates. Research on trade and digitalisation keeps finding the same thing: small businesses face high upfront costs and uncertain returns. We build affordable websites and systems sized for a small business budget.

**2. There is no in-house tech expertise.** The owner is usually also the salesperson, the bookkeeper and the manager. Nobody has time to learn complex software or compare ten vendors. Limited internal expertise is one of the most-cited barriers to going digital. We handle the build and setup, and we explain things in plain language.

**3. Off-the-shelf software does not fit the way local businesses work.** Generic CRMs are designed for overseas sales teams, not for a panel beater in Bloemfontein or a catering company in Mangaung. Our custom CRM systems are built around how each business actually takes bookings, follows up with customers and gets paid.

**4. Customers are lost because of slow follow-up.** Enquiries come in through Facebook, WhatsApp, phone calls and walk-ins. Without one place to track them, leads go cold and repeat customers are forgotten. We bring those enquiries together and use practical AI, such as automatic replies, reminders and quote drafts, so that no customer falls through the cracks.

**5. Businesses are invisible online.** Customers search before they buy. A business with no website, or one that does not load on a phone, loses that customer to a competitor who shows up first. We build fast, mobile-first websites that help local customers find and trust the business.

## An example: a family auto repair shop in Bloemfontein

Think of Thabo, who runs a five-person auto repair workshop in Bloemfontein. (Thabo is an illustrative example, not a specific client.) His business is good at what it does. Most of his work comes from word of mouth, but his systems are holding him back:

- Bookings are written in a diary at the front desk, and double bookings happen every week.
- Customers phone repeatedly to ask, "Is my car ready?", which takes his team away from the work.
- Quotes are written by hand, and many are never followed up.
- He has no website, so new residents searching for "mechanic near me" never find him.
- He has no record of when regular customers are due for their next service.

Here is how Awaitsi would help:

- **A simple, mobile-friendly website** with his services, location, reviews and an online booking form.
- **A custom CRM** that holds every customer, vehicle, job and quote in one place, with a shared booking calendar that ends double bookings.
- **AI-assisted messaging** that automatically lets customers know when their car is ready, follows up on open quotes, and sends service reminders when a vehicle is due.

The result: fewer interruptions for the team, more quotes turned into jobs, more repeat business, and new customers finding the workshop online. All of this is achieved without Thabo hiring an IT person or paying corporate prices.

## Why it matters

South Africa's SMEs do not need more complicated technology. They need a local partner who understands their reality and delivers tools that work from day one. That is what Awaitsi is here to do: affordable web development, custom CRM systems and practical AI, built for the businesses that keep South Africa running.

**Ready to modernise your business? Visit awaitsi.co.za.**
`,
  },
];

export const getInsightBySlug = (slug: string | undefined): InsightArticle | undefined =>
  insights.find((a) => a.slug === slug);

export const insightUrl = (slug: string): string => `${SITE_URL}/insights/${slug}`;
