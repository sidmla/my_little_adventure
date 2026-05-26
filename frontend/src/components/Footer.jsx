import React from "react";
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Phone, Mail, ArrowUpRight } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/data/trips";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[var(--mla-footer)] text-[var(--mla-bg)] mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="overline text-[var(--mla-yellow)]">Let's talk</div>
            <h2 className="h1 text-4xl sm:text-6xl mt-4 max-w-xl">
              Wherever you want to go, <span className="font-serif-editorial italic text-[var(--mla-yellow)]">we'll get you there.</span>
            </h2>
            <p className="mt-6 text-[var(--mla-bg)]/70 max-w-md leading-relaxed">
              Tell us a place, a month, a budget. We'll come back with a trip you'll talk about for years.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--mla-yellow)] text-[var(--mla-ink)] font-semibold hover:bg-white transition-all hover:-translate-y-1"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/5 transition"
              >
                <Instagram size={18} /> @mylittleadventure___
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="overline text-[var(--mla-bg)]/50">Explore</div>
            <ul className="mt-5 space-y-3 text-[var(--mla-bg)]/85">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.to.replace(/\//g, "")}`}
                    className="hover:text-[var(--mla-yellow)] transition inline-flex items-center gap-1.5 group"
                  >
                    {l.label}
                    <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="overline text-[var(--mla-bg)]/50">Reach Us</div>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 hover:text-[var(--mla-yellow)] transition"
                  data-testid="footer-phone"
                >
                  <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone size={15} />
                  </span>
                  <span className="font-medium">{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 hover:text-[var(--mla-yellow)] transition"
                  data-testid="footer-email"
                >
                  <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail size={15} />
                  </span>
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-[var(--mla-yellow)] transition"
                  data-testid="footer-whatsapp-line"
                >
                  <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                    <MessageCircle size={15} />
                  </span>
                  <span>WhatsApp us anytime</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-[var(--mla-bg)]/55">
          <div>© {new Date().getFullYear()} My Little Adventure. All rights reserved.</div>
          <div data-testid="viquat-credit" className="flex items-center gap-1.5">
            <span>Powered by</span>
            <a
              href="https://www.viqantai.com"
              className="font-semibold text-[var(--mla-yellow)] hover:underline underline-offset-4"
            >
              ViQantAI TECH SERVICES PVT LTD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
