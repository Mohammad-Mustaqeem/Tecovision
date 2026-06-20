import { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, Layers, Brain, Zap, HeadphonesIcon, GitBranch, BadgeDollarSign, Star, Quote, Building2, HeartPulse, Smile, Heart, GraduationCap, UtensilsCrossed, Rocket, Store, Globe, Award, Building } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';
import Reveal from '../components/Reveal';


const steps = [
  { num: '1', title: 'Discovery', desc: 'Deep technical requirements gathering and architectural planning.',        accent: false },
  { num: '2', title: 'Design',    desc: 'System design, data modelling, and minimal, high-end UI/UX prototyping.', accent: false },
  { num: '3', title: 'Build',     desc: 'Iterative, test-driven development with weekly stakeholder alignment.',    accent: false },
  { num: '4', title: 'Launch',    desc: 'Deployment, load testing, and continuous operational support.',            accent: true  },
];

const whyUs = [
  { icon: Layers,          title: 'Modern Tech Stack',     desc: "We build with React, Node.js, Python, and cloud-native tools: the same stack powering today's fastest-growing products." },
  { icon: Brain,           title: 'AI Expertise',          desc: 'From custom ML models to RAG pipelines and LLM integrations, AI is core to everything we build.' },
  { icon: Zap,             title: 'Fast Delivery',         desc: 'Agile sprints, clear milestones, and zero fluff. We ship production-ready features quickly without compromising quality.' },
  { icon: HeadphonesIcon,  title: 'Dedicated Support',     desc: 'A real team that stays with you post-launch: bug fixes, updates, and growth features handled proactively.' },
  { icon: GitBranch,       title: 'Scalable Architecture', desc: 'Systems designed to grow with you, from MVP to enterprise scale, without costly rewrites down the road.' },
  { icon: BadgeDollarSign, title: 'Transparent Pricing',   desc: 'No hidden costs and no surprises. Enterprise-grade quality with clear, honest pricing at every stage.' },
];

const industries = [
  { label: 'Real Estate',                    icon: Building2       },
  { label: 'Healthcare & Medical Clinics',   icon: HeartPulse      },
  { label: 'Dental Practices',              icon: Smile           },
  { label: 'Fertility Centers',             icon: Heart           },
  { label: 'Educational Institutions',       icon: GraduationCap   },
  { label: 'Restaurants & Hospitality',     icon: UtensilsCrossed },
  { label: 'Startups & Entrepreneurs',      icon: Rocket          },
  { label: 'Small & Medium Businesses',     icon: Store           },
  { label: 'Oman-Based Businesses',         icon: Globe           },
  { label: 'Professional Service Providers', icon: Award          },
  { label: 'Enterprise Organizations',       icon: Building        },
];

const testimonials = [
  { name: 'Meridian Capital',    role: 'Financial Services', content: 'Tecovision delivered exactly what our business needed: a scalable, high-performance solution that our team can genuinely rely on.',            rating: 5 },
  { name: 'Veridia Health',      role: 'Healthcare',         content: 'Their team understood our requirements clearly and built a system that improved our operations. Timely, professional, and technically excellent.', rating: 5 },
  { name: 'Structura Group',     role: 'Construction',       content: 'We received a powerful and intuitive platform that transformed our business processes. The engineering quality exceeded our expectations.',         rating: 5 },
  { name: 'AICS Institute',      role: 'Education',          content: 'Their precision engineering approach made a real difference. The platform handles our scale effortlessly and support has been outstanding.',        rating: 5 },
  { name: 'Solara Retail',       role: 'E-Commerce',         content: "The Tecovision team delivered on time and within budget. The attention to performance and detail is unlike any agency we've worked with.",          rating: 5 },
  { name: 'NovaDrive Logistics', role: 'Logistics',          content: "Reliable, scalable, and built for growth. Tecovision's engineers understood our infrastructure challenges immediately and solved them elegantly.",    rating: 5 },
];


