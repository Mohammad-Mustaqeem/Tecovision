import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const U = (id) => `https://images.unsplash.com/${id}?w=640&h=400&fit=crop&auto=format`;

const services = [
  {
    title: 'Website Development',
    desc: 'Fast, responsive, SEO-optimised websites and web applications engineered to convert visitors and scale with your business.',
    image: U('photo-1555066931-4365d14bab8c'),
    features: ['React / Next.js', 'SEO Optimised', 'CMS Integration', 'Performance-First'],
  },
  {
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications for iOS and Android with smooth UX and deep device integration.',
    image: U('photo-1607252650355-f7fd0460ccdb'),
    features: ['iOS & Android', 'React Native / Flutter', 'Offline Support', 'Push Notifications'],
  },
  {
    title: 'Custom Software Development',
    desc: 'Bespoke software solutions built to your exact specifications, from MVPs to full enterprise platforms.',
    image: U('photo-1504639725590-34d0984388bd'),
    features: ['End-to-End Build', 'Scalable Architecture', 'API Integration', 'Cloud-Native'],
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centred design that looks stunning and feels intuitive, from wireframes and prototypes to production-ready assets.',
    image: U('photo-1561070791-2526d30994b5'),
    features: ['Figma Prototypes', 'Design Systems', 'User Research', 'Accessibility'],
  },
  {
    title: 'E-commerce Development',
    desc: 'Powerful online stores with seamless checkout, inventory management, and conversion-focused design at every touchpoint.',
    image: U('photo-1526374965328-7f61d4dc18c5'),
    features: ['Custom Storefront', 'Payment Integration', 'Inventory Management', 'Analytics'],
  },
  {
    title: 'SEO',
    desc: 'Data-driven search engine optimisation that drives organic traffic and improves your visibility where it matters most.',
    image: U('photo-1460925895917-afdab827c52f'),
    features: ['Technical SEO', 'Content Strategy', 'Keyword Research', 'Link Building'],
  },
  {
    title: 'Digital Marketing',
    desc: 'Result-driven marketing strategies across every channel that grow your audience and turn attention into measurable revenue.',
    image: U('photo-1551288049-bebda4e38f71'),
    features: ['Social Media', 'Paid Ads (PPC)', 'Email Campaigns', 'Analytics & Reporting'],
  },
  {
    title: 'AI Automation',
    desc: 'LLM-powered tools, custom AI models, and intelligent workflows that eliminate manual bottlenecks and unlock new capability.',
    image: U('photo-1531746790731-6c087fecd65a'),
    features: ['LLM Integration', 'RAG Pipelines', 'AI Chatbots', 'Prompt Engineering'],
  },
  {
    title: 'Business Automation',
    desc: 'End-to-end automation of your business processes, from data entry to complex multi-step workflows across every department.',
    image: U('photo-1518770660439-4636190af475'),
    features: ['Workflow Automation', 'CRM Integration', 'Reporting Dashboards', 'Process Mapping'],
  },
  {
    title: 'Maintenance & Support',
    desc: 'Ongoing technical support, performance monitoring, and proactive updates to keep your digital products running flawlessly.',
    image: U('photo-1558494949-ef010cbdcc31'),
    features: ['24/7 Monitoring', 'Bug Fixes', 'Performance Updates', 'Security Patches'],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Software Development Services"
        description="Web development, mobile apps, AI automation, UI/UX design, and enterprise software — Tecovision delivers precision-engineered digital solutions from Vijayapura, India."
        path="/services"
        keywords={['web development services India', 'mobile app development India', 'AI automation services', 'enterprise software development', 'UI UX design India', 'software development services Karnataka']}
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        serviceList={[
          { name: 'Web Development', desc: 'Custom web applications and websites built with React, Node.js, and modern frameworks for businesses of all sizes.' },
          { name: 'Mobile App Development', desc: 'Cross-platform mobile applications for iOS and Android using React Native with seamless user experiences.' },
          { name: 'AI Integration & Automation', desc: 'AI-powered chatbots, RAG pipelines, and workflow automation systems that save time and increase efficiency.' },
          { name: 'UI/UX Design', desc: 'User interface and experience design that converts visitors into customers through clear, purposeful interfaces.' },
          { name: 'Enterprise Software', desc: 'Scalable enterprise applications, ERP systems, and internal tools that replace manual workflows.' },
          { name: 'Technical Consulting', desc: 'Architecture reviews, technology strategy, and digital transformation consulting for growing businesses.' },
        ]}
      />
    <div className="pb-24">
      {/* Header */}
      <section className="px-5 md:px-16 max-w-container mx-auto pt-14 pb-16 border-b border-zinc-muted/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-signal-red" />
          <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
            Our Capabilities
          </span>
        </div>
        <h1 className="font-grotesk text-display-mobile md:text-display-lg text-deep-black mb-6 leading-none max-w-3xl">
          What We<br />Build for You.
        </h1>
        <p className="font-inter text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          From intelligent websites to AI-powered automation, Tecovision delivers end-to-end digital solutions that drive real business outcomes.
        </p>
      </section>

      {/* Service grid */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, desc, image, features }, i) => (
            <Reveal
              key={title}
              delay={i * 60}
              className="group bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden hover:bg-white/75 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-pointer"
            >
              {/* Service image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="font-grotesk text-headline-lg text-deep-black mb-2 group-hover:text-signal-red transition-colors duration-300">{title}</h3>
                <p className="font-inter text-body-sm text-on-surface-variant leading-relaxed mb-5">{desc}</p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {features.map((f) => (
                    <span
                      key={f}
                      className="font-inter text-label-sm uppercase tracking-widest px-2 py-1 bg-white/80 border border-zinc-muted/30 text-on-surface-variant rounded-lg"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-on-surface-variant group-hover:text-deep-black group-hover:gap-2 transition-all duration-200">
                  <span className="font-inter text-label-md uppercase tracking-widest">Learn more</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
    </>
  );
}
