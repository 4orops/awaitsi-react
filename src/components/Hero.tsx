import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onQuote: () => void;
  onLearnMore?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuote }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-label="Hero — Awaitsi (Pty) Ltd"
      className="relative min-h-[92vh] flex flex-col justify-center bg-awaitsi-gray-950 overflow-hidden pt-28 pb-16"
    >
      {/* Mesh line grid background */}
      <div className="absolute inset-0 line-grid opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_60%,transparent_100%)]" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-awaitsi-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-awaitsi-green/10 rounded-full blur-[130px] pointer-events-none" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
      >
        {/* Kicker Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-awaitsi-green animate-pulse" />
          <span className="text-white/80 font-bold tracking-widest text-[11px] uppercase">
            Awaitsi (Pty) Ltd — South African Technology Company
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-montserrat text-white tracking-tight leading-[1.1] max-w-5xl"
        >
          Building Technology with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-awaitsi-green via-awaitsi-cyan to-white">
            Heart for Generations
          </span>{' '}
          to Come.
        </motion.h1>

        {/* Vision & Description Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed font-opensans"
        >
          We build practical digital solutions that help businesses solve real challenges, improve operational efficiency, and unlock new opportunities for long-term growth.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <button
            id="hero-book-consultation"
            onClick={onQuote}
            className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all flex items-center justify-center gap-3 shadow-glow-green"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>

          <Link
            to="/about"
            className="px-8 py-4 bg-white/5 border border-white/15 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Our Story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/70"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white font-montserrat">Purpose-Driven</div>
              <div className="text-xs text-white/50">Solving Real Challenges</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white font-montserrat">Enterprise Standards</div>
              <div className="text-xs text-white/50">Modern Clean Architecture</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white font-montserrat">Long-Term Partner</div>
              <div className="text-xs text-white/50">Support & Continuous Growth</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white font-montserrat">South African SMEs</div>
              <div className="text-xs text-white/50">Tailored Practical Tech</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;