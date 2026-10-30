import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquare, Database, Sparkles, Building2, MonitorSmartphone, Share2, Workflow, Bot, Lock } from 'lucide-react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// ── Shared Animation Variants ──
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-green selection:text-black">
      <SEO
        title="Awaitsi | Digital Transformation for South African SMEs"
        description="Awaitsi helps businesses turn technology into practical systems for growth. Build digital systems, connect operations, and leverage AI & data."
      />
      <Navigation />

      <main>
        {/* 1. PREMIUM HERO */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
          {/* Ambient Background */}
          <div className="absolute inset-0 mesh-gradient opacity-80" />
          <div className="absolute inset-0 dot-grid opacity-30" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-awaitsi-green text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  Digital Transformation Partner
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-montserrat tracking-tight leading-[1.1] mb-8">
                Build a Smarter Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-awaitsi-green to-awaitsi-cyan">Digital Systems</span>, Data & AI.
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
                Awaitsi helps businesses replace fragmented processes with connected digital systems, intelligent data and practical AI — built around the way they actually work.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                <Link to="/digital-assessment" className="btn-primary w-full sm:w-auto shadow-glow-green">
                  Book a Free Digital Assessment <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#solutions" className="btn-ghost w-full sm:w-auto">
                  Explore Our Solutions
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-widest text-white/40">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Digital Systems</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Business Systems</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> Data & Intelligence</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-awaitsi-green" /> AI & Automation</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section className="py-24 bg-black relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold font-montserrat mb-6">
                Your business shouldn't have to run on disconnected tools.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/60 text-lg">
                South African SMEs are held back by fragmented operations.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: 'Scattered Comms', desc: 'WhatsApp conversations everywhere, missing vital context.' },
                { title: 'Fragile Data', desc: 'Spreadsheets used as databases, prone to human error.' },
                { title: 'Lost Opportunities', desc: 'Missed leads and paper-based processes slowing growth.' },
                { title: 'Blind Spots', desc: 'Lack of visibility and manual reporting taking hours.' },
              ].map((problem, i) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <h3 className="text-red-400 font-bold mb-2">{problem.title}</h3>
                  <p className="text-sm text-white/60">{problem.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-8 lg:p-12 bg-gradient-to-r from-awaitsi-blue/20 to-awaitsi-cyan/20 border border-awaitsi-cyan/30 rounded-3xl"
            >
              <h3 className="text-2xl md:text-4xl font-bold font-montserrat text-white mb-4">Awaitsi connects the pieces.</h3>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">From scattered tools to a single, intelligent digital ecosystem.</p>
            </motion.div>
          </div>
        </section>

        {/* 3. FOUR-PILLAR SECTION */}
        <section id="solutions" className="py-24 relative">
          <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16">
              <span className="text-awaitsi-cyan font-bold text-xs uppercase tracking-ultra mb-2 block">Our Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat">The Awaitsi Ecosystem</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {[
                { title: 'Digital Systems', desc: 'Websites, mobile apps, custom software and digital platforms that serve as your digital foundation.', link: '/services/digital-systems', icon: MonitorSmartphone },
                { title: 'Business Systems', desc: 'CRM, operations, workflows and customer management to turn processes into connected digital workflows.', link: '/services/business-systems', icon: Building2 },
                { title: 'Data & Intelligence', desc: 'Dashboards, analytics, Power BI and decision intelligence to turn your raw data into decisions.', link: '/services/data-intelligence', icon: Database },
                { title: 'AI & Automation', desc: 'AI assistants, automation and intelligent workflows to make repetitive work smarter.', link: '/services/ai-automation', icon: Bot },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 lg:p-10 bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-green/50 rounded-3xl transition-all hover:shadow-glow-green relative overflow-hidden"
                >
                  <pillar.icon className="w-10 h-10 text-awaitsi-green mb-6" />
                  <h3 className="text-2xl font-bold font-montserrat mb-4">{pillar.title}</h3>
                  <p className="text-white/60 mb-8 max-w-sm leading-relaxed">{pillar.desc}</p>
                  <Link to={pillar.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-awaitsi-green transition-colors">
                    Explore {pillar.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 bg-white text-awaitsi-gray-950 rounded-3xl text-center"
            >
              <span className="text-awaitsi-gray-500 font-bold text-xs uppercase tracking-ultra mb-4 block">The Strategic Layer</span>
              <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Digital Transformation</h3>
              <p className="text-awaitsi-gray-700 max-w-2xl mx-auto mb-8 text-lg">Bring everything together into a practical technology roadmap designed for your business growth.</p>
              <Link to="/services/digital-transformation" className="btn-primary-dark mx-auto inline-flex">
                Start Your Transformation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 4. SERVICE DISCOVERY */}
        <section className="py-24 bg-awaitsi-blue/5 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-12">What do you need help with?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { need: 'I need a website', pillar: 'Digital Systems', link: '/services/digital-systems' },
                { need: 'I need an app', pillar: 'Digital Systems', link: '/services/digital-systems' },
                { need: 'I need a CRM', pillar: 'Business Systems', link: '/services/business-systems' },
                { need: 'My business relies on spreadsheets', pillar: 'Business Systems', link: '/services/business-systems' },
                { need: 'I need better reporting', pillar: 'Data & Intelligence', link: '/services/data-intelligence' },
                { need: 'I want Power BI', pillar: 'Data & Intelligence', link: '/services/data-intelligence' },
                { need: 'I want to automate repetitive work', pillar: 'AI & Automation', link: '/services/ai-automation' },
                { need: "I don't know where to start", pillar: 'Digital Transformation', link: '/services/digital-transformation' },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="group flex flex-col p-6 bg-awaitsi-gray-950 border border-white/10 rounded-2xl hover:border-awaitsi-cyan transition-colors"
                >
                  <span className="text-sm font-semibold mb-6 flex-grow">"{item.need}"</span>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-awaitsi-cyan">
                    <span>→ {item.pillar}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. VISUAL ARCHITECTURE */}
        <section className="py-32 relative overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">The Awaitsi Solution Architecture</h2>
            <p className="text-white/60 mb-20 max-w-2xl mx-auto text-lg">A connected technology ecosystem, taking your business from fragmented manual processes to intelligent, automated growth.</p>
            
            {/* Interactive Diagram Placeholder - using Tailwind for a clean structural representation */}
            <div className="relative max-w-5xl mx-auto bg-awaitsi-gray-950 border border-white/10 rounded-3xl p-8 lg:p-16 shadow-2xl">
              
              <div className="text-center mb-12">
                <span className="text-awaitsi-cyan font-bold tracking-widest uppercase">Fragmented Business</span>
                <div className="w-px h-8 bg-gradient-to-b from-awaitsi-cyan to-transparent mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                  <h4 className="font-bold text-awaitsi-green mb-4">Digital Systems</h4>
                  <ul className="text-sm text-white/60 space-y-2 text-left list-disc list-inside">
                    <li>Websites & Portals</li>
                    <li>Mobile Apps</li>
                    <li>E-commerce</li>
                    <li>Custom Software</li>
                  </ul>
                </div>
                <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                  <h4 className="font-bold text-awaitsi-green mb-4">Business Systems</h4>
                  <ul className="text-sm text-white/60 space-y-2 text-left list-disc list-inside">
                    <li>CRM & Operations</li>
                    <li>Job & Task Management</li>
                    <li>Internal Portals</li>
                    <li>Customer Workflows</li>
                  </ul>
                </div>
                <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                  <h4 className="font-bold text-awaitsi-green mb-4">Data & Intelligence</h4>
                  <ul className="text-sm text-white/60 space-y-2 text-left list-disc list-inside">
                    <li>Power BI & Dashboards</li>
                    <li>KPIs & Reporting</li>
                    <li>Business Analytics</li>
                    <li>Data Strategy</li>
                  </ul>
                </div>
              </div>

              <div className="w-px h-12 bg-gradient-to-b from-white/10 to-awaitsi-cyan mx-auto my-6" />

              <div className="max-w-md mx-auto p-6 border border-awaitsi-cyan/30 rounded-2xl bg-awaitsi-cyan/5 backdrop-blur-md relative z-10">
                <h4 className="font-bold text-awaitsi-cyan mb-4">AI & Automation</h4>
                <p className="text-sm text-white/70">Intelligent Workflows • AI Assistants • Document Intelligence • Automation</p>
              </div>

              <div className="w-px h-12 bg-gradient-to-b from-awaitsi-cyan to-awaitsi-green mx-auto my-6" />

              <div className="inline-block px-8 py-4 bg-awaitsi-green text-black font-black uppercase tracking-widest rounded-xl shadow-glow-green">
                Business Growth
              </div>

              {/* Connecting Lines Graphic Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full blur-xl pointer-events-none -z-0"></div>
            </div>
          </div>
        </section>

        {/* 6. BUSINESS CLOUD */}
        <section className="py-24 bg-gradient-to-b from-awaitsi-gray-950 to-awaitsi-blue/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-6 inline-block">Product Platform</span>
                <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">Awaitsi Business Cloud</h2>
                <p className="text-lg text-white/70 mb-8">
                  One connected workspace for growing SMEs. Stop paying for dozens of disconnected SaaS subscriptions. We are building the ultimate unified SME workspace encompassing CRM, Data, AI, and Automation.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan" /> Integrated CRM & Lead Management</li>
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan" /> Centralized Dashboards & KPIs</li>
                  <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan" /> Embedded AI Assistants</li>
                </ul>
                <Link to="/business-cloud" className="btn-primary inline-flex">
                  Join Business Cloud Early Access
                </Link>
              </div>
              <div className="lg:w-1/2 relative">
                {/* Abstract representation of the cloud product UI */}
                <div className="aspect-[4/3] bg-awaitsi-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col">
                  <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 p-6 flex gap-6">
                    <div className="w-1/4 space-y-4 hidden sm:block">
                      <div className="h-8 bg-white/5 rounded" />
                      <div className="h-8 bg-white/5 rounded" />
                      <div className="h-8 bg-awaitsi-cyan/20 rounded border border-awaitsi-cyan/30" />
                      <div className="h-8 bg-white/5 rounded" />
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="h-12 bg-white/10 rounded-lg" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-awaitsi-green/10 rounded-lg border border-awaitsi-green/20" />
                        <div className="h-24 bg-awaitsi-blue/10 rounded-lg border border-awaitsi-blue/20" />
                      </div>
                      <div className="h-32 bg-white/5 rounded-lg border border-white/10 flex items-end p-4 gap-2">
                        <div className="w-full h-1/3 bg-awaitsi-cyan/40 rounded-t" />
                        <div className="w-full h-2/3 bg-awaitsi-cyan/60 rounded-t" />
                        <div className="w-full h-1/2 bg-awaitsi-cyan/50 rounded-t" />
                        <div className="w-full h-full bg-awaitsi-cyan rounded-t" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-awaitsi-gray-950 border border-white/20 text-[10px] font-bold uppercase px-2 py-1 rounded text-awaitsi-cyan">In Development</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HOW WE WORK */}
        <section className="py-24 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">Our Approach</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">A systematic approach to digital transformation.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {[
                { step: '01', title: 'DISCOVER', desc: 'Understand the business.' },
                { step: '02', title: 'DIAGNOSE', desc: 'Identify digital, data, system and AI gaps.' },
                { step: '03', title: 'DESIGN', desc: 'Create the solution.' },
                { step: '04', title: 'BUILD', desc: 'Develop and integrate.' },
                { step: '05', title: 'LAUNCH', desc: 'Deploy, test and train.' },
                { step: '06', title: 'GROW', desc: 'Measure, optimise and evolve.' },
              ].map((process) => (
                <div key={process.step} className="border-l-2 border-white/10 pl-6 hover:border-awaitsi-green transition-colors">
                  <span className="text-awaitsi-green font-bold text-sm mb-2 block">{process.step}</span>
                  <h4 className="font-bold text-lg mb-2">{process.title}</h4>
                  <p className="text-white/60 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/digital-assessment" className="btn-ghost inline-flex">
                Start With a Digital Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* 8. WHY AWAITSI */}
        <section className="py-24 bg-awaitsi-gray-950">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-center mb-16">Why Awaitsi?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'South African Context', desc: 'Solutions designed around local business realities, constraints, and opportunities.' },
                { title: 'Business First', desc: 'We start with the business problem, not the technology.' },
                { title: 'Connected Thinking', desc: 'Digital systems, data and AI designed to work together in one ecosystem.' },
                { title: 'Practical AI', desc: 'No buzzwords. Just AI focused on delivering real, measurable business value.' },
                { title: 'Human Partnership', desc: 'Technology supported by real people who care about your success.' },
                { title: 'Built for Growth', desc: 'Scalable solutions that evolve as your operations expand.' },
              ].map((reason, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <Sparkles className="w-5 h-5 text-awaitsi-cyan" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">{reason.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FOUNDER / HUMAN STORY */}
        <section className="py-24 bg-black border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="aspect-square bg-awaitsi-gray-900 border border-white/10 rounded-full flex items-center justify-center overflow-hidden shadow-2xl relative">
                {/* Fallback avatar shape if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-tr from-awaitsi-blue/20 to-awaitsi-green/20" />
                <span className="relative z-10 text-white/50 text-sm font-bold uppercase tracking-widest text-center px-4">
                  Building Tech<br/>With Heart
                </span>
              </div>
            </div>
            <div className="md:w-2/3">
              <span className="text-awaitsi-green font-bold text-xs uppercase tracking-ultra mb-4 block">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 leading-tight">
                Building Technology with Heart, For Generations to Come.
              </h2>
              <div className="space-y-4 text-white/70 text-lg mb-8">
                <p>
                  Technology should not be a frustrating barrier or an isolated expense. It should be the engine that empowers your people, streamlines your operations, and unlocks new opportunity.
                </p>
                <p>
                  At Awaitsi, we believe in long-term impact. We build sustainable, community-focused solutions designed to serve South African businesses today, and prepare them for tomorrow.
                </p>
              </div>
              <div>
                <p className="font-bold text-white">Oarabile Kgatlhane</p>
                <p className="text-sm text-awaitsi-cyan uppercase tracking-widest font-bold mt-1">Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
