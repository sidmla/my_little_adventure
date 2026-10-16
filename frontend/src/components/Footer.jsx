import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT, NAV_LINKS } from '@/data/trips';
import { LEGAL_LINKS } from '@/data/legal';

/* Hairlines on the yellow footer: derived from the global footer text colour
   so they stay visible (the old white/10 borders vanished on yellow). */
const hairline = {
  borderColor: 'color-mix(in srgb, var(--mla-footer-text) 16%, transparent)',
};

const ABOUT_LINK = NAV_LINKS.find((l) => l.to === '/who-travels-with-us');
const EXPLORE_LINKS = NAV_LINKS.filter((l) => l.to !== '/who-travels-with-us');

const COMPANY_LINKS = [
  ...(ABOUT_LINK ? [ABOUT_LINK] : []),
  ...LEGAL_LINKS.map(({ label, to }) => ({ label, to })),
];

function FooterHeading({ children }) {
  return (
    <div className="overline no-underline text-[var(--mla-footer-text)]/60">
      {children}
    </div>
  );
}

function FooterLinks({ links, prefix }) {
  return (
    <ul className="mt-5 space-y-3">
      {links.map((l) => (
        <li key={l.to}>
          <Link
            to={l.to}
            data-testid={`${prefix}-${l.to.replace(/\//g, '')}`}
            className="group inline-flex items-center gap-1.5 text-[0.95rem] font-medium hover:underline underline-offset-4 decoration-2"
          >
            {l.label}
            <ArrowUpRight
              size={14}
              className="shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactRow({ icon: Icon, label, value, href, external, testId }) {
  const body = (
    <>
      <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--mla-ink)] text-white flex items-center justify-center">
        <Icon size={16} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[var(--mla-footer-text)]/60">
          {label}
        </span>
        <span className="block text-[0.95rem] font-semibold break-words leading-snug">
          {value}
        </span>
      </span>
    </>
  );
  const cls =
    'flex items-center gap-3 rounded-2xl border bg-white/45 px-3.5 py-3';

  return href ? (
    <a
      href={href}
      data-testid={testId}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      style={hairline}
      className={`${cls} hover:bg-white/80 transition`}
    >
      {body}
    </a>
  ) : (
    <div style={hairline} className={cls}>
      {body}
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[var(--mla-footer)] text-[var(--mla-footer-text)] mt-16 sm:mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
        {/* ---------- call-to-action band ---------- */}
        <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-[var(--mla-ink)] text-white px-6 py-9 sm:px-12 sm:py-12 lg:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 w-72 h-72 rounded-full bg-[var(--mla-button)] opacity-20 blur-3xl"
          />
          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="overline no-underline !text-[var(--mla-button)]">
                Let's talk
              </div>
              <h2 className="h1 text-3xl sm:text-4xl lg:text-5xl mt-3 leading-[1.1]">
                Wherever you want to go,{' '}
                <span className="font-serif-editorial italic font-normal text-[var(--mla-button)]">
                  we'll get you there.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-white/70">
                Tell us a place, a month, a budget. We'll come back with a trip
                you'll talk about for years.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:items-stretch xl:justify-end">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp-cta"
                className="btn-whatsapp btn-lg justify-center sm:flex-1 xl:flex-none"
              >
                <MessageCircle size={18} className="shrink-0" />
                Chat on WhatsApp
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-[0.9rem] font-semibold text-white bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] hover:opacity-90 transition sm:flex-1 xl:flex-none"
              >
                <Instagram size={18} className="shrink-0" />
                <span className="truncate">@mylittleadventure___</span>
              </a>
            </div>
          </div>
        </div>

        {/* ---------- link grid ---------- */}
        <div className="mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10">
          {/* brand */}
          <div className="col-span-2 lg:col-span-3">
            <Link
              to="/"
              data-testid="footer-logo"
              className="inline-flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="My Little Adventure"
                className="w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-white shadow-md shadow-black/10"
              />
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold tracking-tight">
                  My Little{' '}
                  <span className="text-[var(--mla-secondary)]">Adventure</span>
                </span>
                <span className="block text-[0.62rem] tracking-[0.25em] uppercase font-semibold text-[var(--mla-footer-text)]/60">
                  Cherish Every Moment
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-[var(--mla-footer-text)]/75">
              Small-group trips across India and beyond, planned like we're
              going on them ourselves.
            </p>
          </div>

          {/* explore */}
          <div className="lg:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <FooterLinks links={EXPLORE_LINKS} prefix="footer-link" />
          </div>

          {/* company + legal */}
          <div className="lg:col-span-3">
            <FooterHeading>Company</FooterHeading>
            <FooterLinks links={COMPANY_LINKS} prefix="footer-link" />
          </div>

          {/* contact */}
          <div className="col-span-2 lg:col-span-4">
            <FooterHeading>Reach us</FooterHeading>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <ContactRow
                icon={Phone}
                label="Call us"
                value={CONTACT.phone}
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                testId="footer-phone"
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
                testId="footer-email"
              />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with us anytime"
                href={CONTACT.whatsapp}
                external
                testId="footer-whatsapp-line"
              />
              <ContactRow
                icon={MapPin}
                label="Based in"
                value="Hyderabad, Telangana"
              />
            </div>
          </div>
        </div>

        {/* ---------- bottom bar ---------- */}
        <div
          style={hairline}
          className="mt-12 sm:mt-14 pt-6 border-t flex flex-col-reverse items-center gap-4 text-center md:flex-row md:justify-between md:text-left text-xs sm:text-sm text-[var(--mla-footer-text)]/70"
        >
          <div>
            © {new Date().getFullYear()} My Little Adventure. All rights
            reserved.
          </div>

          <div
            data-testid="viquat-credit"
            className="flex flex-wrap items-center justify-center gap-1.5"
          >
            <span>Powered by</span>
            <a
              href="https://www.viqantai.com"
              className="font-semibold text-[var(--mla-footer-text)] hover:underline underline-offset-4"
            >
              ViQantAI TECH SERVICES PVT LTD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
