import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/services',  label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about',     label: 'About' },
  { to: '/blog',      label: 'Blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/55 backdrop-blur-2xl border-b border-black/6 shadow-sm'
          : 'bg-white/25 backdrop-blur-md border-b border-black/4'
      }`}
    >
      <div className="flex justify-between items-center h-20 px-5 md:px-16 max-w-container mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="font-grotesk text-headline-lg font-bold tracking-tighter flex items-center gap-2 text-deep-black"
        >
          <span className="w-2 h-2 bg-signal-red block flex-shrink-0" />
          TECOVISION
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-inter text-label-md uppercase tracking-widest transition-colors duration-200 ${
                location.pathname === to
                  ? 'text-deep-black border-b-2 border-signal-red pb-0.5'
                  : 'text-on-surface-variant hover:text-deep-black'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block font-inter text-label-md uppercase tracking-widest px-5 py-2.5 rounded-xl bg-deep-black text-pure-white hover:bg-primary-container transition-all duration-300"
        >
          Contact Us
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-1 text-deep-black transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/70 backdrop-blur-2xl border-t border-black/6 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-5 py-4 gap-1">
          {/* Home — mobile only */}
          <Link
            to="/"
            className={`font-inter text-label-md uppercase tracking-widest py-3 border-b border-zinc-muted/20 ${
              location.pathname === '/' ? 'text-deep-black' : 'text-on-surface-variant'
            }`}
          >
            Home
          </Link>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-inter text-label-md uppercase tracking-widest py-3 border-b border-zinc-muted/20 ${
                location.pathname === to ? 'text-deep-black' : 'text-on-surface-variant'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-deep-black text-pure-white font-inter text-label-md uppercase tracking-widest px-5 py-3 rounded-xl text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
