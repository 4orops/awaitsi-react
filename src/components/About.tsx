import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Awaitsi"
      className="bg-awaitsi-gray-950 overflow-hidden border-t border-white/10"
    >

      {/* ── Header ── */}
      <div className="border-b border-white/10 line-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 py-20 lg:py-28"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-awaitsi-green rounded-full" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em]">
              Our Story
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white
                         font-montserrat tracking-[-0.03em] leading-[0.9] max-w-3xl">
            BUILT ON<br />
            <span className="text-awaitsi-green italic font-light">family values</span>
            {' &'}<br />
            lasting legacy.
          </h2>
        </motion.div>
      </div>

      {/* ── Content Grid ── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-px bg-white/10 border-x border-b border-white/10">

          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-awaitsi-gray-950 p-10 lg:p-16 flex flex-col justify-between"
          >
            <div className="space-y-6 text-base text-white/50 font-opensans leading-relaxed">
              <p className="text-white/80 text-lg">
                Awaitsi was born from a simple belief: technology should not just be about profits,
                but about{' '}
                <span className="text-white font-bold">people, families, and communities.</span>
              </p>
              <p>
                We want to build a business that creates opportunities, helps others grow, and
                lasts for generations. Our family values — trust, reliability, care, and honesty —
                guide every decision we make.
              </p>
              <p>
                Based in South Africa, we're uniquely positioned to understand the nuances of the
                local market, delivering solutions that are built for the African context.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-14 pt-10 border-t border-white/10">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em] mb-8">
                Our Core Values
              </h4>
              <div className="grid grid-cols-2 gap-px bg-white/10">
                {[
                  { label: 'Family First', desc: 'Every client is treated like family.' },
                  { label: 'Community', desc: 'Creating local tech opportunities.' },
                  { label: 'Legacy', desc: 'Built to last for generations.' },
                  { label: 'Integrity', desc: 'Honesty in every interaction.' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-awaitsi-gray-950 p-6 hover:bg-awaitsi-gray-800 transition-colors duration-300"
                  >
                    <h5 className="font-black font-montserrat text-white text-sm mb-2
                                   group-hover:text-awaitsi-green transition-colors duration-300">
                      {item.label}
                    </h5>
                    <p className="text-xs text-white/40 font-opensans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-awaitsi-gray-950"
          >
            <div className="grid grid-cols-2 gap-px bg-white/10 h-full">
              {[
                { stat: '50+', label: 'Local Businesses Served', accent: '#76FF03' },
                { stat: '2–4wk', label: 'Average Delivery Time', accent: '#00BCD4' },
                { stat: '99.9%', label: 'Guaranteed Uptime SLA', accent: '#76FF03' },
                { stat: '100%', label: 'South African Founded', accent: '#00BCD4' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ backgroundColor: '#1A1A1A' }}
                  className="bg-awaitsi-gray-950 p-10 lg:p-14 flex flex-col justify-end cursor-default group"
                >
                  <span
                    className="text-5xl md:text-6xl font-black font-montserrat leading-none
                               mb-4 transition-all duration-500 group-hover:-translate-y-1"
                    style={{ color: item.accent }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 leading-snug">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10" />
    </section>
  );
};

export default About;
