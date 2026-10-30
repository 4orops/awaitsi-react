import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { Globe, Cpu, Wrench, Headset, HardDrive, ArrowRight, CheckCircle2, Sparkles, Lock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const currentServices = [
    {
      slug: 'business-websites',
      title: 'Business Websites',
      icon: Globe,
      color: 'text-awaitsi-green',
      badge: 'Core Service',
      tagline: 'High-converting, mobile-first web presence tailored for growing SMEs.',
      problem: 'Businesses missing out on online inquiries due to slow or outdated websites.',
      deliverables: [
        'Custom responsive UI/UX design',
        'SEO structure & Google indexation setup',
        'Mobile optimization & lightning fast load speed',
        'Lead capture contact forms & WhatsApp integration',
        'Analytics & performance tracking'
      ]
    },
    {
      slug: 'custom-web-applications',
      title: 'Custom Web Applications',
      icon: Cpu,
      color: 'text-awaitsi-cyan',
      badge: 'Enterprise Systems',
      tagline: 'Tailored web portals, client dashboards, and custom operational software.',
      problem: 'Inefficient manual operations, fragmented spreadsheets, and custom workflow bottlenecks.',
      deliverables: [
        'Bespoke database schema design & backend APIs',
        'Role-based security & user authentication',
        'Operational workflow automation',
        'Client & admin management dashboards',
        'Third-party software & payment gateway integrations'
      ]
    },
    {
      slug: 'website-maintenance',
      title: 'Website Maintenance',
      icon: Wrench,
      color: 'text-awaitsi-green',
      badge: 'Continuous Security',
      tagline: 'Proactive SLA maintenance, security updates, and performance optimization.',
      problem: 'Unmaintained websites vulnerable to malware, broken links, and slow speeds.',
      deliverables: [
        'Monthly security patches & core updates',
        'Automated cloud backups & restore points',
        'Uptime monitoring & error resolution',
        'Content updates & text/image revisions',
        'Monthly speed & health reports'
      ]
    },
    {
      slug: 'technical-support',
      title: 'Technical Support',
      icon: Headset,
      color: 'text-awaitsi-cyan',
      badge: 'Dedicated Helpdesk',
      tagline: 'Reliable ongoing IT and software helpdesk support for peace of mind.',
      problem: 'Businesses lacking dedicated in-house technical personnel when systems glitch.',
      deliverables: [
        'Direct SLA support email & phone desk',
        'Troubleshooting DNS, email, and domain configurations',
        'Staff technical guidance & platform training',
        'Emergency response protocol for critical outages',
        'Transparent bug fixing and patch resolution'
      ]
    },
    {
      slug: 'hosting-assistance',
      title: 'Hosting Assistance',
      icon: HardDrive,
      color: 'text-awaitsi-green',
      badge: 'Infrastructure',
      tagline: 'Domain registration, corporate email setup, and cloud hosting management.',
      problem: 'Confusion around domain transfers, SSL certificates, and cloud server configuration.',
      deliverables: [
        'Custom domain registration & DNS management',
        'Corporate Google Workspace or Microsoft 365 setup',
        'High-speed cloud server deployment (AWS/Netlify/Vercel)',
        'SSL certificate installation & HTTPS enforcement',
        'Email deliverability (SPF, DKIM, DMARC records)'
      ]
    }
  ];

  const futureServices = [
    { name: 'Business Software', desc: 'Standardized SaaS tools for local enterprise resource management.' },
    { name: 'Business Automation', desc: 'Intelligent workflow triggers and automated notification pipelines.' },
    { name: 'Cloud Solutions', desc: 'Enterprise cloud migration, serverless API clusters, and data backups.' },
    { name: 'Client Dashboard & Portal', desc: 'Centralized client self-service and document management hubs.' }
  ];

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Services | Awaitsi (Pty) Ltd - Practical Digital Solutions"
        description="Explore Awaitsi's core services: Business Websites, Custom Web Applications, Website Maintenance, Technical Support, and Hosting Assistance."
      />

      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" /> Practical Digital Services
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Practical Software & Digital Solutions Built to <span className="text-awaitsi-green">Solve Problems</span>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Explore our current core services, designed to elevate your business presence, streamline operations, and ensure long-term reliability.
          </p>
        </section>

        {/* Current Core Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="space-y-12">
            {currentServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="p-8 sm:p-10 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-white/20 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${service.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 ${service.color}`}>
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-white">
                      {service.title}
                    </h2>

                    <p className="text-base text-white/80 font-medium">
                      {service.tagline}
                    </p>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">
                        Business Challenge Addressed
                      </div>
                      <p className="text-xs text-white/70">
                        {service.problem}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${service.color} hover:underline`}
                      >
                        <span>Explore Full Service Breakdown & FAQs</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 rounded-xl bg-awaitsi-gray-950 border border-white/10 space-y-3">
                    <h3 className="font-bold text-xs uppercase tracking-widest text-white/50 border-b border-white/10 pb-2">
                      Key Deliverables
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/75">
                          <CheckCircle2 className="w-4 h-4 text-awaitsi-green shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Future Services Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="p-8 sm:p-12 rounded-2xl bg-awaitsi-gray-900 border border-white/10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-awaitsi-cyan mb-2">
              <Lock className="w-4 h-4" /> Future Roadmap Preview
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-montserrat text-white mb-4">
              Building for Tomorrow: Scalable Product Pipeline
            </h2>
            <p className="text-sm text-white/60 max-w-2xl mb-8">
              As Awaitsi matures, we are structuring our underlying architecture to launch modular enterprise products without redesigning our platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureServices.map((fs) => (
                <div key={fs.name} className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2 opacity-80">
                  <div className="text-[10px] font-mono text-awaitsi-cyan uppercase tracking-widest">In Development</div>
                  <h3 className="font-bold text-sm text-white font-montserrat">{fs.name}</h3>
                  <p className="text-xs text-white/50">{fs.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-green/20 via-awaitsi-gray-900 to-awaitsi-cyan/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">
              Need a Custom Solution Tailored to Your Business?
            </h2>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              Contact our team to get a detailed technical proposal, cost estimate, and development timeline.
            </p>
            <div>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Request Service Quote
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

export default ServicesPage;
