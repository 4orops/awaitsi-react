import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
  title?: string;
  subtitle?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  title = 'Coming Soon',
  subtitle = 'Our team is working hard on this. Check back soon or reach out to us directly.',
}) => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 flex flex-col items-center justify-center
                    px-4 text-white relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 line-grid pointer-events-none" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[400px] bg-awaitsi-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative z-10 text-center max-w-2xl w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10
                          bg-white/5 backdrop-blur-sm mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-awaitsi-cyan animate-pulse" />
            <span className="text-white/60 font-black tracking-[0.22em] text-[10px] uppercase">
              Under Construction
            </span>
          </div>

          {/* Title */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-black font-montserrat
                         text-white tracking-[-0.03em] leading-[0.9]"
            >
              {title}
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-white/10 my-10 max-w-xs mx-auto"
          />

          <p className="text-white/40 text-base mb-12 font-opensans leading-relaxed max-w-md mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              id="coming-soon-home-link"
              className="group px-10 py-5 bg-white text-awaitsi-gray-900 hover:bg-awaitsi-green
                         font-black text-[11px] uppercase tracking-[0.22em] transition-colors
                         duration-300 inline-flex items-center justify-center gap-3"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>
            <Link
              to="/#contact"
              id="coming-soon-contact-link"
              className="px-10 py-5 border border-white/15 text-white/70 hover:text-white
                         hover:border-white/30 font-black text-[11px] uppercase tracking-[0.22em]
                         transition-all duration-300 inline-flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
