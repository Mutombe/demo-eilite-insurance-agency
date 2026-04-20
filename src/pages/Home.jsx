import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Handshake,
  Clock,
  ChatCircleDots,
  Star,
  Quotes,
  Check,
  CaretRight,
  WhatsappLogo,
  Phone,
  Car,
  House,
  Briefcase,
} from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ProductCard from '../components/ProductCard';

import {
  hero,
  products,
  whyUs,
  stats,
  story,
  reviews,
  partners,
  business,
  waHref,
} from '../data/siteData';

const WHY_ICONS = { ShieldCheck, Handshake, Clock, ChatCircleDots };

const QUICK_TYPES = [
  { key: 'vehicle', label: 'Vehicle', Icon: Car },
  { key: 'home', label: 'Home', Icon: House },
  { key: 'business', label: 'Business', Icon: Briefcase },
];

export default function Home() {
  const [quickType, setQuickType] = useState('vehicle');

  return (
    <PageTransition>
      <SEO
        title="EILITE Insurance Agency — Smarter Cover, In Minutes | Harare"
        description={hero.sub}
      />

      {/* HERO */}
      <section className="relative bg-cream-50 overflow-hidden">
        <div className="grain" />
        {/* Decorative glow */}
        <div
          className="absolute top-0 right-0 w-[60%] h-full grad-teal-glow pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute inset-0 dot-grid pointer-events-none opacity-40"
          aria-hidden
        />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: headline */}
            <div className="lg:col-span-7 lg:pr-4">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-5 flex items-center gap-2.5">
                <span className="inline-block h-px w-8 bg-teal-500" />
                {hero.eyebrow}
              </p>
              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[88px] leading-[0.98] text-navy-900 text-balance">
                {hero.headline}
                <span className="block italic text-teal-600 mt-1">
                  {hero.headlineAccent}
                </span>
              </h1>
              <p className="mt-7 text-ink-500 text-base lg:text-lg leading-relaxed max-w-xl text-pretty">
                {hero.sub}
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link to={hero.ctaPrimary.to} className="btn-primary">
                  {hero.ctaPrimary.label}
                  <ArrowRight size={13} weight="bold" />
                </Link>
                <Link to={hero.ctaSecondary.to} className="btn-ghost">
                  {hero.ctaSecondary.label}
                </Link>
              </div>

              {/* Rating strip */}
              <div className="mt-9 flex items-center gap-5 pt-6 border-t border-cream-300">
                <div className="flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={15} weight="fill" className="text-gold-500" />
                  ))}
                </div>
                <span className="text-[13px] text-ink-600">
                  <span className="font-semibold text-navy-900">{hero.stat.value}</span>{' '}
                  <span className="text-ink-400">·</span> {hero.stat.label}
                </span>
              </div>
            </div>

            {/* Right: Hero image + quick quote card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: '3px' }}>
                <img
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/55 via-navy-900/10 to-transparent" />
                {/* Gold ticker */}
                <div className="absolute top-5 left-5 bg-cream-50/95 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                  <span
                    className="inline-block h-2 w-2 rounded-full bg-signal-green animate-pulse"
                    aria-hidden
                  />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy-800">
                    Brokers online
                  </span>
                </div>
              </div>

              {/* Floating quick-quote card */}
              <div
                className="absolute -bottom-8 -left-4 sm:-left-8 right-4 sm:right-auto sm:w-[380px] bg-cream-50 border border-cream-300 shadow-2xl p-5 sm:p-6"
                style={{ borderRadius: '3px' }}
              >
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal-700 mb-2">
                  Quick quote
                </p>
                <h3 className="font-display text-[22px] leading-tight text-navy-900 mb-4">
                  What do you need to cover?
                </h3>
                <div className="grid grid-cols-3 gap-1.5 mb-4">
                  {QUICK_TYPES.map(({ key, label, Icon }) => {
                    const active = quickType === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setQuickType(key)}
                        className={`flex flex-col items-center justify-center py-3 px-2 border transition-all ${
                          active
                            ? 'bg-navy-700 border-navy-700 text-cream-50'
                            : 'bg-cream-50 border-cream-300 text-ink-600 hover:border-navy-300'
                        }`}
                        style={{ borderRadius: '2px' }}
                      >
                        <Icon size={18} weight={active ? 'fill' : 'regular'} />
                        <span className="text-[11px] font-medium mt-1.5">{label}</span>
                      </button>
                    );
                  })}
                </div>
                <Link
                  to={`/quote?type=${quickType}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-500 text-navy-900 py-3 text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-teal-400 transition-colors"
                  style={{ borderRadius: '2px' }}
                >
                  Get my quote
                  <ArrowRight size={13} weight="bold" />
                </Link>
                <p className="text-[11px] text-ink-400 text-center mt-2.5">
                  Usually under 3 minutes · no obligation
                </p>
              </div>
            </div>
          </div>

          {/* Trust bar — desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mt-24 pt-10 border-t border-cream-300">
            {hero.supportStrip.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-[42px] leading-none text-navy-900">
                  {s.value}
                </span>
                <span className="mt-2 font-mono text-[11px] tracking-[0.15em] uppercase text-ink-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative bg-cream-100 py-20 sm:py-28">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                  Products
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-navy-900">
                  Six covers. <span className="italic text-teal-600">One broker.</span>
                </h2>
                <p className="mt-4 text-ink-500 text-base leading-relaxed">
                  From a single policy to a full personal-and-business stack, we match you to cover that actually fits — and keep an eye on renewal so you never silently overpay.
                </p>
              </div>
              <Link
                to="/products"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium text-navy-700 shrink-0"
              >
                View all products
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {products.map((p, idx) => (
              <SectionReveal key={p.slug} delay={idx * 50}>
                <ProductCard product={p} featured={p.popular} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — horizontal feature list with vertical rule */}
      <section className="relative bg-navy-900 text-cream-100 py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 dot-grid-light pointer-events-none opacity-35"
          aria-hidden
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none animate-slow-drift" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl mb-14 sm:mb-16">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-300 mb-3">
                Why EILITE
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-cream-50">
                A different kind of brokerage.
              </h2>
              <p className="mt-5 text-cream-200/80 text-base leading-relaxed">
                Zimbabwe has plenty of insurance companies — and almost all of them want to sell you their own policy. We're different: we compare the whole market and advise you on what actually makes sense.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-100/10">
            {whyUs.map((w, idx) => {
              const Icon = WHY_ICONS[w.icon] || ShieldCheck;
              return (
                <SectionReveal key={w.title} delay={idx * 80}>
                  <div className="bg-navy-900 p-7 sm:p-8 h-full">
                    <div className="h-11 w-11 bg-teal-500/15 text-teal-300 flex items-center justify-center">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <h3 className="mt-5 font-display text-[22px] leading-tight text-cream-50">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm text-cream-200/75 leading-relaxed">
                      {w.text}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          {/* Stats strip */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-cream-100/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy-900 px-5 py-7 sm:p-8 flex flex-col">
                <span className="font-display text-[46px] sm:text-[56px] leading-none text-teal-300 italic">
                  {s.value}
                </span>
                <span className="mt-3 font-mono text-[11px] tracking-[0.15em] uppercase text-cream-200/60">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY + PARTNERS */}
      <section className="relative bg-cream-50 py-20 sm:py-28">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Story */}
            <SectionReveal className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                {story.eyebrow}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.02] text-navy-900">
                {story.headline}
              </h2>
              <div className="mt-6 space-y-4">
                {story.body.map((p, i) => (
                  <p key={i} className="text-ink-500 text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-5">
                {story.values.map((v) => (
                  <div key={v.title} className="border-l-2 border-teal-500 pl-4">
                    <p className="font-display text-[18px] text-navy-900">{v.title}</p>
                    <p className="mt-1 text-[13px] text-ink-500 leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy-700 link-underline"
              >
                More about us
                <ArrowRight size={14} weight="bold" />
              </Link>
            </SectionReveal>

            {/* Partners panel */}
            <SectionReveal className="lg:col-span-5" delay={150}>
              <div
                className="bg-cream-100 border border-cream-300 p-7 sm:p-8 h-full"
                style={{ borderRadius: '3px' }}
              >
                <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-2">
                  Our panel
                </p>
                <h3 className="font-display text-[28px] leading-tight text-navy-900">
                  12 underwriters, one broker.
                </h3>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                  We have active relationships with Zimbabwe's strongest licensed insurers. When you ask us for a quote, you're effectively asking all of them.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-[13px]">
                  {partners.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 py-2 border-b border-cream-300/80 text-ink-700"
                    >
                      <Check size={13} weight="bold" className="text-teal-500" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[11px] text-ink-400 leading-relaxed">
                  Plus two more panel members — happy to share on request.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative bg-cream-100 py-20 sm:py-28 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                  What clients say
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-navy-900">
                  4.9 stars. <span className="italic text-teal-600">57 reviews.</span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {reviews.slice(0, 3).map((r, idx) => (
              <SectionReveal key={r.name} delay={idx * 80}>
                <article
                  className="bg-cream-50 border border-cream-300 p-6 sm:p-7 h-full flex flex-col"
                  style={{ borderRadius: '3px' }}
                >
                  <Quotes size={24} weight="fill" className="text-teal-500" />
                  <p className="mt-4 text-ink-700 leading-relaxed text-[15px] flex-1">
                    "{r.text}"
                  </p>
                  <div className="mt-6 pt-5 border-t border-cream-300 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-display text-[17px] text-navy-900 leading-tight">
                        {r.name}
                      </p>
                      <p className="text-[12px] text-ink-400 mt-0.5">{r.role}</p>
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
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
            alt="Modern Harare office lobby"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-20 sm:py-28 text-center">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-300 mb-4">
              Get started
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[72px] leading-[1.02] text-cream-50 max-w-3xl mx-auto text-balance">
              Free quote. <span className="italic text-teal-300">Three minutes.</span>
            </h2>
            <p className="mt-5 text-cream-100/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us what you need to cover — we'll come back with comparisons from up to four insurers and a clear recommendation.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link to="/quote" className="btn-accent">
                Start my quote
                <ArrowRight size={13} weight="bold" />
              </Link>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-cream-50/30 text-cream-50 px-7 py-3.5 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-cream-50/10 transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <WhatsappLogo size={14} weight="fill" />
                WhatsApp us
              </a>
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 text-cream-100/80 px-5 py-3.5 text-[13px] hover:text-teal-300 transition-colors"
              >
                <Phone size={14} weight="fill" />
                <span className="font-mono tracking-wide">{business.phone}</span>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
