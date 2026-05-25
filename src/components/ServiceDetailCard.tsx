import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, Sparkles, X } from 'lucide-react';
import { ServiceDetail } from '../data/serviceDetails';

interface ServiceDetailCardProps {
  detail: ServiceDetail;
  onClose: () => void;
  onQuote: () => void;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ detail, onClose, onQuote }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="overflow-hidden bg-awaitsi-gray-900 border-x border-b border-awaitsi-gray-200"
    >
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-awaitsi-cyan/5 rounded-full blur-[80px] pointer-events-none" />
        
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-20 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-none transition-colors text-white"
          aria-label="Close details"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative z-10 grid lg:grid-cols-2 gap-px bg-white/10">
          
          {/* Left Column */}
          <div className="bg-awaitsi-gray-900 p-8 md:p-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat tracking-tight">
              {detail.subtitle}
            </h3>
            <p className="text-lg text-white/70 leading-relaxed font-opensans mb-12">
              {detail.intro}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {detail.benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-awaitsi-cyan bg-white/5">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-2">{benefit.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 border border-white/10 bg-white/5">
              <h4 className="font-bold text-white text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-awaitsi-cyan" /> Ideal Match
              </h4>
              <ul className="grid gap-4">
                {detail.perfectFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-white/70 font-opensans leading-snug">
                    <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-awaitsi-cyan shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-awaitsi-gray-900 flex flex-col">
            <div className="p-8 md:p-16 flex-1">
              <h4 className="font-bold text-white mb-10 font-montserrat uppercase tracking-[0.2em] text-xs">Transformation Matrix</h4>
              
              <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                 {/* Before */}
                 <div className="bg-awaitsi-gray-900 p-8">
                    <div className="text-white/40 font-bold text-[10px] tracking-widest uppercase mb-6 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-500/50" /> Before Awaitsi
                    </div>
                    <ul className="space-y-4">
                      {detail.beforeAfter.before.map((item, idx) => (
                        <li key={idx} className="text-sm text-white/40 leading-relaxed">
                          ✕ {item}
                        </li>
                      ))}
                    </ul>
                 </div>

                 {/* After */}
                 <div className="bg-awaitsi-gray-900 p-8">
                    <div className="text-awaitsi-cyan font-bold text-[10px] tracking-widest uppercase mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> With Awaitsi
                    </div>
                    <ul className="space-y-4">
                      {detail.beforeAfter.after.map((item, idx) => (
                        <li key={idx} className="text-sm text-white leading-relaxed font-medium">
                           {item}
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>

              <div className="mt-12 p-8 border border-white/10 bg-white/5 group">
                <div className="flex gap-6 items-start">
                   <div className="text-4xl grayscale group-hover:grayscale-0 transition-all">{detail.realExample.icon}</div>
                   <div>
                     <h4 className="font-bold text-awaitsi-cyan text-[10px] mb-3 uppercase tracking-[0.2em]">Real SA Context</h4>
                     <p className="text-sm text-white/80 font-opensans leading-relaxed">
                       {detail.realExample.text}
                     </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-white/10 bg-white/5 mt-auto">
              <motion.button
                onClick={onQuote}
                whileHover={{ backgroundColor: '#fff', color: '#0f172a' }}
                className="w-full py-6 text-sm font-bold tracking-[0.2em] uppercase text-white border border-white/20 flex items-center justify-center gap-4 transition-colors"
              >
                {detail.cta} <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetailCard;
