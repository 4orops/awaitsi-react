import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, LineChart, Cpu, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const DigitalTransformationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-green selection:text-black">
      <SEO
        title="Digital Transformation | Awaitsi"
        description="Move from fragmented processes to connected, intelligent business operations with a strategic technology roadmap from Awaitsi."
      />
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20">
        {/* Header Section */}
        <section className="px-6 max-w-7xl mx-auto mb-16 text-center relative">
          <div className="absolute inset-0 line-grid opacity-20 pointer-events-none -z-10" />
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="text-white font-bold text-xs uppercase tracking-ultra mb-4 block bg-white/10 px-3 py-1 rounded-full w-fit mx-auto">The Strategic Layer</span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              From fragmented manual processes to connected, intelligent business operations.
            </p>
            <Link to="/digital-assessment" className="btn-primary mx-auto inline-flex">
              Take the Digital Assessment
            </Link>
          </motion.div>
        </section>

        {/* The Reality */}
        <section className="px-6 max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">You don't just need software. You need a strategy.</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Buying isolated tools leads to technical debt. True digital transformation is the deliberate orchestration of Digital Systems, Business Workflows, Data, and AI to achieve measurable growth.
              </p>
            </div>
            <div className="flex flex-col gap-4 border-l border-white/10 pl-6 md:pl-10">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-awaitsi-cyan" /> <span className="font-bold">Digital Maturity Assessment</span></div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-awaitsi-green" /> <span className="font-bold">System Architecture Design</span></div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-awaitsi-cyan" /> <span className="font-bold">Technology Roadmap</span></div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-awaitsi-green" /> <span className="font-bold">Staged Implementation</span></div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold font-montserrat text-center mb-12">Strategic Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Assessments */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Assessments & Audits</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Digital Maturity Assessment:</strong> Where does your business stand today?</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Technology Assessment:</strong> Review of your current software stack and debt.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Data & AI Readiness:</strong> Is your data clean enough for automation?</span></li>
              </ul>
            </motion.div>

            {/* Strategy */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="roadmaps" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-green/10 rounded-xl flex items-center justify-center text-awaitsi-green">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Strategy & Roadmaps</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Technology Roadmap:</strong> A 1-to-3 year phased implementation plan.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>System Architecture:</strong> Blueprinting how tools will communicate.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Software Requirements:</strong> Defining exact technical specs before build.</span></li>
              </ul>
            </motion.div>

            {/* Implementation */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl lg:col-span-2">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat">Execution & Optimisation</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6">
                    We don't just hand you a report. Awaitsi partners with you to execute the roadmap, deploy the systems, train your staff, and continuously optimise the environment for performance and ROI.
                  </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
                  <div className="bg-awaitsi-gray-900 border border-white/10 p-4 rounded-xl text-center">
                    <span className="block text-2xl font-black text-awaitsi-cyan mb-1">01</span>
                    <span className="text-xs font-bold uppercase text-white/50">Build</span>
                  </div>
                  <div className="bg-awaitsi-gray-900 border border-white/10 p-4 rounded-xl text-center">
                    <span className="block text-2xl font-black text-awaitsi-green mb-1">02</span>
                    <span className="text-xs font-bold uppercase text-white/50">Deploy</span>
                  </div>
                  <div className="bg-awaitsi-gray-900 border border-white/10 p-4 rounded-xl text-center">
                    <span className="block text-2xl font-black text-awaitsi-cyan mb-1">03</span>
                    <span className="text-xs font-bold uppercase text-white/50">Train</span>
                  </div>
                  <div className="bg-awaitsi-gray-900 border border-white/10 p-4 rounded-xl text-center">
                    <span className="block text-2xl font-black text-awaitsi-green mb-1">04</span>
                    <span className="text-xs font-bold uppercase text-white/50">Optimise</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DigitalTransformationPage;
