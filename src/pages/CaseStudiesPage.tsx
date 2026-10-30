import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const studies = [
    {
      slug: 'kingspath-transport',
      client: 'Kingspath Transport',
      industry: 'Transport & Logistics',
      service: 'Custom Web Application & Freight Quoting Platform',
      challenge: 'Manual paper-based cargo booking causing delays and lost contract bids.',
      impact: '65% faster freight quote turnaround. +40% lead conversion.',
      color: 'border-awaitsi-green/30',
      tagColor: 'text-awaitsi-green',
      badge: 'Logistics Tech'
    },
    {
      slug: 'le2-memorials',
      client: 'LE2 Memorials',
      industry: 'Memorial & Funeral Services',
      service: 'Sensitive Digital Catalog Web Platform',
      challenge: 'Needing a respectful, empathetic digital platform for grieving families.',
      impact: 'Elevated brand trust & industry-leading sensitive UX design.',
      color: 'border-awaitsi-cyan/30',
      tagColor: 'text-awaitsi-cyan',
      badge: 'Dignified UX'
    }
  ];

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Case Studies | Awaitsi (Pty) Ltd – Client Success Stories"
        description="Explore real-world case studies from Awaitsi clients: Kingspath Transport and LE2 Memorials — measurable business impact through practical digital solutions."
      />
      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan text-xs font-bold uppercase tracking-widest mb-6">
            Client Success Stories
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight mb-6">
            Case Studies: Real Clients. <span className="text-awaitsi-cyan">Real Impact.</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            We measure our success by the measurable improvement in our clients' operations, credibility, and growth.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studies.map((study, idx) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-2xl bg-awaitsi-gray-900 border ${study.color} hover:border-white/40 transition-all flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${study.tagColor}`}>{study.badge} · {study.industry}</span>
                  <h2 className="text-3xl font-extrabold font-montserrat text-white">{study.client}</h2>
                  <p className="text-sm font-medium text-white/80">{study.service}</p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">Challenge</div>
                    <p className="text-xs text-white/70">{study.challenge}</p>
                  </div>

                  <div className={`p-4 rounded-xl bg-white/5 border ${study.color}`}>
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${study.tagColor} mb-1`}>Measured Impact</div>
                    <p className="text-xs text-white/90 font-semibold">{study.impact}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${study.tagColor} hover:underline`}
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-green/20 via-awaitsi-gray-900 to-awaitsi-cyan/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">Want Your Business to Be Our Next Success Story?</h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">Book a free consultation to discuss how we can solve your specific business challenge.</p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Book a Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export default CaseStudiesPage;
