import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { CheckCircle2, ChevronDown, Sparkles, ArrowLeft, Shield, Clock, Users, HelpCircle, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceData {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  problem: string;
  whoItsFor: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const serviceDetailsMap: Record<string, ServiceData> = {
  'business-websites': {
    slug: 'business-websites',
    title: 'Business Websites',
    badge: 'Digital Presence',
    tagline: 'High-converting, mobile-first websites designed to elevate your company brand and generate qualified client inquiries.',
    problem: 'Many South African businesses lose potential clients because their website is either nonexistent, outdated, unreadable on mobile devices, or painfully slow to load.',
    whoItsFor: [
      'Small and Medium Enterprises (SMEs) wanting a strong market presence',
      'Professional service firms (Logistics, Law, Finance, Consulting)',
      'Retailers & Local Businesses seeking digital visibility',
      'Startups launching new products or services'
    ],
    benefits: [
      { title: 'Immediate Market Credibility', desc: 'Establish instant trust with prospective clients through clean typography and editorial design.' },
      { title: 'Mobile-First Optimization', desc: 'Flawless performance across all South African mobile networks and smartphone screen sizes.' },
      { title: 'SEO & Search Indexation', desc: 'Built-in Google SEO structure, meta tags, and schema markup for organic discoverability.' },
      { title: 'Direct WhatsApp & Lead Capture', desc: 'Integrated contact forms and instant messaging buttons so prospects reach you immediately.' }
    ],
    process: [
      { step: '01', title: 'Discovery & Requirements', desc: 'Understanding your brand goals, target audience, and key offerings.' },
      { step: '02', title: 'UX/UI Wireframing', desc: 'Designing responsive layouts and content structure for conversion.' },
      { step: '03', title: 'Clean Frontend Code', desc: 'Building fast, accessible HTML/CSS/JS with smooth micro-animations.' },
      { step: '04', title: 'Testing & Launch', desc: 'Speed audits, cross-browser testing, domain connection, and launch.' }
    ],
    faqs: [
      { q: 'How long does it take to build a business website?', a: 'Typical business websites are designed, developed, and deployed within 2 to 4 weeks depending on content readiness.' },
      { q: 'Can I request updates after launch?', a: 'Yes! We offer monthly maintenance packages or training so your team can request continuous updates.' },
      { q: 'Will my website work well on mobile phones?', a: 'Absolutely. Over 70% of South African web traffic is mobile. All our websites are engineered mobile-first.' }
    ]
  },
  'custom-web-applications': {
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    badge: 'Enterprise Systems',
    tagline: 'Bespoke web applications, administrative dashboards, and custom software systems engineered for complex operational workflows.',
    problem: 'Off-the-shelf software often fails to match your unique operational model, forcing teams to rely on messy spreadsheets and manual workarounds.',
    whoItsFor: [
      'Logistics & Fleet operations requiring custom tracking and booking portals',
      'Memorial & Funeral services managing digital records and client registries',
      'Growing businesses needing specialized internal CRM and workflow software',
      'Organizations wanting client portals and self-service dashboards'
    ],
    benefits: [
      { title: 'Tailored Operational Fit', desc: 'Engineered specifically for your exact business logic—no bloated unused features.' },
      { title: 'Automated Workflows', desc: 'Eliminate repetitive manual data entry and save dozens of team working hours weekly.' },
      { title: 'Role-Based Access Control', desc: 'Secure admin, staff, and client user roles with granular permission levels.' },
      { title: 'Scalable Cloud Backend', desc: 'Built with resilient databases and APIs capable of handling business growth.' }
    ],
    process: [
      { step: '01', title: 'System Architecture', desc: 'Mapping database schemas, user permissions, and functional workflows.' },
      { step: '02', title: 'Prototyping & UX', desc: 'Creating interactive dashboard layouts and user journey flows.' },
      { step: '03', title: 'Full Stack Development', desc: 'Engineering secure frontends and cloud API backend endpoints.' },
      { step: '04', title: 'QA & Security Testing', desc: 'Performing stress testing, vulnerability scans, and user acceptance testing.' }
    ],
    faqs: [
      { q: 'What technology stack do you use for custom web apps?', a: 'We build with React, TypeScript, Node.js/Python, and PostgreSQL/Supabase for high performance and reliability.' },
      { q: 'Do we own the custom source code?', a: 'Yes. Once project milestones are completed, full intellectual property and code ownership belong to your company.' },
      { q: 'Can the application integrate with external APIs?', a: 'Yes, we seamlessly integrate with payment gateways (PayFast, Yoco, Stripe), accounting software, and SMS gateways.' }
    ]
  },
  'website-maintenance': {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    badge: 'Proactive Security',
    tagline: 'Continuous security patches, performance monitoring, software updates, and reliable backup management.',
    problem: 'Unmaintained websites frequently suffer from security breaches, broken layout scripts, outdated dependencies, and severe speed degradation.',
    whoItsFor: [
      'Businesses without in-house web developers or IT security teams',
      'E-commerce & web portals requiring 99.9% uptime',
      'Organisations needing regular text, banner, and image content updates',
      'Companies wanting monthly analytics and health reporting'
    ],
    benefits: [
      { title: 'Zero Downtime Assurance', desc: 'Proactive 24/7 uptime monitoring prevents unexpected site crashes.' },
      { title: 'Malware Protection & Cleanup', desc: 'Continuous security scanning and firewall updates to block malicious attacks.' },
      { title: 'Regular Backup Snapshots', desc: 'Automated daily/weekly cloud backup restore points for complete disaster recovery.' },
      { title: 'Fast Priority Edits', desc: 'Dedicated hours for updating staff profiles, pricing, news, and banners.' }
    ],
    process: [
      { step: '01', title: 'Initial Health Audit', desc: 'Auditing existing code, plugins, security vulnerabilities, and page speed.' },
      { step: '02', title: 'Backup & Hardening', desc: 'Setting up automated cloud backup routines and security firewalls.' },
      { step: '03', title: 'Monthly Maintenance', desc: 'Applying updates, running speed checks, and applying content edits.' },
      { step: '04', title: 'Monthly Health Report', desc: 'Delivering clear reports on uptime, traffic, and security status.' }
    ],
    faqs: [
      { q: 'What is included in monthly maintenance hours?', a: 'Included hours cover security updates, backup verification, content changes, speed tuning, and technical advice.' },
      { q: 'What happens if my site goes down?', a: 'Our automated monitor alerts our engineering team immediately, and we restore systems from clean backup snapshots.' },
      { q: 'Can I cancel or change maintenance plans?', a: 'Yes, maintenance plans are month-to-month with flexible terms.' }
    ]
  },
  'technical-support': {
    slug: 'technical-support',
    title: 'Technical Support',
    badge: 'Dedicated Desk',
    tagline: 'Reliable helpdesk support, email troubleshooting, domain management, and technical advisory for South African businesses.',
    problem: 'When technical glitches or domain issues occur, businesses waste valuable hours trying to troubleshoot complex settings without expert guidance.',
    whoItsFor: [
      'Companies needing a dependable technical helpline for web and cloud systems',
      'Businesses migrating domain names, email servers, or cloud hosts',
      'Teams requiring staff guidance on digital platform usage',
      'Enterprises needing clear SLA response guarantees'
    ],
    benefits: [
      { title: 'Guaranteed SLA Response', desc: 'Fast, predictable response times (< 24 hours guaranteed, urgent within 4 hours).' },
      { title: 'Domain & Email Diagnostics', desc: 'Resolving DNS, MX, SPF, DKIM, and SSL issues seamlessly.' },
      { title: 'Direct Engineer Access', desc: 'Speak directly with experienced technical developers—no automated phone loops.' },
      { title: 'Clear Technical Guidance', desc: 'Plain-language advice on software tools, hosting options, and security.' }
    ],
    process: [
      { step: '01', title: 'Support Desk Onboarding', desc: 'Configuring your company support account and key technical inventory.' },
      { step: '02', title: 'Ticket Submission', desc: 'Submit inquiries via email, client dashboard, or priority WhatsApp.' },
      { step: '03', title: 'Rapid Diagnosis & Resolution', desc: 'Engineers inspect logs, isolate issues, and deploy clean fixes.' },
      { step: '04', title: 'Post-Resolution Verification', desc: 'Confirming system health and documenting the fix for future reference.' }
    ],
    faqs: [
      { q: 'How quickly do you respond to urgent tickets?', a: 'Critical priority tickets (system outage) are responded to within 2 to 4 business hours.' },
      { q: 'Do you support third-party platforms?', a: 'Yes, we assist with DNS providers, cloud hosts, domain registrars, and email services.' },
      { q: 'Can we book ad-hoc support hours?', a: 'Yes, we offer both monthly retainer support plans and pay-as-you-go support hours.' }
    ]
  },
  'hosting-assistance': {
    slug: 'hosting-assistance',
    title: 'Hosting Assistance',
    badge: 'Cloud Setup',
    tagline: 'Professional domain registration, DNS configuration, cloud server deployment, and corporate email setup.',
    problem: 'Misconfigured hosting servers lead to slow loading speeds, email deliverability issues, SSL security errors, and costly downtime.',
    whoItsFor: [
      'New businesses registering domains and setting up professional company emails',
      'Companies wanting to migrate away from slow legacy shared hosting',
      'Organizations deploying high-speed cloud infrastructure (AWS/Netlify/Vercel)',
      'Enterprises needing SSL security enforcement and DNS hardening'
    ],
    benefits: [
      { title: 'High-Speed Cloud Infrastructure', desc: 'Deploying your website on global edge networks with sub-second load times.' },
      { title: 'Corporate Email Setup', desc: 'Configuring professional Google Workspace or Microsoft 365 email addresses.' },
      { title: 'Email Deliverability Enforcement', desc: 'Setting up SPF, DKIM, and DMARC records so emails never hit spam folders.' },
      { title: 'SSL Security & HTTPS', desc: 'Installing 256-bit SSL certificates for full data encryption.' }
    ],
    process: [
      { step: '01', title: 'Infrastructure Planning', desc: 'Selecting the optimal cloud host and domain configuration for your traffic.' },
      { step: '02', title: 'DNS & Domain Setup', desc: 'Configuring DNS A, CNAME, MX, and TXT security records.' },
      { step: '03', title: 'Server Deployment', desc: 'Deploying web files and configuring SSL security certificates.' },
      { step: '04', title: 'Deliverability Verification', desc: 'Testing web load benchmarks and email deliverability scores.' }
    ],
    faqs: [
      { q: 'Which cloud platforms do you recommend?', a: 'We utilize premium modern platforms like Netlify, Vercel, AWS, and Cloudflare for maximum speed and security.' },
      { q: 'Can you help transfer an existing domain?', a: 'Yes, we handle complete domain transfer auth codes, DNS migration, and zero-downtime cutover.' },
      { q: 'Are backup servers included?', a: 'Yes, our cloud hosting configurations include automatic snapshot redundancy.' }
    ]
  }
};

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = slug ? serviceDetailsMap[slug] : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title={`${service.title} | Awaitsi (Pty) Ltd`}
        description={service.tagline}
      />

      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        
        {/* Header Breadcrumb */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-awaitsi-green transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services Overview
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" /> {service.badge}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </section>

        {/* Business Problem & Challenge */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-cyan">The Business Problem We Address</div>
              <h2 className="text-2xl font-bold font-montserrat text-white">Why Businesses Seek This Solution</h2>
              <p className="text-base text-white/70 leading-relaxed font-opensans">
                {service.problem}
              </p>
            </div>
            <div className="lg:col-span-4 p-6 rounded-xl bg-white/5 border border-white/10 text-center space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-green">Awaitsi Execution Standard</div>
              <div className="text-sm text-white/80 font-medium">Clear SLAs, zero bloat, and enterprise code quality.</div>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="w-full py-3 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-awaitsi-green-light transition-all"
              >
                Discuss Your Need
              </button>
            </div>
          </div>
        </section>

        {/* Who Is This Service For? */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-montserrat text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-awaitsi-green" /> Who Is This Service Designed For?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whoItsFor.map((target, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-awaitsi-gray-900 border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 font-medium">{target}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-montserrat text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-awaitsi-cyan" /> Core Business Benefits
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.benefits.map((b) => (
                <div key={b.title} className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-green/40 transition-all space-y-2">
                  <h3 className="text-lg font-bold font-montserrat text-white">{b.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="p-8 sm:p-10 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-awaitsi-green">
              <Clock className="w-4 h-4" /> Development Lifecycle
            </div>
            <h2 className="text-2xl font-bold font-montserrat text-white">
              How We Deliver {service.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p) => (
                <div key={p.step} className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="text-2xl font-mono font-bold text-awaitsi-green">{p.step}</div>
                  <h3 className="font-bold text-sm text-white font-montserrat">{p.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold font-montserrat text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-awaitsi-green" /> Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="rounded-xl bg-awaitsi-gray-900 border border-white/10 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-awaitsi-green' : 'text-white/40'}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-5 pb-5 text-xs text-white/70 leading-relaxed border-t border-white/5 pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-green/20 via-awaitsi-gray-900 to-awaitsi-cyan/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">
              Book a consultation to get a transparent proposal, development schedule, and cost breakdown.
            </p>
            <div>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Book Consultation Now
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};

export default ServiceDetailPage;
