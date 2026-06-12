import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-5">
      <div className="text-center max-w-lg">
        <p className="font-inter text-label-md uppercase tracking-widest text-signal-red mb-4">404</p>
        <h1 className="font-grotesk text-deep-black mb-4" style={{ fontSize: '3rem', lineHeight: 1.1 }}>
          Page Not Found
        </h1>
        <p className="font-inter text-body-lg text-on-surface-variant mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
