import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 flex flex-col items-center justify-center
                    px-4 text-white relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 line-grid pointer-events-none" />
      {/* Accent glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px]
                      bg-awaitsi-green/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative z-10 text-center max-w-2xl w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Giant 404 */}
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[22vw] md:text-[18rem] font-black font-montserrat leading-none
                         text-awaitsi-green tracking-[-0.05em] select-none"
              style={{ textShadow: '0 0 60px rgba(118, 255, 3, 0.2)' }}
            >
              404
            </motion.p>
          </div>

          {/* Hairline divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-full bg-white/10 mb-10"
          />

          <h1 className="text-2xl md:text-3xl font-black font-montserrat text-white
                         tracking-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-white/40 text-base mb-12 font-opensans leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or may have moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              id="not-found-home-link"
              className="group px-10 py-5 bg-white text-awaitsi-gray-900 hover:bg-awaitsi-green
                         font-black text-[11px] uppercase tracking-[0.22em] transition-colors
                         duration-300 inline-flex items-center justify-center gap-3"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>
            <Link
              to="/#contact"
              id="not-found-contact-link"
              className="px-10 py-5 border border-white/15 text-white/70 hover:text-white
                         hover:border-white/30 font-black text-[11px] uppercase tracking-[0.22em]
                         transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </div>
  );
};

export default NotFoundPage;
