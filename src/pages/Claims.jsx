import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  FileText,
  Warning,
} from '@phosphor-icons/react';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ClaimSteps from '../components/ClaimSteps';

import { claims, business, waHref } from '../data/siteData';

export default function Claims() {
  return (
    <PageTransition>
      <SEO
        title="Claims — Fast, Fair, Human | EILITE Insurance Agency"
        description="How to claim on your EILITE-brokered policy. 4-step process, 24/7 hotline, and a broker who actually follows through."
      />

      {/* Hero */}
      <section className="relative bg-navy-900 text-cream-100 pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 dot-grid-light pointer-events-none opacity-30"
          aria-hidden
        />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none animate-slow-drift" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[12px] text-cream-200/60 mb-6">
            <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
            <span className="text-cream-200/40">/</span>
            <span className="text-cream-100">Claims</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-300 mb-4">
                Claims
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] leading-[1.02] text-cream-50">
                When something goes wrong — <span className="italic text-teal-300">we handle it.</span>
              </h1>
              <p className="mt-6 text-cream-200/80 max-w-2xl text-base leading-relaxed">
                The point of insurance is the claim. We push the underwriter on your behalf, chase the paperwork, and keep you updated until it's paid. 98% of EILITE-brokered claims are settled on time.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-teal-500 text-navy-900 p-6" style={{ borderRadius: '3px' }}>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy-800 mb-2">
                  24-hour hotline
                </p>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="font-display text-[32px] leading-tight text-navy-900 hover:underline"
                >
                  {business.phone}
                </a>
                <p className="mt-3 text-[13px] text-navy-800 leading-relaxed">
                  After-hours claims:{' '}
                  <a href={`tel:${claims.afterHours.replace(/\s/g, '')}`} className="font-mono hover:underline">
                    {claims.afterHours}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-step process */}
      <section className="relative bg-cream-50 py-20 sm:py-24">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl mb-12">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                The process
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] text-navy-900">
                Four steps. No surprises.
              </h2>
              <p className="mt-4 text-ink-500 text-base leading-relaxed">
                Straightforward motor claims usually settle within five working days. Home and commercial claims take a little longer due to loss adjusters, but we keep the pressure on.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <ClaimSteps />
          </SectionReveal>

          {/* Contact row */}
          <SectionReveal>
            <div className="mt-16 grid md:grid-cols-3 gap-5">
              <a
                href={`tel:${business.phoneRaw}`}
                className="group p-6 bg-cream-100 border border-cream-300 hover:bg-navy-700 hover:border-navy-700 transition-all"
                style={{ borderRadius: '3px' }}
              >
                <Phone size={22} weight="duotone" className="text-teal-600 group-hover:text-teal-300" />
                <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400 group-hover:text-cream-200/70">
                  Phone
                </p>
                <p className="font-display text-[22px] leading-tight text-navy-900 group-hover:text-cream-50 mt-1">
                  {business.phone}
                </p>
              </a>
              <a
                href={waHref('Hi EILITE, I need to lodge a claim.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-cream-100 border border-cream-300 hover:bg-signal-green hover:border-signal-green transition-all"
                style={{ borderRadius: '3px' }}
              >
                <WhatsappLogo size={22} weight="duotone" className="text-signal-green group-hover:text-white" />
                <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400 group-hover:text-white/80">
                  WhatsApp
                </p>
                <p className="font-display text-[22px] leading-tight text-navy-900 group-hover:text-white mt-1">
                  Message a broker
                </p>
              </a>
              <a
                href={`mailto:claims@eiliteinsurance.co.zw`}
                className="group p-6 bg-cream-100 border border-cream-300 hover:bg-navy-700 hover:border-navy-700 transition-all"
                style={{ borderRadius: '3px' }}
              >
                <EnvelopeSimple size={22} weight="duotone" className="text-teal-600 group-hover:text-teal-300" />
                <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400 group-hover:text-cream-200/70">
                  Email
                </p>
                <p className="font-display text-[20px] leading-tight text-navy-900 group-hover:text-cream-50 mt-1 break-all">
                  claims@eiliteinsurance.co.zw
                </p>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Documents you'll need */}
      <section className="relative bg-cream-100 py-20 sm:py-24">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <SectionReveal className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-700 mb-3">
                Documents
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] text-navy-900">
                What we'll ask for.
              </h2>
              <p className="mt-4 text-ink-500 text-base leading-relaxed">
                Every claim is different, but these are the usual essentials. You can send everything via WhatsApp — originals only needed for larger commercial losses.
              </p>
              <div className="mt-8 p-5 bg-gold-500/10 border border-gold-500/30" style={{ borderRadius: '3px' }}>
                <div className="flex items-start gap-3">
                  <Warning size={20} weight="fill" className="text-gold-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-[16px] text-navy-900">Notify within 48 hours</p>
                    <p className="mt-1 text-[13px] text-ink-600 leading-relaxed">
                      Most policies require incident notification within 48 hours to avoid prejudice. When in doubt — WhatsApp us now and we'll open the file.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal className="lg:col-span-7" delay={100}>
              <div className="grid sm:grid-cols-2 gap-px bg-cream-300">
                {[
                  { cat: 'Motor', items: ['Police report (ZRP or Traffic Safety Council)', 'Photos of damage + accident scene', 'Driver\'s licence', 'Proof of sums insured', 'Repair quotes (we can help source)'] },
                  { cat: 'Home', items: ['Photos of damage / broken items', 'Police report (if theft)', 'Proof of ownership / receipts', 'Loss adjuster report (we arrange)', 'Replacement quotes'] },
                  { cat: 'Travel / Medical', items: ['Hospital / doctor reports', 'Original receipts', 'Boarding passes or tickets', 'Policy certificate number'] },
                  { cat: 'Commercial', items: ['Incident report', 'Loss register or stock-take', 'Photos / CCTV footage', 'Police / investigator reports', 'Audited financials (for BI claims)'] },
                ].map((group) => (
                  <div key={group.cat} className="bg-cream-50 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText size={16} weight="duotone" className="text-teal-600" />
                      <p className="font-display text-[18px] text-navy-900">{group.cat}</p>
                    </div>
                    <ul className="space-y-2 text-[13px] text-ink-600">
                      {group.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <Check size={13} weight="bold" className="mt-1 text-teal-500 shrink-0" />
                          <span className="leading-relaxed">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
            alt="Claims documents"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-20 sm:py-24 text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-cream-50 max-w-3xl mx-auto text-balance">
              Already had an incident? Start a claim now.
            </h2>
            <p className="mt-5 text-cream-100/80 max-w-xl mx-auto text-base leading-relaxed">
              WhatsApp us the basics — we'll open the file immediately and walk you through the paperwork.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={waHref('Hi EILITE, I need to lodge a claim.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-signal-green text-white px-7 py-3.5 text-[12px] font-semibold tracking-[0.1em] uppercase hover:brightness-110 transition-all"
                style={{ borderRadius: '2px' }}
              >
                <WhatsappLogo size={14} weight="fill" />
                Start a claim on WhatsApp
              </a>
              <a href={`tel:${business.phoneRaw}`} className="btn-accent">
                <Phone size={13} weight="fill" /> {business.phone}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
