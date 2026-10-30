import React, { useState } from 'react';
import SEO from '../../components/SEO';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ConsultationModal from '../../components/ConsultationModal';
import { ArrowLeft, CheckCircle2, Truck, ShieldCheck, Sparkles, Clock, Layers, ArrowUpRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const KingspathCaseStudy: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Case Study: Kingspath Transport | Awaitsi (Pty) Ltd"
        description="Discover how Awaitsi engineered a modern digital fleet management and quote engine for Kingspath Transport, reducing booking processing time by 65%."
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest">
              <Truck className="w-3.5 h-3.5" /> Featured Transport & Logistics Case Study
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight">
              Kingspath Transport
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
              Digitizing logistics workflows, automated cargo freight quoting, and real-time client dispatch management for a growing South African transport enterprise.
            </p>
          </div>
        </section>

        {/* Project Meta Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-white/70">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Industry</div>
              <div className="font-bold text-white text-sm">Transport & Logistics</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Service Delivered</div>
              <div className="font-bold text-white text-sm">Custom Web App & Quoting Platform</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Key Tech Stack</div>
              <div className="font-bold text-white text-sm font-mono">React, TypeScript, Tailwind, REST API</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Primary Impact</div>
              <div className="font-bold text-awaitsi-green text-sm">65% Faster Freight Quoting</div>
            </div>
          </div>
        </section>

        {/* Client Challenge & Objectives */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-cyan">The Business Challenge</div>
              <h2 className="text-2xl font-bold font-montserrat text-white">Manual Paperwork & Delayed Freight Quotes</h2>
              <p className="text-sm text-white/70 leading-relaxed font-opensans">
                Kingspath Transport managed cargo bookings through phone calls, manual email estimates, and paper manifests. Commercial clients often had to wait hours for freight pricing, causing lost bids to competitors with instant digital ordering.
              </p>
              <ul className="space-y-2 text-xs text-white/70 pt-2">
                <li className="flex items-center gap-2">&bull; Delayed response times on freight inquiries</li>
                <li className="flex items-center gap-2">&bull; Lack of transparent vehicle capacity calculators</li>
                <li className="flex items-center gap-2">&bull; Inefficient communication between dispatchers and drivers</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-green">Strategic Objectives</div>
              <h2 className="text-2xl font-bold font-montserrat text-white">Automating Dispatch & Digital Credibility</h2>
              <p className="text-sm text-white/70 leading-relaxed font-opensans">
                Awaitsi was commissioned to design an intuitive web application that allows commercial clients to request freight estimates instantly based on cargo weight, distance, and vehicle requirements.
              </p>
              <ul className="space-y-2 text-xs text-white/70 pt-2">
                <li className="flex items-center gap-2">&bull; Instant rate calculation based on load size</li>
                <li className="flex items-center gap-2">&bull; Enterprise mobile-responsive UI for fleet presentation</li>
                <li className="flex items-center gap-2">&bull; Integrated lead capture and instant dispatch notification</li>
              </ul>
            </div>

          </div>
        </section>

        {/* The Solution & Architecture */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="p-8 sm:p-10 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-green">The Solution Engineered</div>
            <h2 className="text-3xl font-extrabold font-montserrat text-white">
              A High-Speed Digital Logistics Platform
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              We engineered a sleek, accessible digital platform featuring a dynamic freight rate selector, detailed vehicle fleet categories (from 1-ton light delivery vehicles to 34-ton side tippers), and a automated quote notification pipeline.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="text-sm font-bold text-white font-montserrat">1. Dynamic Freight Calculator</div>
                <p className="text-xs text-white/60">Clients enter pickup location, destination, and cargo tonnage to receive immediate estimate ranges.</p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="text-sm font-bold text-white font-montserrat">2. Fleet Showcase Portal</div>
                <p className="text-xs text-white/60">Detailed technical specifications for flatbeds, superlinks, tautliners, and specialized transport units.</p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <div className="text-sm font-bold text-white font-montserrat">3. Dispatch Notification API</div>
                <p className="text-xs text-white/60">Instant email & WhatsApp alerts sent directly to Kingspath operations desk upon quote submission.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Results & Key Metrics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-montserrat text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-awaitsi-green" /> Measurable Business Impact
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-awaitsi-green/30 text-center space-y-2">
                <div className="text-4xl font-extrabold font-montserrat text-awaitsi-green">65%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white">Faster Quote Turnaround</div>
                <p className="text-xs text-white/60">Reduced client waiting time from hours to under 5 minutes.</p>
              </div>

              <div className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-awaitsi-cyan/30 text-center space-y-2">
                <div className="text-4xl font-extrabold font-montserrat text-awaitsi-cyan">+40%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white">Digital Lead Conversion</div>
                <p className="text-xs text-white/60">Significant increase in website visitors converting to verified freight orders.</p>
              </div>

              <div className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 text-center space-y-2">
                <div className="text-4xl font-extrabold font-montserrat text-white">100%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white">Mobile Responsiveness</div>
                <p className="text-xs text-white/60">Flawless performance for fleet managers accessing the system via smartphones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned & Future Enhancements */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 space-y-4">
            <h3 className="text-xl font-bold font-montserrat text-white">Future Improvements & Evolution</h3>
            <p className="text-sm text-white/70 leading-relaxed font-opensans">
              As part of Phase Two of our technical collaboration with Kingspath Transport, future software enhancements include integrating real-time telematics GPS APIs for live load tracking and automated SMS status updates for consignees.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-green/20 via-awaitsi-gray-900 to-awaitsi-cyan/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">
              Need a Custom Web Application for Your Transport Business?
            </h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">
              Partner with Awaitsi to digitize your operations and build high-speed customer platforms.
            </p>
            <div>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Schedule Strategy Consultation
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

export default KingspathCaseStudy;
