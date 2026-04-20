import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Car,
  House,
  Briefcase,
  Airplane,
  FirstAid,
  Heart,
  Check,
  ArrowRight,
  ArrowLeft,
  WhatsappLogo,
  ShieldCheck,
  Clock,
  Phone,
} from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ProductCard from '../components/ProductCard';

import { products, business, waHref } from '../data/siteData';

const ICONS = { Car, House, Briefcase, Airplane, FirstAid, Heart };

function ProductList() {
  return (
    <PageTransition>
      <SEO
        title="Insurance Products — Vehicle, Home, Business, Travel, Medical & Life | EILITE"
        description="Explore EILITE Insurance Agency's six product lines — vehicle, home, business, travel, medical aid and life assurance. Boutique advice, competitive quotes."
      />

      {/* Page hero */}
      <section className="relative bg-navy-900 text-cream-100 pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 dot-grid-light pointer-events-none opacity-30"
          aria-hidden
        />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none animate-slow-drift" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[12px] text-cream-200/60 mb-6">
            <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
            <span className="text-cream-200/40">/</span>
            <span className="text-cream-100">Products</span>
          </div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-300 mb-4">
            Six product lines
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] leading-[1.02] text-cream-50 max-w-4xl">
            Cover for every part of your life — <span className="italic text-teal-300">compared across the whole market.</span>
          </h1>
          <p className="mt-6 text-cream-200/80 max-w-2xl text-base leading-relaxed">
            Click into any product for a deeper look, or request a quote and we'll come back within minutes with a comparison across our panel of 12+ underwriters.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="relative bg-cream-100 py-16 sm:py-24">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {products.map((p, idx) => (
              <SectionReveal key={p.slug} delay={idx * 50}>
                <ProductCard product={p} featured={p.popular} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1600&q=80"
            alt="Business handshake"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-20 sm:py-24 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-cream-50 max-w-2xl mx-auto text-balance">
            Not sure which cover you need?
          </h2>
          <p className="mt-4 text-cream-100/80 max-w-xl mx-auto text-base leading-relaxed">
            Give us a WhatsApp — a broker will help you figure it out, free.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/quote" className="btn-accent">Start a quote <ArrowRight size={13} weight="bold" /></Link>
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-cream-50/30 text-cream-50 px-7 py-3.5 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-cream-50/10 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              <WhatsappLogo size={14} weight="fill" /> WhatsApp a broker
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function ProductDetail({ product }) {
  const Icon = ICONS[product.icon] || Car;
  const currentIdx = products.findIndex((p) => p.slug === product.slug);
  const prevProduct = products[(currentIdx - 1 + products.length) % products.length];
  const nextProduct = products[(currentIdx + 1) % products.length];

  return (
    <PageTransition>
      <SEO
        title={`${product.name} — EILITE Insurance Agency`}
        description={product.summary}
      />

      {/* Hero */}
      <section className="relative bg-navy-900 text-cream-100 pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center opacity-35"
            loading="eager"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-900/40" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[12px] text-cream-200/60 mb-6">
            <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
            <span className="text-cream-200/40">/</span>
            <Link to="/products" className="hover:text-teal-300 transition-colors">Products</Link>
            <span className="text-cream-200/40">/</span>
            <span className="text-cream-100">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="h-14 w-14 bg-teal-500/20 text-teal-300 flex items-center justify-center mb-6">
                <Icon size={28} weight="duotone" />
              </div>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-300 mb-4">
                {product.tagline}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] text-cream-50">
                {product.name}
              </h1>
              <p className="mt-6 text-cream-200/80 max-w-2xl text-base sm:text-lg leading-relaxed">
                {product.summary}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link to={`/quote?type=${product.slug}`} className="btn-accent">
                  Get a quote
                  <ArrowRight size={13} weight="bold" />
                </Link>
                <a
                  href={waHref(`Hi EILITE, I'd like to enquire about ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-cream-50/30 text-cream-50 px-7 py-3.5 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-cream-50/10 transition-colors"
                  style={{ borderRadius: '2px' }}
                >
                  <WhatsappLogo size={14} weight="fill" /> Enquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-cream-50 py-16 sm:py-20">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Features */}
            <div className="lg:col-span-8">
              <SectionReveal>
                <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                  What's included
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-navy-900">
                  Features that actually matter.
                </h2>
              </SectionReveal>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {product.features.map((f, idx) => (
                  <SectionReveal key={f} delay={idx * 40}>
                    <div className="flex items-start gap-3 p-5 bg-cream-100 border border-cream-300" style={{ borderRadius: '3px' }}>
                      <div className="h-7 w-7 bg-teal-500/20 text-teal-600 flex items-center justify-center shrink-0 mt-0.5" style={{ borderRadius: '2px' }}>
                        <Check size={14} weight="bold" />
                      </div>
                      <p className="text-[14px] text-ink-700 leading-relaxed">{f}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>

              {/* How it works */}
              <SectionReveal>
                <div className="mt-16">
                  <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                    How it works
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl text-navy-900">
                    From enquiry to policy in four steps.
                  </h3>
                  <div className="mt-8 space-y-4">
                    {[
                      { n: '01', title: 'Request a quote', text: 'Via WhatsApp, our online form, or the phone — we\'ll ask a few quick questions.' },
                      { n: '02', title: 'Comparison', text: 'We compare across our underwriter panel and return the strongest options.' },
                      { n: '03', title: 'Pick your cover', text: 'We walk you through the differences, you pick — no pressure.' },
                      { n: '04', title: 'Policy issued', text: 'Policy documents are emailed the same day. You\'re covered immediately.' },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-5 items-start">
                        <span className="font-display text-[32px] italic leading-none text-teal-600 shrink-0 w-14">
                          {s.n}
                        </span>
                        <div>
                          <p className="font-display text-[19px] text-navy-900">{s.title}</p>
                          <p className="mt-1 text-[14px] text-ink-500 leading-relaxed">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <SectionReveal delay={100}>
                <aside className="bg-navy-900 text-cream-100 p-7 sticky top-24" style={{ borderRadius: '3px' }}>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal-300">
                    Starting
                  </p>
                  <p className="mt-1 font-display text-[32px] leading-tight text-cream-50">
                    {product.startFrom}
                  </p>
                  <div className="mt-6 pt-6 border-t border-cream-100/15 space-y-3 text-sm text-cream-200/80">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck size={16} weight="fill" className="text-teal-300 mt-0.5 shrink-0" />
                      <span>IPEC-licensed brokerage</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock size={16} weight="fill" className="text-teal-300 mt-0.5 shrink-0" />
                      <span>Quotes returned in under 3 minutes</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <WhatsappLogo size={16} weight="fill" className="text-teal-300 mt-0.5 shrink-0" />
                      <span>Your broker on WhatsApp</span>
                    </div>
                  </div>
                  <Link
                    to={`/quote?type=${product.slug}`}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-teal-500 text-navy-900 py-3 text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-teal-400 transition-colors"
                    style={{ borderRadius: '2px' }}
                  >
                    Get a quote <ArrowRight size={13} weight="bold" />
                  </Link>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="mt-2 w-full inline-flex items-center justify-center gap-2 border border-cream-100/25 text-cream-50 py-3 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-cream-100/10 transition-colors"
                    style={{ borderRadius: '2px' }}
                  >
                    <Phone size={13} weight="fill" /> {business.phone}
                  </a>
                </aside>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Prev/next */}
      <section className="bg-cream-100 border-t border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-10 grid sm:grid-cols-2 gap-5">
          <Link
            to={`/products/${prevProduct.slug}`}
            className="block p-6 bg-cream-50 border border-cream-300 hover:border-navy-700 group transition-colors"
            style={{ borderRadius: '3px' }}
          >
            <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-400 group-hover:text-teal-600 transition-colors">
              <ArrowLeft size={13} /> Previous
            </span>
            <p className="mt-2 font-display text-[22px] text-navy-900">{prevProduct.name}</p>
          </Link>
          <Link
            to={`/products/${nextProduct.slug}`}
            className="block p-6 bg-cream-50 border border-cream-300 hover:border-navy-700 group transition-colors text-right"
            style={{ borderRadius: '3px' }}
          >
            <span className="flex items-center justify-end gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-400 group-hover:text-teal-600 transition-colors">
              Next <ArrowRight size={13} />
            </span>
            <p className="mt-2 font-display text-[22px] text-navy-900">{nextProduct.name}</p>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}

export default function Products() {
  const { slug } = useParams();
  if (slug) {
    const product = products.find((p) => p.slug === slug);
    if (!product) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="text-center">
            <p className="font-display text-3xl text-navy-900">Product not found.</p>
            <Link to="/products" className="mt-5 inline-block btn-primary">
              View all products
            </Link>
          </div>
        </div>
      );
    }
    return <ProductDetail product={product} />;
  }
  return <ProductList />;
}
