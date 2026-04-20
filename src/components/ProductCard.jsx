import React from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  House,
  Briefcase,
  Airplane,
  FirstAid,
  Heart,
  ArrowUpRight,
  WhatsappLogo,
  Check,
} from '@phosphor-icons/react';
import { waHref } from '../data/siteData';

const ICONS = { Car, House, Briefcase, Airplane, FirstAid, Heart };

export default function ProductCard({ product, featured = false }) {
  const Icon = ICONS[product.icon] || Car;

  return (
    <article
      className={`group relative bg-cream-50 border border-cream-300 card-hover overflow-hidden flex flex-col ${
        featured ? 'ring-1 ring-teal-500/30' : ''
      }`}
      style={{ borderRadius: '3px' }}
    >
      {product.popular && (
        <div className="absolute top-4 right-4 z-10 bg-gold-500 text-navy-900 text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1">
          Popular
        </div>
      )}

      <Link
        to={`/products/${product.slug}`}
        className="block relative aspect-[16/10] overflow-hidden bg-navy-100"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
        <div className="absolute top-4 left-4 h-11 w-11 bg-cream-50 flex items-center justify-center text-navy-700">
          <Icon size={22} weight="duotone" />
        </div>
      </Link>

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <h3 className="font-display text-[24px] leading-tight text-navy-900">
          {product.name}
        </h3>
        <p className="mt-1.5 text-[13px] text-teal-700 font-medium">
          {product.tagline}
        </p>
        <p className="mt-4 text-sm text-ink-500 leading-relaxed">
          {product.summary}
        </p>

        <ul className="mt-5 space-y-2">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[13px] text-ink-600">
              <Check size={14} weight="bold" className="mt-0.5 text-teal-500 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-cream-300 flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-400">
              Starting
            </p>
            <p className="font-display text-[18px] text-navy-900 leading-tight">
              {product.startFrom}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={waHref(`Hi EILITE, I'd like to enquire about ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp enquiry about ${product.name}`}
              className="h-10 w-10 bg-signal-green/10 text-signal-green flex items-center justify-center hover:bg-signal-green hover:text-white transition-colors"
              style={{ borderRadius: '2px' }}
            >
              <WhatsappLogo size={17} weight="fill" />
            </a>
            <Link
              to={`/products/${product.slug}`}
              className="block h-10 px-4 bg-navy-700 text-cream-50 flex items-center gap-1.5 text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-navy-800 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Details
              <ArrowUpRight size={13} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
