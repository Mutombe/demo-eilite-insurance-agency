import React from 'react';
import { claims } from '../data/siteData';

export default function ClaimSteps() {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-300">
        {claims.steps.map((step, idx) => (
          <div
            key={step.n}
            className="relative bg-cream-50 p-7 sm:p-8 group hover:bg-navy-700 transition-all duration-400"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal-600 group-hover:text-teal-300">
                Step
              </span>
              <span className="font-display text-[48px] leading-none text-navy-900 group-hover:text-teal-300 italic">
                {step.n}
              </span>
            </div>
            <h4 className="mt-5 font-display text-[22px] leading-tight text-navy-900 group-hover:text-cream-50">
              {step.title}
            </h4>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed group-hover:text-cream-100/85">
              {step.text}
            </p>
            {idx < claims.steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-8 right-0 translate-x-1/2 h-px w-6 bg-gold-500/70"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
