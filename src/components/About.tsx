import React from 'react';
import { Heart, Users, TrendingUp, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6 font-montserrat">
              Our Story & Family Values
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Awaitsi was born from a simple belief: technology should not just be about profits, but about people, families, and communities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We want to build a business that creates opportunities, helps others grow, and lasts for generations. Our family values — trust, reliability, care, and honesty — guide every decision we make.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900">Family First</div>
                  <div className="text-sm text-gray-600">Every client is family</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900">Community</div>
                  <div className="text-sm text-gray-600">Creating opportunities</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900">Legacy</div>
                  <div className="text-sm text-gray-600">Built to last generations</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900">Innovation</div>
                  <div className="text-sm text-gray-600">Cutting-edge solutions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <pattern id="about-pattern" patternUnits="userSpaceOnUse" width="20" height="20" viewBox="0 0 10 10">
                    <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#76FF03" strokeWidth="0.5"></path>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#about-pattern)"></rect>
              </svg>
            </div>
            <div className="relative z-10 w-full h-96 bg-gradient-to-br from-lime-400 to-cyan-500 rounded-2xl shadow-xl opacity-20 flex items-center justify-center">
              <Users className="w-48 h-48 text-blue-900/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
