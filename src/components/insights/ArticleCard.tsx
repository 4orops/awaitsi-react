import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { InsightArticle } from '../../data/insights';

interface ArticleCardProps {
  article: InsightArticle;
  /** Accent colour for the top bar and subject label. */
  accent?: 'cyan' | 'green';
  headingLevel?: 'h2' | 'h3';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, accent = 'cyan', headingLevel = 'h2' }) => {
  const Heading = headingLevel;
  const accentText = accent === 'green' ? 'text-awaitsi-green' : 'text-awaitsi-cyan';
  const accentBar = accent === 'green' ? 'bg-awaitsi-green' : 'bg-awaitsi-cyan';
  const accentBorder = accent === 'green' ? 'hover:border-awaitsi-green/40' : 'hover:border-awaitsi-cyan/40';

  return (
    <article
      className={`group relative flex flex-col h-full rounded-2xl bg-awaitsi-gray-900 border border-white/10 ${accentBorder} transition-colors overflow-hidden`}
    >
      <div aria-hidden="true" className={`h-1 w-full ${accentBar}`} />
      <div className="flex flex-col flex-1 p-7 sm:p-9">
        <p className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-5 ${accentText}`}>{article.subject}</p>

        <Heading className="text-2xl sm:text-3xl font-extrabold font-montserrat text-white leading-tight tracking-tight">
          <Link
            to={`/insights/${article.slug}`}
            className="after:absolute after:inset-0 focus:outline-none focus-visible:underline"
          >
            {article.title}
          </Link>
        </Heading>

        <p className="mt-5 text-base text-white/65 leading-relaxed flex-1">{article.excerpt}</p>

        <div className="mt-8 pt-6 border-t border-white/10">
          <span
            aria-hidden="true"
            className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${accentText} group-hover:gap-3 transition-all`}
          >
            Read Article <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
