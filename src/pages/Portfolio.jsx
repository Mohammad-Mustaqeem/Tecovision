import { ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

const U = (id) => `https://images.unsplash.com/${id}?w=640&h=400&fit=crop&auto=format`;

const projects = [
  {
    id: 1,
    title: 'Dental Clinic',
    category: 'Healthcare',
    desc: 'A modern, conversion-focused website for a dental clinic — featuring service listings, appointment booking flow, patient testimonials, and a clean professional aesthetic built to establish trust.',
    image: U('photo-1629909613654-28e377c37b09'),
    tech: ['React', 'Tailwind CSS', 'Vite'],
    href: 'https://dental-clinic-demo-taupe.vercel.app/',
  },
  {
    id: 2,
    title: 'Real Estate',
    category: 'Real Estate',
    desc: 'A premium property listing platform designed for real estate agencies — with property search, filterable listings, detailed property pages, and a sleek UI built to drive enquiries.',
    image: U('photo-1560518883-ce09059eeffa'),
    tech: ['React', 'Tailwind CSS', 'Vite'],
    href: 'https://realestatewebsite-sage.vercel.app/',
  },
  {
    id: 3,
    title: 'IVF Clinic',
    category: 'Healthcare',
    desc: 'A compassionate and professional web presence for an IVF and fertility clinic — covering treatments, doctor profiles, patient journey, and consultation booking in a warm, reassuring design.',
    image: U('photo-1579154204601-01588f351e67'),
    tech: ['React', 'Tailwind CSS', 'Netlify'],
    href: 'https://ivfclinic.netlify.app/',
  },
];

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Real websites built by Tecovision — dental clinic, real estate, IVF clinic. See our work and the quality we deliver for clients."
        path="/portfolio"
      />
    <div className="pb-24">
      {/* Header */}
      <section className="px-5 md:px-16 max-w-container mx-auto pt-14 pb-12 border-b border-zinc-muted/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-signal-red" />
          <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">Our Work</span>
        </div>
        <h1 className="font-grotesk text-display-mobile md:text-display-lg text-deep-black mb-4 leading-none">
          Featured<br />Projects.
        </h1>
        <p className="font-inter text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
          A curated selection of our work — real websites delivered for real clients across healthcare and real estate.
        </p>
      </section>

      {/* Grid */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <article className="group bg-white/65 backdrop-blur-md border border-white/55 rounded-2xl overflow-hidden hover:border-signal-red/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden h-52 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-deep-black font-inter text-label-sm uppercase tracking-widest px-2.5 py-1 rounded-lg shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-grotesk text-headline-lg text-deep-black mb-2 group-hover:text-signal-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-inter text-body-sm text-on-surface-variant leading-relaxed mb-5 flex-1">
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-inter text-[0.65rem] uppercase tracking-widest px-2 py-0.5 bg-white/80 border border-zinc-muted/30 text-on-surface-variant rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 font-inter text-label-md uppercase tracking-widest text-deep-black hover:text-signal-red transition-colors duration-200"
                  >
                    Visit Website <ExternalLink size={13} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
