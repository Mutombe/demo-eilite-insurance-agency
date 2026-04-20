import React, { useState } from 'react';
import {
  Car,
  House,
  Briefcase,
  Airplane,
  FirstAid,
  Heart,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  WhatsappLogo,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import { business, waHref } from '../data/siteData';

const TYPES = [
  { key: 'vehicle', label: 'Vehicle', icon: Car, hint: 'Motor, fleet, PSV' },
  { key: 'home', label: 'Home', icon: House, hint: 'Buildings & contents' },
  { key: 'business', label: 'Business', icon: Briefcase, hint: 'SME & corporate' },
  { key: 'travel', label: 'Travel', icon: Airplane, hint: 'Local & Schengen' },
  { key: 'medical', label: 'Medical', icon: FirstAid, hint: 'Health & group' },
  { key: 'life', label: 'Life', icon: Heart, hint: 'Term & funeral' },
];

const DETAIL_FIELDS = {
  vehicle: [
    { key: 'make', label: 'Vehicle make & model', placeholder: 'e.g. Toyota Fortuner 2019' },
    { key: 'value', label: 'Sum insured (US$)', placeholder: 'e.g. 25,000', type: 'number' },
    {
      key: 'cover',
      label: 'Cover type',
      placeholder: 'Select cover',
      options: ['Third Party', 'TPFT', 'Comprehensive'],
    },
  ],
  home: [
    { key: 'propertyType', label: 'Property type', options: ['House', 'Townhouse', 'Apartment', 'Cluster'] },
    { key: 'buildings', label: 'Buildings sum insured (US$)', placeholder: 'e.g. 180,000', type: 'number' },
    { key: 'contents', label: 'Contents sum insured (US$)', placeholder: 'e.g. 45,000', type: 'number' },
  ],
  business: [
    { key: 'industry', label: 'Industry / sector', placeholder: 'e.g. Retail, construction' },
    { key: 'employees', label: 'Number of employees', placeholder: 'e.g. 18', type: 'number' },
    { key: 'turnover', label: 'Annual turnover (US$)', placeholder: 'e.g. 500,000', type: 'number' },
  ],
  travel: [
    { key: 'destination', label: 'Destination', placeholder: 'e.g. Schengen / UK' },
    { key: 'departure', label: 'Departure date', type: 'date' },
    { key: 'days', label: 'Trip length (days)', placeholder: 'e.g. 14', type: 'number' },
  ],
  medical: [
    { key: 'members', label: 'Members on plan', placeholder: 'e.g. 4 (self + spouse + 2 kids)' },
    { key: 'preferred', label: 'Preferred provider', options: ['CIMAS', 'First Mutual', 'Premier', 'Open to suggestion'] },
    { key: 'budget', label: 'Monthly budget (US$)', placeholder: 'e.g. 180', type: 'number' },
  ],
  life: [
    { key: 'sumAssured', label: 'Sum assured (US$)', placeholder: 'e.g. 50,000', type: 'number' },
    { key: 'age', label: 'Your age', placeholder: 'e.g. 38', type: 'number' },
    {
      key: 'coverKind',
      label: 'Cover type',
      options: ['Term life', 'Whole life', 'Funeral plan', 'Not sure'],
    },
  ],
};

export default function QuoteForm({ initialType = null, compact = false }) {
  const [step, setStep] = useState(initialType ? 1 : 0);
  const [type, setType] = useState(initialType);
  const [details, setDetails] = useState({});
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const fields = type ? DETAIL_FIELDS[type] || [] : [];

  const pickType = (t) => {
    setType(t);
    setDetails({});
    setStep(1);
  };

  const updateDetail = (key, value) => setDetails((d) => ({ ...d, [key]: value }));

  const updateContact = (key, value) => setContact((c) => ({ ...c, [key]: value }));

  const canProceedToContact =
    fields.length > 0 && fields.every((f) => (details[f.key] || '').toString().trim().length > 0);

  const canSubmit = contact.name.trim() && (contact.phone.trim() || contact.email.trim());

  const buildMessage = () => {
    const typeLabel = TYPES.find((t) => t.key === type)?.label || type;
    const detailLines = fields
      .map((f) => `${f.label}: ${details[f.key] || '-'}`)
      .join('\n');
    return `Hi EILITE, I'd like a quote.

Product: ${typeLabel} Insurance

${detailLines}

Name: ${contact.name}
Phone: ${contact.phone || '-'}
Email: ${contact.email || '-'}

Please get back to me with a comparison.`;
  };

  const handleSubmit = () => {
    if (!canSubmit) {
      toast.error('Please add your name and a phone or email so we can reach you.');
      return;
    }
    const msg = buildMessage();
    const href = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(href, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    toast.success('Opening WhatsApp — we\'ll get back to you within 3 minutes.');
  };

  const reset = () => {
    setStep(0);
    setType(null);
    setDetails({});
    setContact({ name: '', phone: '', email: '' });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-cream-50 border border-cream-300 p-8 sm:p-10 text-center" style={{ borderRadius: '3px' }}>
        <div className="mx-auto h-14 w-14 bg-signal-green/10 text-signal-green flex items-center justify-center mb-5">
          <CheckCircle size={28} weight="fill" />
        </div>
        <h3 className="font-display text-2xl text-navy-900">Request sent.</h3>
        <p className="mt-2 text-sm text-ink-500 leading-relaxed max-w-md mx-auto">
          We've passed your enquiry to a broker — you should hear back on WhatsApp within 3 minutes during business hours.
        </p>
        <button onClick={reset} className="mt-6 btn-ghost">
          New quote
        </button>
      </div>
    );
  }

  // Progress pips
  const steps = ['Type', 'Details', 'Contact'];

  return (
    <div className={`bg-cream-50 border border-cream-300 ${compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'}`} style={{ borderRadius: '3px' }}>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((label, idx) => (
          <div key={label} className="flex items-center gap-2 flex-1">
            <div
              className={`h-6 w-6 rounded-full flex items-center justify-center text-[11px] font-mono font-semibold transition-colors ${
                idx <= step
                  ? 'bg-navy-700 text-cream-50'
                  : 'bg-cream-200 text-ink-400'
              }`}
            >
              {idx + 1}
            </div>
            <span
              className={`text-[11px] tracking-[0.15em] uppercase font-medium hidden sm:inline ${
                idx === step ? 'text-navy-700' : 'text-ink-400'
              }`}
            >
              {label}
            </span>
            {idx < steps.length - 1 && (
              <div className={`flex-1 h-px ${idx < step ? 'bg-navy-700' : 'bg-cream-300'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 0: type */}
      {step === 0 && (
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal-700 mb-2">
            Step 1 of 3
          </p>
          <h3 className="font-display text-[26px] sm:text-[30px] leading-tight text-navy-900">
            What would you like to insure?
          </h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TYPES.map(({ key, label, icon: Icon, hint }) => (
              <button
                key={key}
                onClick={() => pickType(key)}
                className="group text-left p-4 sm:p-5 border border-cream-300 hover:border-navy-700 hover:bg-navy-700 hover:text-cream-50 transition-all"
                style={{ borderRadius: '2px' }}
              >
                <Icon
                  size={22}
                  weight="duotone"
                  className="text-teal-600 group-hover:text-teal-300"
                />
                <p className="mt-3 font-display text-[17px] leading-tight text-navy-900 group-hover:text-cream-50">
                  {label}
                </p>
                <p className="mt-1 text-[11px] text-ink-400 group-hover:text-cream-100/80">
                  {hint}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: details */}
      {step === 1 && type && (
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal-700 mb-2">
            Step 2 of 3 · {TYPES.find((t) => t.key === type)?.label}
          </p>
          <h3 className="font-display text-[26px] sm:text-[30px] leading-tight text-navy-900">
            Tell us a bit more.
          </h3>

          <div className="mt-6 space-y-4">
            {fields.map((f) => (
              <div key={f.key}>
                <label className="block text-[12px] font-medium tracking-wide text-ink-600 mb-1.5">
                  {f.label}
                </label>
                {f.options ? (
                  <select
                    value={details[f.key] || ''}
                    onChange={(e) => updateDetail(f.key, e.target.value)}
                    className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                    style={{ borderRadius: '2px' }}
                  >
                    <option value="">{f.placeholder || 'Select'}</option>
                    {f.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={f.type || 'text'}
                    value={details[f.key] || ''}
                    onChange={(e) => updateDetail(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                    style={{ borderRadius: '2px' }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-navy-700 transition-colors"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <button
              type="button"
              onClick={() => canProceedToContact && setStep(2)}
              disabled={!canProceedToContact}
              className={`btn-primary ${!canProceedToContact ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              Next <ArrowRight size={13} weight="bold" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: contact */}
      {step === 2 && type && (
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal-700 mb-2">
            Step 3 of 3 · Final details
          </p>
          <h3 className="font-display text-[26px] sm:text-[30px] leading-tight text-navy-900">
            Where should we send the quote?
          </h3>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-[12px] font-medium tracking-wide text-ink-600 mb-1.5">
                Full name
              </label>
              <input
                type="text"
                value={contact.name}
                onChange={(e) => updateContact('name', e.target.value)}
                placeholder="e.g. Tendai Moyo"
                className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                style={{ borderRadius: '2px' }}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-medium tracking-wide text-ink-600 mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => updateContact('phone', e.target.value)}
                  placeholder="+263 77 123 4567"
                  className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                  style={{ borderRadius: '2px' }}
                />
              </div>
              <div>
                <label className="block text-[12px] font-medium tracking-wide text-ink-600 mb-1.5">
                  Email (optional)
                </label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => updateContact('email', e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-cream-300 bg-cream-50 px-3.5 py-3 text-sm text-ink-800 focus:border-teal-500 focus:outline-none"
                  style={{ borderRadius: '2px' }}
                />
              </div>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-ink-400 leading-relaxed">
            By submitting you agree that EILITE may contact you about your enquiry. We never share your information with third parties other than the underwriters we're quoting on your behalf.
          </p>

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-navy-700 transition-colors"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`inline-flex items-center justify-center gap-2 bg-signal-green text-white px-7 py-3.5 text-[12px] font-semibold tracking-[0.1em] uppercase hover:brightness-110 transition-all ${
                !canSubmit ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              style={{ borderRadius: '2px' }}
            >
              <WhatsappLogo size={14} weight="fill" />
              Send via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
