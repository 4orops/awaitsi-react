import React from 'react';
import { motion } from 'motion/react';

interface CTAProps {
  onQuote: () => void;
}

const CTA: React.FC<CTAProps> = ({ onQuote }) => {
  return (
    <section className="bg-white overflow-hidden relative border-y border-awaitsi-gray-100">
      {/* Light grid */}
      <div className="absolute inset-0 line-grid-light pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 py-24 lg:py-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Kicker */}
          <div className="flex items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 bg-awaitsi-green rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-awaitsi-gray-500 uppercase tracking-[0.25em]">
              Scale Your Vision
            </span>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-montserrat
                         text-awaitsi-gray-900 tracking-[-0.03em] leading-[0.88]"
            >
              READY TO
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-14">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-montserrat
                         tracking-[-0.03em] leading-[0.88]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r
                               from-awaitsi-blue to-awaitsi-cyan italic font-light">
                grow bigger?
              </span>
            </motion.h2>
          </div>

          {/* Sub-row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-awaitsi-gray-100 pt-12">
            <p className="text-base text-awaitsi-gray-500 max-w-md font-opensans leading-relaxed">
              No corporate overhead, no hidden fees — just results-driven technology built
              specifically for South African SMEs that want to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <motion.button
                id="cta-primary-button"
                onClick={onQuote}
                whileHover={{ scale: 1.02, backgroundColor: '#76FF03' }}
                whileTap={{ scale: 0.97 }}
                className="group px-10 py-5 bg-awaitsi-gray-900 text-white font-black
                           text-[11px] uppercase tracking-[0.22em] transition-colors duration-300
                           flex items-center gap-3"
              >
                Request a Free Quote
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </motion.button>

              <motion.button
                id="cta-portfolio-button"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 border border-awaitsi-gray-200 text-awaitsi-gray-700
                           hover:bg-awaitsi-gray-900 hover:text-white hover:border-awaitsi-gray-900
                           font-black text-[11px] uppercase tracking-[0.22em] transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
