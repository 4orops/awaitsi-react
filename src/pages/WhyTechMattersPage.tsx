import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Globe, Clock, BarChart3, Cpu, Sparkles } from 'lucide-react';

const stats = [
  { value: '72%', label: 'of South African consumers search for businesses online before making a purchase decision.', source: 'Statista / Digital SA 2024' },
  { value: '3x', label: 'more leads generated on average by businesses with professional, SEO-optimised websites.', source: 'HubSpot Research' },
  { value: '53%', label: 'of mobile users abandon websites that take longer than 3 seconds to load.', source: 'Google PageSpeed Report' },
  { value: 'R2.6T', label: 'South Africa\'s e-commerce sector projected market value by 2028 — driven by SME digital adoption.', source: 'Statista South Africa 2024' }
];

const benefits = [
  {
    icon: TrendingUp,
    color: 'text-awaitsi-green',
    title: 'Increase Revenue & Reach More Customers',
    desc: 'A professional digital presence opens new geographic markets without physical expansion costs, driving inbound inquiry volume and online conversion.',
    stat: '+3x Lead Generation'
  },
  {
    icon: ShieldCheck,
    color: 'text-awaitsi-cyan',
    title: 'Build Immediate Market Credibility',
    desc: 'Businesses with modern, professional websites are perceived as more trustworthy, reliable, and competent by prospective clients researching online.',
    stat: '+68% Trust Index'
  },
  {
    icon: Clock,
    color: 'text-awaitsi-green',
    title: 'Reduce Manual Operational Work',
    desc: 'Digital automation replaces repetitive manual workflows—quoting, scheduling, reporting—freeing your team to focus on revenue-generating activities.',
    stat: '15+ hrs Saved/Week'
  },
  {
    icon: Globe,
    color: 'text-awaitsi-cyan',
    title: 'Operate Beyond Geographic Boundaries',
    desc: 'Digital platforms allow South African businesses to serve clients nationally and internationally with lower operational overhead.',
    stat: 'National + Export Ready'
  },
  {
    icon: BarChart3,
    color: 'text-awaitsi-green',
    title: 'Data-Driven Business Decisions',
    desc: 'Website analytics, user behaviour tracking, and performance dashboards give you clear, actionable business intelligence previously unavailable.',
    stat: 'Real-Time Insights'
  },
  {
    icon: Cpu,
    color: 'text-awaitsi-cyan',
    title: 'Future-Proof Your Business Growth',
    desc: 'Technology infrastructure built today scales with your business tomorrow—enabling product expansion, new markets, and long-term operational resilience.',
    stat: '5+ Year Architecture'
  }
];

const WhyTechMattersPage: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Why Technology Matters | Awaitsi (Pty) Ltd"
        description="Discover why digital transformation matters for South African SMEs — statistics, ROI insights, and how technology improves efficiency, credibility, and growth."
      />
      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan text-xs font-bold uppercase tracking-widest mb-6">
            Digital Transformation Education
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight max-w-4xl mx-auto">
            Why Technology Matters for <span className="text-awaitsi-cyan">South African Businesses</span>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Evidence-backed insights explaining why investing in practical digital solutions drives measurable business improvement for South African SMEs.
          </p>
        </section>

        {/* Key Statistics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-green/40 transition-all text-center space-y-3"
              >
                <div className="text-5xl font-black font-montserrat text-awaitsi-green">{s.value}</div>
                <p className="text-xs text-white/80 leading-relaxed font-medium">{s.label}</p>
                <div className="text-[10px] font-mono text-white/40 border-t border-white/10 pt-2">{s.source}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Benefits */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">
              6 Ways Technology Transforms Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-cyan/40 transition-all flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${b.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 ${b.color}`}>
                      {b.stat}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-montserrat text-white">{b.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* The SA Digital Opportunity */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="p-8 sm:p-12 rounded-2xl bg-awaitsi-gray-900 border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold font-montserrat text-white">The South African Digital Opportunity</h2>
              <p className="text-base text-white/70 leading-relaxed">
                South Africa has over 3 million registered small businesses, yet a significant majority lack a professional digital presence. This represents an enormous untapped advantage for early-adopter businesses willing to invest in digital infrastructure today.
              </p>
              <p className="text-base text-white/70 leading-relaxed">
                Awaitsi's mission is to help South African businesses seize this digital moment — building technology that creates lasting, generational value for business owners, their families, and their employees.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'SA Businesses Without a Website', value: '68%', color: 'bg-red-500/60' },
                { label: 'SA Mobile Internet Users', value: '83%', color: 'bg-awaitsi-green/60' },
                { label: 'SMEs Reporting Growth After Going Digital', value: '74%', color: 'bg-awaitsi-cyan/60' }
              ].map((d) => (
                <div key={d.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/70">{d.label}</span>
                    <span className="font-bold text-white">{d.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: d.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full rounded-full ${d.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-cyan/20 via-awaitsi-gray-900 to-awaitsi-green/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">Ready to Leverage Technology for Your Business Growth?</h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">Partner with Awaitsi to design a practical digital strategy that creates lasting value for your business.</p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Book Your Digital Strategy Session
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export default WhyTechMattersPage;
