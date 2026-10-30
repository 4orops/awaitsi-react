import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, BarChart3, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { submitLead } from '../utils/api';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

type AssessmentStage = 'intro' | 'digital' | 'systems' | 'data' | 'ai' | 'lead' | 'results';

interface Scores {
  digital: number;
  systems: number;
  data: number;
  ai: number;
}

const DigitalAssessmentPage: React.FC = () => {
  const [stage, setStage] = useState<AssessmentStage>('intro');
  const [scores, setScores] = useState<Scores>({ digital: 0, systems: 0, data: 0, ai: 0 });
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Generic handler for questions
  const handleAnswer = (category: keyof Scores, value: number) => {
    setScores(prev => ({ ...prev, [category]: prev[category] + value }));
  };

  const nextStage = (next: AssessmentStage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStage(next);
  };

  const calculateOverall = () => {
    return Math.round((scores.digital + scores.systems + scores.data + scores.ai) / 4);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    const overall = calculateOverall();
    const res = await submitLead('/api/quote', {
      name: leadName,
      email: leadEmail,
      phone: leadPhone,
      projectType: 'Digital Maturity Assessment',
      businessStage: `Overall Readiness: ${overall}%`,
      budget: 'Assessment',
      description: `Readiness: ${overall}%. Breakdown: Digital=${scores.digital}%, Systems=${scores.systems}%, Data=${scores.data}%, AI=${scores.ai}%`,
    });
    setIsSubmitting(false);
    if (res.success) {
      nextStage('results');
    } else {
      setErrorMessage(res.message);
    }
  };

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-green selection:text-black">
      <SEO 
        title="Digital Maturity Assessment | Awaitsi" 
        description="Find out how digital your business is. Take the Awaitsi Digital Maturity Assessment and get a personalized technology roadmap."
      />
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-6 w-full relative">
          
          <AnimatePresence mode="wait">
            
            {/* ── STAGE 1: INTRO ── */}
            {stage === 'intro' && (
              <motion.div key="intro" initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }} variants={fadeUp} className="text-center">
                <span className="text-awaitsi-green font-bold text-xs uppercase tracking-ultra mb-4 block">Interactive Tool</span>
                <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight mb-6">
                  How Digital is Your Business?
                </h1>
                <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                  Assess your current technology stack across Digital Presence, Business Systems, Data, and AI to uncover your biggest growth opportunities.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-10 text-left">
                  <h3 className="font-bold font-montserrat mb-4 text-lg">What you'll get:</h3>
                  <ul className="space-y-3 text-white/70 text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan" /> Awaitsi Digital Readiness Score</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan" /> Identification of your biggest structural gap</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan" /> Recommended next steps for transformation</li>
                  </ul>
                </div>
                <button 
                  onClick={() => nextStage('digital')}
                  className="btn-primary mx-auto inline-flex shadow-glow-green"
                >
                  Start Assessment <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-4 text-white/40 text-xs">Takes approximately 2 minutes.</p>
              </motion.div>
            )}

            {/* ── STAGE 2: DIGITAL ── */}
            {stage === 'digital' && (
              <motion.div key="digital" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="max-w-2xl mx-auto">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Step 1 of 4 • Digital Presence</div>
                <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-2">How do customers interact with your business online?</h2>
                <p className="text-white/60 mb-8">Select the option that best describes your current setup.</p>
                
                <div className="space-y-3">
                  {[
                    { text: "We rely entirely on WhatsApp, social media, or word-of-mouth. We don't have a functional website.", value: 10 },
                    { text: "We have a basic static website, but it doesn't generate leads or facilitate transactions.", value: 40 },
                    { text: "We have a good website with contact forms, but it is disconnected from our internal tools.", value: 70 },
                    { text: "We have a fully integrated portal/e-commerce system that drives automated customer workflows.", value: 100 }
                  ].map((option, i) => (
                    <button 
                      key={i}
                      onClick={() => { handleAnswer('digital', option.value); nextStage('systems'); }}
                      className="w-full text-left p-5 bg-white/5 hover:bg-awaitsi-cyan/10 border border-white/10 hover:border-awaitsi-cyan/50 rounded-xl transition-all group"
                    >
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-sm md:text-base text-white/80 group-hover:text-white">{option.text}</span>
                        <ChevronRight className="w-5 h-5 text-awaitsi-cyan opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STAGE 3: SYSTEMS ── */}
            {stage === 'systems' && (
              <motion.div key="systems" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="max-w-2xl mx-auto">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Step 2 of 4 • Business Systems</div>
                <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-2">How do you manage daily operations and customer data?</h2>
                <p className="text-white/60 mb-8">Think about your CRM, task management, and administrative workflows.</p>
                
                <div className="space-y-3">
                  {[
                    { text: "Paper, memory, and chaotic WhatsApp groups. Things get lost constantly.", value: 10 },
                    { text: "Heavy reliance on scattered spreadsheets and disconnected manual data entry.", value: 30 },
                    { text: "We use standard tools (e.g., a basic CRM or project tool), but they don't talk to each other.", value: 60 },
                    { text: "We operate on a connected, automated ecosystem with a single source of truth.", value: 100 }
                  ].map((option, i) => (
                    <button 
                      key={i}
                      onClick={() => { handleAnswer('systems', option.value); nextStage('data'); }}
                      className="w-full text-left p-5 bg-white/5 hover:bg-awaitsi-green/10 border border-white/10 hover:border-awaitsi-green/50 rounded-xl transition-all group"
                    >
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-sm md:text-base text-white/80 group-hover:text-white">{option.text}</span>
                        <ChevronRight className="w-5 h-5 text-awaitsi-green opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STAGE 4: DATA ── */}
            {stage === 'data' && (
              <motion.div key="data" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="max-w-2xl mx-auto">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Step 3 of 4 • Data & Intelligence</div>
                <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-2">How do you track KPIs and business performance?</h2>
                <p className="text-white/60 mb-8">Consider your reporting and dashboard capabilities.</p>
                
                <div className="space-y-3">
                  {[
                    { text: "We operate on gut feeling. We don't actively track operational data.", value: 10 },
                    { text: "We manually compile spreadsheet reports at the end of the month.", value: 40 },
                    { text: "We have basic reporting inside our software, but it takes work to analyze.", value: 70 },
                    { text: "We have live, automated Power BI dashboards giving us real-time executive oversight.", value: 100 }
                  ].map((option, i) => (
                    <button 
                      key={i}
                      onClick={() => { handleAnswer('data', option.value); nextStage('ai'); }}
                      className="w-full text-left p-5 bg-white/5 hover:bg-awaitsi-cyan/10 border border-white/10 hover:border-awaitsi-cyan/50 rounded-xl transition-all group"
                    >
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-sm md:text-base text-white/80 group-hover:text-white">{option.text}</span>
                        <ChevronRight className="w-5 h-5 text-awaitsi-cyan opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STAGE 5: AI ── */}
            {stage === 'ai' && (
              <motion.div key="ai" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="max-w-2xl mx-auto">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Step 4 of 4 • AI & Automation</div>
                <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-2">Are you utilizing AI or automated workflows?</h2>
                <p className="text-white/60 mb-8">Think about repetitive manual tasks in your business.</p>
                
                <div className="space-y-3">
                  {[
                    { text: "No. Everything requires manual human intervention.", value: 10 },
                    { text: "Employees occasionally use ChatGPT, but there is no systemic automation.", value: 30 },
                    { text: "We have some basic rules-based automation (e.g., Zapier email triggers).", value: 60 },
                    { text: "We actively use AI assistants, document intelligence, or advanced workflow automation.", value: 100 }
                  ].map((option, i) => (
                    <button 
                      key={i}
                      onClick={() => { handleAnswer('ai', option.value); nextStage('lead'); }}
                      className="w-full text-left p-5 bg-white/5 hover:bg-awaitsi-green/10 border border-white/10 hover:border-awaitsi-green/50 rounded-xl transition-all group"
                    >
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-sm md:text-base text-white/80 group-hover:text-white">{option.text}</span>
                        <ChevronRight className="w-5 h-5 text-awaitsi-green opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── STAGE 6: LEAD CAPTURE ── */}
            {stage === 'lead' && (
              <motion.div key="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto text-center">
                <div className="w-16 h-16 bg-awaitsi-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-awaitsi-green" />
                </div>
                <h2 className="text-3xl font-bold font-montserrat mb-4">Your report is ready.</h2>
                <p className="text-white/70 mb-8">Enter your details to generate your scores and view your personalised digital roadmap.</p>
                
                <form 
                  onSubmit={handleLeadSubmit}
                  className="space-y-4 text-left"
                >
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-awaitsi-cyan transition-colors" 
                      placeholder="e.g. John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Business Email</label>
                    <input 
                      required 
                      type="email" 
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-awaitsi-cyan transition-colors" 
                      placeholder="john@company.co.za" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Phone / WhatsApp (Optional)</label>
                    <input 
                      type="tel" 
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-awaitsi-cyan transition-colors" 
                      placeholder="+27 82 000 0000" 
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-400 bg-red-950/40 border border-red-500/30 p-3 rounded-lg text-center">
                      {errorMessage}
                    </p>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-primary shadow-glow-green mt-4"
                  >
                    {isSubmitting ? 'Calculating Roadmap...' : 'Reveal My Score'}
                  </button>
                  <p className="text-[10px] text-white/40 text-center flex items-center justify-center gap-1 mt-4">
                    <ShieldCheck className="w-3 h-3" /> Your data is securely processed and never shared.
                  </p>
                </form>
              </motion.div>
            )}

            {/* ── STAGE 7: RESULTS ── */}
            {stage === 'results' && (
              <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-montserrat mb-4">Your Digital Readiness Score</h2>
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-awaitsi-cyan to-awaitsi-green mb-2">
                    {calculateOverall()}%
                  </div>
                  <p className="text-white/60 text-lg">Overall Maturity Rating</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {[
                    { label: 'Digital Presence', score: scores.digital, color: 'text-white' },
                    { label: 'Business Systems', score: scores.systems, color: 'text-awaitsi-cyan' },
                    { label: 'Data & Intel', score: scores.data, color: 'text-awaitsi-green' },
                    { label: 'AI & Automation', score: scores.ai, color: 'text-white' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <div className={`text-3xl font-bold mb-1 ${item.color}`}>{item.score}%</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/40">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-awaitsi-gray-900 border border-awaitsi-cyan/30 rounded-3xl p-8 lg:p-10 mb-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-awaitsi-cyan/5 blur-3xl rounded-full" />
                  <h3 className="text-xl font-bold font-montserrat text-awaitsi-cyan mb-2">YOUR BIGGEST OPPORTUNITY</h3>
                  <p className="text-white text-lg mb-6">
                    {scores.systems < 50 
                      ? "Your biggest opportunity is migrating away from spreadsheets and disconnected tools into a unified CRM and operational system."
                      : scores.data < 60 
                        ? "Your biggest opportunity is connecting your operational data to Power BI dashboards for real-time visibility."
                        : scores.ai < 50 
                          ? "Your foundation is solid. Your biggest opportunity is introducing AI automation to drastically reduce manual administration."
                          : "Your biggest opportunity is optimizing and scaling your existing digital ecosystem to capture more market share."}
                  </p>
                  
                  <h3 className="text-xl font-bold font-montserrat text-awaitsi-green mb-2">RECOMMENDED NEXT STEP</h3>
                  <p className="text-white/70 mb-8">
                    {scores.systems < 50 
                      ? "Implement a central CRM to capture leads and digitize your operational workflows."
                      : scores.data < 60 
                        ? "Execute a data maturity audit and deploy a centralized business intelligence dashboard."
                        : scores.ai < 50 
                          ? "Audit your repetitive workflows and deploy an AI assistant or document intelligence tool."
                          : "Schedule a strategic consultation to discuss advanced custom software capabilities."}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="btn-primary shadow-glow-green">
                      Book Strategic Consultation
                    </Link>
                    <button onClick={() => window.print()} className="btn-ghost">
                      Save PDF Report
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                   <p className="text-white/50 text-sm mb-4">A copy of this report has been sent to your email.</p>
                   <button onClick={() => {setScores({digital:0, systems:0, data:0, ai:0}); setStage('intro');}} className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                     Retake Assessment
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalAssessmentPage;
