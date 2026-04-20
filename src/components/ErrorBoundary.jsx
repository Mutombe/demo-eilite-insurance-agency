import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('EILITE error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-cream-50">
          <div className="text-center max-w-md">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal-600">
              A small hiccup
            </p>
            <h1 className="mt-3 font-display text-4xl text-navy-900">
              Something went offline.
            </h1>
            <p className="mt-4 text-ink-500 text-sm leading-relaxed">
              Give the page a refresh — if it lingers, WhatsApp us and we'll have it sorted in minutes.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Refresh
              </button>
              <a href="/" className="btn-ghost">
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
