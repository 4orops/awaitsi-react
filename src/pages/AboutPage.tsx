import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { motion } from 'framer-motion';
import { Heart, Target, Sparkles, Shield, Award, Users, TrendingUp, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const coreValues = [
    { name: 'Innovation', desc: 'We embrace creativity and continuous improvement, developing fresh ways to solve complex business problems.', icon: Sparkles },
    { name: 'Integrity', desc: 'We build enduring trust through transparency, honest technical advice, and total accountability.', icon: Shield },
    { name: 'Excellence', desc: 'We strive for superior engineering quality and design precision in every digital solution we deliver.', icon: Award },
    { name: 'Customer Success', desc: 'Our ultimate performance metric is measured by the real-world growth and efficiency of our clients.', icon: Users },
    { name: 'Continuous Learning', desc: 'Technology evolves rapidly. We constantly adapt, upskill, and master emerging technologies.', icon: BookOpen },
    { name: 'Long-Term Impact', desc: 'We make decisions that create lasting value for our clients, communities, and future generations.', icon: Heart },
  ];

  const strategicPillars = [
    { num: '01', title: 'Customer Success', desc: 'Deliver digital solutions that genuinely improve business operations and profitability.' },
    { num: '02', title: 'Innovation', desc: 'Continuously upgrade our software architectures, development practices, and toolsets.' },
    { num: '03', title: 'Sustainability', desc: 'Build an enduring business model focused on long-term value over short-term speculative gain.' },
    { num: '04', title: 'Learning & Skills', desc: 'Invest heavily in developing technical mastery across web, mobile, and automated systems.' },
    { num: '05', title: 'Community Impact', desc: 'Contribute actively to digital transformation and opportunity creation within South Africa.' },
  ];

  const growthPhases = [
    {
      phase: 'Phase One',
      title: 'Strategic Foundation & Trust',
      period: '1 Year Focus',
      status: 'Active Execution',
      points: [
        'Strengthen the Awaitsi enterprise brand identity',
        'Deliver exceptional client digital projects and case studies',
        'Grow recurring support and maintenance revenue streams',
        'Establish strategic SME partnerships in South Africa'
      ]
    },
    {
      phase: 'Phase Two',
      title: 'Service Standardisation & Reusable Tech',
      period: '2-3 Years Horizon',
      status: 'Architectural Preparation',
      points: [
        'Develop standardized, reusable software components and modules',
        'Expand capabilities into specialized industry sectors',
        'Build key strategic cloud and infrastructure partnerships',
        'Grow a specialized team of South African engineers and designers'
      ]
    },
    {
      phase: 'Phase Three',
      title: 'Scalable Products & Africa Expansion',
      period: '5+ Years Horizon',
      status: 'Long-Term Vision',
      points: [
        'Launch proprietary SaaS products and enterprise digital platforms',
        'Expand software solutions across the African continent',
        'Create high-value technical employment and apprenticeship programs',
        'Invest continuously in local innovation and digital skills development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="About Awaitsi (Pty) Ltd | Company Vision, Mission & Values"
        description="Learn the story, vision, strategic pillars, and growth roadmap of Awaitsi (Pty) Ltd - a South African technology company building technology with heart."
      />

      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 relative mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest mb-6">
            <Heart className="w-3.5 h-3.5" /> Company Profile & Story
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight leading-tight max-w-4xl">
            Building Technology with Heart for <span className="text-awaitsi-green">Generations to Come</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
            Awaitsi (Pty) Ltd is a South African technology company founded on the belief that technology should create opportunities rather than operational barriers.
          </p>
        </section>

        {/* Vision & Mission Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-awaitsi-green/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 text-awaitsi-green font-bold text-xs uppercase tracking-widest mb-4">
                <Target className="w-5 h-5" /> Our Vision
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-white leading-snug">
                "To empower businesses and communities through technology that creates lasting opportunities for generations to come."
              </h2>
            </div>

            <div className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-awaitsi-cyan/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 text-awaitsi-cyan font-bold text-xs uppercase tracking-widest mb-4">
                <TrendingUp className="w-5 h-5" /> Our Mission
              </div>
              <h2 className="text-2xl font-bold font-montserrat text-white leading-snug">
                "We build practical digital solutions that help businesses solve problems, improve efficiency, and unlock new opportunities for growth."
              </h2>
            </div>
          </div>
        </section>

        {/* Why Awaitsi Was Founded */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="p-8 sm:p-12 rounded-2xl bg-awaitsi-gray-900 border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-awaitsi-green">
                Company Purpose
              </div>
              <h2 className="text-3xl font-extrabold font-montserrat text-white">
                Why Awaitsi Exists
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Technology has become essential for modern business success, yet many growing organisations still struggle to access affordable, practical, and reliable digital solutions.
              </p>
              <p className="text-base text-white/70 leading-relaxed">
                Awaitsi exists to bridge this gap by designing software and web experiences that are clean, simple, accessible, and focused entirely on solving real-world challenges.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <h3 className="font-bold text-lg text-white font-montserrat border-b border-white/10 pb-3">
                Our Core Value Proposition
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Awaitsi combines technical expertise, personalized service, and a commitment to solving real business problems. We don't simply build software—we build solutions that support growth, improve efficiency, and create lasting value.
              </p>
              <div className="pt-2 text-xs font-mono text-awaitsi-green">
                Awaitsi (Pty) Ltd Standard &bull; Quality First
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold font-montserrat text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="text-base text-white/60 mt-3">
              The fundamental principles that guide every client interaction, line of code, and strategic decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.name} className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-green/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-awaitsi-green flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-montserrat text-white">{v.name}</h3>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="p-8 sm:p-12 rounded-2xl bg-awaitsi-gray-900 border border-white/10">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-awaitsi-cyan">Framework</span>
              <h2 className="text-3xl font-extrabold font-montserrat text-white mt-2">
                Our 5 Strategic Pillars
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {strategicPillars.map((p) => (
                <div key={p.num} className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-2xl font-black font-mono text-awaitsi-green">{p.num}</div>
                  <h3 className="font-bold text-sm text-white font-montserrat">{p.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Roadmap */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-awaitsi-green">Journey</span>
            <h2 className="text-3xl font-extrabold font-montserrat text-white mt-2">
              3-Phase Growth Roadmap
            </h2>
            <p className="text-base text-white/60 mt-2">
              How Awaitsi is building long-term capability and scaling impact step-by-step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthPhases.map((gp, idx) => (
              <div key={gp.phase} className="p-8 rounded-2xl bg-awaitsi-gray-900 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-awaitsi-green">{gp.phase}</span>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-white/50">{gp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-white mb-2">{gp.title}</h3>
                  <div className="text-xs text-awaitsi-cyan font-semibold mb-6">{gp.status}</div>

                  <ul className="space-y-3">
                    {gp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-awaitsi-green shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8 text-[11px] font-mono text-white/40">
                  Step {idx + 1} of 3
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-gradient-to-r from-awaitsi-blue/40 via-awaitsi-gray-900 to-awaitsi-cyan/20 border border-white/15 text-center space-y-6">
            <h2 className="text-3xl font-extrabold font-montserrat text-white">
              Ready to Partner with a Purpose-Driven Tech Company?
            </h2>
            <p className="text-base text-white/70 max-w-2xl mx-auto">
              Schedule a strategy consultation to discuss your business goals, digital bottlenecks, or custom application needs.
            </p>
            <div>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all shadow-glow-green inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Book a Consultation
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};

export default AboutPage;
