import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const projectTypes = ['System Architecture', 'Web Development', 'Mobile App', 'AI Integration', 'Data Infrastructure', 'Technical Consulting'];

export default function Contact() {
  const [selected, setSelected] = useState('System Architecture');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <SEO
        title="Contact Us — Start a Project"
        description="Contact Tecovision to start your software project. We respond within 24 hours. Based in Vijayapura, Karnataka, India. Web development, mobile apps, AI — let's build together."
        path="/contact"
        keywords={['contact Tecovision', 'hire software developer India', 'web development company contact', 'software project inquiry India', 'get website built India']}
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      />
    <div className="pb-24">
      {/* Header */}
      <section className="px-5 md:px-16 max-w-container mx-auto pt-14 pb-12 border-b border-zinc-muted/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-8 bg-signal-red rounded-full" />
          <h1 className="font-grotesk text-display-mobile md:text-display-lg text-deep-black leading-none">
            Initiate Contact
          </h1>
        </div>
        <p className="font-inter text-body-lg text-on-surface-variant max-w-lg leading-relaxed ml-5">
          Precision engineering begins with clear communication. Define your requirements below, and our technical team will respond within 24 hours.
        </p>
      </section>

      {/* Main content */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Form */}
          <Reveal className="md:col-span-7">
            {sent ? (
              <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-12 text-center shadow-sm">
                <div className="w-12 h-12 bg-deep-black flex items-center justify-center mx-auto mb-6 rounded-xl">
                  <span className="text-pure-white text-xl font-bold">✓</span>
                </div>
                <h2 className="font-grotesk text-headline-xl text-deep-black mb-3">Transmission Received</h2>
                <p className="font-inter text-body-md text-on-surface-variant">
                  We'll analyse your requirements and respond within 24 hours with initial thoughts and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-inter text-label-md uppercase tracking-widest text-on-surface-variant mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className="w-full border border-zinc-muted/40 bg-white/70 backdrop-blur-sm px-4 py-3 font-inter text-body-md text-on-surface outline-none focus:border-deep-black transition-colors placeholder:text-zinc-muted rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter text-label-md uppercase tracking-widest text-on-surface-variant mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="w-full border border-zinc-muted/40 bg-white/70 backdrop-blur-sm px-4 py-3 font-inter text-body-md text-on-surface outline-none focus:border-deep-black transition-colors placeholder:text-zinc-muted rounded-xl"
                    />
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label className="block font-inter text-label-md uppercase tracking-widest text-on-surface-variant mb-3">
                    Project Classification
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelected(type)}
                        className={`font-inter text-label-md uppercase tracking-widest px-4 py-2 rounded-xl transition-all duration-200 ${
                          selected === type
                            ? 'bg-deep-black text-pure-white'
                            : 'bg-white/60 backdrop-blur-sm border border-white/50 text-on-surface-variant hover:bg-white/80 hover:text-deep-black shadow-sm'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block font-inter text-label-md uppercase tracking-widest text-on-surface-variant mb-2">
                    Estimated Budget Range
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder="e.g. ₹50,000 · $5,000 · To be scoped · Flexible"
                    className="w-full border border-zinc-muted/40 bg-white/70 backdrop-blur-sm px-4 py-3 font-inter text-body-md text-on-surface outline-none focus:border-deep-black transition-colors placeholder:text-zinc-muted rounded-xl"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-inter text-label-md uppercase tracking-widest text-on-surface-variant mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your project, requirements, timeline, and any relevant details..."
                    className="w-full border border-zinc-muted/40 bg-white/70 backdrop-blur-sm px-4 py-3 font-inter text-body-md text-on-surface outline-none focus:border-deep-black transition-colors placeholder:text-zinc-muted resize-none rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto justify-center"
                >
                  Transmit Protocol <ArrowRight size={16} />
                </button>
              </form>
            )}
          </Reveal>

          {/* Contact info */}
          <div className="md:col-span-5 space-y-4">
            <Reveal delay={100} className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-signal-red rounded-full" />
                <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
                  Global Headquarters
                </span>
              </div>
              <div className="flex items-start gap-3 text-on-surface-variant">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <address className="not-italic font-inter text-body-md text-on-surface leading-relaxed">
                  B.M. Nagthan Building<br />
                  Badi Kaman<br />
                  Vijayapura, Karnataka – 586101<br />
                  India
                </address>
              </div>
            </Reveal>

            <Reveal delay={160} className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-signal-red rounded-full" />
                <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
                  Direct Communications
                </span>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:tecovision.com@gmail.com"
                  className="flex items-center gap-3 text-on-surface-variant hover:text-deep-black transition-colors group"
                >
                  <Mail size={14} className="flex-shrink-0" />
                  <span className="font-inter text-body-md group-hover:underline">tecovision.com@gmail.com</span>
                </a>
                <a
                  href="tel:+918951085909"
                  className="flex items-center gap-3 text-on-surface-variant hover:text-deep-black transition-colors group"
                >
                  <Phone size={14} className="flex-shrink-0" />
                  <span className="font-inter text-body-md group-hover:underline">+91 89510 85909</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={220} className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-signal-red rounded-full" />
                <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
                  Response Protocol
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Initial Response', value: '< 24 hours' },
                  { label: 'Discovery Call', value: '2–3 Business Days' },
                  { label: 'Technical Proposal', value: '5–7 Business Days' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center border-b border-white/30 pb-3 last:border-0 last:pb-0">
                    <span className="font-inter text-body-sm text-on-surface-variant">{label}</span>
                    <span className="font-inter text-label-md uppercase tracking-widest text-deep-black">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-5 md:px-16 max-w-container mx-auto pb-12">
        <Reveal className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden shadow-sm">
          {/* Replace the src value below with your Google Maps embed URL */}
          <iframe
            title="Tecovision — Head Office, Vijayapura"
            src="https://maps.google.com/maps?q=16.822866,75.724362&t=&z=18&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 md:h-[420px] grayscale opacity-90"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>

    </div>
    </>
  );
}
