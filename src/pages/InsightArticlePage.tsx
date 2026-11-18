import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';
import ArticleBody, { parseArticle, type ArticleBlock } from '../components/insights/ArticleBody';
import ArticleCard from '../components/insights/ArticleCard';
import { getInsightBySlug, insights, insightUrl, SITE_URL } from '../data/insights';
import NotFoundPage from './NotFoundPage';

const InsightArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getInsightBySlug(slug);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const blocks = useMemo(() => (article ? parseArticle(article.body) : []), [article]);

  if (!article) return <NotFoundPage />;

  // The opening paragraph is presented as the article's lede.
  const [lede, ...rest] = blocks;
  const ledeText = lede && lede.type === 'p' ? lede.text : null;
  const bodyBlocks = ledeText ? rest : blocks;
  const sections = bodyBlocks.filter((b): b is Extract<ArticleBlock, { type: 'h2' }> => b.type === 'h2');
  const others = insights.filter((a) => a.slug !== article.slug);
  const url = insightUrl(article.slug);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    name: article.seoTitle,
    description: article.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${SITE_URL}/Artboard1.png`,
    inLanguage: 'en-ZA',
    isPartOf: { '@type': 'Blog', name: 'Awaitsi Insights', url: `${SITE_URL}/insights` },
    publisher: {
      '@type': 'Organization',
      name: 'Awaitsi (Pty) Ltd',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/Artboard1.png` },
    },
  };

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title={article.seoTitle}
        description={article.description}
        canonical={url}
        ogType="article"
        structuredData={structuredData}
      />
      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main className="pt-28 pb-20">
        <article aria-labelledby="article-title">
          {/* ── Header ── */}
          <header className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
                <li>
                  <Link
                    to="/insights"
                    id="article-back-to-insights"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-awaitsi-green transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Insights
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white/40 normal-case tracking-normal font-semibold truncate max-w-[60vw]">
                  {article.title}
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-awaitsi-cyan mb-5">
                {article.subject}
              </p>
              <h1
                id="article-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat text-white tracking-tight leading-[1.05]"
              >
                {article.title}
              </h1>
              {ledeText && (
                <p className="mt-8 text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl">{ledeText}</p>
              )}
            </div>
            <div aria-hidden="true" className="mt-12 h-px bg-gradient-to-r from-awaitsi-cyan/60 via-white/10 to-transparent" />
          </header>

          {/* ── Body ── */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
            {sections.length > 0 && (
              <aside className="hidden lg:block">
                <nav aria-label="On this page" className="sticky top-32">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-4">On this page</p>
                  <ul className="space-y-3 border-l border-white/10">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block -ml-px pl-4 border-l border-transparent text-sm text-white/55 hover:text-white hover:border-awaitsi-cyan transition-colors leading-snug"
                        >
                          {s.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            <div className="max-w-[68ch]">
              <ArticleBody blocks={bodyBlocks} />

              {/* ── Related ── */}
              {article.related.length > 0 && (
                <nav aria-label="Related pages" className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-4">Related</p>
                  <ul className="flex flex-wrap gap-3">
                    {article.related.map((r) => (
                      <li key={r.to}>
                        <Link
                          to={r.to}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/75 hover:text-white hover:border-awaitsi-cyan/50 transition-colors"
                        >
                          {r.label} <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </article>

        {/* ── Continue reading ── */}
        {others.length > 0 && (
          <section aria-labelledby="continue-reading" className="max-w-7xl mx-auto px-4 sm:px-6 mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <h2 id="continue-reading" className="text-2xl font-extrabold font-montserrat text-white tracking-tight">
                Continue reading
              </h2>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-awaitsi-green transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Insights
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {others.map((o) => (
                <ArticleCard key={o.slug} article={o} headingLevel="h3" accent="green" />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
};

export default InsightArticlePage;
