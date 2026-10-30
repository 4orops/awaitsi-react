import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-awaitsi-gray-950 text-white border-t border-white/10 relative overflow-hidden" aria-label="Site footer">

      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-awaitsi-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-awaitsi-green/5 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Banner Tagline */}
      <div className="border-b border-white/10 overflow-hidden py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div>
              <p className="text-awaitsi-green font-bold text-xs uppercase tracking-ultra mb-2">
                Awaitsi (Pty) Ltd
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-white tracking-tight">
                Building Technology with Heart, For Generations to Come.
              </h2>
            </div>
            <Link
              to="/digital-assessment"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green transition-all shadow-lg whitespace-nowrap self-start lg:self-center"
            >
              <span>Get Digital Roadmap</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/Artboard1.png"
                alt="Awaitsi logo"
                className="h-8 w-auto grayscale contrast-200 group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="font-montserrat font-black text-white tracking-[0.25em] uppercase text-sm">
                Awaitsi
              </span>
            </Link>

            <p className="text-white/60 leading-relaxed text-xs max-w-sm">
              We help businesses replace fragmented processes with connected digital systems, intelligent data and practical AI.
            </p>

            <div className="space-y-2 text-xs text-white/50 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-awaitsi-green" />
                <span>Pretoria / Gauteng, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-awaitsi-cyan" />
                <a href="mailto:info@awaitsi.co.za" className="hover:text-white transition-colors">info@awaitsi.co.za</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-awaitsi-green" />
                <a href="tel:+27655443979" className="hover:text-white transition-colors">+27 65 544 3979</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 pt-2">
              {[
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/awaitsi' },
                { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/awaitsi' },
                { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/awaitsi' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:bg-awaitsi-green hover:text-awaitsi-gray-950 hover:border-awaitsi-green transition-all"
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-ultra text-white/40 mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li><Link to="/services/digital-systems" className="hover:text-awaitsi-green transition-colors">Digital Systems</Link></li>
              <li><Link to="/services/business-systems" className="hover:text-awaitsi-green transition-colors">Business Systems</Link></li>
              <li><Link to="/services/data-intelligence" className="hover:text-awaitsi-green transition-colors">Data & Intelligence</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-awaitsi-green transition-colors">AI & Automation</Link></li>
              <li><Link to="/services/digital-transformation" className="hover:text-awaitsi-green transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-ultra text-white/40 mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li><Link to="/business-cloud" className="hover:text-awaitsi-green transition-colors">Awaitsi Business Cloud</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-ultra text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/approach" className="hover:text-white transition-colors">Approach</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 5: Legal */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-ultra text-white/40 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright & Bottom Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Awaitsi (Pty) Ltd. Building Technology for South African SMEs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
