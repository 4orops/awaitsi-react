import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import ArticleCard from '../components/insights/ArticleCard';
import { insights, SITE_URL } from '../data/insights';

const InsightsPage: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Insights | Awaitsi (Pty) Ltd"
        description="Practical perspectives from Awaitsi on how South African businesses use dependable digital systems to work better and serve customers well."
        canonical={`${SITE_URL}/insights`}
      />
      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-awaitsi-green/10 border border-awaitsi-green/30 text-awaitsi-green text-xs font-bold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Knowledge Sharing
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-white tracking-tight max-w-4xl">
            Insights
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
            At Awaitsi we share what we learn building digital systems for South African businesses: the real problems
            they face, and the practical, human-centred ways technology helps solve them.
          </p>
        </section>

        {/* Articles */}
        <section aria-label="Articles" className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((article, idx) => (
              <motion.li
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <ArticleCard article={article} accent={idx % 2 === 0 ? 'cyan' : 'green'} />
              </motion.li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export default InsightsPage;
