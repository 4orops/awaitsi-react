import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { submitLead } from '../utils/api';

const ContactPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    challenge: 'Digital presence (Website/App)',
    size: '1 - 10 Employees (Startup / Micro)',
    timeline: 'ASAP',
    details: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setErrorMessage(null);
      const res = await submitLead('/api/quote', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.challenge,
        businessStage: formData.size,
        budget: formData.timeline,
        description: `Business: ${formData.businessName}. Size: ${formData.size}. Timeline: ${formData.timeline}. Details: ${formData.details || 'None'}`,
      });
      setIsSubmitting(false);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(res.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-green selection:text-black">
      <SEO 
        title="Start Your Digital Transformation | Awaitsi" 
        description="Contact Awaitsi to discuss your digital systems, business automation, data strategy, and AI requirements."
      />
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20">
        
        <section className="px-6 max-w-7xl mx-auto mb-12 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Contact Info & Value Prop */}
          <div>
            <span className="text-awaitsi-green font-bold text-xs uppercase tracking-ultra mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat tracking-tight mb-6">
              Start Your Digital Transformation
            </h1>
            <p className="text-lg text-white/70 mb-10">
              Whether you need a new digital system, a CRM, data dashboards, or practical AI automation, we're ready to help you build a smarter business.
            </p>

            <div className="space-y-6 text-sm text-white/80 mb-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-awaitsi-green" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Local South African Partnership</h4>
                  <p className="text-white/50">Solutions designed for local business realities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-awaitsi-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Business-First Approach</h4>
                  <p className="text-white/50">We focus on your operational problems, not just the code.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h4 className="font-bold font-montserrat text-white mb-4">Direct Contact</h4>
              <p className="text-white/60 text-sm mb-2">Email: <a href="mailto:info@awaitsi.co.za" className="text-awaitsi-cyan hover:underline">info@awaitsi.co.za</a></p>
              <p className="text-white/60 text-sm">Phone: <a href="tel:+27655443979" className="text-awaitsi-green hover:underline">+27 65 544 3979</a></p>
            </div>
          </div>

          {/* Right: High Conversion Multi-Step Form */}
          <div>
            <div className="bg-awaitsi-gray-900 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-awaitsi-cyan/5 blur-3xl rounded-full pointer-events-none" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-bold text-xl font-montserrat">Project Details</h3>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-awaitsi-green">
                        Step {step} of 4
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-awaitsi-cyan to-awaitsi-green transition-all duration-500 ease-out" 
                        style={{ width: `${(step / 4) * 100}%` }}
                      />
                    </div>

                    <form onSubmit={handleSubmit}>
                      
                      {step === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                          <h4 className="font-bold text-sm mb-4">Step 1 — Business Information</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Your Name</label>
                              <input 
                                required 
                                type="text" 
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="input-editorial w-full" 
                                placeholder="John Doe" 
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Business Name</label>
                              <input 
                                required 
                                type="text" 
                                value={formData.businessName}
                                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                className="input-editorial w-full" 
                                placeholder="Acme Corp" 
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 mt-2">Email Address</label>
                            <input 
                              required 
                              type="email" 
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="input-editorial w-full" 
                              placeholder="john@company.co.za" 
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 mt-2">Phone / WhatsApp</label>
                            <input 
                              required 
                              type="tel" 
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="input-editorial w-full" 
                              placeholder="+27 82 000 0000" 
                            />
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                          <h4 className="font-bold text-sm mb-4">Step 2 — Core Challenge</h4>
                          <p className="text-white/50 text-xs mb-4">What primary area do you need help with?</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {['Digital presence (Website/App)', 'Business systems & CRM', 'Data & Reporting', 'AI & Automation', 'Custom Software', 'Digital Transformation', 'Other'].map(opt => (
                              <label key={opt} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:border-awaitsi-cyan transition-colors">
                                <input 
                                  type="radio" 
                                  name="challenge" 
                                  value={opt} 
                                  checked={formData.challenge === opt}
                                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                                  className="accent-awaitsi-cyan w-4 h-4" 
                                  required 
                                />
                                <span className="text-sm">{opt}</span>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                          <h4 className="font-bold text-sm mb-4">Step 3 — Business Size</h4>
                          <p className="text-white/50 text-xs mb-4">How large is your current operation?</p>
                          <div className="space-y-3">
                            {['1 - 10 Employees (Startup / Micro)', '11 - 50 Employees (Growing SME)', '51 - 200 Employees (Established SME)', '200+ Employees (Enterprise)'].map(opt => (
                              <label key={opt} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:border-awaitsi-green transition-colors">
                                <input 
                                  type="radio" 
                                  name="size" 
                                  value={opt} 
                                  checked={formData.size === opt}
                                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                                  className="accent-awaitsi-green w-4 h-4" 
                                  required 
                                />
                                <span className="text-sm">{opt}</span>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {step === 4 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                          <h4 className="font-bold text-sm mb-4">Step 4 — Timeline & Details</h4>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Expected Timeline</label>
                            <select 
                              value={formData.timeline}
                              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-awaitsi-cyan transition-colors" 
                              required
                            >
                              <option value="ASAP" className="bg-awaitsi-gray-900">ASAP (Ready to start)</option>
                              <option value="1-3 months" className="bg-awaitsi-gray-900">1–3 months</option>
                              <option value="3-6 months" className="bg-awaitsi-gray-900">3–6 months</option>
                              <option value="Exploring" className="bg-awaitsi-gray-900">Just exploring options</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 mt-4">Additional Details (Optional)</label>
                            <textarea 
                              value={formData.details}
                              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-awaitsi-cyan transition-colors h-24" 
                              placeholder="Briefly describe your project..." 
                            />
                          </div>
                        </motion.div>
                      )}

                      {errorMessage && (
                        <p className="mt-4 text-xs text-red-400 bg-red-950/40 border border-red-500/30 p-3 rounded-lg text-center">
                          {errorMessage}
                        </p>
                      )}

                      <div className="mt-8 flex justify-between items-center pt-6 border-t border-white/10">
                        {step > 1 ? (
                          <button type="button" onClick={() => setStep(step - 1)} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                            Back
                          </button>
                        ) : <div />}
                        
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="btn-primary py-3 px-6 shadow-glow"
                        >
                          {isSubmitting ? 'Submitting...' : step === 4 ? 'Get My Digital Roadmap' : 'Next Step'} <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 bg-awaitsi-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-awaitsi-green" />
                    </div>
                    <h3 className="text-3xl font-bold font-montserrat mb-4">Request Received</h3>
                    <p className="text-white/70 mb-8">
                      Thank you for reaching out. Awaitsi will review your requirements and a specialist will contact you within 24 hours to discuss your digital roadmap.
                    </p>
                    <button onClick={() => {setSubmitted(false); setStep(1);}} className="text-xs font-bold uppercase tracking-widest text-awaitsi-cyan hover:text-white transition-colors">
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
