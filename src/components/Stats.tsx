import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export interface Stat {
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
    <section className="py-24 bg-awaitsi-blue relative overflow-hidden mesh-gradient">
      <div className="absolute inset-0 bg-awaitsi-blue/40 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => {
            const numValue = parseInt(stat.number.replace(/[^0-9]/g, '')) || 0;
            const suffix = stat.number.replace(/[0-9]/g, '');

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="text-center group p-10 rounded-[2.5rem] glass-card border-white/10 hover:border-awaitsi-green/30 transition-all duration-500 shadow-premium"
              >
                <div className="text-6xl font-bold text-white mb-4 font-montserrat flex justify-center items-center gap-1 group-hover:text-awaitsi-green transition-colors drop-shadow-glow">
                  {inView ? (
                    <CountUp end={numValue} duration={3} separator="," />
                  ) : (
                    '0'
                  )}
                  <span className="text-awaitsi-cyan group-hover:text-awaitsi-green transition-colors">{suffix}</span>
                </div>
                <div className="text-awaitsi-cyan-light font-bold tracking-[0.2em] uppercase text-xs font-montserrat opacity-80 group-hover:opacity-100 transition-opacity">
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
