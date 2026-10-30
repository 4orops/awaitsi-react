import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Database, PieChart, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const DataIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-cyan selection:text-black">
      <SEO 
        title="Data & Intelligence | Awaitsi" 
        description="Turn business data into decisions with Power BI, dashboards, data strategy, and automated reporting."
      />
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20">
        {/* Header Section */}
        <section className="px-6 max-w-7xl mx-auto mb-16 text-center relative">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none -z-10" />
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="text-awaitsi-cyan font-bold text-xs uppercase tracking-ultra mb-4 block">03 — Core Pillar</span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight mb-6">
              Data & Intelligence
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Turn business data into decisions. Stop guessing and start leading with clear, actionable insights.
            </p>
          </motion.div>
        </section>

        {/* The Progression Architecture */}
        <section className="px-6 max-w-5xl mx-auto mb-24">
          <div className="bg-black border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-awaitsi-cyan/10 blur-3xl rounded-full" />
            
            <h3 className="text-center font-bold text-lg uppercase tracking-widest text-awaitsi-cyan mb-12">The Data Value Chain</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 text-center">
              <div className="w-full md:w-1/5">
                <div className="w-16 h-16 mx-auto bg-white/5 border border-white/20 rounded-xl flex items-center justify-center mb-3">
                  <Database className="w-6 h-6 text-white/50" />
                </div>
                <div className="font-bold text-sm text-white/50">RAW DATA</div>
              </div>
              <ArrowRight className="w-6 h-6 text-awaitsi-cyan/30 rotate-90 md:rotate-0" />
              
              <div className="w-full md:w-1/5">
                <div className="w-16 h-16 mx-auto bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 rounded-xl flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-awaitsi-cyan" />
                </div>
                <div className="font-bold text-sm text-awaitsi-cyan">CLEAN DATA</div>
              </div>
              <ArrowRight className="w-6 h-6 text-awaitsi-cyan/50 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/5">
                <div className="w-16 h-16 mx-auto bg-awaitsi-cyan/20 border border-awaitsi-cyan/50 rounded-xl flex items-center justify-center mb-3">
                  <LayoutDashboard className="w-6 h-6 text-awaitsi-cyan" />
                </div>
                <div className="font-bold text-sm text-awaitsi-cyan">DASHBOARDS</div>
              </div>
              <ArrowRight className="w-6 h-6 text-awaitsi-green/50 rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/5">
                <div className="w-16 h-16 mx-auto bg-awaitsi-green/20 border border-awaitsi-green/50 rounded-xl flex items-center justify-center mb-3">
                  <Activity className="w-6 h-6 text-awaitsi-green" />
                </div>
                <div className="font-bold text-sm text-awaitsi-green">INSIGHTS</div>
              </div>
              <ArrowRight className="w-6 h-6 text-awaitsi-green rotate-90 md:rotate-0" />

              <div className="w-full md:w-1/5">
                <div className="w-16 h-16 mx-auto bg-awaitsi-green text-black border border-awaitsi-green shadow-glow-green rounded-xl flex items-center justify-center mb-3">
                  <BarChart3 className="w-6 h-6 text-black" />
                </div>
                <div className="font-bold text-sm text-white">DECISIONS</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Strategy & Eng */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="strategy" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-cyan/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Data Strategy & Prep</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Data Assessment:</strong> Evaluate data maturity and identify gaps.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>KPI Definition:</strong> Establish the metrics that actually drive growth.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Data Cleaning:</strong> Transform scattered data into structured assets.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Integration (ETL):</strong> Pipeline data from various tools into one central repository.</span></li>
              </ul>
            </motion.div>

            {/* Business Intelligence */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="powerbi" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-green/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-green/10 rounded-xl flex items-center justify-center text-awaitsi-green">
                  <PieChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Business Intelligence</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Power BI Integration:</strong> Enterprise-grade visualizations for SMEs.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Management Dashboards:</strong> High-level oversight for executives.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Sales & Customer Dashboards:</strong> Track acquisition and retention accurately.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Financial Dashboards:</strong> Real-time visibility into operational profitability.</span></li>
              </ul>
            </motion.div>

            {/* Analytics & Reporting */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="analytics" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-cyan/30 transition-colors lg:col-span-2">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat">Analytics & Automated Reporting</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Stop spending hours manually compiling spreadsheets at the end of the month. We implement automated systems that deliver real-time operational and management reports directly to your inbox.
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Trend analysis & Customer insights</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Scheduled operational reports</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" /> Data-driven decision support</li>
                  </ul>
                </div>
                <div className="md:w-1/2 w-full aspect-video bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-awaitsi-blue/10 to-transparent" />
                  <BarChart3 className="w-24 h-24 text-white/10" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-awaitsi-cyan">Automated Output</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Pathway Section */}
        <section className="px-6 max-w-4xl mx-auto mt-24 text-center">
          <div className="p-8 lg:p-12 bg-gradient-to-r from-awaitsi-cyan/20 to-awaitsi-green/20 border border-awaitsi-green/30 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-4">Once your data is intelligent...</h3>
            <p className="text-white/70 mb-8 text-lg">You can introduce practical AI to automate the heavy lifting.</p>
            <Link to="/services/ai-automation" className="btn-primary inline-flex">
              Explore AI & Automation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

// Need to create a local Sparkles/LayoutDashboard mock if lucide-react imports missed it above
function Sparkles(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
}
function LayoutDashboard(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
}

export default DataIntelligencePage;
