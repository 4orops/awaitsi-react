import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onQuote: () => void;
  onLearnMore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuote, onLearnMore }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax: text rises slightly slower than scroll
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const headingVariants = {
    hidden: { y: '110%' },
    visible: (i: number) => ({
      y: '0%',
      transition: { duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-label="Hero — Awaitsi Digital Agency"
      className="relative min-h-screen flex flex-col justify-center bg-awaitsi-gray-950 overflow-hidden"
    >
      {/* ── Background: Strict Line Grid ── */}
      <div className="absolute inset-0 line-grid [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_50%,transparent_100%)]" />

      {/* ── Background: Accent Glow ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]
                      bg-awaitsi-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px]
                      bg-awaitsi-green/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* ── Horizontal hairline rule ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-4 pt-28 pb-16 lg:pt-40 lg:pb-28"
      >
        <div className="max-w-7xl mx-auto">

          {/* ── Kicker Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-awaitsi-green animate-pulse" />
              <span className="text-white/60 font-bold tracking-[0.22em] text-[10px] uppercase">
                South Africa's Premier Boutique Tech Agency
              </span>
            </div>
            <div className="hidden md:block h-px flex-1 max-w-[120px] bg-white/10" />
          </motion.div>

          {/* ── Massive Typographic Heading ── */}
          <div className="mb-8 md:mb-12 overflow-visible">
            <div className="overflow-hidden mb-1 md:mb-2">
              <motion.h1
                custom={0}
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                className="text-[14.5vw] md:text-[11vw] lg:text-[10rem] xl:text-[11rem] font-black
                           font-montserrat leading-[0.88] text-white tracking-[-0.03em] select-none"
              >
                WE BUILD
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.div
                custom={1}
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                className="text-[14.5vw] md:text-[11vw] lg:text-[10rem] xl:text-[11rem] font-black
                           font-montserrat leading-[0.88] tracking-[-0.03em] flex flex-wrap
                           items-baseline gap-x-5 select-none"
              >
                <span className="text-white">DIGITAL</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r
                                 from-awaitsi-green to-awaitsi-cyan italic">
                  LEGACIES
                </span>
              </motion.div>
            </div>
          </div>

          {/* ── Horizontal divider ── */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-full max-w-2xl bg-white/10 mb-10"
          />

          {/* ── Sub-row: Body text + CTAs ── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="text-base md:text-lg text-white/50 max-w-md leading-relaxed font-opensans"
            >
              Bespoke web development, custom CRM systems, and AI automation
              for SMEs.{' '}
              <span className="text-white/80">
                Precision engineering meets editorial design.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
            >
              <button
                id="hero-cta-primary"
                onClick={onQuote}
                className="group px-10 py-5 bg-white text-awaitsi-gray-900 hover:bg-awaitsi-green
                           transition-colors duration-300 font-black tracking-[0.18em] uppercase text-[11px]
                           flex items-center gap-3"
              >
                Start a Project
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
              <button
                id="hero-cta-secondary"
                onClick={onLearnMore}
                className="group px-10 py-5 border border-white/15 text-white/70 hover:text-white
                           hover:border-white/30 hover:bg-white/5 transition-all duration-300
                           font-bold tracking-[0.18em] uppercase text-[11px]"
              >
                View Our Work
              </button>
            </motion.div>
          </div>

          {/* ── Scroll Indicator ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-20 lg:mt-28 flex items-center gap-4"
          >
            <div className="flex flex-col items-center gap-1">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-px h-10 bg-gradient-to-b from-white/0 via-white/30 to-white/0"
              />
            </div>
            <span className="text-white/30 font-bold tracking-[0.25em] text-[10px] uppercase">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom hairline ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
};

export default Hero;