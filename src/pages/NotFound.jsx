import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, House } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found — EILITE Insurance Agency" />
      <section className="relative min-h-[80vh] bg-cream-50 overflow-hidden flex items-center">
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" aria-hidden />
        <div className="relative max-w-[900px] mx-auto px-5 sm:px-6 lg:px-10 text-center py-20">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700">
            404 · Page not found
          </p>
          <h1 className="mt-5 font-display text-[72px] sm:text-[120px] leading-none text-navy-900 italic">
            Out of <span className="text-teal-600">cover.</span>
          </h1>
          <p className="mt-5 text-ink-500 text-base max-w-lg mx-auto leading-relaxed">
            The page you're looking for isn't where it's meant to be. Head back home, or get in touch and we'll point you in the right direction.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              <House size={14} weight="fill" /> Back home
            </Link>
            <Link to="/products" className="btn-ghost">
              Browse products <ArrowRight size={13} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
