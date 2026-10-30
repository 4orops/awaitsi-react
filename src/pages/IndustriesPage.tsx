import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { motion } from 'framer-motion';
import { Truck, Store, Briefcase, GraduationCap, Users, Heart, Lightbulb, Globe, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: Globe,
    title: 'Small & Medium Enterprises',
    badge: 'SMEs',
    color: 'text-awaitsi-green',
    border: 'border-awaitsi-green/30',
    description: 'Professional digital presence and streamlined workflow software to help growing SMEs compete confidently in competitive markets.',
    challenges: ['Competing with larger, established brands', 'Limited in-house IT resources', 'Manual quoting and admin overhead'],
    solutions: ['High-converting business websites', 'Digital CRM and workflow automation', 'Ongoing maintenance and support']
  },
  {
    icon: Truck,
    title: 'Transport & Logistics',
    badge: 'Logistics Tech',
    color: 'text-awaitsi-cyan',
    border: 'border-awaitsi-cyan/30',
    description: 'Custom freight quoting engines, fleet showcase platforms, and dispatch notification systems for transport enterprises.',
    challenges: ['Manual cargo booking processes', 'Delayed freight quote response times', 'Lack of digital fleet credibility'],
    solutions: ['Custom freight quote calculators', 'Fleet specification portal', 'Automated dispatch notifications']
  },
  {
    icon: Store,
    title: 'Retail Businesses',
    badge: 'Retail & Commerce',
    color: 'text-awaitsi-green',
    border: 'border-awaitsi-green/30',
    description: 'E-commerce platforms, product catalog sites, and inventory management tools to serve customers both online and in-store.',
    challenges: ['Limited online sales channel', 'Inventory management complexity', 'Physical foot traffic dependency'],
    solutions: ['E-commerce product catalog platforms', 'Click & collect ordering systems', 'Digital loyalty programs']
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    badge: 'B2B Services',
    color: 'text-awaitsi-cyan',
    border: 'border-awaitsi-cyan/30',
    description: 'Authority-building websites, client portal platforms, and scheduling systems for consultants, lawyers, accountants and advisors.',
    challenges: ['Generating high-quality qualified client leads', 'Inefficient paper-based case management', 'Communicating complex service value'],
    solutions: ['Authority-positioning professional websites', 'Client portal and document management', 'Online appointment booking systems']
  },
  {
    icon: GraduationCap,
    title: 'Educational Organisations',
    badge: 'EdTech',
    color: 'text-awaitsi-green',
    border: 'border-awaitsi-green/30',
    description: 'Modern school websites, learning portals, and student management systems to enhance digital education experiences.',
    challenges: ['Communicating institutional value online', 'Managing large student enrollment databases', 'Parent and staff communication gaps'],
    solutions: ['Modern school and institution websites', 'Student enrollment management systems', 'Parent communication & notice portals']
  },
  {
    icon: Users,
    title: 'Community Organisations',
    badge: 'Community Impact',
    color: 'text-awaitsi-cyan',
    border: 'border-awaitsi-cyan/30',
    description: 'Community portals, event management platforms, and donor management systems to amplify nonprofit and community impact.',
    challenges: ['Limited digital resource and budget', 'Community engagement coordination', 'Donor transparency and reporting'],
    solutions: ['Low-cost high-impact community websites', 'Event and volunteer management tools', 'Transparent impact reporting dashboards']
  },
  {
    icon: Heart,
    title: 'Memorial & Funeral Services',
    badge: 'Sensitive UX',
    color: 'text-awaitsi-green',
    border: 'border-awaitsi-green/30',
    description: 'Dignified, empathetic web platforms with respectful catalog displays and quiet consultation booking journeys.',
    challenges: ['Requiring compassionate user experience design', 'Presenting sensitive product catalogs appropriately', 'Building emotional trust quickly'],
    solutions: ['Dignified memorial catalog platforms', 'Serene UI design with empathy-first principles', 'Quiet consultation booking pathways']
  },
  {
    icon: Lightbulb,
    title: 'Startups',
    badge: 'Launch Ready',
    color: 'text-awaitsi-cyan',
    border: 'border-awaitsi-cyan/30',
    description: 'Launch-ready web platforms, MVP applications, and investor-facing digital products to establish early market presence.',
    challenges: ['Establishing rapid market credibility', 'Limited budget for initial digital infrastructure', 'Needing MVP to validate business model'],
    solutions: ['Rapid launch-ready websites (2 weeks)', 'MVP web application prototyping', 'Scalable architecture for investor demos']
  }
];

const IndustriesPage: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Industries We Serve | Awaitsi (Pty) Ltd"
        description="Awaitsi serves SMEs, transport, retail, professional services, education, community organizations, memorial services, and startups across South Africa."
      />
      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest mb-6">
            South African Industry Focus
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight max-w-4xl mx-auto">
            Industries We Serve with <span className="text-awaitsi-green">Practical Digital Solutions</span>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Awaitsi delivers targeted, sector-aware technology solutions to businesses across a diverse range of South African industries.
          </p>
        </section>

        {/* Industry Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className={`p-8 rounded-2xl bg-awaitsi-gray-900 border ${ind.border} hover:border-white/40 transition-all`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${ind.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${ind.color}`}>{ind.badge}</span>
                  </div>

                  <h2 className="text-xl font-bold font-montserrat text-white mb-2">{ind.title}</h2>
                  <p className="text-sm text-white/70 leading-relaxed mb-5">{ind.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Challenges</div>
                      <ul className="space-y-1">
                        {ind.challenges.map((c, i) => (
                          <li key={i} className="text-xs text-white/60 flex items-start gap-1.5">
                            <span className="text-red-400 mt-0.5">✕</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-widest ${ind.color} mb-2`}>Awaitsi Solutions</div>
                      <ul className="space-y-1">
                        {ind.solutions.map((s, i) => (
                          <li key={i} className="text-xs text-white/80 flex items-start gap-1.5">
                            <span className="text-awaitsi-green mt-0.5">✓</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-green/20 via-awaitsi-gray-900 to-awaitsi-cyan/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">Don't See Your Industry Listed?</h2>
            <p className="text-base text-white/70 max-w-xl mx-auto">We work with diverse businesses. Book a consultation and let's discuss how we can solve your specific challenge.</p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Discuss Your Industry Challenge
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export default IndustriesPage;
