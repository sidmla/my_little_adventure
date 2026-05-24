import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/trips";

const Logo = () => (
  <Link to="/" data-testid="logo-link" className="flex items-center gap-2 group">
    <div className="relative w-9 h-9 rounded-full bg-[var(--mla-primary)] flex items-center justify-center overflow-hidden">
      <span className="font-display text-[var(--mla-bg)] text-[1.05rem] font-bold leading-none">m</span>
      <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[var(--mla-secondary)]" />
    </div>
    <div className="leading-tight">
      <div className="font-display text-[1rem] tracking-tight font-bold text-[var(--mla-ink)]">
        My Little <span className="text-[var(--mla-secondary)]">Adventure</span>
      </div>
      <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--mla-muted)] font-semibold">
        Cherish Every Moment
      </div>
    </div>
  </Link>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300 ${
        scrolled ? "glass-nav-scrolled py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-testid={`nav-link-${link.to.replace(/\//g, "")}`}
              className={({ isActive }) =>
                `px-3 py-2 rounded-full text-[0.92rem] font-medium tracking-tight transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--mla-ink)] text-[var(--mla-bg)]"
                    : "text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] hover:text-[var(--mla-ink)]"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            data-testid="nav-phone"
            className="btn-ghost text-sm"
            aria-label="Call us"
          >
            <Phone size={15} />
            <span>{CONTACT.phone}</span>
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-whatsapp-cta"
            className="btn-primary text-sm"
          >
            <MessageCircle size={16} />
            <span>Plan My Trip</span>
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden p-2 rounded-full hover:bg-[var(--mla-surface)] transition"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[var(--mla-border)] bg-[var(--mla-bg)]"
            data-testid="mobile-menu"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  data-testid={`mobile-nav-link-${link.to.replace(/\//g, "")}`}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-base font-medium transition ${
                      isActive
                        ? "bg-[var(--mla-ink)] text-[var(--mla-bg)]"
                        : "text-[var(--mla-ink)] hover:bg-[var(--mla-surface)]"
                    }`
                  }
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-2 pt-3">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="btn-ghost flex-1 justify-center" data-testid="mobile-phone">
                  <Phone size={15} /> Call
                </a>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center" data-testid="mobile-whatsapp">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
