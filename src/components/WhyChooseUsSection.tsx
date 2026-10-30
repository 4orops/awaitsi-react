import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, ShieldCheck, Cpu, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "Purpose-Driven Company",
      desc: "Driven by meaningful impact for South African businesses and communities, not short-term speculative hype.",
      tag: "Heart & Legacy"
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      desc: "Clear timelines, predictable budget expectations, and honest technical guidance with zero complex jargon.",
      tag: "Trust & Clarity"
    },
    {
      icon: ShieldCheck,
      title: "Quality-First Development",
      desc: "Strict coding standards, accessibility benchmarks, WCAG AA compliance, and thorough quality assurance testing.",
      tag: "Enterprise QA"
    },
    {
      icon: Cpu,
      title: "Modern Technology Stack",
      desc: "Leveraging React, TypeScript, Tailwind CSS, Vite, and cloud infrastructure engineered for speed and reliability.",
      tag: "Speed & Scale"
    },
    {
      icon: Users,
      title: "Long-Term Partnerships",
      desc: "We don't hand over a zip file and vanish. We provide ongoing support, hosting guidance, and growth evolution.",
      tag: "Ongoing SLAs"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      desc: "As technology evolves, we continuously update our skills, processes, and software tools to keep your business ahead.",
      tag: "Future-Ready"
    }
  ];

  return (
    <section className="py-20 bg-awaitsi-gray-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaitsi-cyan/10 border border-awaitsi-cyan/30 text-awaitsi-cyan text-[11px] font-bold uppercase tracking-ultra">
            4. Why Choose Awaitsi?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat text-white tracking-tight">
            Built on <span className="text-awaitsi-cyan">Integrity, Quality & Partnership</span>.
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-opensans">
            Discover why growing enterprises and ambitious SMEs trust Awaitsi (Pty) Ltd as their digital development partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-green/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-awaitsi-green group-hover:bg-awaitsi-green group-hover:text-awaitsi-gray-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-montserrat text-white tracking-tight">
                    {f.title}
                  </h3>

                  <p className="text-sm text-white/60 font-opensans leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-6 text-xs text-white/40 flex items-center justify-between">
                  <span>Awaitsi Standard</span>
                  <span className="text-awaitsi-green">&check; Guaranteed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Teaser Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold font-montserrat text-white">Curious About How We Work?</h3>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            We follow a structured 6-step visual development process: Discovery, Planning, Design, Development, Testing, and Launch & Support.
          </p>
          <div className="pt-2">
            <Link
              to="/our-process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all border border-white/15"
            >
              Explore Our 6-Step Visual Process &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
