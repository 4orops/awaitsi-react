import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Monitor, Code2, Network, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const DigitalSystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-green selection:text-black">
      <SEO 
        title="Digital Systems | Awaitsi" 
        description="Build the digital foundation your business needs with websites, mobile apps, e-commerce, custom software and digital platforms."
      />
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20">
        {/* Header Section */}
        <section className="px-6 max-w-7xl mx-auto mb-20 text-center relative">
          <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none -z-10" />
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="text-awaitsi-green font-bold text-xs uppercase tracking-ultra mb-4 block">01 — Core Pillar</span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight mb-6">
              Digital Systems
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Build the robust digital foundation your business needs to operate online, engage customers, and scale effectively.
            </p>
            <Link to="/digital-assessment" className="btn-primary mx-auto inline-flex shadow-glow-green">
              Start With a Digital Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Websites & E-commerce */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="websites" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-cyan/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Websites & E-Commerce</h3>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                High-performance web properties designed to convert visitors and facilitate seamless transactions.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/80">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Corporate Websites</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> SME Websites</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Landing Pages</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Booking Websites</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Online Stores</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Shopping Carts</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Order Management</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Secure Checkout</span>
              </div>
            </motion.div>

            {/* Mobile Applications */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="apps" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-green/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-green/10 rounded-xl flex items-center justify-center text-awaitsi-green">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Mobile Applications</h3>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                Native and cross-platform mobile experiences that put your business directly in the hands of your customers and workforce.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-white/80">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> iOS & Android native</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Cross-platform apps</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Customer applications</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Internal workforce apps</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Booking applications</span>
              </div>
            </motion.div>

            {/* Digital Platforms */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="platforms" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-cyan/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Digital Platforms</h3>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                Scalable web platforms designed for complex interactions, user management, and self-service capabilities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-white/80">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Customer portals</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Business portals</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Membership platforms</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Self-service systems</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Digital workflows</span>
              </div>
            </motion.div>

            {/* Custom Software & Integrations */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="software" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-green/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 bg-awaitsi-green/10 rounded-xl flex items-center justify-center text-awaitsi-green relative z-10 border border-awaitsi-gray-950">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white relative z-0 border border-awaitsi-gray-950">
                    <Network className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Custom Software & APIs</h3>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                Bespoke operational software and seamless integrations that tie your digital systems together.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-white/80">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Custom business logic</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Industry-specific software</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Third-party integrations</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Payment system APIs</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Communication systems</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Pathway Section */}
        <section className="px-6 max-w-4xl mx-auto mt-24 text-center">
          <div className="p-8 lg:p-12 bg-gradient-to-r from-awaitsi-blue/20 to-awaitsi-cyan/20 border border-awaitsi-cyan/30 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-4">Once your digital foundation is built...</h3>
            <p className="text-white/70 mb-8 text-lg">It's time to connect your operations and streamline your workflows.</p>
            <Link to="/services/business-systems" className="btn-primary-dark mx-auto inline-flex">
              Explore Business Systems <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DigitalSystemsPage;
