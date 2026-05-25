import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  onQuote: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Story', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-500 px-4 pointer-events-none ${scrolled ? 'top-3' : 'top-6'}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* ── Logo ── */}
        <div className="pointer-events-auto">
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Awaitsi — Home"
            className="flex items-center gap-3 bg-awaitsi-gray-900/90 backdrop-blur-xl px-4 py-2.5
                       border border-white/10 group hover:border-awaitsi-green/30 transition-all duration-300"
          >
            <img
              src="/Artboard1.png"
              alt="Awaitsi logo"
              className="h-6 w-auto grayscale contrast-200 group-hover:grayscale-0 transition-all duration-500"
            />
            <span className="font-montserrat font-black text-white tracking-[0.25em] uppercase text-[11px]">
              Awaitsi
            </span>
          </motion.a>
        </div>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-0 bg-awaitsi-gray-900/90 backdrop-blur-xl
                        border border-white/10 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-6 py-3.5 font-opensans font-bold text-[10px] uppercase tracking-[0.22em]
                         text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200
                         border-r border-white/10 last:border-r-0"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ── CTA & Mobile Toggle ── */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <motion.button
            id="nav-cta-button"
            onClick={onQuote}
            whileHover={{ scale: 1.02, backgroundColor: '#76FF03' }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-3 bg-white text-awaitsi-gray-900
                       px-7 py-3.5 font-black text-[10px] uppercase tracking-[0.22em]
                       transition-colors duration-300 pulse-green"
          >
            Start Project
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </motion.button>

          <button
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden bg-awaitsi-gray-900/90 backdrop-blur-xl border border-white/10
                       px-5 py-3.5 text-white text-[10px] font-black font-montserrat uppercase
                       tracking-[0.22em] relative z-[70] hover:border-awaitsi-green/30 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] md:hidden flex flex-col bg-awaitsi-gray-950 pointer-events-auto line-grid"
          >
            {/* Top bar */}
            <div className="px-6 pt-6 flex items-center justify-between border-b border-white/10 pb-6">
              <span className="font-montserrat font-black text-white tracking-[0.25em] uppercase text-[11px]">
                Awaitsi
              </span>
              <span className="text-white/30 font-bold text-[10px] uppercase tracking-[0.2em]">
                Menu
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-col flex-1 justify-center px-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group flex items-center justify-between py-8 border-b border-white/10
                             text-4xl sm:text-5xl font-montserrat font-black text-white/80
                             hover:text-awaitsi-green transition-colors tracking-tight"
                >
                  <span>{link.name}</span>
                  <span className="text-white/20 group-hover:text-awaitsi-green text-2xl transition-all
                                   group-hover:translate-x-2 duration-300">
                    →
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 py-8 border-t border-white/10"
            >
              <button
                id="mobile-cta-button"
                onClick={() => { onQuote(); setMobileMenuOpen(false); }}
                className="w-full py-5 bg-white text-awaitsi-gray-900 font-black text-sm
                           uppercase tracking-[0.2em] hover:bg-awaitsi-green transition-colors duration-300"
              >
                Start a Project →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
