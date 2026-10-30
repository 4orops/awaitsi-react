import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { motion } from 'framer-motion';
import { Search, Clock, Palette, Code2, TestTube, Rocket, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    icon: Search,
    color: 'text-awaitsi-green',
    border: 'border-awaitsi-green/30',
    bg: 'bg-awaitsi-green/5',
    duration: '1–3 Days',
    description: 'We begin by thoroughly understanding your business, operational challenges, target audience, and digital goals.',
    activities: [
      'In-depth client discovery interview',
      'Business process mapping & analysis',
      'Competitor & market research',
      'Technical feasibility assessment',
      'Project scope and success criteria definition'
    ]
  },
  {
    num: '02',
    title: 'Planning',
    icon: Clock,
    color: 'text-awaitsi-cyan',
    border: 'border-awaitsi-cyan/30',
    bg: 'bg-awaitsi-cyan/5',
    duration: '2–4 Days',
    description: 'We create a detailed technical roadmap, site architecture, and project timeline aligned to your business objectives.',
    activities: [
      'Site architecture & information hierarchy',
      'Feature list and technical specifications',
      'Development sprint planning',
      'Content requirements checklist',
      'Clear cost and timeline approval'
    ]
  },
  {
    num: '03',
    title: 'Design',
    icon: Palette,
    color: 'text-awaitsi-green',
    border: 'border-awaitsi-green/30',
    bg: 'bg-awaitsi-green/5',
    duration: '3–7 Days',
    description: 'Our designers craft premium visual layouts aligned to your brand identity, accessibility standards, and conversion objectives.',
    activities: [
      'Wireframe and UX flow prototyping',
      'Brand-aligned typography & color system',
      'Mobile-first responsive layout design',
      'Interactive micro-animation planning',
      'Client design review and approval'
    ]
  },
  {
    num: '04',
    title: 'Development',
    icon: Code2,
    color: 'text-awaitsi-cyan',
    border: 'border-awaitsi-cyan/30',
    bg: 'bg-awaitsi-cyan/5',
    duration: '5–14 Days',
    description: 'Our engineers write clean, scalable, and accessible code following modern enterprise standards and best practices.',
    activities: [
      'React + TypeScript component architecture',
      'Backend API integration and database schemas',
      'SEO metadata and structured data implementation',
      'Performance optimization (lazy loading, caching)',
      'WCAG AA accessibility compliance checks'
    ]
  },
  {
    num: '05',
    title: 'Testing',
    icon: TestTube,
    color: 'text-awaitsi-green',
    border: 'border-awaitsi-green/30',
    bg: 'bg-awaitsi-green/5',
    duration: '2–4 Days',
    description: 'Rigorous cross-device and cross-browser testing ensures your digital solution performs flawlessly before public launch.',
    activities: [
      'Chrome, Safari, Firefox, Edge browser testing',
      'Mobile & tablet responsiveness checks',
      'Core Web Vitals & Lighthouse performance audits',
      'Form submission and integration testing',
      'Security scanning and vulnerability checks'
    ]
  },
  {
    num: '06',
    title: 'Launch & Support',
    icon: Rocket,
    color: 'text-awaitsi-cyan',
    border: 'border-awaitsi-cyan/30',
    bg: 'bg-awaitsi-cyan/5',
    duration: 'Ongoing',
    description: 'After successful launch, we remain your long-term technical partner providing support, maintenance, and future evolution.',
    activities: [
      'DNS & cloud deployment configuration',
      'SSL certificate setup and HTTPS enforcement',
      'Google Search Console & Analytics integration',
      'Post-launch monitoring and error resolution',
      'Ongoing SLA maintenance and enhancement roadmap'
    ]
  }
];

const ProcessPage: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Our 6-Step Development Process | Awaitsi (Pty) Ltd"
        description="Awaitsi follows a transparent 6-step development process: Discovery, Planning, Design, Development, Testing, and Launch & Support."
      />
      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest mb-6">
            Transparent Development Lifecycle
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight max-w-4xl mx-auto">
            Our 6-Step Process for <span className="text-awaitsi-green">Delivering Excellence</span>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Every Awaitsi project follows a structured, transparent methodology ensuring quality, efficiency, and complete alignment with your business goals.
          </p>
        </section>

        {/* Step Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`p-8 sm:p-10 rounded-2xl bg-awaitsi-gray-900 border ${step.border} ${step.bg} grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
                >
                  {/* Step Header */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${step.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-4xl font-black font-mono ${step.color} opacity-40`}>{step.num}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold font-montserrat text-white">{step.title}</h2>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${step.color}`}>
                      <Clock className="w-3.5 h-3.5" /> {step.duration}
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Key Activities</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.activities.map((act, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${step.color}`} />
                          <span className="text-xs text-white/80">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-green/20 via-awaitsi-gray-900 to-awaitsi-cyan/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">Ready to Start Your Project?</h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">Let's begin with a free discovery consultation to map your business needs against the right digital solution.</p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Book Your Discovery Session
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export default ProcessPage;
