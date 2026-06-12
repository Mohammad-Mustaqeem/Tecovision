import { useState } from 'react';
import { X, ArrowUpRight, ExternalLink } from 'lucide-react';
import Reveal from '../components/Reveal';

const U = (id) => `https://images.unsplash.com/${id}?w=640&h=400&fit=crop&auto=format`;

const projects = [
  {
    id: 1,
    title: 'Neural Analytics Engine',
    category: 'AI Projects',
    desc: 'An AI-powered analytics platform that predicts market trends and customer behaviour using deep learning models and real-time data pipelines.',
    image: U('photo-1677442135703-1787eea5ce01'),
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    result: '40% improvement in prediction accuracy for clients.',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web Applications',
    desc: 'A full-stack e-commerce platform with real-time analytics, inventory management, and a seamless multi-step checkout experience.',
    image: U('photo-1593508512255-86ab42a8e620'),
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    result: '300% increase in online sales within 6 months.',
  },
  {
    id: 3,
    title: 'DataViz Dashboard',
    category: 'Web Applications',
    desc: 'An interactive real-time data visualisation dashboard for monitoring business KPIs across departments with drill-down reporting.',
    image: U('photo-1550751827-4bd374c3f58b'),
    tech: ['React', 'D3.js', 'WebSockets', 'PostgreSQL'],
    result: 'Real-time insights for 200+ team members.',
  },
  {
    id: 4,
    title: 'HealthTrack Pro',
    category: 'Mobile Apps',
    desc: 'A cross-platform health monitoring app with real-time data sync, wearable device integration, and AI-based personal health insights.',
    image: U('photo-1576091160399-112ba8d25d1d'),
    tech: ['React Native', 'Firebase', 'TensorFlow Lite'],
    result: '100K+ downloads in the first quarter.',
  },
  {
    id: 5,
    title: 'FinanceApp UI Kit',
    category: 'UI/UX Projects',
    desc: 'A comprehensive UI/UX design system and Figma component library built for a fintech startup — covering onboarding, dashboards, and transactional flows.',
    image: U('photo-1611974789855-9c2a0a7236a3'),
    tech: ['Figma', 'Tailwind CSS', 'Framer', 'Design Systems'],
    result: 'Reduced design-to-dev handoff time by 60%.',
  },
  {
    id: 6,
    title: 'SmartFlow ERP',
    category: 'Enterprise Software',
    desc: 'End-to-end enterprise resource planning suite replacing 15+ manual workflows with intelligent automation, role-based access, and audit trails.',
    image: U('photo-1516116216624-53e697fedbea'),
    tech: ['Node.js', 'React', 'PostgreSQL', 'Apache Airflow'],
    result: '500+ hours saved per month in manual processes.',
  },
];

const categories = ['All', 'AI Projects', 'Web Applications', 'Mobile Apps', 'UI/UX Projects', 'Enterprise Software'];

/* ── Case Study Modal ─────────────────────────────────────────── */
function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-white border border-zinc-muted/30 rounded-xl flex items-center justify-center hover:bg-surface-variant transition-colors shadow-sm"
        >
          <X size={16} className="text-deep-black" />
        </button>

        {/* Hero image */}
        <div className="relative h-64 md:h-72 overflow-hidden rounded-t-2xl flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-deep-black font-inter text-label-sm uppercase tracking-widest px-2.5 py-1 rounded-lg">
            {project.category}
          </span>
          <h2 className="absolute bottom-5 left-6 right-14 font-grotesk text-headline-xl text-white leading-tight">
            {project.title}
          </h2>
        </div>

        {/* Body */}
        <div className="p-7 md:p-8">
          <p className="font-inter text-body-md text-on-surface-variant leading-relaxed mb-8">
            {project.desc}
          </p>

          {/* Technologies */}
          <div className="mb-7">
            <h4 className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-inter text-label-md px-3 py-1.5 bg-surface-container border border-zinc-muted/25 text-deep-black rounded-xl uppercase tracking-widest"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Result callout */}
          <div className="bg-signal-red/5 border border-signal-red/20 rounded-xl p-5 mb-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-signal-red rounded-full flex-shrink-0" />
              <span className="font-inter text-label-md uppercase tracking-widest text-signal-red">Key Result</span>
            </div>
            <p className="font-inter text-body-md text-deep-black font-medium">{project.result}</p>
          </div>

          {/* CTA */}
          <button
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 bg-deep-black text-white font-inter text-label-md uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-[#1b1b1b] transition-colors"
          >
            Close Case Study <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Project Card ─────────────────────────────────────────────── */
function ProjectCard({ project, onClick }) {
  return (
    <article
      className="group bg-white/65 backdrop-blur-md border border-white/55 rounded-2xl overflow-hidden cursor-pointer hover:border-signal-red/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col"
      onClick={() => onClick(project)}
    >
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
        <h3 className="font-grotesk text-headline-lg text-deep-black mb-2 group-hover:text-signal-red transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p className="font-inter text-body-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="font-inter text-[0.65rem] uppercase tracking-widest px-2 py-0.5 bg-white/80 border border-zinc-muted/30 text-on-surface-variant rounded-lg"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="font-inter text-label-sm text-zinc-muted">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-deep-black group-hover:text-signal-red transition-colors duration-300">
            <span className="font-inter text-label-md uppercase tracking-widest">View Details</span>
            <ArrowUpRight size={13} />
          </div>
          <div className="flex items-center gap-1 text-zinc-muted">
            <span className="font-inter text-label-sm uppercase tracking-widest">Live Demo</span>
            <ExternalLink size={11} />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
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
          A curated selection of our highest-impact digital work, from AI platforms to enterprise systems.
        </p>
      </section>

      {/* Filter tabs */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-8 border-b border-zinc-muted/10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 font-inter text-label-sm uppercase tracking-widest rounded-xl transition-all duration-200 ${
                active === cat
                  ? 'bg-deep-black text-pure-white border border-deep-black shadow-sm'
                  : 'bg-white/60 backdrop-blur-sm border border-white/50 text-on-surface-variant hover:bg-white/80 hover:text-deep-black shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} onClick={setSelected} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-inter text-body-md text-zinc-muted py-24">
            No projects in this category yet.
          </p>
        )}
      </section>

      {/* Case Study Modal */}
      {selected && (
        <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
