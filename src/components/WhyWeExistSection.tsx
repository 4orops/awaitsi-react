import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyWeExistSection: React.FC = () => {
  return (
    <section className="py-20 bg-awaitsi-gray-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-awaitsi-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan text-[11px] font-bold uppercase tracking-ultra">
            2. Why Does Awaitsi Exist?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat text-white tracking-tight">
            Bridging the Access Gap Between <span className="text-awaitsi-cyan">Bold Business Ideas</span> & Practical Technology.
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-opensans">
            Technology has become essential for business success, yet many South African organisations still struggle to access affordable, practical, and reliable digital solutions.
          </p>
        </div>

        {/* Story Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-cyan/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-white">The Challenge</h3>
              <p className="text-sm text-white/60 leading-relaxed font-opensans">
                Small and growing businesses often face rigid, overly expensive software, unsupportive agencies, or low-quality off-the-shelf templates that break under real operational demand.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6 text-xs text-white/40 font-mono">
              Problem: Technology Access Barriers
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-awaitsi-green/30 bg-awaitsi-green/5 hover:border-awaitsi-green transition-all flex flex-col justify-between group shadow-inset-green"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-awaitsi-green/20 border border-awaitsi-green text-awaitsi-green flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-white">The Purpose</h3>
              <p className="text-sm text-white/80 leading-relaxed font-opensans">
                Awaitsi exists to democratize enterprise-grade technology—building solutions with heart that empower local enterprises to operate efficiently, compete confidently, and create opportunities.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 text-xs text-awaitsi-green font-mono font-bold">
              Mission: Building Technology with Heart
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-cyan/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-white">The Vision</h3>
              <p className="text-sm text-white/60 leading-relaxed font-opensans">
                To empower businesses and communities through technology that creates lasting, generational opportunities for South Africa and across the African continent.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-6 text-xs text-white/40 font-mono">
              Vision: Generational Impact
            </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <Lightbulb className="w-4 h-4 text-awaitsi-green" /> Read Our Full Company Purpose & Values
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyWeExistSection;
