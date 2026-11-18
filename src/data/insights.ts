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
    slug: 'where-professionalism-meets-every-journey',
    title: 'Where Professionalism Meets Every Journey',
    seoTitle: 'Kingspath Transport: Where Professionalism Meets Every Journey',
    description:
      'Kingspath is a professional shuttle and executive transport service operating across South Africa, built on trust, punctuality and excellence.',
    excerpt:
      'Kingspath is a professional shuttle and executive transport service operating across South Africa. Whatever the trip, we are built on three values: trust, punctuality and excellence.',
    subject: 'Kingspath Transport',
    related: [
      { label: 'Kingspath Transport case study', to: '/work/kingspath-transport' },
      { label: 'Our work', to: '/work' },
    ],
    body: `
You never really notice good transport. The car is already waiting when you land, the driver knows the route, and you get to the meeting, the venue or home without thinking about it. You only notice transport when it goes wrong: a no-show at the airport, a driver who is running late, a vehicle you would not want a client to see you step out of. Kingspath Transport exists so that you never have to worry about it.

Kingspath is a professional shuttle and executive transport service operating across South Africa. Whatever the trip, we are built on three values: **trust, punctuality and excellence.**

## The problems we solve

**Unreliable pickups.** Missed or late airport collections cost people flights, meetings and peace of mind. We treat punctuality as a promise, not a target.

**Inconsistent service.** With ad-hoc rides you never know what kind of car or driver will arrive. Kingspath delivers the same professional standard on every journey, so you can book with confidence for yourself, your team or your guests.

**Complicated logistics.** Moving executives, delegates or wedding guests between airports, hotels and venues takes a lot of coordination. We take that off your plate.

**Booking hassle.** You can book online, quickly and from anywhere in the country.

## Our services

**Airport transfers.** We meet you on arrival and take you to your hotel, office or home, and we get you to the airport on time for departure. It is the stress-free way to start or end any trip.

**Corporate travel.** We provide dependable transport for executives, visiting clients and staff. When your company's reputation is in the car with them, professionalism matters.

**Event transport.** We move guests to and from conferences, weddings, year-end functions and special occasions, so the event runs smoothly and everyone arrives together and on time.

**Private charters.** You can hire a vehicle and driver for your own schedule, whether that is a day of meetings, a group outing or a trip that needs flexibility.

## An example: a Pretoria company hosting visiting clients

Imagine a mid-sized engineering firm in Pretoria hosting a delegation of five clients for a two-day visit. (This is an illustrative scenario.) Without a transport partner, someone on the team has to juggle flight times, ride-hailing apps and directions to the site, and hope it all comes together.

With Kingspath, the firm makes one booking. The delegation is collected at the airport, taken to their hotel, driven to the office and the site visit, taken to dinner, and returned to the airport for their flights home. Every pickup is on time, and every driver is professional. The visitors' first impression of the firm is a good one, and the team can stay focused on the business.

## Why choose Kingspath

- **Trust:** professional drivers you can rely on with your guests, your staff and your family.
- **Punctuality:** we plan around your schedule and arrive on time.
- **Excellence:** a consistent, executive-level experience on every trip.
- **Nationwide:** transport across South Africa, with easy online booking.

## Book your next journey

Whether it is a single airport transfer or transport for an entire event, Kingspath Transport gets you there with professionalism at every step.

**Book online at kingspathtransport.co.za.**
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
