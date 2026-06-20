import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

const sections = [
  {
    title: 'Agreement to Terms',
    body: 'By accessing or using the Tecovision website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access the website. These terms apply to all visitors, users, and others who access or use the site.',
  },
  {
    title: 'Use of the Website',
    body: 'You may use this website for lawful purposes only. You agree not to use it in any way that violates applicable local, national, or international laws or regulations, or in any way that is harmful, fraudulent, deceptive, or otherwise objectionable. Unauthorised use may give rise to a claim for damages or be a criminal offence.',
  },
  {
    title: 'Services',
    body: 'The content on this website is provided for general information purposes only. Descriptions of services are illustrative. Actual engagements are governed by separate written agreements between Tecovision and the client. We reserve the right to modify or discontinue any service at any time without notice.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website, including text, graphics, logos, images, and software, is the property of Tecovision or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the fullest extent permitted by law, Tecovision shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services. Our total liability in any matter related to this website shall not exceed ₹10,000.',
  },
  {
    title: 'Privacy',
    body: 'Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by this reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.',
  },
  {
    title: 'Governing Law',
    body: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Vijayapura, Karnataka, India.',
  },
  {
    title: 'Changes to Terms',
    body: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms. We encourage you to review this page periodically.',
  },
  {
    title: 'Contact',
    body: 'If you have any questions about these Terms and Conditions, please contact us at tecovision.com@gmail.com or by post at Tecovision, B.M. Nagthan Building, Badi Kaman, Vijayapura, Karnataka – 586101, India.',
  },
];

export default function Terms() {
  return (
    <>
      <SEO title="Terms and Conditions" description="Tecovision terms and conditions — governing your use of our website and services." path="/terms" />
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
          Terms and<br />Conditions
        </h1>
        <p className="font-inter text-body-md text-on-surface-variant">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </section>

      {/* Intro */}
      <section className="px-5 md:px-16 max-w-container mx-auto py-12">
        <Reveal className="bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm mb-4">
          <p className="font-inter text-body-lg text-on-surface-variant leading-relaxed">
            These Terms and Conditions govern your access to and use of the Tecovision website and any related
            services. Please read them carefully before using our site. By using our website, you confirm that you
            have read, understood, and agree to be bound by these terms.
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
    </>
  );
}
