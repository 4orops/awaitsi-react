import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

import { submitLead } from '../utils/api';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('Business Website');
  const [budget, setBudget] = useState('R5,000 - R15,000');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setErrorMessage(null);
      const res = await submitLead('/api/quote', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: service,
        budget: budget,
        businessStage: timeline,
        description: `Company: ${formData.company || 'N/A'}. Timeline: ${timeline}. Notes: ${formData.notes || 'None'}`,
      });
      setIsSubmitting(false);
      if (res.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(res.message);
      }
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    setErrorMessage(null);
    setFormData({ name: '', email: '', phone: '', company: '', notes: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-awaitsi-gray-900 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-white overflow-hidden"
        >
          {/* Top subtle ambient glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-awaitsi-cyan/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-awaitsi-green/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-[10px] font-bold uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Book a Consultation
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-montserrat">
                  Let's Solve Your Business Challenge
                </h2>
                <p className="text-sm text-white/60 mt-1">
                  Tell us about your goals. We'll provide transparent advice and a practical roadmap.
                </p>
              </div>

              {/* Step indicator */}
              <div className="flex items-center justify-between gap-2 mb-8 border-b border-white/10 pb-4">
                {[
                  { num: 1, label: 'Service Need' },
                  { num: 2, label: 'Scope & Timeline' },
                  { num: 3, label: 'Your Details' },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step >= s.num
                          ? 'bg-awaitsi-green text-awaitsi-gray-950 shadow-glow-green'
                          : 'bg-white/10 text-white/40'
                      }`}
                    >
                      {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                    </div>
                    <span
                      className={`text-xs hidden sm:inline ${
                        step >= s.num ? 'text-white font-semibold' : 'text-white/40'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleNext} className="space-y-6">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/70">
                      What practical solution do you need?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: 'Business Website', desc: 'Modern high-converting web presence' },
                        { title: 'Custom Web Application', desc: 'Tailored software for operational efficiency' },
                        { title: 'Website Maintenance', desc: 'Security, speed, and continuous updates' },
                        { title: 'Technical Support', desc: 'Reliable ongoing IT & software assistance' },
                        { title: 'Hosting Assistance', desc: 'Domain, email, and cloud setup' },
                        { title: 'Strategic Advisory / General Inquiry', desc: 'Discussing technology roadmap' },
                      ].map((item) => (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setService(item.title)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            service === item.title
                              ? 'border-awaitsi-green bg-awaitsi-green/10 shadow-inset-green text-white'
                              : 'border-white/10 bg-white/5 hover:border-white/20 text-white/70'
                          }`}
                        >
                          <div className="font-bold text-sm text-white font-montserrat">{item.title}</div>
                          <div className="text-xs text-white/50 mt-1">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                        Estimated Budget Range (ZAR)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Under R5,000', 'R5,000 - R15,000', 'R15,000 - R40,000+'].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                              budget === b
                                ? 'border-awaitsi-cyan bg-awaitsi-cyan/15 text-white'
                                : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                        Desired Timeline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {['Urgent (< 2 weeks)', 'Within 1 Month', 'Planning Phase'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTimeline(t)}
                            className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                              timeline === t
                                ? 'border-awaitsi-green bg-awaitsi-green/15 text-white'
                                : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sipho Ndlovu"
                          className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sipho@company.co.za"
                          className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+27 82 123 4567"
                          className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                          Company / Business Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Logistics"
                          className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                        Brief Project Overview
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us a little about your business problem or key goals..."
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-2.5 rounded-lg border border-white/20 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest hover:bg-awaitsi-green-light transition-all flex items-center gap-2 shadow-glow-green"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : step === 3 ? (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Next Step</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <p className="mt-4 text-xs text-red-400 bg-red-950/40 border border-red-500/30 p-3 rounded-lg text-center">
                    {errorMessage}
                  </p>
                )}
              </form>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] text-white/40 border-t border-white/5 pt-4">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-awaitsi-green" /> 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-awaitsi-cyan" /> Response under 24 Hours
                </span>
              </div>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-awaitsi-green/20 border border-awaitsi-green text-awaitsi-green flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white font-montserrat">Consultation Request Received!</h3>
              <p className="text-sm text-white/70 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you for reaching out to **Awaitsi (Pty) Ltd**. Our team will review your inquiry and contact you within 24 business hours to schedule your strategy session.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 px-8 py-3 rounded-lg bg-white text-awaitsi-gray-900 text-xs font-bold uppercase tracking-widest hover:bg-awaitsi-green transition-colors"
              >
                Close Window
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ConsultationModal;
