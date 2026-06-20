import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import posts, { tagColor } from '../data/blogPosts';

const ha = (hex, a) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
};

export default function Blog() {
  const [featured, ...rest] = posts;
  const featColor = tagColor[featured.tag] || '#FF3B3B';

  return (
    <>
      <SEO
        title="Blog — AI, Web Dev & Software Insights"
        description="The Tecovision engineering blog — expert articles on AI automation, web development, full stack, cloud infrastructure, and software industry trends in India."
        path="/blog"
        keywords={['software development blog India', 'AI development articles', 'web development tips India', 'technology blog Karnataka', 'Tecovision blog']}
        breadcrumbs={[{ name: 'Blog', path: '/blog' }]}
      />

      <div className="pb-24">
        {/* Header */}
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

        {/* Featured Post */}
        <section className="px-5 md:px-16 max-w-container mx-auto py-12 border-b border-zinc-muted/20">
          <Reveal>
            <Link to={`/blog/${featured.slug}`}>
              <article className="group relative bg-white/65 backdrop-blur-md border border-white/55 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, ${featColor}, ${ha(featColor, 0.2)} 70%, transparent)` }} />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-12">
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
            </Link>
          </Reveal>
        </section>

        {/* Post Grid */}
        <section className="px-5 md:px-16 max-w-container mx-auto py-12">
          <Reveal className="mb-8">
            <h2 className="font-grotesk text-headline-xl text-deep-black">More Articles</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rest.map(({ slug, tag, title, excerpt }, i) => {
              const color = tagColor[tag] || '#A1A1AA';
              return (
                <Reveal key={slug} delay={i * 60}>
                  <Link to={`/blog/${slug}`}>
                    <article className="group relative bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden hover:bg-white/75 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col shadow-sm h-full">
                      <div className="h-[3px] w-full flex-shrink-0" style={{ background: `linear-gradient(to right, ${color}, ${ha(color, 0.2)} 70%, transparent)` }} />
                      <div className="p-7 flex flex-col flex-1">
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
                        <div className="flex items-center justify-end mt-auto">
                          <div
                            className="w-8 h-8 flex items-center justify-center rounded-lg border group-hover:scale-110 transition-all duration-300 flex-shrink-0"
                            style={{ background: ha(color, 0.10), borderColor: ha(color, 0.28) }}
                          >
                            <ArrowUpRight size={13} style={{ color }} />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
