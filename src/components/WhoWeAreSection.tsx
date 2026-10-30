import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Code, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-20 bg-awaitsi-gray-900 text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-[11px] font-bold uppercase tracking-ultra">
              1. Who is Awaitsi?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat text-white tracking-tight leading-tight">
              A South African Technology Company focused on <span className="text-awaitsi-green">Solving Business Challenges</span>.
            </h2>

            <p className="text-base text-white/70 leading-relaxed font-opensans">
              Awaitsi (Pty) Ltd is not just a website builder or a temporary freelance agency. We are a growing technology partner committed to helping businesses and communities thrive through practical, reliable, and accessible digital solutions.
            </p>

            <p className="text-base text-white/70 leading-relaxed font-opensans">
              While we deliver high-performing websites and web applications today, our focus is always on the underlying business goal: automating tedious manual work, increasing market credibility, enabling scalable operations, and unlocking long-term growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Shield className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-white font-montserrat">Enterprise Integrity</h3>
                  <p className="text-xs text-white/50 mt-1">Honest advice, clear communication, and reliable contracts.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Code className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-white font-montserrat">Modern Architecture</h3>
                  <p className="text-xs text-white/50 mt-1">Clean, scalable code built for fast speed and security.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-awaitsi-green font-bold text-xs uppercase tracking-widest hover:underline"
              >
                Learn More About Our Company Story &rarr;
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-awaitsi-gray-950 border border-white/15 p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-awaitsi-cyan/10 rounded-full blur-3xl" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Awaitsi Stack & Philosophy</span>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Beyond Basic Websites", desc: "We build integrated systems that power daily business operations." },
                  { title: "South African Business Focus", desc: "Solutions designed specifically for local market dynamics and SMEs." },
                  { title: "Future-Ready Codebase", desc: "Architected so new products, automation, and portals can be added smoothly." },
                  { title: "Long-Term Engineering Support", desc: "Dedicated maintenance ensuring peace of mind and zero downtime." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3.5 hover:border-white/20 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-white font-montserrat">{item.title}</h4>
                      <p className="text-xs text-white/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Layers className="w-4 h-4 text-awaitsi-green" /> Awaitsi (Pty) Ltd
                </span>
                <span className="text-awaitsi-cyan font-bold">Empowering Businesses</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
