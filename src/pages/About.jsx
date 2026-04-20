import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Quotes,
  Check,
} from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

import { story, team, reviews, business, stats, waHref } from '../data/siteData';

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About EILITE — Boutique Insurance Brokerage in Harare"
        description={story.body[0]}
      />

      {/* Hero */}
      <section className="relative bg-cream-50 pt-20 pb-14 sm:pt-28 sm:pb-20 overflow-hidden">
        <div className="grain" />
        <div
          className="absolute inset-0 dot-grid pointer-events-none opacity-30"
          aria-hidden
        />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[12px] text-ink-400 mb-6">
            <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span className="text-ink-300">/</span>
            <span className="text-navy-800">About</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-4">
                {story.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] leading-[1.02] text-navy-900">
                {story.headline}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <div className="flex items-end gap-4">
                <span className="font-display text-[72px] leading-none text-teal-600 italic">
                  {new Date().getFullYear() - story.founded}
                </span>
                <span className="pb-2 text-[13px] text-ink-500 leading-snug">
                  years advising<br />Harare clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative bg-cream-50 pb-16 sm:pb-20">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <SectionReveal className="lg:col-span-7">
              <div className="space-y-5">
                {story.body.map((p, i) => (
                  <p key={i} className="text-ink-600 text-base sm:text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal className="lg:col-span-5" delay={100}>
              <div className="grid grid-cols-2 gap-5">
                {story.values.map((v) => (
                  <div
                    key={v.title}
                    className="bg-cream-100 border border-cream-300 p-5"
                    style={{ borderRadius: '3px' }}
                  >
                    <p className="font-display text-[20px] text-navy-900">{v.title}</p>
                    <p className="mt-2 text-[13px] text-ink-500 leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 p-5 bg-navy-900 text-cream-100 flex items-start gap-3"
                style={{ borderRadius: '3px' }}
              >
                <ShieldCheck size={20} weight="fill" className="text-teal-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-[16px] text-cream-50">{business.regulator}</p>
                  <p className="mt-1 text-[12px] text-cream-200/70 font-mono tracking-wide">
                    Licence {business.licenceNo}
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-navy-900 text-cream-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[42px] sm:text-[56px] leading-none text-teal-300 italic">
                {s.value}
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-[0.15em] uppercase text-cream-200/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="relative bg-cream-100 py-20 sm:py-24">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl mb-14">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                Your team
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] text-navy-900">
                The brokers behind EILITE.
              </h2>
              <p className="mt-4 text-ink-500 text-base leading-relaxed">
                Small team, deep experience. Every client gets a named broker from day one — you'll know who to reach, and they'll know your file.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, idx) => (
              <SectionReveal key={m.name} delay={idx * 80}>
                <article
                  className="bg-cream-50 border border-cream-300 overflow-hidden group"
                  style={{ borderRadius: '3px' }}
                >
                  <div className="relative aspect-[5/6] overflow-hidden bg-navy-100">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal-700">
                      {m.role}
                    </p>
                    <h3 className="mt-2 font-display text-[24px] leading-tight text-navy-900">
                      {m.name}
                    </h3>
                    <p className="mt-3 text-[14px] text-ink-500 leading-relaxed">
                      {m.bio}
                    </p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative bg-cream-50 py-20 sm:py-24">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div className="max-w-xl">
                <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                  In their words
                </p>
                <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] text-navy-900">
                  Clients who've tested the process.
                </h2>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={17} weight="fill" className="text-gold-500" />
                  ))}
                </div>
                <span className="text-[13px] text-ink-500 font-mono">
                  {business.rating}/5 · {business.reviewCount} reviews
                </span>
              </div>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {reviews.map((r, idx) => (
              <SectionReveal key={r.name} delay={idx * 50}>
                <article
                  className="bg-cream-100 border border-cream-300 p-7 h-full flex flex-col"
                  style={{ borderRadius: '3px' }}
                >
                  <Quotes size={22} weight="fill" className="text-teal-500" />
                  <p className="mt-4 text-ink-700 leading-relaxed text-[15px] flex-1">
                    "{r.text}"
                  </p>
                  <div className="mt-6 pt-5 border-t border-cream-300 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-display text-[17px] text-navy-900 leading-tight">
                        {r.name}
                      </p>
                      <p className="text-[12px] text-ink-400 mt-0.5">
                        {r.role} · {r.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star
                          key={i}
                          size={12}
                          weight="fill"
                          className={i < r.rating ? 'text-gold-500' : 'text-ink-200'}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80"
            alt="Insurance broker at work"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-20 text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-cream-50 max-w-3xl mx-auto text-balance">
              Ready to see what we can do for you?
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link to="/quote" className="btn-accent">
                Get a quote <ArrowRight size={13} weight="bold" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-cream-50/30 text-cream-50 px-7 py-3.5 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-cream-50/10 transition-colors" style={{ borderRadius: '2px' }}>
                Visit our office
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
