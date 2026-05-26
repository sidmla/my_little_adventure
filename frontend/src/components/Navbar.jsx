import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { CONTACT, TRIPS } from "@/data/trips";

const Logo = () => (
  <Link to="/" data-testid="logo-link" className="flex items-center gap-2 group">
    <img
      src="/logo.png"
      alt="My Little Adventure"
      className="w-10 h-10 rounded-full object-cover shrink-0"
    />
    <div className="leading-tight hidden sm:block">
      <div className="font-display text-[1rem] tracking-tight font-bold text-[var(--mla-ink)]">
        My Little <span className="text-[var(--mla-secondary)]">Adventure</span>
      </div>
      <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--mla-muted)] font-semibold">
        Cherish Every Moment
      </div>
    </div>
  </Link>
);

// Build dropdown groups from the trip data so they stay in sync.
const tripsByCat = (key) => TRIPS.filter((t) => t.categoryKey === key);

const DOMESTIC_GROUPS = [
  { label: "Couple Trips", to: "/couple", trips: tripsByCat("couple") },
  { label: "Group Trips", to: "/group", trips: tripsByCat("group") },
  { label: "Pilgrimage", to: "/pilgrimage", trips: tripsByCat("pilgrimage") },
];
const INTL_TRIPS = tripsByCat("international");

function DesktopDropdown({ label, children, panelWidth = "w-[640px]" }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="px-3 py-2 rounded-full text-[0.92rem] font-medium tracking-tight text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] hover:text-[var(--mla-ink)] transition-all duration-200 flex items-center gap-1"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16 }}
            className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 ${panelWidth} max-w-[90vw]`}
          >
            <div className="bg-[var(--mla-bg)] rounded-3xl border border-[var(--mla-border)] shadow-2xl p-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DomesticPanel() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {DOMESTIC_GROUPS.map((g) => (
          <div key={g.to}>
            <Link
              to={g.to}
              className="text-[0.7rem] uppercase tracking-[0.16em] font-bold text-[var(--mla-secondary)] hover:underline"
            >
              {g.label}
            </Link>
            <div className="mt-3 flex flex-col gap-1.5">
              {g.trips.map((t) => (
                <Link
                  key={t.id}
                  to={g.to}
                  className="text-sm text-[var(--mla-ink-soft)] hover:text-[var(--mla-ink)] hover:translate-x-0.5 transition-all"
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function IntlPanel() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
      {INTL_TRIPS.map((t) => (
        <Link
          key={t.id}
          to="/international"
          className="text-sm text-[var(--mla-ink-soft)] hover:text-[var(--mla-ink)] hover:translate-x-0.5 transition-all py-1"
        >
          {t.title}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-full text-[0.92rem] font-medium tracking-tight transition-all duration-200 ${
      isActive
        ? "bg-[var(--mla-ink)] text-[var(--mla-bg)]"
        : "text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] hover:text-[var(--mla-ink)]"
    }`;

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
          <NavLink to="/" end className={linkClass} data-testid="nav-link-explore">
            Explore
          </NavLink>
          <DesktopDropdown label="Domestic">
            <DomesticPanel />
          </DesktopDropdown>
          <DesktopDropdown label="International" panelWidth="w-[420px]">
            <IntlPanel />
          </DesktopDropdown>
          <NavLink to="/who-travels-with-us" className={linkClass} data-testid="nav-link-who">
            Who Travels With Us
          </NavLink>
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
            className="lg:hidden border-t border-[var(--mla-border)] bg-[var(--mla-bg)] max-h-[80vh] overflow-y-auto"
            data-testid="mobile-menu"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              <NavLink to="/" end className="px-4 py-3 rounded-2xl text-base font-medium text-[var(--mla-ink)] hover:bg-[var(--mla-surface)]">
                Explore
              </NavLink>

              {/* Domestic accordion */}
              <button
                className="px-4 py-3 rounded-2xl text-base font-medium text-[var(--mla-ink)] hover:bg-[var(--mla-surface)] flex items-center justify-between"
                onClick={() => setMobileGroup(mobileGroup === "domestic" ? null : "domestic")}
              >
                Domestic
                <ChevronDown size={18} className={mobileGroup === "domestic" ? "rotate-180" : ""} />
              </button>
              {mobileGroup === "domestic" && (
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  {DOMESTIC_GROUPS.map((g) => (
                    <NavLink
                      key={g.to}
                      to={g.to}
                      className="px-4 py-2.5 rounded-xl text-[0.95rem] text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] font-semibold"
                    >
                      {g.label}
                    </NavLink>
                  ))}
                </div>
              )}

              {/* International accordion */}
              <button
                className="px-4 py-3 rounded-2xl text-base font-medium text-[var(--mla-ink)] hover:bg-[var(--mla-surface)] flex items-center justify-between"
                onClick={() => setMobileGroup(mobileGroup === "intl" ? null : "intl")}
              >
                International
                <ChevronDown size={18} className={mobileGroup === "intl" ? "rotate-180" : ""} />
              </button>
              {mobileGroup === "intl" && (
                <div className="pl-4 flex flex-col gap-1 pb-2">
                  {INTL_TRIPS.map((t) => (
                    <NavLink
                      key={t.id}
                      to="/international"
                      className="px-4 py-2.5 rounded-xl text-[0.95rem] text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)]"
                    >
                      {t.title}
                    </NavLink>
                  ))}
                </div>
              )}

              <NavLink to="/who-travels-with-us" className="px-4 py-3 rounded-2xl text-base font-medium text-[var(--mla-ink)] hover:bg-[var(--mla-surface)]">
                Who Travels With Us
              </NavLink>

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
