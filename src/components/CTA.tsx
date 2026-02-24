import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-900 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <pattern id="cta-pattern" patternUnits="userSpaceOnUse" width="10" height="10" viewBox="0 0 10 10">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span className="text-sm font-semibold text-lime-400 uppercase tracking-wider">Start Your Transformation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat leading-tight">
            Ready to <span className="text-lime-400">Scale</span> Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-cyan-100 max-w-2xl mx-auto">
            Let's discuss your vision — no obligation. We treat every project as part of our family legacy.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-lime-400 text-gray-900 font-bold text-lg rounded-xl hover:bg-lime-300 transition-all shadow-[0_0_30px_rgba(132,204,22,0.4)] flex items-center gap-3 mx-auto"
          >
            Request a Quote Today <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
