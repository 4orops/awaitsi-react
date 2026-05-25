import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-awaitsi-gray-950 text-white border-t border-white/10" aria-label="Site footer">

      {/* ── Giant Invite Text ── */}
      <div className="border-b border-white/10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-4 py-16 lg:py-20"
        >
          <p className="text-4xl md:text-5xl lg:text-6xl font-black font-montserrat text-white/10
                        tracking-[-0.02em] leading-[1] select-none hover:text-white/20 transition-colors duration-700">
            BUILD · SCALE · GROW
          </p>
        </motion.div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5">
                <img
                  src="/Artboard1.png"
                  alt="Awaitsi"
                  className="h-7 w-auto"
                />
              </div>
              <span className="font-black text-base font-montserrat tracking-[0.2em] uppercase">
                Awaitsi
              </span>
            </div>
            <p className="text-white/40 leading-relaxed font-opensans text-sm max-w-[200px]">
              Building technology with heart, for generations to come.
            </p>
            <div className="flex gap-2">
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
                  className="w-9 h-9 border border-white/10 flex items-center justify-center
                             text-white/40 hover:bg-awaitsi-green hover:text-awaitsi-gray-900
                             hover:border-awaitsi-green transition-all duration-300"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-[10px] uppercase tracking-[0.25em] text-white/50 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Applications',
                'CRM Solutions',
                'AI Integration',
                'Process Automation',
              ].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-white/40 hover:text-white text-sm font-opensans
                               transition-colors duration-200 text-left hover:translate-x-0.5
                               transform transition-transform"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-black text-[10px] uppercase tracking-[0.25em] text-white/50 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Our Values', id: 'about' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Contact Us', id: 'contact' },
              ].map(({ label, id }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/40 hover:text-white text-sm font-opensans
                               transition-colors duration-200 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-[10px] uppercase tracking-[0.25em] text-white/50 mb-6">
              Contact
            </h3>
            <ul className="space-y-4 font-opensans text-sm">
              <li className="text-white/40">South Africa</li>
              <li>
                <a
                  href="mailto:info@awaitsi.co.za"
                  className="text-white/40 hover:text-awaitsi-cyan transition-colors"
                >
                  info@awaitsi.co.za
                </a>
              </li>
              <li>
                <a
                  href="tel:+27655443979"
                  className="text-white/40 hover:text-awaitsi-cyan transition-colors"
                >
                  +27 65 544 3979
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between
                        items-center gap-4 text-[11px] text-white/25 font-opensans">
          <p>© {new Date().getFullYear()} Awaitsi (Pty) Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="hover:text-white/60 transition-colors uppercase tracking-[0.15em] font-bold"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white/60 transition-colors uppercase tracking-[0.15em] font-bold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
