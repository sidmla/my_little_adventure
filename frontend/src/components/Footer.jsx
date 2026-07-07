import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT, NAV_LINKS } from '@/data/trips';

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[var(--mla-footer)] text-[var(--mla-footer-text)] mt-16 sm:mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="overline text-[var(--mla-yellow-bright)]">
              Let's talk
            </div>
            <h2 className="h1 text-3xl sm:text-5xl lg:text-6xl mt-3 sm:mt-4 max-w-xl leading-tight">
              Wherever you want to go,{' '}
              <span className="font-serif-editorial italic text-[var(--mla-primary)]">
                we'll get you there.
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[var(--mla-footer-text)]/70 max-w-md leading-relaxed">
              Tell us a place, a month, a budget. We'll come back with a trip
              you'll talk about for years.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[var(--mla-whatsapp-green)] text-white text-sm sm:text-base font-semibold hover:bg-[var(--mla-whatsapp-green-dark)] transition-all sm:hover:-translate-y-1"
              >
                <MessageCircle size={18} className="shrink-0" />
                <span className="truncate">Chat on WhatsApp</span>
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram-cta"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-all sm:hover:-translate-y-1"
              >
                <Instagram size={18} className="shrink-0" />
                <span className="truncate">@mylittleadventure___</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="overline text-[var(--mla-footer-text)]/50">
              Explore
            </div>
            <ul className="mt-4 sm:mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:block sm:space-y-3 text-[var(--mla-footer-text)]/85">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.to.replace(/\//g, '')}`}
                    className="hover:text-[var(--mla-yellow-bright)] transition inline-flex items-center gap-1.5 group"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={13}
                      className="shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="overline text-[var(--mla-footer-text)]/50">
              Reach Us
            </div>
            <ul className="mt-4 sm:mt-5 space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 min-w-0 hover:text-[var(--mla-yellow-bright)] transition"
                  data-testid="footer-phone"
                >
                  <span className="w-9 h-9 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone size={15} />
                  </span>
                  <span className="font-medium min-w-0 truncate">
                    {CONTACT.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 min-w-0 hover:text-[var(--mla-yellow-bright)] transition"
                  data-testid="footer-email"
                >
                  <span className="w-9 h-9 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail size={15} />
                  </span>
                  <span className="min-w-0 break-all text-sm sm:text-base">
                    {CONTACT.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 min-w-0 hover:text-[var(--mla-yellow-bright)] transition"
                  data-testid="footer-whatsapp-line"
                >
                  <span className="w-9 h-9 shrink-0 rounded-full bg-white/5 flex items-center justify-center">
                    <MessageCircle size={15} />
                  </span>
                  <span className="min-w-0">WhatsApp us anytime</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 text-xs sm:text-sm text-[var(--mla-footer-text)]/55">
          <div>
            © {new Date().getFullYear()} My Little Adventure. All rights
            reserved.
          </div>
          <div
            data-testid="viquat-credit"
            className="flex flex-wrap items-center gap-1.5"
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
