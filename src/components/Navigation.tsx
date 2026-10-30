import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onQuote?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const solutionsMegaMenu = [
    {
      title: 'DIGITAL SYSTEMS',
      path: '/services/digital-systems',
      links: [
        { name: 'Website Development', path: '/services/digital-systems#websites' },
        { name: 'Mobile Apps', path: '/services/digital-systems#apps' },
        { name: 'E-commerce', path: '/services/digital-systems#ecommerce' },
        { name: 'Custom Software', path: '/services/digital-systems#software' },
        { name: 'Digital Platforms', path: '/services/digital-systems#platforms' },
      ]
    },
    {
      title: 'BUSINESS SYSTEMS',
      path: '/services/business-systems',
      links: [
        { name: 'CRM', path: '/services/business-systems#crm' },
        { name: 'Business Operations', path: '/services/business-systems#operations' },
        { name: 'Workflows', path: '/services/business-systems#workflows' },
        { name: 'Customer Systems', path: '/services/business-systems#customer' },
      ]
    },
    {
      title: 'DATA & INTELLIGENCE',
      path: '/services/data-intelligence',
      links: [
        { name: 'Power BI', path: '/services/data-intelligence#powerbi' },
        { name: 'Dashboards', path: '/services/data-intelligence#dashboards' },
        { name: 'Analytics', path: '/services/data-intelligence#analytics' },
        { name: 'Reporting', path: '/services/data-intelligence#reporting' },
        { name: 'Data Strategy', path: '/services/data-intelligence#strategy' },
      ]
    },
    {
      title: 'AI & AUTOMATION',
      path: '/services/ai-automation',
      links: [
        { name: 'AI Assistants', path: '/services/ai-automation#assistants' },
        { name: 'AI Automation', path: '/services/ai-automation#automation' },
        { name: 'Document Intelligence', path: '/services/ai-automation#document' },
        { name: 'Knowledge Systems', path: '/services/ai-automation#knowledge' },
      ]
    },
    {
      title: 'DIGITAL TRANSFORMATION',
      path: '/services/digital-transformation',
      links: [
        { name: 'Digital Assessment', path: '/digital-assessment' },
        { name: 'Strategy Roadmaps', path: '/services/digital-transformation#roadmaps' },
        { name: 'AI Readiness', path: '/services/digital-transformation#ai-readiness' },
        { name: 'Data Maturity', path: '/services/digital-transformation#data-maturity' },
      ]
    }
  ];

  const primaryNavLinks = [
    { name: 'Solutions', path: '#', isDropdown: true, type: 'solutions' },
    { name: 'Work', path: '/work' },
    { name: 'Approach', path: '/approach' },
    { name: 'Business Cloud', path: '/business-cloud' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-300 px-3 sm:px-6 ${
        scrolled ? 'top-2 sm:top-3' : 'top-4 sm:top-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-awaitsi-gray-950/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
        
        {/* Brand Logo */}
        <Link
          to="/"
          aria-label="Awaitsi Home"
          className="flex items-center shrink-0 py-0.5"
        >
          <img
            src="/Artboard1.png"
            alt="Awaitsi logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap">
          {primaryNavLinks.map((link) => {
            if (link.isDropdown && link.type === 'solutions') {
              return (
                <div
                  key={link.name}
                  className="relative flex items-center group"
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                >
                  <button
                    className={`px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1 rounded-lg ${
                      solutionsDropdownOpen || location.pathname.includes('/services')
                        ? 'text-awaitsi-green bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solutionsDropdownOpen ? 'rotate-180 text-awaitsi-green' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {solutionsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] bg-awaitsi-gray-950 border border-white/10 rounded-2xl p-6 shadow-2xl mt-2 z-50 hidden lg:grid grid-cols-5 gap-6"
                      >
                        {solutionsMegaMenu.map((column) => (
                          <div key={column.title} className="flex flex-col">
                            <Link 
                              to={column.path}
                              className="text-[10px] font-bold uppercase tracking-widest text-awaitsi-green pb-3 mb-3 border-b border-white/10 hover:text-white transition-colors"
                            >
                              {column.title}
                            </Link>
                            <div className="flex flex-col gap-3">
                              {column.links.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="text-[13px] text-white/70 hover:text-awaitsi-cyan hover:translate-x-1 transition-all flex items-center gap-1"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center rounded-lg ${
                  isActive(link.path)
                    ? 'text-awaitsi-green bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/digital-assessment"
            className="hidden sm:flex items-center gap-2 bg-awaitsi-green text-awaitsi-gray-950 px-5 py-2.5 rounded-xl font-extrabold text-[11px] uppercase tracking-wider hover:bg-awaitsi-green-light transition-all shadow-glow-green"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Digital Assessment</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-awaitsi-green transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 bg-awaitsi-gray-950 border border-white/10 rounded-2xl p-6 overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-awaitsi-green border-b border-white/10 pb-2">Solutions</div>
                {solutionsMegaMenu.map(col => (
                  <div key={col.title} className="pl-2">
                    <Link to={col.path} className="text-sm font-bold text-white mb-2 block">{col.title}</Link>
                    <div className="flex flex-col gap-2 pl-2 border-l border-white/10">
                      {col.links.map(link => (
                        <Link key={link.name} to={link.path} className="text-xs text-white/60 hover:text-awaitsi-cyan">
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                {primaryNavLinks.filter(l => !l.isDropdown).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-sm font-bold uppercase tracking-wider text-white/80 hover:text-awaitsi-green"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/digital-assessment"
                  className="w-full py-3.5 bg-awaitsi-green text-awaitsi-gray-950 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-glow-green"
                >
                  <Sparkles className="w-4 h-4" /> Book Digital Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
