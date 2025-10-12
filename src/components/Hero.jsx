import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
              Building Technology with Heart
            </h1>
            <p className="text-xl mb-4 text-cyan-100">
              For Generations to Come
            </p>
            <p className="text-lg mb-8 text-white/90">
              A purpose-driven technology company empowering South African businesses with affordable, innovative digital solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-lime-400 text-gray-900 font-semibold rounded-lg hover:bg-lime-300 transition flex items-center gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
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
              <div className="relative z-10 w-full h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl shadow-2xl opacity-90 flex items-center justify-center">
                <Heart className="w-32 h-32 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;