import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

const projects = [
  {
    title: 'AI Integration',
    category: 'Automation',
    description: 'Smart automation, chatbots, and analytics to optimize your operations.',
    metric: '+40% efficiency',
    link: '/portfolio/ai',
    accentColor: '#00BCD4',
    gridArea: 'large',
  },
  {
    title: 'CRM Solutions',
    category: 'Enterprise',
    description: 'Custom dashboards and workflows designed to simplify growth.',
    metric: '3× faster ops',
    link: '/portfolio/crm',
    accentColor: '#76FF03',
    gridArea: 'small',
  },
  {
    title: 'Mobile Apps',
    category: 'Mobile',
    description: 'Cross-platform Android & iOS apps tailored for African markets.',
    metric: '50K+ downloads',
    link: '/portfolio/mobile',
    accentColor: '#76FF03',
    gridArea: 'small',
  },
  {
    title: 'Salon Booking System',
    category: 'Service Industry',
    description: 'Smart queuing with real-time "Your Turn" alerts.',
    metric: '−65% wait time',
    link: '/portfolio/salon',
    accentColor: '#00BCD4',
    gridArea: 'large',
  },
  {
    title: 'Premium Real Estate',
    category: 'Property',
    description: 'Luxury property showcase with advanced filtering and interactive gallery.',
    metric: '2× lead rate',
    link: '/portfolio/real-estate',
    accentColor: '#76FF03',
    gridArea: 'small',
  },
  {
    title: 'Process Automation',
    category: 'DevOps',
    description: 'End-to-end business process automation that saves hours every week.',
    metric: '8 hrs/week saved',
    link: '/portfolio/automation',
    accentColor: '#00BCD4',
    gridArea: 'small',
  },
];

const Portfolio = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="portfolio" className="bg-awaitsi-gray-950 overflow-hidden">

      {/* ── Header ── */}
      <div className="border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 py-20 lg:py-28 flex flex-col md:flex-row
                     md:items-end justify-between gap-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-awaitsi-cyan rounded-full" />
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em]">
                Case Studies
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white
                           font-montserrat tracking-[-0.03em] leading-[0.9]">
              REAL RESULTS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r
                               from-awaitsi-green to-awaitsi-cyan italic font-light">
                for local businesses.
              </span>
            </h2>
          </div>
          <p className="text-base text-white/40 max-w-xs font-opensans leading-relaxed
                        md:text-right flex-shrink-0">
            We don't just build systems — we solve real business problems and drive measurable growth.
          </p>
        </motion.div>
      </div>

      {/* ── Asymmetric Masonry Grid ── */}
      <div className="max-w-6xl mx-auto px-4 py-4 pb-8">
        {/* Row 1: 2 cols — Large | Small-stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {/* Large Card */}
          <MotionLink
            to={projects[0].link}
            id={`portfolio-card-0`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group relative bg-awaitsi-gray-900 min-h-[380px] overflow-hidden flex flex-col justify-end p-10 lg:p-14"
            onHoverStart={() => setHoveredIdx(0)}
            onHoverEnd={() => setHoveredIdx(null)}
          >
            <ProjectCardContent project={projects[0]} idx={0} hovered={hoveredIdx === 0} />
          </MotionLink>

          {/* Small Stack */}
          <div className="flex flex-col gap-px">
            {[1, 2].map((idx) => (
              <MotionLink
                key={idx}
                to={projects[idx].link}
                id={`portfolio-card-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-awaitsi-gray-900 min-h-[186px] overflow-hidden flex flex-col justify-end p-8"
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
              >
                <ProjectCardContent project={projects[idx]} idx={idx} hovered={hoveredIdx === idx} />
              </MotionLink>
            ))}
          </div>
        </div>

        {/* Row 2: Small | Large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-x border-b border-white/10 mt-0">
          {/* Small Stack */}
          <div className="flex flex-col gap-px">
            {[4, 5].map((idx) => (
              <MotionLink
                key={idx}
                to={projects[idx].link}
                id={`portfolio-card-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx - 4) * 0.1 }}
                className="group relative bg-awaitsi-gray-900 min-h-[186px] overflow-hidden flex flex-col justify-end p-8"
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
              >
                <ProjectCardContent project={projects[idx]} idx={idx} hovered={hoveredIdx === idx} />
              </MotionLink>
            ))}
          </div>

          {/* Large Card */}
          <MotionLink
            to={projects[3].link}
            id={`portfolio-card-3`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 group relative bg-awaitsi-gray-900 min-h-[380px] overflow-hidden flex flex-col justify-end p-10 lg:p-14"
            onHoverStart={() => setHoveredIdx(3)}
            onHoverEnd={() => setHoveredIdx(null)}
          >
            <ProjectCardContent project={projects[3]} idx={3} hovered={hoveredIdx === 3} />
          </MotionLink>
        </div>
      </div>

      {/* ── CTA Row ── */}
      <div className="max-w-6xl mx-auto px-4 pb-20 flex justify-center">
        <motion.a
          href="/portfolio"
          id="portfolio-view-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-4 px-12 py-5 border border-white/15 text-white/70
                     hover:text-white hover:border-awaitsi-green hover:bg-awaitsi-green/5
                     font-black text-[11px] uppercase tracking-[0.22em] transition-all duration-300 group"
        >
          View All Case Studies
          <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
        </motion.a>
      </div>

    </section>
  );
};

/* ── Shared Card Content ── */
interface ProjectCardContentProps {
  project: typeof projects[0];
  idx: number;
  hovered: boolean;
}

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({ project, idx, hovered }) => (
  <>
    {/* Overlay reveal */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ backgroundColor: project.accentColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hovered ? 0.06 : 0 }}
      transition={{ duration: 0.4 }}
    />

    {/* Number */}
    <span className="absolute top-6 right-6 text-[10px] font-black font-montserrat text-white/20 tracking-widest">
      {(idx + 1).toString().padStart(2, '0')}
    </span>

    {/* Accent corner line */}
    <motion.div
      className="absolute top-0 left-0 h-0.5 pointer-events-none"
      style={{ backgroundColor: project.accentColor }}
      animate={{ width: hovered ? '100%' : '0%' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    />

    {/* Content */}
    <div className="relative z-10">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30 mb-3">
        {project.category}
      </p>
      <h3 className="text-xl md:text-2xl font-black font-montserrat text-white mb-2 tracking-tight
                     group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed font-opensans max-w-xs mb-4">
        {project.description}
      </p>
      <div
        className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em]
                   transition-colors duration-300"
        style={{ color: hovered ? project.accentColor : 'rgba(255,255,255,0.4)' }}
      >
        <span className="font-montserrat text-lg">{project.metric}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </div>
  </>
);

export default Portfolio;
