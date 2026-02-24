import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';
import JourneyModal from './JourneyModal';
import LearnMoreModal from './LearnMoreModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  return (
    <>
      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat leading-tight">
                Building <span className="text-lime-400">Technology</span> with <span className="text-red-400">Heart</span>
              </h1>
              <p className="text-xl mb-4 text-cyan-100 font-light tracking-wide">
                For Generations to Come
              </p>
              <p className="text-lg mb-8 text-white/90 max-w-lg leading-relaxed">
                A purpose-driven technology company empowering South African businesses with affordable, innovative digital solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-lime-400 text-gray-900 font-bold rounded-xl shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  onClick={() => setIsLearnMoreOpen(true)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-white/30 backdrop-blur-sm text-white font-semibold rounded-xl hover:border-white/60 transition flex items-center gap-2"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="20" height="20" viewBox="0 0 10 10">
                        <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#00BCD4" strokeWidth="0.5"></path>
                      </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-pattern)"></rect>
                  </svg>
                </div>
                <div className="relative z-10 w-full h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex items-center justify-center transform hover:rotate-2 transition-transform duration-500">
                  <Heart className="w-32 h-32 text-white/80 drop-shadow-glow animate-pulse" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-lime-400/30 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400/30 rounded-full blur-2xl animate-pulse delay-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <JourneyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LearnMoreModal isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
    </>
  );
};

export default Hero;