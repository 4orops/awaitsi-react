import React from 'react';

/**
 * Renders the small Markdown subset used by Insights articles:
 *   ## Heading   → <h2> (with a stable id for in-page navigation)
 *   - item       → <ul><li>
 *   **bold**     → <strong>
 *   *italic*     → <em>
 *   blank-line separated text → <p>
 */

export type ArticleBlock =
  | { type: 'h2'; id: string; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export const slugifyHeading = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export const parseArticle = (source: string): ArticleBlock[] =>
  source
    .trim()
    .split(/\n\s*\n/)
    .map((chunk): ArticleBlock => {
      const block = chunk.trim();
      if (block.startsWith('## ')) {
        const text = block.slice(3).trim();
        return { type: 'h2', id: slugifyHeading(text), text };
      }
      const lines = block.split('\n');
      if (lines.every((l) => l.startsWith('- '))) {
        return { type: 'ul', items: lines.map((l) => l.slice(2).trim()) };
      }
      return { type: 'p', text: lines.join(' ') };
    });

const renderInline = (text: string): React.ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic text-white/90">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });

const ArticleBody: React.FC<{ blocks: ArticleBlock[] }> = ({ blocks }) => (
  <div className="text-[1.0625rem] sm:text-lg leading-[1.8] text-white/75 font-opensans">
    {blocks.map((block, i) => {
      if (block.type === 'h2') {
        return (
          <h2
            key={i}
            id={block.id}
            className="scroll-mt-32 mt-14 mb-5 text-2xl sm:text-[1.75rem] font-extrabold font-montserrat text-white tracking-tight leading-snug"
          >
            {block.text}
          </h2>
        );
      }
      if (block.type === 'ul') {
        return (
          <ul key={i} className="my-6 space-y-3">
            {block.items.map((item, j) => (
              <li key={j} className="relative pl-6">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.8em] w-2 h-2 -translate-y-1/2 rounded-full bg-awaitsi-cyan"
                />
                {renderInline(item)}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="my-6 first:mt-0">
          {renderInline(block.text)}
        </p>
      );
    })}
  </div>
);

export default ArticleBody;
