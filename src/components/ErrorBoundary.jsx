import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-5" style={{ background: '#faf8ff' }}>
          <div className="text-center max-w-md">
            <p className="font-inter text-label-md uppercase tracking-widest text-signal-red mb-4">Error</p>
            <h1 className="font-grotesk text-headline-xl text-deep-black mb-4">Something went wrong</h1>
            <p className="font-inter text-body-md text-on-surface-variant mb-8 leading-relaxed">
              An unexpected error occurred. Please refresh the page.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
