import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
  ShieldCheck,
} from '@phosphor-icons/react';
import { business, products, waHref } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-cream-100 mt-20 sm:mt-28 overflow-hidden">
      {/* Decorative top line */}
      <div className="h-[2px] grad-gold-line opacity-60" />

      {/* Background dot grid */}
      <div
        className="absolute inset-0 dot-grid-light pointer-events-none opacity-40"
        aria-hidden
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-16 sm:py-20">
        {/* Top — CTA strip */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-14 border-b border-cream-100/10">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-300 mb-3">
              Still comparing quotes?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-cream-50">
              Talk to an EILITE broker — <span className="italic text-teal-300">it's free.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-navy-900 px-7 py-3.5 text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-teal-400 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Get a Quote
            </Link>
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-cream-100/30 text-cream-50 px-7 py-3.5 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-cream-100/10 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              <WhatsappLogo size={14} weight="fill" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pt-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-baseline gap-[3px]">
              <span className="font-display text-[30px] leading-none italic text-cream-50">
                Eilite
              </span>
              <span
                className="inline-block h-[7px] w-[7px] rounded-full translate-y-[-3px]"
                style={{ background: 'var(--color-teal-500)' }}
              />
            </Link>
            <p className="text-sm text-cream-200/80 leading-relaxed max-w-xs">
              Boutique insurance brokerage in Harare. Independent advice, fast quotes, and a broker who picks up the phone.
            </p>
            <div className="flex items-start gap-2 text-xs text-cream-200/70 pt-2 border-t border-cream-100/10">
              <ShieldCheck size={14} className="mt-0.5 text-teal-300 shrink-0" />
              <span className="leading-relaxed">
                {business.regulator}
                <br />
                <span className="font-mono text-[10px] tracking-wider text-cream-200/50">
                  Licence {business.licenceNo}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 pt-3">
              {[
                { Icon: FacebookLogo, href: business.social.facebook, label: 'Facebook' },
                { Icon: LinkedinLogo, href: business.social.linkedin, label: 'LinkedIn' },
                { Icon: InstagramLogo, href: business.social.instagram, label: 'Instagram' },
                { Icon: WhatsappLogo, href: waHref(), label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 border border-cream-100/20 flex items-center justify-center text-cream-200 hover:bg-teal-500 hover:text-navy-900 hover:border-teal-500 transition-colors"
                  style={{ borderRadius: '2px' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-[17px] text-cream-50 mb-5">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-cream-200/80 hover:text-teal-300 transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-[17px] text-cream-50 mb-5">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-cream-200/80 hover:text-teal-300 transition-colors">
                  About EILITE
                </Link>
              </li>
              <li>
                <Link to="/claims" className="text-cream-200/80 hover:text-teal-300 transition-colors">
                  Claims
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-cream-200/80 hover:text-teal-300 transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-200/80 hover:text-teal-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="font-display text-[17px] text-cream-50 mb-5">
              Visit us
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-teal-300 shrink-0" />
                <span className="leading-relaxed">{business.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 text-teal-300 shrink-0" />
                <span className="leading-relaxed">
                  Mon–Fri {business.hours.weekdays}
                  <br />
                  Sat {business.hours.saturday}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 text-teal-300 shrink-0" />
                <a href={`tel:${business.phoneRaw}`} className="hover:text-teal-300 font-mono text-[13px]">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={16} className="mt-0.5 text-teal-300 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-teal-300">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-cream-100/10 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-xs text-cream-200/60 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="font-mono tracking-wide">
            IPEC-licensed brokerage · Harare, Zimbabwe
          </p>
        </div>

        <p className="mt-5 text-center text-[11px] text-cream-200/50 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
