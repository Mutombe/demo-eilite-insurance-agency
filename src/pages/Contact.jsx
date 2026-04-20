import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  MapPin,
  Clock,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react';
import { toast } from 'sonner';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

import { business, waHref } from '../data/siteData';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sendVia, setSendVia] = useState('whatsapp');
  const [sent, setSent] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const canSend = form.name.trim() && form.message.trim() && (form.phone.trim() || form.email.trim());

  const buildBody = () => `Hi EILITE,

Name: ${form.name}
Phone: ${form.phone || '-'}
Email: ${form.email || '-'}
Subject: ${form.subject || 'General enquiry'}

${form.message}`;

  const handleSend = () => {
    if (!canSend) {
      toast.error('Please fill in your name, a contact detail, and a message.');
      return;
    }
    if (sendVia === 'whatsapp') {
      const href = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(buildBody())}`;
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      const href = `mailto:${business.email}?subject=${encodeURIComponent(form.subject || 'Enquiry from eiliteinsurance.co.zw')}&body=${encodeURIComponent(buildBody())}`;
      window.location.href = href;
    }
    setSent(true);
    toast.success(
      sendVia === 'whatsapp'
        ? 'Opening WhatsApp — a broker will reply within minutes.'
        : 'Your email client is opening — we\'ll be in touch shortly.'
    );
  };

  return (
    <PageTransition>
      <SEO
        title="Contact EILITE Insurance Agency — Harare"
        description={`Contact EILITE: ${business.phone} · ${business.address}`}
      />

      {/* Hero */}
      <section className="relative bg-navy-900 text-cream-100 pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 dot-grid-light pointer-events-none opacity-30"
          aria-hidden
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none animate-slow-drift" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-[12px] text-cream-200/60 mb-6">
            <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
            <span className="text-cream-200/40">/</span>
            <span className="text-cream-100">Contact</span>
          </div>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-teal-300 mb-4">
            Get in touch
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[72px] leading-[1.02] text-cream-50 max-w-4xl">
            Visit us, call us, or <span className="italic text-teal-300">WhatsApp a broker.</span>
          </h1>
          <p className="mt-6 text-cream-200/80 max-w-2xl text-base leading-relaxed">
            We're based on the 3rd floor of Electra House on Samora Machel Avenue. Walk-ins are welcome during business hours — or send us a message and we'll come back within minutes.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="relative bg-cream-50 py-16 sm:py-20">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Phone, label: 'Phone', value: business.phone, href: `tel:${business.phoneRaw}` },
              { Icon: WhatsappLogo, label: 'WhatsApp', value: business.whatsappDisplay, href: waHref() },
              { Icon: EnvelopeSimple, label: 'Email', value: business.email, href: `mailto:${business.email}` },
              { Icon: MapPin, label: 'Office', value: business.addressShort, href: 'https://maps.google.com/?q=Electra+House+49+Samora+Machel+Ave+Harare' },
            ].map(({ Icon, label, value, href }, idx) => (
              <SectionReveal key={label} delay={idx * 40}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col h-full p-6 bg-cream-100 border border-cream-300 hover:border-navy-700 hover:bg-navy-700 transition-all"
                  style={{ borderRadius: '3px' }}
                >
                  <Icon size={22} weight="duotone" className="text-teal-600 group-hover:text-teal-300 transition-colors" />
                  <p className="mt-4 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400 group-hover:text-cream-200/70 transition-colors">
                    {label}
                  </p>
                  <p className="mt-1 font-display text-[18px] leading-snug text-navy-900 group-hover:text-cream-50 transition-colors break-words">
                    {value}
                  </p>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="relative bg-cream-100 py-16 sm:py-20">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form */}
            <SectionReveal className="lg:col-span-7">
              <div
                className="bg-cream-50 border border-cream-300 p-6 sm:p-8"
                style={{ borderRadius: '3px' }}
              >
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal-700 mb-2">
                  Send a message
                </p>
                <h2 className="font-display text-3xl sm:text-4xl leading-tight text-navy-900">
                  We reply fast.
                </h2>
                <p className="mt-3 text-ink-500 text-[14px] leading-relaxed">
                  Prefill the form below — pick how you'd like us to reply and we'll take it from there.
                </p>

                {sent ? (
                  <div className="mt-6 p-6 bg-signal-green/10 border border-signal-green/30 text-center" style={{ borderRadius: '3px' }}>
                    <CheckCircle size={28} weight="fill" className="text-signal-green mx-auto" />
                    <p className="mt-3 font-display text-[22px] text-navy-900">Message sent.</p>
                    <p className="mt-1 text-[13px] text-ink-500">
                      We'll be in touch shortly — usually within minutes.
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({ name: '', phone: '', email: '', subject: '', message: '' });
                      }}
                      className="mt-4 text-[12px] font-medium text-navy-700 underline"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-medium text-ink-600 mb-1.5">Full name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          placeholder="e.g. Tendai Moyo"
                          className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                          style={{ borderRadius: '2px' }}
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-medium text-ink-600 mb-1.5">Subject</label>
                        <input
                          type="text"
                          value={form.subject}
                          onChange={(e) => update('subject', e.target.value)}
                          placeholder="e.g. Fleet insurance enquiry"
                          className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                          style={{ borderRadius: '2px' }}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-medium text-ink-600 mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          placeholder="+263 77 123 4567"
                          className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                          style={{ borderRadius: '2px' }}
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-medium text-ink-600 mb-1.5">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="you@example.com"
                          className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                          style={{ borderRadius: '2px' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-medium text-ink-600 mb-1.5">Message *</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        placeholder="Tell us what you're looking to insure, or what you'd like to know."
                        className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none resize-none"
                        style={{ borderRadius: '2px' }}
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-ink-600 mb-2">
                        Reply via
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSendVia('whatsapp')}
                          className={`flex items-center justify-center gap-2 py-3 border text-[12px] font-medium tracking-[0.1em] uppercase transition-all ${
                            sendVia === 'whatsapp'
                              ? 'bg-signal-green border-signal-green text-white'
                              : 'bg-cream-50 border-cream-300 text-ink-600 hover:border-signal-green'
                          }`}
                          style={{ borderRadius: '2px' }}
                        >
                          <WhatsappLogo size={14} weight="fill" /> WhatsApp
                        </button>
                        <button
                          type="button"
                          onClick={() => setSendVia('email')}
                          className={`flex items-center justify-center gap-2 py-3 border text-[12px] font-medium tracking-[0.1em] uppercase transition-all ${
                            sendVia === 'email'
                              ? 'bg-gold-500 border-gold-500 text-navy-900'
                              : 'bg-cream-50 border-cream-300 text-ink-600 hover:border-gold-500'
                          }`}
                          style={{ borderRadius: '2px' }}
                        >
                          <EnvelopeSimple size={14} weight="fill" /> Email
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleSend}
                      disabled={!canSend}
                      className={`w-full inline-flex items-center justify-center gap-2 bg-navy-700 text-cream-50 py-3.5 text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-navy-800 transition-all ${
                        !canSend ? 'opacity-40 cursor-not-allowed' : ''
                      }`}
                      style={{ borderRadius: '2px' }}
                    >
                      Send message <ArrowRight size={13} weight="bold" />
                    </button>
                    <p className="text-[11px] text-ink-400 text-center leading-relaxed">
                      By submitting you consent to EILITE contacting you about your enquiry.
                    </p>
                  </div>
                )}
              </div>
            </SectionReveal>

            {/* Info column */}
            <SectionReveal className="lg:col-span-5" delay={100}>
              <div className="space-y-5">
                {/* Hours */}
                <div className="bg-cream-50 border border-cream-300 p-6" style={{ borderRadius: '3px' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={20} weight="duotone" className="text-teal-600" />
                    <p className="font-display text-[18px] text-navy-900">Office hours</p>
                  </div>
                  <dl className="space-y-2 text-[14px]">
                    <div className="flex justify-between gap-4 border-b border-cream-300 pb-2">
                      <dt className="text-ink-500">Monday – Friday</dt>
                      <dd className="font-mono text-navy-900">{business.hours.weekdays}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-cream-300 pb-2">
                      <dt className="text-ink-500">Saturday</dt>
                      <dd className="font-mono text-navy-900">{business.hours.saturday}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-cream-300 pb-2">
                      <dt className="text-ink-500">Sunday</dt>
                      <dd className="font-mono text-ink-400">{business.hours.sunday}</dd>
                    </div>
                    <div className="flex justify-between gap-4 pt-1">
                      <dt className="text-teal-700 font-medium">Claims hotline</dt>
                      <dd className="font-mono text-teal-700">24/7</dd>
                    </div>
                  </dl>
                </div>

                {/* Address */}
                <div className="bg-navy-900 text-cream-100 p-6" style={{ borderRadius: '3px' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={20} weight="duotone" className="text-teal-300" />
                    <p className="font-display text-[18px] text-cream-50">Our office</p>
                  </div>
                  <p className="text-[14px] text-cream-200/80 leading-relaxed">
                    {business.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Electra+House+49+Samora+Machel+Ave+Harare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-teal-300 hover:underline"
                  >
                    Open in Google Maps <ArrowRight size={12} weight="bold" />
                  </a>
                </div>

                {/* Social */}
                <div className="bg-cream-50 border border-cream-300 p-6" style={{ borderRadius: '3px' }}>
                  <p className="font-display text-[18px] text-navy-900 mb-4">Follow EILITE</p>
                  <div className="flex items-center gap-2">
                    {[
                      { Icon: FacebookLogo, href: business.social.facebook, label: 'Facebook' },
                      { Icon: LinkedinLogo, href: business.social.linkedin, label: 'LinkedIn' },
                      { Icon: InstagramLogo, href: business.social.instagram, label: 'Instagram' },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="h-11 w-11 border border-cream-300 flex items-center justify-center text-navy-700 hover:bg-navy-700 hover:text-cream-50 hover:border-navy-700 transition-colors"
                        style={{ borderRadius: '2px' }}
                      >
                        <Icon size={17} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative bg-cream-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pb-20">
          <SectionReveal>
            <div
              className="overflow-hidden border border-cream-300"
              style={{ borderRadius: '3px' }}
            >
              <iframe
                src={business.mapEmbed}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${business.name} — Harare location`}
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