export default function Home() {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <SEO
        path="/"
        description="Tecovision is a software agency in India building precision web apps, mobile apps, and AI systems. Your vision, our technology, shared success."
      />
    <div>
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="hero-glow relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: '#faf8ff' }}
      >
        <ParticleCanvas />
        <div className="hero-cursor-overlay absolute inset-0 pointer-events-none z-[1]" />

        <div className="relative z-10 px-5 md:px-16 max-w-container mx-auto w-full py-24 pt-36">
          <div className="text-center">
            {/* Label */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-10 h-px bg-signal-red" />
              <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
                Technology Partner
              </span>
              <span className="w-10 h-px bg-signal-red" />
            </div>

            {/* Main headline */}
            <h1
              className="font-grotesk text-deep-black mb-8"
              style={{ fontSize: 'clamp(2.6rem, 6.5vw, 7rem)', lineHeight: 1.05 }}
            >
              Your Vision.<br />
              Our Technology.<br />
              <span className="shimmer-text">Shared Success.</span>
            </h1>

            {/* Tagline row */}
            <div className="flex items-center justify-center gap-4 mb-9 flex-wrap">
              {['Envision', 'Innovate', 'Build', 'Grow'].reduce((acc, word, i) => {
                if (i > 0) acc.push(<span key={`d${i}`} className="w-2 h-2 rounded-full bg-signal-red flex-shrink-0" />);
                acc.push(
                  <span key={word} className="font-grotesk font-semibold text-deep-black" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.3rem)' }}>
                    {word}
                  </span>
                );
                return acc;
              }, [])}
            </div>

            {/* Description */}
            <p className="font-inter text-on-surface-variant leading-relaxed mb-10 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
              From startups to enterprises, we transform ideas into scalable digital products: software, mobile apps, AI automation and more, delivering measurable results at every stage.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary pulse-glow">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Us ────────────────────────────────────────────────────────── */}
      <section className="bg-white/20 backdrop-blur-sm border-y border-white/30 py-20">
        <div className="px-5 md:px-16 max-w-container mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-signal-red/10 border border-signal-red/20 font-inter text-label-md uppercase tracking-widest text-signal-red mb-4">
              Why Choose Us
            </span>
            <h2 className="font-grotesk text-headline-xl text-deep-black mb-4">Why Businesses Trust Tecovision</h2>
            <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">
              We combine deep technical expertise with a genuine commitment to your success.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 70}
                className="group relative bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-7 overflow-hidden hover:border-signal-red/25 hover:bg-white/75 transition-all duration-300 shadow-sm cursor-default"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal-red/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,59,59,0.05) 0%, transparent 70%)' }} />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-signal-red/10 flex items-center justify-center mb-5 group-hover:bg-signal-red/20 transition-all duration-300">
                    <Icon size={20} className="text-signal-red" />
                  </div>
                  <h3 className="font-grotesk text-headline-lg text-deep-black mb-2 group-hover:text-signal-red transition-colors duration-300">{title}</h3>
                  <p className="font-inter text-body-sm text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How We Work ───────────────────────────────────────────────────── */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-20">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-grotesk text-headline-xl text-deep-black mb-4">How We Work</h2>
          <p className="font-inter text-body-md text-on-surface-variant">
            A disciplined four-step process that takes every engagement from concept to production.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-6 left-16 right-16 h-px bg-zinc-muted/20 z-0" />
          {steps.map(({ num, title, desc, accent }, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className="relative z-10 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/75 hover:shadow-md transition-all duration-300 shadow-sm"
            >
              <div className={`w-12 h-12 flex items-center justify-center font-inter text-label-md rounded-xl mb-6 ${accent ? 'bg-signal-red text-pure-white' : 'bg-deep-black text-pure-white'}`}>
                {num}
              </div>
              <h4 className="font-inter text-label-md uppercase tracking-widest text-deep-black mb-3">{title}</h4>
              <p className="font-inter text-body-sm text-on-surface-variant">{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Testimonials (hidden — restore when ready) ───────────────────── */}
      {false && (
        <section className="bg-white/20 backdrop-blur-sm border-y border-white/30 py-20">
          <div className="px-5 md:px-16 max-w-container mx-auto">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-signal-red/10 border border-signal-red/20 font-inter text-label-md uppercase tracking-widest text-signal-red mb-4">
                Testimonials
              </span>
              <h2 className="font-grotesk text-headline-xl text-deep-black">What Our Clients Say</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map(({ name, role, content, rating }, i) => (
                <Reveal key={name} delay={i * 80} className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 relative shadow-sm flex flex-col">
                  <Quote size={28} className="text-signal-red/20 absolute top-6 right-6" />
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-signal-red fill-signal-red" />
                    ))}
                  </div>
                  <p className="font-inter text-body-sm text-on-surface-variant leading-relaxed mb-6 italic flex-1">"{content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-signal-red/15 flex items-center justify-center font-grotesk font-bold text-signal-red text-sm flex-shrink-0">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-inter text-label-md text-deep-black">{name}</p>
                      <p className="font-inter text-label-sm text-zinc-muted">{role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Industries We Serve ──────────────────────────────────────────── */}
      <section className="bg-white/20 backdrop-blur-sm border-y border-white/30 py-20">
        <div className="px-5 md:px-16 max-w-container mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-signal-red/10 border border-signal-red/20 font-inter text-label-md uppercase tracking-widest text-signal-red mb-4">
              Who We Work With
            </span>
            <h2 className="font-grotesk text-headline-xl text-deep-black mb-4">Industries We Serve</h2>
            <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">
              From healthcare to enterprise, we craft tailored digital solutions that meet the unique demands of each sector.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industries.map(({ label, icon: Icon }, i) => (
              <Reveal
                key={label}
                delay={i * 45}
                className="group flex items-center gap-4 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl px-6 py-5 hover:bg-white/80 hover:border-signal-red/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-signal-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-signal-red/20 transition-colors duration-300">
                  <Icon size={18} className="text-signal-red" />
                </div>
                <span className="font-inter text-body-md text-deep-black group-hover:text-signal-red transition-colors duration-300">{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Band ──────────────────────────────────────────────────────── */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-20">
        <Reveal className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-signal-red block rounded-full" />
              <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">Ready to Build</span>
            </div>
            <h2 className="font-grotesk text-headline-xl text-deep-black">Let's architect something exceptional.</h2>
          </div>
          <Link to="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-deep-black text-white font-inter text-label-md uppercase tracking-widest px-7 py-4 rounded-xl hover:bg-[#1b1b1b] transition-colors duration-200">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
    </>
  );
}
