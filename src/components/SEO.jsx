import { Helmet } from 'react-helmet-async';

const BASE = 'https://tecovision.com';

export default function SEO({ title, description, path = '', type = 'website', article }) {
  const fullTitle = title
    ? `${title} | Tecovision`
    : 'Tecovision — Your Vision. Our Technology. Shared Success.';

  const desc = description ||
    'Tecovision is a software agency in India building web applications, mobile apps, and AI-powered systems for businesses that demand precision.';

  const url = `${BASE}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Tecovision" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />

      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            author: { '@type': 'Organization', name: 'Tecovision' },
            publisher: {
              '@type': 'Organization',
              name: 'Tecovision',
              url: BASE,
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          })}
        </script>
      )}
    </Helmet>
  );
}
