import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Workflow, BrainCircuit, FileSearch, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const AIAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-green selection:text-black">
      <SEO 
        title="AI & Automation | Awaitsi" 
        description="Make repetitive work smarter and give your business practical AI capabilities with intelligent workflows and AI assistants."
      />
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20">
        {/* Header Section */}
        <section className="px-6 max-w-7xl mx-auto mb-16 text-center relative">
          <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none -z-10" />
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="text-awaitsi-green font-bold text-xs uppercase tracking-ultra mb-4 block">04 — Core Pillar</span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight mb-6">
              AI & Automation
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Make repetitive work smarter and give your business practical AI capabilities. No buzzwords—just tangible efficiency.
            </p>
          </motion.div>
        </section>

        {/* Intelligent Business Systems Visual */}
        <section className="px-6 max-w-5xl mx-auto mb-24">
          <div className="bg-awaitsi-gray-900 border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold font-montserrat mb-8">The Intelligent Business System</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 font-bold text-xs md:text-sm uppercase tracking-widest text-white/80">
              <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Customer</span>
              <ArrowRight className="w-4 h-4 text-awaitsi-cyan" />
              <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">CRM</span>
              <ArrowRight className="w-4 h-4 text-awaitsi-cyan" />
              <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Data</span>
              <ArrowRight className="w-4 h-4 text-awaitsi-green" />
              <span className="px-4 py-2 bg-awaitsi-green/10 text-awaitsi-green rounded-lg border border-awaitsi-green/30">AI Analysis</span>
              <ArrowRight className="w-4 h-4 text-awaitsi-green" />
              <span className="px-4 py-2 bg-awaitsi-green text-black rounded-lg">Action</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* AI Assistants */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="assistants" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-green/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-green/10 rounded-xl flex items-center justify-center text-awaitsi-green">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">AI Assistants</h3>
              </div>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Customer Support Assistants:</strong> 24/7 intelligent triage and response.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Website Assistants:</strong> Guide visitors to the exact services they need.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Internal Knowledge Bots:</strong> Help your staff find standard operating procedures instantly.</span></li>
              </ul>
            </motion.div>

            {/* AI Automation */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="automation" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-cyan/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Intelligent Automation</h3>
              </div>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Lead Processing:</strong> Automatically score, route, and acknowledge inbound leads.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Administrative Workflows:</strong> Remove manual data entry from daily operations.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Content & Comms:</strong> Draft intelligent responses based on customer history.</span></li>
              </ul>
            </motion.div>

            {/* Document Intelligence */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="document" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-cyan/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                  <FileSearch className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Document Intelligence</h3>
              </div>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Data Extraction:</strong> Pull key figures from PDFs and invoices automatically.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Classification:</strong> Automatically sort incoming documents to the correct department.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Summarisation:</strong> Turn lengthy reports into digestible executive summaries.</span></li>
              </ul>
            </motion.div>

            {/* Knowledge Systems & RAG */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="knowledge" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-green/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-green/10 rounded-xl flex items-center justify-center text-awaitsi-green">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Knowledge Systems</h3>
              </div>
              <ul className="space-y-3 text-white/70 mb-6">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Document-Grounded AI:</strong> Chat with your own secure business data (RAG).</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Internal Search:</strong> Find policies, historical data, and client notes instantly.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>AI Integration:</strong> Embed AI directly into your CRM, Mobile Apps, or Portals.</span></li>
              </ul>
            </motion.div>

          </div>
        </section>

        {/* Pathway Section */}
        <section className="px-6 max-w-4xl mx-auto mt-24 text-center">
          <div className="p-8 lg:p-12 bg-white text-awaitsi-gray-950 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">Pulling it all together...</h3>
            <p className="text-awaitsi-gray-700 mb-8 text-lg">See how these 4 pillars unite to create a comprehensive technology roadmap.</p>
            <Link to="/services/digital-transformation" className="btn-primary-dark mx-auto inline-flex">
              Explore Digital Transformation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AIAutomationPage;
