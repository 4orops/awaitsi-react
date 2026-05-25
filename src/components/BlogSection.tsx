import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'How SA SMEs Can Grow with Custom Digital Tools',
    excerpt: 'Discover how custom software can give your small business a competitive edge in 2026.',
    category: 'Business Growth',
    link: '/blog/sme-growth-2026',
    accent: '#00BCD4',
  },
  {
    title: 'The Real Cost of Building a Website in South Africa',
    excerpt: 'A transparent guide to website pricing for local business owners.',
    category: 'Transparency',
    link: '/blog/website-cost-sa',
    accent: '#76FF03',
  },
  {
    title: 'AI for SMEs: 5 Practical Automation Tips Today',
    excerpt: 'Learn how to use AI to save time and money in your daily operations.',
    category: 'Innovation',
    link: '/blog/ai-for-sme',
    accent: '#00BCD4',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="bg-white overflow-hidden">

      {/* ── Header ── */}
      <div className="border-b border-awaitsi-gray-100 line-grid-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 py-20 lg:py-28 flex flex-col md:flex-row
                     md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-awaitsi-cyan rounded-full" />
              <span className="text-[10px] font-black text-awaitsi-gray-500 uppercase tracking-[0.25em]">
                Insights
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-awaitsi-gray-900
                           font-montserrat tracking-[-0.03em] leading-[0.9]">
              CONTENT<br />
              <span className="text-awaitsi-blue italic font-light">& resources.</span>
            </h2>
          </div>
          <Link
            to="/blog"
            id="blog-view-all"
            className="inline-flex items-center gap-3 px-8 py-4 border border-awaitsi-gray-200
                       text-awaitsi-gray-900 hover:bg-awaitsi-gray-900 hover:text-white
                       hover:border-awaitsi-gray-900 font-black text-[10px] uppercase tracking-[0.22em]
                       transition-all duration-300 group flex-shrink-0"
          >
            Browse All
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      {/* ── Article Grid ── */}
      <div className="max-w-6xl mx-auto px-4 py-4 pb-20">
        <div className="grid md:grid-cols-3 gap-px bg-awaitsi-gray-100 border-x border-b border-awaitsi-gray-100">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white group overflow-hidden"
            >
              <Link to={post.link} id={`blog-post-${idx}`} className="block h-full">
                {/* Colour bar */}
                <motion.div
                  className="h-0.5 w-full"
                  style={{ backgroundColor: post.accent }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="p-10">
                  {/* Category */}
                  <p
                    className="text-[10px] font-black uppercase tracking-[0.22em] mb-6"
                    style={{ color: post.accent }}
                  >
                    {post.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black font-montserrat text-awaitsi-gray-900
                                 mb-4 leading-tight tracking-tight group-hover:text-awaitsi-blue
                                 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-awaitsi-gray-500 leading-relaxed font-opensans mb-10">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <div
                    className="inline-flex items-center gap-3 font-black text-[10px] uppercase
                               tracking-[0.22em] transition-all duration-300 group-hover:gap-5"
                    style={{ color: post.accent }}
                  >
                    Read Article
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
