import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, CheckCircle2, Lock, Users, BarChart3, Bot, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const BusinessCloudPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-cyan selection:text-black">
      <SEO 
        title="Awaitsi Business Cloud" 
        description="One connected workspace for growing businesses. CRM, Data, AI, and Automation combined into a single SME workspace."
      />
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20">
        
        <section className="px-6 max-w-7xl mx-auto mb-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-awaitsi-cyan/10 to-transparent blur-3xl -z-10 rounded-full w-[600px] h-[600px] mx-auto top-0" />
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 rounded-full text-awaitsi-cyan text-xs font-bold uppercase tracking-widest mb-6">
              <Cloud className="w-4 h-4" /> Product Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight mb-6">
              Awaitsi Business Cloud
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              One connected workspace for growing SMEs.
            </p>
            <button className="btn-primary mx-auto inline-flex shadow-glow">
              Join Early Access <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        {/* Architecture Grid */}
        <section className="px-6 max-w-7xl mx-auto mb-24">
          <div className="bg-black border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden relative">
            <h2 className="text-center font-bold text-2xl font-montserrat mb-12">The Ultimate SME Workspace</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {/* CRM */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2"><Users className="w-5 h-5 text-awaitsi-cyan" /> CRM</h3>
                  <span className="text-[9px] uppercase tracking-widest font-bold bg-awaitsi-green text-black px-2 py-0.5 rounded">Available</span>
                </div>
                <ul className="space-y-2 text-xs text-white/60">
                  <li>• Customers & Leads</li>
                  <li>• Project Tasks</li>
                  <li>• Document Management</li>
                  <li>• Communication Log</li>
                </ul>
              </div>

              {/* DATA */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2"><BarChart3 className="w-5 h-5 text-awaitsi-green" /> DATA</h3>
                  <span className="text-[9px] uppercase tracking-widest font-bold bg-awaitsi-cyan/20 text-awaitsi-cyan border border-awaitsi-cyan/30 px-2 py-0.5 rounded">In Development</span>
                </div>
                <ul className="space-y-2 text-xs text-white/60">
                  <li>• Real-time Dashboards</li>
                  <li>• Business KPIs</li>
                  <li>• Automated Reports</li>
                  <li>• Financial Insights</li>
                </ul>
              </div>

              {/* AI */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2"><Bot className="w-5 h-5 text-awaitsi-cyan" /> AI & AUTO</h3>
                  <span className="text-[9px] uppercase tracking-widest font-bold bg-white/10 text-white/50 border border-white/20 px-2 py-0.5 rounded">Coming Soon</span>
                </div>
                <ul className="space-y-2 text-xs text-white/60">
                  <li>• Embedded AI Assistant</li>
                  <li>• Workflow Automation</li>
                  <li>• Document Extraction</li>
                  <li>• Intelligent Triage</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
               <p className="text-white/50 text-sm max-w-2xl mx-auto">
                 Why pay for Salesforce, Monday.com, and Power BI separately when you can have a unified environment built specifically for South African business realities?
               </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default BusinessCloudPage;
