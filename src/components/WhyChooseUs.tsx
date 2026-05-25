import React from 'react';
import { motion } from 'motion/react';

const valueProps = [
  {
    title: 'Reliability & Uptime',
    description:
      'Your business never sleeps — and neither does your digital presence. We guarantee 99.9% uptime with secure, high-performance infrastructure.',
    metric: '99.9%',
    metricLabel: 'Uptime SLA',
  },
  {
    title: 'Fast Delivery Timelines',
    description:
      'Get to market faster. Our optimised development process ensures most projects are delivered in 2–4 weeks without compromising quality.',
    metric: '2–4',
    metricLabel: 'Weeks average',
  },
  {
    title: 'Local Expertise & Support',
    description:
      'Based in South Africa, we understand the local market nuances. You get direct access to a team that speaks your language — literally.',
    metric: '100%',
    metricLabel: 'SA-based team',
  },
  {
    title: 'Scalable & Future-Ready',
    description:
      'We build for growth. Our solutions use cutting-edge technologies that scale seamlessly as your business expands into new markets.',
    metric: '10×',
    metricLabel: 'Scalability built-in',
  },
  {
    title: 'Business Results & ROI',
    description:
      'Every line of code is written with your bottom line in mind. We focus on driving measurable growth and a strong return on investment.',
    metric: '3×',
    metricLabel: 'Average ROI reported',
  },
  {
    title: 'Data-Driven Decisions',
    description:
      'We build with analytics baked in, so every product decision is backed by real user data, not guesswork or assumptions.',
    metric: '∞',
    metricLabel: 'Insights delivered',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden">

      {/* ── Header ── */}
      <div className="border-b border-awaitsi-gray-100 line-grid-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 py-20 lg:py-28"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-awaitsi-blue rounded-full" />
            <span className="text-[10px] font-black text-awaitsi-gray-500 uppercase tracking-[0.25em]">
              Why Awaitsi
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-awaitsi-gray-900
                         font-montserrat tracking-[-0.03em] leading-[0.9] max-w-3xl">
            EXCELLENCE<br />
            <span className="text-awaitsi-blue italic font-light">engineered for SA</span>
          </h2>
        </motion.div>
      </div>

      {/* ── Numeric Editorial List ── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-x border-b border-awaitsi-gray-100">
          {valueProps.map((prop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="group grid grid-cols-12 gap-0 border-b border-awaitsi-gray-100 last:border-b-0
                         hover:bg-awaitsi-gray-50 transition-colors duration-300"
            >
              {/* Number column */}
              <div className="col-span-2 md:col-span-1 p-8 flex items-start border-r border-awaitsi-gray-100">
                <span className="text-2xl md:text-4xl font-light font-montserrat text-awaitsi-gray-200
                                 group-hover:text-awaitsi-cyan transition-colors duration-500 leading-none pt-1">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Title + Description */}
              <div className="col-span-7 md:col-span-9 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black font-montserrat
                               text-awaitsi-gray-900 mb-3 group-hover:text-awaitsi-blue
                               transition-colors duration-300 tracking-tight">
                  {prop.title}
                </h3>
                <p className="text-base leading-relaxed font-opensans text-awaitsi-gray-500 max-w-2xl">
                  {prop.description}
                </p>
              </div>

              {/* Metric column */}
              <div className="col-span-3 md:col-span-2 p-6 md:p-8 flex flex-col items-end
                              justify-center border-l border-awaitsi-gray-100 text-right">
                <span className="text-2xl md:text-4xl font-black font-montserrat text-awaitsi-gray-900
                                 group-hover:text-awaitsi-blue transition-colors duration-300 leading-none mb-2">
                  {prop.metric}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-awaitsi-gray-400 leading-snug">
                  {prop.metricLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Brutalist Founder Quote ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-16 pb-24"
      >
        <div className="bg-awaitsi-gray-950 border border-white/10 relative overflow-hidden">
          {/* Dot grid decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 dot-grid opacity-40 pointer-events-none" />
          {/* Cyan accent line */}
          <div className="absolute top-0 left-0 w-16 h-0.5 bg-awaitsi-cyan" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-start gap-12 md:gap-20">
            {/* Founder Initials */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white text-awaitsi-gray-900 flex items-center justify-center
                              text-lg font-black font-montserrat tracking-tighter mb-5">
                OK
              </div>
              <h4 className="text-sm font-black font-montserrat text-white tracking-tight">
                Oarabile Kgatlhane
              </h4>
              <p className="text-awaitsi-green font-black tracking-[0.2em] text-[10px] uppercase mt-2">
                Founder &amp; CEO
              </p>
            </div>

            {/* Quote */}
            <div className="flex-grow">
              <p className="text-2xl md:text-4xl leading-snug font-montserrat font-light text-white
                            mb-10 tracking-tight">
                "At Awaitsi, our mission is simple: to help South African businesses grow through
                reliable, high-impact digital solutions. We build systems that deliver real,
                measurable results."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-awaitsi-cyan" />
                <span className="text-white/40 font-black font-opensans tracking-[0.22em] uppercase text-[10px]">
                  Committed to your growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default WhyChooseUs;
