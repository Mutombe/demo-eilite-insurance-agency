import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, Phone, ArrowRight } from '@phosphor-icons/react';
import { business, waHref } from '../data/siteData';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/claims', label: 'Claims' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Wordmark({ dark = false, size = 'md' }) {
  const textSize = size === 'sm' ? 'text-[22px]' : 'text-[26px] sm:text-[28px]';
  return (
    <span
      className={`font-display ${textSize} leading-none tracking-tight flex items-baseline gap-[3px] ${
        dark ? 'text-cream-50' : 'text-navy-900'
      }`}
    >
      <span className="italic">Eilite</span>
      <span
        className="inline-block h-[6px] w-[6px] rounded-full translate-y-[-2px]"
        style={{ background: 'var(--color-teal-500)' }}
      />
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = loc.pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      {/* Slim top strip */}
      <div className="hidden md:block bg-navy-700 text-cream-100 text-[12px]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5 text-cream-200/90">
            <span className="font-mono tracking-wide">IPEC-AG/2019/4812</span>
            <span className="text-cream-200/40">·</span>
            <span>{business.address}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
            >
              <Phone size={12} weight="fill" />
              <span className="font-mono tracking-wide">{business.phone}</span>
            </a>
            <span className="text-cream-200/40">·</span>
            <span className="text-teal-300 font-medium">
              24/7 claims hotline
            </span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          transparent ? 'bg-transparent' : 'glass-nav'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-3 group min-w-0"
            aria-label={business.name}
          >
            <Wordmark />
            <span className="hidden sm:block font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400 border-l border-ink-200 pl-3 ml-1">
              Insurance
              <br />
              Agency
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium tracking-wide transition-colors ${
                    isActive ? 'text-teal-600' : 'text-ink-700 hover:text-navy-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-2 left-0 right-0 h-[2px]"
                        style={{ background: 'var(--color-teal-500)' }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="h-10 w-10 hidden sm:flex items-center justify-center text-ink-700 hover:text-teal-600 transition-colors"
            >
              <WhatsappLogo size={20} />
            </a>
            <Link
              to="/quote"
              className="hidden sm:inline-flex items-center gap-2 bg-navy-700 text-cream-50 px-5 py-2.5 text-[12px] font-medium tracking-[0.1em] uppercase hover:bg-navy-800 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Get a Quote
              <ArrowRight size={13} weight="bold" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 flex lg:hidden items-center justify-center text-navy-800"
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-950/55 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-cream-50 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-cream-300">
            <Wordmark size="sm" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center text-ink-800"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-6 gap-0.5 overflow-y-auto">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3.5 font-display text-2xl transition-colors border-b border-cream-200 ${
                    isActive ? 'text-teal-600' : 'text-ink-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/quote"
              className="py-3.5 font-display text-2xl text-navy-700 border-b border-cream-200"
            >
              Get a Quote
            </NavLink>
          </nav>
          <div className="px-6 py-5 border-t border-cream-300 space-y-3 bg-cream-100">
            <a href={waHref()} target="_blank" rel="noopener noreferrer" className="btn-accent w-full">
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp us
            </a>
            <a href={`tel:${business.phoneRaw}`} className="btn-ghost w-full">
              <Phone size={16} weight="fill" />
              {business.phone}
            </a>
            <p className="text-[11px] text-ink-400 text-center leading-relaxed pt-2">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
