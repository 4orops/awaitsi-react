import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Code, Headset, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemsWeSolveSection: React.FC = () => {
  const problems = [
    {
      icon: Globe,
      color: "text-awaitsi-green",
      borderColor: "border-awaitsi-green/30",
      bgColor: "bg-awaitsi-green/5",
      badge: "Visibility & Credibility",
      challenge: "Businesses Needing an Online Presence",
      description: "Without a professional, mobile-friendly website, prospective customers pass over your business for competitors with stronger digital credibility.",
      howAwaitsiHelps: "We design modern, fast, SEO-optimized business websites that establish immediate trust and turn website visitors into paying inquiries.",
      link: "/services/business-websites"
    },
    {
      icon: Cpu,
      color: "text-awaitsi-cyan",
      borderColor: "border-awaitsi-cyan/30",
      bgColor: "bg-awaitsi-cyan/5",
      badge: "Workflow Efficiency",
      challenge: "Businesses Struggling with Inefficient Processes",
      description: "Manual paperwork, scattered spreadsheets, and disconnected messaging drain staff hours and increase human operational error.",
      howAwaitsiHelps: "We engineer tailored web platforms and automated workflows that digitize operations, saving team hours and cutting overhead costs.",
      link: "/services/custom-web-applications"
    },
    {
      icon: Code,
      color: "text-awaitsi-green",
      borderColor: "border-awaitsi-green/30",
      bgColor: "bg-awaitsi-green/5",
      badge: "Scalable Systems",
      challenge: "Organisations Needing Custom Software",
      description: "Generic commercial software often forces your business into awkward workflows that don't match your unique operational model.",
      howAwaitsiHelps: "We develop dedicated custom web applications, client portals, and CRM tools engineered specifically for your exact business requirements.",
      link: "/services/custom-web-applications"
    },
    {
      icon: Headset,
      color: "text-awaitsi-cyan",
      borderColor: "border-awaitsi-cyan/30",
      bgColor: "bg-awaitsi-cyan/5",
      badge: "Reliable SLA Support",
      challenge: "Businesses Wanting Technical Support",
      description: "Websites and software often go unmaintained, leaving systems vulnerable to security threats, broken links, and slow performance.",
      howAwaitsiHelps: "We provide proactive website maintenance, hosting management, and technical support SLAs to keep your systems fast and secure.",
      link: "/services/technical-support"
    }
  ];

  return (
    <section className="py-20 bg-awaitsi-gray-900 text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-[11px] font-bold uppercase tracking-ultra">
            3. What Problems Do We Solve?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat text-white tracking-tight">
            Targeted Digital Solutions for <span className="text-awaitsi-green">Real Business Challenges</span>.
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-opensans">
            We don't sell generic templates. We identify key operational bottlenecks and craft practical technology that drives measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.challenge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-2xl bg-awaitsi-gray-950 border ${p.borderColor} ${p.bgColor} hover:border-white/40 transition-all flex flex-col justify-between group shadow-xl`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${p.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border ${p.borderColor} ${p.color}`}>
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-montserrat text-white tracking-tight">
                    {p.challenge}
                  </h3>

                  <div className="space-y-3 pt-2">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">
                        The Challenge
                      </div>
                      <p className="text-sm text-white/70 font-opensans leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className={`text-[11px] font-bold uppercase tracking-wider ${p.color} mb-1`}>
                        How Awaitsi Helps
                      </div>
                      <p className="text-sm text-white/90 font-opensans font-medium leading-relaxed">
                        {p.howAwaitsiHelps}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  <Link
                    to={p.link}
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${p.color} group-hover:underline`}
                  >
                    <span>Explore Solution</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest hover:bg-awaitsi-green-light transition-all shadow-glow-green"
          >
            <span>View All Dedicated Services & Pricing Framework</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProblemsWeSolveSection;
