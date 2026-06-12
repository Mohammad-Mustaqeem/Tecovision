import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';

/* hex + alpha → rgba */
const ha = (hex, a) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
};

/* Tag → color mapping */
const tagColor = {
  'Generative AI': '#FF3B3B',
  'RAG':           '#818CF8',
  'Web Dev':       '#3B82F6',
  'AI Automation': '#10B981',
  'Full Stack':    '#F59E0B',
  'Cloud':         '#06B6D4',
};

const posts = [
  {
    id: 1,
    tag: 'Generative AI',
    title: "Generative AI in 2026: What's Actually Changing for Businesses",
    excerpt: 'Beyond the hype — a clear-eyed look at how Generative AI is reshaping products, workflows, and competitive advantage in 2026.',
    date: 'May 2026',
    readTime: '6 min',
    featured: true,
  },
  {
    id: 2,
    tag: 'RAG',
    title: 'RAG Frameworks Explained: Building AI That Knows Your Business',
    excerpt: "Retrieval-Augmented Generation is the architecture behind reliable AI answers. Here's how it works and when to use it.",
    date: 'Apr 2026',
    readTime: '8 min',
    featured: false,
  },
  {
    id: 3,
    tag: 'Web Dev',
    title: 'Web Development Trends in 2026: What Actually Matters',
    excerpt: "From React Server Components to edge rendering — the web development landscape has shifted. Here's what's worth your attention.",
    date: 'Apr 2026',
    readTime: '7 min',
    featured: false,
  },
  {
    id: 4,
    tag: 'AI Automation',
    title: 'AI Automation: Where It Saves Real Time and Where It Falls Short',
    excerpt: 'AI automation promises to eliminate repetitive work. An honest breakdown of where it delivers and where it still needs a human in the loop.',
    date: 'Mar 2026',
    readTime: '6 min',
    featured: false,
  },
  {
    id: 5,
    tag: 'Full Stack',
    title: 'The Modern Full Stack in 2026: A Practical Guide',
    excerpt: 'What does a production-ready full stack actually look like today? React, Node, Postgres, and the tools that make it all work together.',
    date: 'Mar 2026',
    readTime: '9 min',
    featured: false,
  },
  {
    id: 6,
    tag: 'Cloud',
    title: 'Cloud Infrastructure That Scales: Principles Over Platforms',
    excerpt: "AWS, GCP, Azure — the platform matters less than the principles. How to design cloud infrastructure that scales without ruining your budget.",
    date: 'Feb 2026',
    readTime: '7 min',
    featured: false,
  },
];

export default function Blog() {
  const [featured, ...rest] = posts;
  const featColor = tagColor[featured.tag] || '#FF3B3B';

  return (
    <div className="pb-24">
      {/* ─── Header ──────────────────────────────────────────────────────── */}
      <section className="px-5 md:px-16 max-w-container mx-auto pt-14 pb-12 border-b border-zinc-muted/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-signal-red" />
          <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
            Technical Insights
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="font-grotesk text-display-mobile md:text-display-lg text-deep-black leading-none mb-4">
              The Tecovision<br />Engineering Log
            </h1>
            <p className="font-inter text-body-lg text-on-surface-variant max-w-xl">
              Sharp takes and deep dives from our engineering team on AI, product architecture, and the craft of building great software.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 flex-shrink-0 md:max-w-xs">
            {Object.entries(tagColor).map(([topic, color]) => (
              <span
                key={topic}
                className="font-inter text-label-sm uppercase tracking-widest px-2.5 py-1 rounded-lg border"
                style={{ background: ha(color, 0.10), borderColor: ha(color, 0.28), color }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Post ───────────────────────────────────────────────── */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-12 border-b border-zinc-muted/20">
        <Reveal>
          <article className="group relative bg-white/65 backdrop-blur-md border border-white/55 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm">
            {/* Colored top accent line */}
            <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, ${featColor}, ${ha(featColor, 0.2)} 70%, transparent)` }} />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-12">
              {/* Left: badges + title + excerpt */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-inter text-label-sm uppercase tracking-widest px-3 py-1 rounded-lg border"
                    style={{ background: ha(featColor, 0.10), borderColor: ha(featColor, 0.28), color: featColor }}
                  >
                    Featured
                  </span>
                  <span className="font-inter text-label-sm uppercase tracking-widest text-on-surface-variant">· {featured.tag}</span>
                </div>

                <h2 className="font-grotesk text-2xl md:text-[2.2rem] text-deep-black font-bold leading-tight mb-4 group-hover:text-signal-red transition-colors duration-300 max-w-3xl">
                  {featured.title}
                </h2>
                <p className="font-inter text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>

              {/* Right: CTA */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300"
                  style={{ background: featColor }}
                >
                  <ArrowRight size={18} className="text-white" />
                </div>
                <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant group-hover:text-deep-black transition-colors duration-300">
                  Read Article
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* ─── Post Grid ───────────────────────────────────────────────────── */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-12">
        <Reveal className="mb-8">
          <h2 className="font-grotesk text-headline-xl text-deep-black">More Articles</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map(({ id, tag, title, excerpt }, i) => {
            const color = tagColor[tag] || '#A1A1AA';
            return (
              <Reveal
                key={id}
                delay={i * 60}
                className="group relative bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden hover:bg-white/75 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col shadow-sm"
              >
                {/* Colored top-border accent */}
                <div className="h-[3px] w-full flex-shrink-0" style={{ background: `linear-gradient(to right, ${color}, ${ha(color, 0.2)} 70%, transparent)` }} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Tag pill */}
                  <div className="mb-5">
                    <span
                      className="font-inter text-label-sm uppercase tracking-widest px-2.5 py-1 rounded-lg border"
                      style={{ background: ha(color, 0.10), borderColor: ha(color, 0.28), color }}
                    >
                      {tag}
                    </span>
                  </div>

                  <h3 className="font-grotesk text-headline-lg text-deep-black mb-3 leading-tight group-hover:underline decoration-1 flex-1">
                    {title}
                  </h3>
                  <p className="font-inter text-body-sm text-on-surface-variant leading-relaxed mb-6">
                    {excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-end mt-auto">
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-lg border group-hover:scale-110 transition-all duration-300 flex-shrink-0"
                      style={{ background: ha(color, 0.10), borderColor: ha(color, 0.28) }}
                    >
                      <ArrowUpRight size={13} style={{ color }} />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {posts.length > 6 && (
          <Reveal delay={200} className="mt-10 flex justify-center">
            <button className="border border-deep-black text-deep-black font-inter text-label-md uppercase tracking-widest px-8 py-3 rounded-xl hover:bg-deep-black hover:text-pure-white transition-colors duration-300">
              Load More Articles
            </button>
          </Reveal>
        )}
      </section>

    </div>
  );
}
