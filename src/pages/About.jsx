import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const values = [
  { num: '01', title: 'Precision Over Speed', desc: 'We take time to understand problems deeply before engineering solutions. Rushed code is technical debt.' },
  { num: '02', title: 'Transparency', desc: 'Weekly stakeholder updates, open source tooling preferences, and no black-box deliverables.' },
  { num: '03', title: 'Scalability First', desc: 'Every architecture decision is evaluated under projected load. We never build for today only.' },
  { num: '04', title: 'Minimal Interfaces', desc: 'Complexity belongs in the backend. User-facing surfaces should be clear, fast, and purposeful.' },
];

const founding = {
  date: 'April 6, 2026',
  headline: 'Built from a conviction that great software changes everything.',
  story: [
    'Tecovision was born from a simple but unshakeable belief — that the gap between ambitious ideas and the software that realises them should not exist. Too many businesses settle for products that merely function. We set out to build things that endure.',
    'On April 6, 2026, we made a commitment: to engineer with the same rigour that architects bring to structures meant to stand for centuries. Every line of code we write, every system we design, is held to that standard.',
    'We are not here to ship fast and move on. We are here to craft digital foundations that your business will still rely on a decade from now — foundations built with honesty, precision, and an unrelenting obsession with quality.',
  ],
};

const team = [
  { name: 'Ajaz Ahmed', role: 'Chief Executive Officer' },
  { name: 'Mohammad Mustaqeem', role: 'Chief Technology Officer' },
  { name: 'Ismail Hassan', role: 'Chief Marketing Officer' },
];

export default function About() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="px-5 md:px-16 max-w-container mx-auto pt-14 pb-16 border-b border-zinc-muted/20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-signal-red" />
              <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
                Who We Are
              </span>
            </div>
            <h1 className="font-grotesk text-display-mobile md:text-display-lg text-deep-black leading-none mb-6">
              Technically<br />Uncompromising.
            </h1>
            <p className="font-inter text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
              Tecovision is an engineering-first software agency. We exist to translate ambitious ideas into precision-built digital systems that endure.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="bg-white/60 backdrop-blur-lg border border-white/50 rounded-2xl p-8 shadow-sm space-y-4">
              <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">
                At Tecovision, we believe technology is more than code. It is a powerful tool for innovation, efficiency, and business growth.
              </p>
              <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">
                Our mission is to help businesses embrace digital transformation through modern software solutions, intelligent automation, and strategic technology consulting. Every project we undertake is guided by a commitment to quality, transparency, and long-term client success.
              </p>
              <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">
                As technology continues to evolve, we remain focused on delivering solutions that create measurable impact and lasting value. Thank you for considering Tecovision as your technology partner.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <span className="w-8 h-px bg-signal-red" />
                <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
                  Founder, Tecovision
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-16 border-b border-zinc-muted/20">
        <Reveal className="mb-14">
          <h2 className="font-grotesk text-headline-xl text-deep-black mb-3">Operating Principles</h2>
          <p className="font-inter text-body-md text-on-surface-variant max-w-xl">
            The values that govern every technical and business decision we make.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {values.map(({ num, title, desc }, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 hover:bg-white/75 transition-all duration-200 group shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="font-inter text-label-sm uppercase tracking-widest text-zinc-muted mt-1 flex-shrink-0">{num}</span>
                <div>
                  <h3 className="font-grotesk text-headline-lg text-deep-black mb-3">{title}</h3>
                  <p className="font-inter text-body-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-16 border-b border-zinc-muted/20">
        <Reveal className="mb-14">
          <h2 className="font-grotesk text-headline-xl text-deep-black mb-3">Our History</h2>
          <p className="font-inter text-body-md text-on-surface-variant max-w-xl">
            Where it all began.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Founding date callout */}
          <Reveal className="md:col-span-4">
            <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm sticky top-28">
              <span className="font-inter text-label-md uppercase tracking-widest text-signal-red mb-4 block">Founded</span>
              <p className="font-grotesk text-deep-black leading-none mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                April 6,<br />2026.
              </p>
              <div className="mt-6 pt-6 border-t border-zinc-muted/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-signal-red rounded-full flex-shrink-0" />
                  <span className="font-inter text-label-sm uppercase tracking-widest text-zinc-muted">Day One</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Story paragraphs */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <Reveal delay={80}>
              <p className="font-grotesk text-deep-black leading-snug" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                {founding.headline}
              </p>
            </Reveal>
            {founding.story.map((para, i) => (
              <Reveal key={i} delay={160 + i * 80}>
                <p className="font-inter text-body-lg text-on-surface-variant leading-relaxed">
                  {para}
                </p>
              </Reveal>
            ))}

            {/* Accent rule */}
            <Reveal delay={400}>
              <div className="flex items-center gap-4 pt-4">
                <span className="w-16 h-px bg-signal-red" />
                <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">Tecovision, 2026</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-16 border-b border-zinc-muted/20">
        <Reveal className="mb-14">
          <h2 className="font-grotesk text-headline-xl text-deep-black mb-3">Leadership</h2>
          <p className="font-inter text-body-md text-on-surface-variant max-w-xl">
            The engineers and operators who set the standard.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {team.map(({ name, role }, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 hover:bg-white/75 transition-all duration-200 group cursor-pointer shadow-sm"
            >
              <div className="w-12 h-12 bg-white/70 backdrop-blur-sm border border-white/60 rounded-xl mb-6 flex items-center justify-center shadow-sm">
                <span className="font-grotesk text-headline-lg font-bold text-deep-black">
                  {name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h3 className="font-grotesk text-headline-lg text-deep-black mb-1">{name}</h3>
              <p className="font-inter text-body-sm text-on-surface-variant">{role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="px-5 md:px-16 max-w-container mx-auto pt-16">
        <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-zinc-muted/20 pt-12">
          <div>
            <h3 className="font-grotesk text-headline-xl text-deep-black mb-2">Start a project with us.</h3>
            <p className="font-inter text-body-md text-on-surface-variant">Let's build something exceptional together.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
