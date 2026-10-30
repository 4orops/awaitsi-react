import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { motion } from 'framer-motion';
import { Heart, BookOpen, TrendingUp, Users, Sparkles, CheckCircle2, Upload } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Purpose Over Profit', desc: 'We build technology that creates meaningful impact for businesses, communities, and future generations — not just for financial return.' },
  { icon: BookOpen, title: 'Continuous Learning Culture', desc: 'Technology evolves constantly. We invest heavily in expanding our skills across frontend, backend, cloud, and emerging platforms.' },
  { icon: TrendingUp, title: 'Growth Mindset', desc: 'Every challenge is a growth opportunity. We hire people who embrace feedback, ownership, and the pursuit of excellence.' },
  { icon: Users, title: 'Collaborative Environment', desc: 'We work as a close-knit team, sharing ideas openly and celebrating each other\'s achievements and client wins.' }
];

const CareersPage: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Careers at Awaitsi (Pty) Ltd | Join Our Team"
        description="Build a career at Awaitsi — a purpose-driven South African technology company. Learn about our culture, values, and future opportunities."
      />
      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Join Our Team
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight max-w-4xl">
            Building Technology with Heart — <span className="text-awaitsi-green">Together</span>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
            Awaitsi is a growing South African technology company committed to building solutions that create lasting opportunities. We look for curious, driven individuals who want to grow alongside a purpose-led business.
          </p>
        </section>

        {/* Current Status Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-awaitsi-cyan/30 bg-awaitsi-cyan/5">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-awaitsi-cyan/20 border border-awaitsi-cyan text-awaitsi-cyan shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-montserrat text-white mb-2">No Active Vacancies Right Now</h2>
                <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
                  We are currently in our strategic foundation phase. While we don't have open formal positions today, we are actively building our talent pipeline for Phase Two growth. If you are passionate about technology and want to grow with us, submit your expression of interest below — we'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">Our Culture & Values</h2>
            <p className="text-base text-white/60 mt-3">What makes Awaitsi a place where exceptional people want to build their careers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-green/40 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-montserrat text-white mb-1">{v.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* What We Look For */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="p-8 sm:p-12 rounded-2xl bg-awaitsi-gray-900 border border-white/10">
            <h2 className="text-2xl font-bold font-montserrat text-white mb-8">What We Look For in Future Team Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Passion for learning and problem-solving',
                'Strong communication and collaboration skills',
                'Ownership mindset — takes initiative and accountability',
                'Interest in frontend, backend, or UX/UI design',
                'Alignment with our mission and core values',
                'Comfort working in a small, agile team environment'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-4 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-awaitsi-green shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expression of Interest Form */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold font-montserrat text-white mb-2">Submit Your Expression of Interest</h2>
                <p className="text-sm text-white/60 mb-6">Tell us about yourself and how you'd like to contribute to Awaitsi's growth journey.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-1.5">Full Name *</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-1.5">Email Address *</label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.co.za"
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-1.5">Area of Interest</label>
                    <select value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-awaitsi-gray-900 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-awaitsi-green">
                      <option value="">Select an area...</option>
                      <option>Frontend Development (React/TypeScript)</option>
                      <option>Backend Development (Node.js/Python)</option>
                      <option>UI/UX Design</option>
                      <option>Project Management & Client Relations</option>
                      <option>Digital Marketing & SEO</option>
                      <option>General / Open Interest</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-1.5">Why Awaitsi?</label>
                    <textarea rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your background, interests, and why you'd like to grow with Awaitsi..."
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green resize-none" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-1.5">CV / Portfolio (Optional)</label>
                    <label className="flex items-center gap-3 p-4 rounded-lg border border-dashed border-white/20 hover:border-awaitsi-green transition-colors cursor-pointer">
                      <Upload className="w-4 h-4 text-awaitsi-green" />
                      <span className="text-sm text-white/60">{fileName || 'Upload CV or Portfolio PDF'}</span>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden"
                        onChange={e => setFileName(e.target.files?.[0]?.name || '')} />
                    </label>
                  </div>

                  <button type="submit" className="w-full py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all flex items-center justify-center gap-2 shadow-glow-green">
                    <Sparkles className="w-4 h-4" /> Submit Expression of Interest
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-awaitsi-green mx-auto" />
                <h3 className="text-2xl font-bold font-montserrat text-white">Expression Received!</h3>
                <p className="text-sm text-white/70 max-w-sm mx-auto">Thank you for your interest in joining Awaitsi. We'll keep your details on file and reach out as we grow our team.</p>
                <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 rounded-xl border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                  Submit Another Response
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export default CareersPage;
