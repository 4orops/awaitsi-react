import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { serviceDetails } from '../data/serviceDetails';
import ServiceDetailCard from './ServiceDetailCard';

export interface Service {
  slug: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

interface ServicesProps {
  services: Service[];
  onQuote: () => void;
}

const Services: React.FC<ServicesProps> = ({ services, onQuote }) => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug(prev => (prev === slug ? null : slug));
  };

  return (
    <section id="services" className="bg-white overflow-hidden">

      {/* ── Section Header ── */}
      <div className="border-b border-awaitsi-gray-100 line-grid-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 py-20 lg:py-28 flex flex-col md:flex-row
                     md:items-end justify-between gap-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-awaitsi-green rounded-full" />
              <span className="text-[10px] font-black text-awaitsi-gray-500 uppercase tracking-[0.25em]">
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-awaitsi-gray-900
                           font-montserrat tracking-[-0.03em] leading-[0.9] max-w-xl">
              HIGH-IMPACT<br />
              <span className="text-awaitsi-blue italic font-light">digital engines.</span>
            </h2>
          </div>
          <p className="text-base text-awaitsi-gray-500 max-w-xs font-opensans leading-relaxed
                        md:text-right flex-shrink-0">
            Bespoke software and digital strategies engineered to scale South African SMEs.
          </p>
        </motion.div>
      </div>

      {/* ── Bento Grid ── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-px bg-awaitsi-gray-100 border-x border-b border-awaitsi-gray-100">
          {services.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            const isDimmed = hoveredIdx !== null && !isHovered;
            const isExpanded = expandedSlug === service.slug;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
                className="relative bg-white overflow-hidden"
                style={{
                  opacity: isDimmed ? 0.45 : 1,
                  transition: 'opacity 0.4s ease',
                }}
              >
                {/* Hover background fill */}
                <motion.div
                  className="absolute inset-0 bg-awaitsi-gray-900 pointer-events-none"
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="relative z-10 p-10 lg:p-14 flex flex-col justify-between min-h-[380px]">
                  {/* ── Top Row ── */}
                  <div className="flex items-start justify-between mb-auto">
                    <div
                      className="text-[10px] font-black uppercase tracking-[0.22em] transition-colors duration-400"
                      style={{ color: isHovered ? '#00BCD4' : '#9E9E9E' }}
                    >
                      From {service.price}
                    </div>
                    <span
                      className="text-sm font-black font-montserrat tracking-widest transition-colors duration-400"
                      style={{ color: isHovered ? 'rgba(255,255,255,0.2)' : '#E0E0E0' }}
                    >
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* ── Content ── */}
                  <div className="mt-16">
                    <h3
                      className="text-3xl lg:text-4xl font-black font-montserrat tracking-tight
                                 mb-5 transition-colors duration-400 leading-tight"
                      style={{ color: isHovered ? '#fff' : '#0C0C0C' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed mb-8 font-opensans transition-colors duration-400 max-w-sm"
                      style={{ color: isHovered ? 'rgba(255,255,255,0.55)' : '#757575' }}
                    >
                      {service.description}
                    </p>

                    <button
                      id={`service-detail-${service.slug}`}
                      onClick={() => toggleExpand(service.slug)}
                      className="inline-flex items-center gap-4 font-black text-[10px] tracking-[0.22em]
                                 uppercase transition-colors duration-400"
                      style={{ color: isHovered ? '#76FF03' : '#0C0C0C' }}
                    >
                      {isExpanded ? 'Close Details' : 'Explore Service'}
                      <span
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : isHovered ? 'translate-x-2' : ''}`}
                      >
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-awaitsi-green pointer-events-none"
                  animate={{ width: isHovered ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── Service Detail Accordion ── */}
        <AnimatePresence>
          {expandedSlug && (
            <ServiceDetailCard
              detail={serviceDetails.find(d => d.slug === expandedSlug)!}
              onClose={() => setExpandedSlug(null)}
              onQuote={onQuote}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
