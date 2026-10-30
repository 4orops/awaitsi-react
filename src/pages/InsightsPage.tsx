import React, { useState } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Technology', 'Business', 'Digital Transformation', 'Website Tips', 'South African SMEs', 'Future Innovation'];

const articles = [
  {
    slug: 'why-sa-smes-need-websites',
    category: 'South African SMEs',
    title: 'Why Every South African SME Needs a Professional Website in 2026',
    excerpt: 'With over 70% of South African consumers researching businesses online before making purchasing decisions, having a professional web presence is no longer optional for SMEs.',
    readTime: '5 min read',
    date: 'July 2026'
  },
  {
    slug: 'custom-vs-template-websites',
    category: 'Technology',
    title: 'Custom Website vs Website Builder Template: Which is Right for Your Business?',
    excerpt: 'Exploring the key differences between bespoke custom development and off-the-shelf template builders — and which choice creates long-term business value.',
    readTime: '7 min read',
    date: 'July 2026'
  },
  {
    slug: 'digital-transformation-small-business',
    category: 'Digital Transformation',
    title: 'A Practical Guide to Digital Transformation for Small Business Owners',
    excerpt: 'Digital transformation doesn\'t require a massive budget. This guide explains where to start, what to prioritize, and how to measure ROI for small businesses.',
    readTime: '8 min read',
    date: 'June 2026'
  },
  {
    slug: 'website-speed-matters',
    category: 'Website Tips',
    title: 'Page Speed is a Business Problem, Not Just a Tech Problem',
    excerpt: 'Slow websites cost real revenue. We explain how Core Web Vitals directly impact your Google ranking, user conversion rate, and customer trust.',
    readTime: '6 min read',
    date: 'June 2026'
  },
  {
    slug: 'future-of-business-software',
    category: 'Future Innovation',
    title: 'The Future of Business Software for South African Enterprises',
    excerpt: 'How AI-powered automation, cloud infrastructure, and integrated SaaS platforms are reshaping the landscape for growing South African businesses.',
    readTime: '9 min read',
    date: 'May 2026'
  },
  {
    slug: 'choosing-right-tech-partner',
    category: 'Business',
    title: 'How to Choose the Right Technology Partner for Your Growing Business',
    excerpt: 'Key questions to ask, red flags to watch for, and what separates a genuine long-term technology partner from a short-term freelancer.',
    readTime: '6 min read',
    date: 'May 2026'
  }
];

const InsightsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Insights & Articles | Awaitsi (Pty) Ltd Tech Blog"
        description="Practical technology articles, digital transformation guides, and website tips for South African SMEs and growing businesses."
      />
      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Tech Insights & Articles
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight max-w-4xl">
            Practical Knowledge for <span className="text-awaitsi-green">Growing Businesses</span>.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
            Technology insights, digital transformation guides, and practical website advice designed for South African SMEs and entrepreneurs.
          </p>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-awaitsi-green text-awaitsi-gray-950 shadow-glow-green'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="p-6 rounded-2xl bg-awaitsi-gray-900 border border-white/10 hover:border-awaitsi-green/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-awaitsi-green px-2.5 py-1 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {article.category}
                    </span>
                    <span className="text-[10px] text-white/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold font-montserrat text-white leading-snug group-hover:text-awaitsi-green transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-sm text-white/60 leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="pt-5 border-t border-white/10 mt-5 flex items-center justify-between">
                  <span className="text-xs text-white/40 font-mono">{article.date}</span>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-awaitsi-green hover:underline"
                  >
                    Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-10 rounded-2xl bg-awaitsi-gray-900 border border-white/10 text-center space-y-6 max-w-2xl mx-auto">
            <BookOpen className="w-10 h-10 text-awaitsi-green mx-auto" />
            <h2 className="text-2xl font-bold font-montserrat text-white">Get Practical Tech Insights Delivered</h2>
            <p className="text-sm text-white/70">Join business owners receiving Awaitsi's monthly digital transformation newsletter for South African SMEs.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@business.co.za"
                className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-awaitsi-green"
              />
              <button className="px-5 py-3 bg-awaitsi-green text-awaitsi-gray-950 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-awaitsi-green-light transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export default InsightsPage;
