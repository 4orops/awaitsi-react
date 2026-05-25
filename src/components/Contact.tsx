import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  'Web Development',
  'Mobile App',
  'CRM Solution',
  'AI Integration',
  'Other / Consultation',
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type: string) => {
    setActiveType(type);
    setFormData(prev => ({ ...prev, projectType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please provide your name, email and message.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to send');
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      setActiveType('');
    } catch (err) {
      console.error('[Contact] Submission error:', err);
      setError('Failed to send. Please try again or reach us at info@awaitsi.co.za');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setError(null);
  };

  return (
    <section id="contact" className="bg-awaitsi-gray-950 overflow-hidden">

      {/* ── Header ── */}
      <div className="border-b border-white/10 line-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 py-20 lg:py-28"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-awaitsi-green rounded-full" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em]">
              Get In Touch
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white
                           font-montserrat tracking-[-0.03em] leading-[0.9]">
              START YOUR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r
                               from-awaitsi-green to-awaitsi-cyan italic font-light">
                project today.
              </span>
            </h2>
            <div className="flex flex-col gap-4 text-right flex-shrink-0">
              <a
                href="mailto:info@awaitsi.co.za"
                className="text-white/40 hover:text-awaitsi-cyan transition-colors font-opensans text-sm"
              >
                info@awaitsi.co.za
              </a>
              <a
                href="tel:+27655443979"
                className="text-white/40 hover:text-awaitsi-cyan transition-colors font-opensans text-sm"
              >
                +27 65 544 3979
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Form Area ── */}
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="contact-form"
              id="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-x-16 gap-y-0"
            >
              {/* ── Left Column ── */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-12">
                  01 / Your Details
                </p>

                {/* Name */}
                <div className="mb-10 relative">
                  <label
                    htmlFor="contact-name"
                    className={`block text-[10px] font-black uppercase tracking-[0.22em] mb-4 transition-colors duration-200
                                ${focusedField === 'name' ? 'text-awaitsi-green' : 'text-white/40'}`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    className="input-editorial text-xl"
                  />
                </div>

                {/* Email */}
                <div className="mb-10 relative">
                  <label
                    htmlFor="contact-email"
                    className={`block text-[10px] font-black uppercase tracking-[0.22em] mb-4 transition-colors duration-200
                                ${focusedField === 'email' ? 'text-awaitsi-green' : 'text-white/40'}`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@company.com"
                    className="input-editorial text-xl"
                  />
                </div>

                {/* Phone */}
                <div className="mb-10 relative">
                  <label
                    htmlFor="contact-phone"
                    className={`block text-[10px] font-black uppercase tracking-[0.22em] mb-4 transition-colors duration-200
                                ${focusedField === 'phone' ? 'text-awaitsi-green' : 'text-white/40'}`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="+27 83 123 4567"
                    className="input-editorial text-xl"
                  />
                </div>
              </div>

              {/* ── Right Column ── */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-12">
                  02 / Project Brief
                </p>

                {/* Project Type Pills */}
                <div className="mb-10">
                  <label className="block text-[10px] font-black uppercase tracking-[0.22em] text-white/40 mb-6">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleTypeSelect(type)}
                        className={`px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.15em]
                                    border transition-all duration-200
                                    ${activeType === type
                                      ? 'border-awaitsi-green bg-awaitsi-green text-awaitsi-gray-900'
                                      : 'border-white/15 text-white/50 hover:border-white/30 hover:text-white'
                                    }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-12 relative">
                  <label
                    htmlFor="contact-message"
                    className={`block text-[10px] font-black uppercase tracking-[0.22em] mb-4 transition-colors duration-200
                                ${focusedField === 'message' ? 'text-awaitsi-green' : 'text-white/40'}`}
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    placeholder="What are your goals? What problem are you solving?"
                    className="input-editorial text-lg resize-none"
                  />
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-xs font-bold tracking-[0.1em] mb-6 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  id="contact-submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.01, backgroundColor: '#76FF03', color: '#0C0C0C' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-white text-awaitsi-gray-900 font-black text-sm
                             uppercase tracking-[0.22em] transition-colors duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
                >
                  {submitting ? (
                    <>
                      <motion.span
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        Sending Message
                      </motion.span>
                      <span>···</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="text-lg">→</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          ) : (
            /* ── Success State ── */
            <motion.div
              key="success-state"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="py-24 flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
                className="w-20 h-20 bg-awaitsi-green flex items-center justify-center mb-12"
              >
                <span className="text-awaitsi-gray-900 text-3xl font-black">✓</span>
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-black font-montserrat text-white mb-6 tracking-tight">
                Message received.
              </h3>
              <p className="text-white/50 text-lg font-opensans max-w-md leading-relaxed mb-4">
                Thanks{submittedData?.name ? `, ${submittedData.name.split(' ')[0]}` : ''}! Our team will get
                back to you within 24 hours.
              </p>
              <p className="text-white/30 text-sm font-opensans mb-12">
                We've sent a confirmation to{' '}
                <span className="text-awaitsi-cyan">{submittedData?.email}</span>
              </p>
              <button
                onClick={handleReset}
                className="flex items-center gap-3 text-white/40 hover:text-white text-[11px]
                           font-black uppercase tracking-[0.22em] transition-colors duration-200 group"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
