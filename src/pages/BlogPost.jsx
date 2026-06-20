import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import posts, { tagColor } from '../data/blogPosts';

const ha = (hex, a) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div className="px-5 md:px-16 max-w-container mx-auto pt-24 pb-32 text-center">
        <h1 className="font-grotesk text-display-mobile text-deep-black mb-4">Article Not Found</h1>
        <Link to="/blog" className="btn-primary inline-flex">Back to Blog</Link>
      </div>
    );
  }

  const color = tagColor[post.tag] || '#FF3B3B';

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        article={post}
        keywords={[post.tag, 'Tecovision blog', 'software development India', 'technology insights']}
        breadcrumbs={[{ name: 'Blog', path: '/blog' }, { name: post.tag, path: `/blog/${post.slug}` }]}
      />

      <div className="pb-24">
        {/* Back */}
        <div className="px-5 md:px-16 max-w-container mx-auto pt-10 mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-inter text-label-md uppercase tracking-widest text-on-surface-variant hover:text-deep-black transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="px-5 md:px-16 max-w-container mx-auto pb-12 border-b border-zinc-muted/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="font-inter text-label-sm uppercase tracking-widest px-3 py-1 rounded-lg border"
                style={{ background: ha(color, 0.10), borderColor: ha(color, 0.28), color }}
              >
                {post.tag}
              </span>
              <span className="font-inter text-label-sm text-on-surface-variant">{post.date}</span>
              <span className="font-inter text-label-sm text-zinc-muted">· {post.readTime} read</span>
            </div>

            <h1 className="font-grotesk text-display-mobile md:text-[3rem] text-deep-black leading-tight mb-6">
              {post.title}
            </h1>

            <p className="font-inter text-body-lg text-on-surface-variant leading-relaxed">
              {post.intro}
            </p>
          </div>
        </header>

        {/* Content */}
        <article className="px-5 md:px-16 max-w-container mx-auto py-12">
          <div className="max-w-3xl space-y-10">
            {post.sections.map(({ heading, body }, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px flex-shrink-0" style={{ background: color }} />
                    <h2 className="font-grotesk text-headline-lg text-deep-black">{heading}</h2>
                  </div>
                  <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Related posts */}
          <div className="max-w-3xl mt-16 pt-12 border-t border-zinc-muted/20">
            <Reveal>
              <h3 className="font-grotesk text-headline-xl text-deep-black mb-6">More Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {posts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((related) => {
                    const rc = tagColor[related.tag] || '#A1A1AA';
                    return (
                      <Link
                        key={related.slug}
                        to={`/blog/${related.slug}`}
                        className="group bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-sm hover:bg-white/75 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <span
                          className="font-inter text-label-sm uppercase tracking-widest px-2.5 py-1 rounded-lg border mb-3 inline-block"
                          style={{ background: ha(rc, 0.10), borderColor: ha(rc, 0.28), color: rc }}
                        >
                          {related.tag}
                        </span>
                        <h4 className="font-grotesk text-headline-md text-deep-black group-hover:text-signal-red transition-colors leading-snug">
                          {related.title}
                        </h4>
                      </Link>
                    );
                  })}
              </div>
            </Reveal>
          </div>
        </article>
      </div>
    </>
  );
}
