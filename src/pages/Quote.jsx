import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Clock, Handshake, Check } from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import QuoteForm from '../components/QuoteForm';

import { business, faqs } from '../data/siteData';

export default function Quote() {
  const location = useLocation();
  const initialType = new URLSearchParams(location.search).get('type');

  return (
    <PageTransition>
      <SEO
        title="Get a Quote — EILITE Insurance Agency | Free in 3 Minutes"
        description="Free insurance quotes from EILITE — compared across Zimbabwe's top underwriters. Vehicle, home, business, travel, medical and life cover."
      />

      {/* Hero */}
      <section className="relative bg-navy-900 text-cream-100 pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 dot-grid-light pointer-events-none opacity-30"
          aria-hidden
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none animate-slow-drift" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[12px] text-cream-200/60 mb-6">
            <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
            <span className="text-cream-200/40">/</span>
            <span className="text-cream-100">Get a Quote</span>
          </div>
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-300 mb-4">
              Free · no obligation
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] leading-[1.02] text-cream-50">
              Tell us what you need — <span className="italic text-teal-300">we'll compare the market.</span>
            </h1>
            <p className="mt-6 text-cream-200/80 max-w-2xl text-base leading-relaxed">
              Three quick steps. We take your brief, quote across our panel of 12+ underwriters, and come back with a clear recommendation. Most clients have their quote within 3 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="relative bg-cream-50 py-16 sm:py-20">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-8">
              <SectionReveal>
                <QuoteForm initialType={initialType} />
              </SectionReveal>
            </div>

            <aside className="lg:col-span-4">
              <SectionReveal delay={100}>
                <div
                  className="bg-navy-900 text-cream-100 p-7 sticky top-24 overflow-hidden relative"
                  style={{ borderRadius: '3px' }}
                >
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative">
                    <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal-300 mb-3">
                      Why bother with a broker?
                    </p>
                    <h3 className="font-display text-[28px] leading-tight text-cream-50">
                      Same premium. Smarter cover.
                    </h3>
                    <ul className="mt-6 space-y-4 text-[13px]">
                      {[
                        { Icon: ShieldCheck, title: 'IPEC-licensed', text: 'Premiums held in IBA trust — fully compliant.' },
                        { Icon: Clock, title: 'Fast quotes', text: 'Most quotes back in under 3 minutes.' },
                        { Icon: Handshake, title: 'Independent', text: 'We quote across 12+ insurers, not just one.' },
                      ].map(({ Icon, title, text }) => (
                        <li key={title} className="flex items-start gap-3">
                          <Icon size={20} weight="duotone" className="text-teal-300 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-display text-[16px] text-cream-50">{title}</p>
                            <p className="text-cream-200/75 leading-relaxed mt-0.5">{text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 pt-6 border-t border-cream-100/15">
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream-200/60 mb-2">
                        Prefer to call?
                      </p>
                      <a
                        href={`tel:${business.phoneRaw}`}
                        className="font-display text-[24px] text-cream-50 hover:text-teal-300 transition-colors"
                      >
                        {business.phone}
                      </a>
                      <p className="mt-1 text-[12px] text-cream-200/60">
                        {business.hours.weekdays} Mon–Fri · Sat {business.hours.saturday}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-cream-100 py-20 sm:py-24">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <SectionReveal className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                FAQ
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] text-navy-900">
                Common questions.
              </h2>
              <p className="mt-5 text-ink-500 text-base leading-relaxed">
                If anything isn't covered below, WhatsApp us — we're happy to walk through anything before you commit.
              </p>
            </SectionReveal>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-cream-300 border-y border-cream-300">
                {faqs.map((f, idx) => (
                  <SectionReveal key={f.q} delay={idx * 40}>
                    <details className="group py-5 cursor-pointer">
                      <summary className="flex items-start justify-between gap-5 list-none">
                        <dt className="font-display text-[19px] sm:text-[21px] leading-snug text-navy-900">
                          {f.q}
                        </dt>
                        <span className="shrink-0 h-8 w-8 flex items-center justify-center border border-cream-400 group-open:bg-navy-700 group-open:text-cream-50 group-open:border-navy-700 transition-colors text-xl leading-none font-light">
                          <span className="group-open:hidden">+</span>
                          <span className="hidden group-open:inline">−</span>
                        </span>
                      </summary>
                      <dd className="mt-3 text-[14px] text-ink-500 leading-relaxed pr-10">
                        {f.a}
                      </dd>
                    </details>
                  </SectionReveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
