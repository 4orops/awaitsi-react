import React, { useState } from 'react';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ConsultationModal from '../../components/ConsultationModal';
import { ArrowLeft, Heart, CheckCircle2, ShieldCheck, Sparkles, Flower2, BarChart3, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const LE2CaseStudy: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Case Study: LE2 Memorials | Awaitsi (Pty) Ltd"
        description="Explore how Awaitsi designed a dignified, respectful digital memorial catalog and consultation platform for LE2 Memorials."
      />

      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        
        {/* Header Breadcrumb */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-awaitsi-green transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies Hub
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan text-xs font-bold uppercase tracking-widest">
              <Flower2 className="w-3.5 h-3.5" /> Memorial & Community Services Case Study
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight">
              LE2 Memorials
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
              Designing a dignified, respectful web platform and digital memorial catalog to serve grieving families with compassion, clarity, and total transparency.
            </p>
          </div>
        </section>

        {/* Project Meta Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-white/70">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Industry</div>
              <div className="font-bold text-white text-sm">Memorial & Funeral Services</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Service Delivered</div>
              <div className="font-bold text-white text-sm">Digital Catalog & Sensitive UI Web Platform</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Design Focus</div>
              <div className="font-bold text-white text-sm font-mono">Dignified UX, Serene Color Palette</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Primary Outcome</div>
              <div className="font-bold text-awaitsi-cyan text-sm">Empathetic Digital Client Journey</div>
            </div>
          </div>
        </section>

        {/* Client Challenge & Design Thinking */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-cyan">The Challenge</div>
              <h2 className="text-2xl font-bold font-montserrat text-white">Sensitive Design for Families in Grief</h2>
              <p className="text-sm text-white/70 leading-relaxed font-opensans">
                Families selecting memorial stonework, tombstone gravestones, and remembrance markers are often experiencing immense emotional loss. Generic commercial e-commerce designs feel intrusive, cold, and transactional.
              </p>
              <p className="text-sm text-white/70 leading-relaxed font-opensans">
                LE2 Memorials required an online presence that balanced professional craftsmanship with deep empathy, clear guidance, and quiet dignity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-green">Design Thinking Approach</div>
              <h2 className="text-2xl font-bold font-montserrat text-white">Serene Aesthetics & Compassionate Guidance</h2>
              <p className="text-sm text-white/70 leading-relaxed font-opensans">
                Awaitsi crafted a custom design system utilizing soothing color tones, high-contrast accessible typography, non-aggressive call-to-actions, and clear categorization of memorial options.
              </p>
              <ul className="space-y-2 text-xs text-white/70 pt-2">
                <li className="flex items-center gap-2">&bull; Respectful memorial showcase catalog</li>
                <li className="flex items-center gap-2">&bull; Gentle step-by-step consultation booking</li>
                <li className="flex items-center gap-2">&bull; Clear information on materials, granite quality, and installation</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Solution Breakdown */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="p-8 sm:p-10 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-cyan">Platform Features</div>
            <h2 className="text-3xl font-extrabold font-montserrat text-white">
              Empathetic Digital Memorial Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="text-sm font-bold text-white font-montserrat">1. Categorized Memorial Catalog</div>
                <p className="text-xs text-white/60">Organized displays of headstones, full curbs, lawn markers, and custom engraving samples.</p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="text-sm font-bold text-white font-montserrat">2. Transparent Pricing Guidance</div>
                <p className="text-xs text-white/60">Honest breakdowns of granite options, lettering fees, and cemetery installation timelines.</p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="text-sm font-bold text-white font-montserrat">3. Quiet Consultation Requests</div>
                <p className="text-xs text-white/60">Low-friction inquiry forms enabling families to request callbacks or private appointments gracefully.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Future Roadmap */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-4">
              <h3 className="text-xl font-bold font-montserrat text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-awaitsi-cyan" /> Key Project Results
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-opensans">
                The new digital platform significantly increased family engagement while establishing LE2 Memorials as one of the most trusted and respected memorial service providers in the region.
              </p>
              <div className="pt-2 text-xs text-awaitsi-cyan font-bold font-mono">
                &check; Zero bounce rate increase &bull; High client feedback scores
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-4">
              <h3 className="text-xl font-bold font-montserrat text-white">Future Digital Features</h3>
              <p className="text-sm text-white/70 leading-relaxed font-opensans">
                Future planned software additions include online family guestbooks and QR-enabled digital memory pages linked seamlessly to physical gravestone markers.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-cyan/20 via-awaitsi-gray-900 to-awaitsi-green/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">
              Building a Sensitive, High-Trust Web Platform?
            </h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">
              We specialize in custom web applications designed around human empathy, brand trust, and clarity.
            </p>
            <div>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Book a Consultation
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

export default LE2CaseStudy;
