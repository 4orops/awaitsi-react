import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface Stat {
  number: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            // Extract numeric value if possible, default to 0
            const numValue = parseInt(stat.number.replace(/[^0-9]/g, '')) || 0;
            // Extract suffix (e.g., 'M', 'B+', etc.)
            const suffix = stat.number.replace(/[0-9]/g, '');

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="text-center group p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-lime-400/30 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-white mb-3 font-montserrat flex justify-center items-center gap-1 group-hover:text-lime-400 transition-colors drop-shadow-lg">
                  {inView ? (
                    <CountUp end={numValue} duration={2.5} separator="," />
                  ) : (
                    '0'
                  )}
                  <span>{suffix}</span>
                </div>
                <div className="text-cyan-200 font-semibold tracking-wider uppercase text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
