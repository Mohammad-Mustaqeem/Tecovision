import Reveal from '../components/Reveal';

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly, such as your name, email address, company name, and project details when you contact us through our website. We may also automatically collect certain technical information, including IP addresses, browser type, and pages visited, through standard web analytics tools.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information we collect to respond to your enquiries, provide our services, send relevant communications, improve our website and offerings, and comply with legal obligations. We do not sell or rent your personal information to third parties.',
  },
  {
    title: 'Data Storage and Security',
    body: 'Your data is stored on secure servers with industry-standard encryption. We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. Data is retained only for as long as necessary to fulfil the purposes described in this policy.',
  },
  {
    title: 'Cookies',
    body: 'Our website uses essential cookies to ensure basic functionality. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie settings through your browser preferences. Continued use of the site constitutes acceptance of our cookie practices.',
  },
  {
    title: 'Third-Party Services',
    body: 'We may use third-party tools for analytics, communication, and infrastructure purposes. These providers operate under their own privacy policies and are selected based on their data protection standards. We do not share your personal data with third parties for marketing purposes.',
  },
  {
    title: 'Your Rights',
    body: 'Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, object to processing, or request data portability. To exercise any of these rights, contact us at the address below. We will respond to all legitimate requests within 30 days.',
  },
  {
    title: 'Contact',
    body: 'If you have questions or concerns about this Privacy Policy or how we handle your data, please contact us at tecovision.com@gmail.com or by post at Tecovision, B.M. Nagthan Building, Badi Kaman, Vijayapura, Karnataka – 586101, India.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="px-5 md:px-16 max-w-container mx-auto pt-14 pb-12 border-b border-zinc-muted/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-signal-red" />
          <span className="font-inter text-label-md uppercase tracking-widest text-on-surface-variant">
            Legal
          </span>
        </div>
        <h1 className="font-grotesk text-display-mobile md:text-display-lg text-deep-black leading-none mb-4">
          Privacy Policy
        </h1>
        <p className="font-inter text-body-md text-on-surface-variant">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </section>

      {/* Intro */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-12">
        <Reveal className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm mb-4">
          <p className="font-inter text-body-lg text-on-surface-variant leading-relaxed">
            Tecovision ("we", "us", "our") is committed to protecting your personal data. This Privacy Policy
            explains what information we collect, how we use it, and the rights you have in relation to your data
            when you use our website or engage with our services.
          </p>
        </Reveal>

        <div className="space-y-3 mt-3">
          {sections.map(({ title, body }, i) => (
            <Reveal key={i} delay={i * 60} className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
              <h2 className="font-grotesk text-headline-lg text-deep-black mb-3">{title}</h2>
              <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
