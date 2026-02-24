import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, TrendingUp, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-cyan-50 to-blue-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 font-montserrat leading-tight">
              Our Story & <br /><span className="text-lime-500">Family Values</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Awaitsi was born from a simple belief: technology should not just be about profits, but about people, families, and communities.
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              We want to build a business that creates opportunities, helps others grow, and lasts for generations. Our family values — trust, reliability, care, and honesty — guide every decision we make.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <Heart className="w-6 h-6 text-lime-500" />, title: "Family First", desc: "Every client is family" },
                { icon: <Users className="w-6 h-6 text-cyan-500" />, title: "Community", desc: "Creating opportunities" },
                { icon: <TrendingUp className="w-6 h-6 text-lime-500" />, title: "Legacy", desc: "Built to last generations" },
                { icon: <Sparkles className="w-6 h-6 text-cyan-500" />, title: "Innovation", desc: "Cutting-edge solutions" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="mt-1 p-2 bg-gray-100 rounded-lg">{item.icon}</div>
                  <div>
                    <div className="font-bold text-blue-900 text-lg mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600 font-medium">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <pattern id="about-pattern" patternUnits="userSpaceOnUse" width="20" height="20" viewBox="0 0 10 10">
                    <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#76FF03" strokeWidth="0.5"></path>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#about-pattern)"></rect>
              </svg>
            </div>
            <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-lime-400 to-cyan-500 rounded-[2rem] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-48 h-48 text-white/90 drop-shadow-xl transform group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 w-32 h-32 bg-blue-900/10 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
