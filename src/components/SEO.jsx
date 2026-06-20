import { Helmet } from 'react-helmet-async';

const BASE = 'https://www.tecovision.com';

export default function SEO({
  title,
  description,
  path = '',
  type = 'website',
  article,
  keywords = [],
  breadcrumbs = [],
  faq = [],
  serviceList = [],
}) {
  const fullTitle = title
    ? `${title} | Tecovision — Software Company India`
    : 'Tecovision | Software Development Company in Vijayapura, India';

  const desc = description ||
    'Tecovision is a software development company in Vijayapura, Karnataka, India. We build web applications, mobile apps, and AI-powered systems for businesses worldwide.';

  const url = `${BASE}${path}`;

  const baseKeywords = [
    'Tecovision',
    'software development company India',
    'web development Vijayapura',
    'software company Karnataka',
    'website development India',
    'mobile app development India',
    'AI development India',
    ...keywords,
  ];

  /* Breadcrumb schema */
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      ...breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: b.name,
        item: `${BASE}${b.path}`,
      })),
    ],
  } : null;

  /* FAQ schema */
  const faqSchema = faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

  /* Service schema */
  const serviceSchema = serviceList.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tecovision Services',
    itemListElement: serviceList.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.desc,
        provider: { '@type': 'Organization', name: 'Tecovision', url: BASE },
      },
    })),
  } : null;

  /* BlogPosting schema */
  const articleSchema = article ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    url,
    author: { '@type': 'Organization', name: 'Tecovision', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'Tecovision',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/favicon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={baseKeywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Tecovision" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Vijayapura, Karnataka, India" />
      <meta name="geo.position" content="16.8302;75.7100" />
      <meta name="ICBM" content="16.8302, 75.7100" />

      {/* Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}
    </Helmet>
  );
}
