import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { CONTACT, TRIPS, NAV_TYPES, domesticByState } from "@/data/trips";

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

const tripsByType = (key) => TRIPS.filter((t) => t.tripType === key);

function TabDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const trips = tripsByType(item.key);
  const isDomestic = item.key === "domestic";
  const stateGroups = isDomestic ? domesticByState() : null;
  const cols = isDomestic ? 4 : trips.length > 8 ? 3 : trips.length > 4 ? 2 : 1;
  const widthClass = isDomestic ? "w-[780px]" : cols === 3 ? "w-[560px]" : cols === 2 ? "w-[400px]" : "w-[240px]";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.to}
        data-testid={`nav-type-${item.key}`}
        className={({ isActive }) =>
          `px-3 py-2 rounded-full text-[0.92rem] font-medium tracking-tight transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
            isActive
              ? "bg-[var(--mla-ink)] text-[var(--mla-bg)]"
              : "text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] hover:text-[var(--mla-ink)]"
          }`
        }
      >
        {item.label}
        {trips.length > 0 && (
          <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
        )}
      </NavLink>
      <AnimatePresence>
        {open && trips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16 }}
            className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 ${widthClass} max-w-[92vw]`}
          >
            <div className="bg-[var(--mla-bg)] rounded-3xl border border-[var(--mla-border)] shadow-2xl p-5">
              <Link
                to={item.to}
                className="text-[0.7rem] uppercase tracking-[0.16em] font-bold text-[var(--mla-secondary)] hover:underline"
              >
                View all {item.label} &rarr;
              </Link>

              {isDomestic ? (
                <div className="mt-3 grid grid-cols-4 gap-x-6 gap-y-4">
                  {stateGroups.map(([st, sTrips]) => (
                    <div key={st}>
                      <div className="text-[0.68rem] uppercase tracking-[0.14em] font-bold text-[var(--mla-ink)] mb-1.5">
                        {st}
                      </div>
                      <div className="flex flex-col gap-1">
                        {sTrips.map((t) => (
                          <Link
                            key={t.id}
                            to={`/trip/${t.id}`}
                            className="text-[0.82rem] text-[var(--mla-ink-soft)] hover:text-[var(--mla-ink)] hover:translate-x-0.5 transition-all truncate"
                          >
                            {t.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="mt-3 grid gap-x-6 gap-y-1.5"
                  style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}
                >
                  {trips.map((t) => (
                    <Link
                      key={t.id}
                      to={`/trip/${t.id}`}
                      className="text-sm text-[var(--mla-ink-soft)] hover:text-[var(--mla-ink)] hover:translate-x-0.5 transition-all truncate"
                    >
                      {t.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MoreDropdown({ items }) {
  const [open, setOpen] = useState(false);
  if (!items.length) return null;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        data-testid="nav-more"
        className="px-3 py-2 rounded-full text-[0.92rem] font-medium tracking-tight text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] hover:text-[var(--mla-ink)] transition-all flex items-center gap-1 whitespace-nowrap"
      >
        More
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-full pt-3 w-56"
          >
            <div className="bg-[var(--mla-bg)] rounded-2xl border border-[var(--mla-border)] shadow-2xl p-2">
              {items.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.to}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] hover:text-[var(--mla-ink)]"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const [visibleCount, setVisibleCount] = useState(NAV_TYPES.length);
  const location = useLocation();

  const navRef = useRef(null);
  const measureRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const recompute = useCallback(() => {
    const container = navRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;
    const available = container.clientWidth;
    const items = Array.from(measure.children);
    const moreWidth = 90;
    let used = 90; // reserve for the "Explore" link at the start
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      used += items[i].offsetWidth + 4;
      const needMore = i < items.length - 1;
      if (used + (needMore ? moreWidth : 0) <= available) count++;
      else break;
    }
    setVisibleCount(Math.max(1, count));
  }, []);

  useEffect(() => {
    recompute();
    const ro = new ResizeObserver(recompute);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener("resize", recompute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, [recompute]);

  const visible = NAV_TYPES.slice(0, visibleCount);
  const overflow = NAV_TYPES.slice(visibleCount);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-300 ${
        scrolled ? "glass-nav-scrolled py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Logo />

        <div
          ref={measureRef}
          aria-hidden="true"
          className="absolute opacity-0 pointer-events-none -z-10 flex items-center gap-1"
          style={{ left: "-9999px", top: 0 }}
        >
          {NAV_TYPES.map((item) => (
            <span
              key={item.key}
              className="px-3 py-2 text-[0.92rem] font-medium tracking-tight flex items-center gap-1 whitespace-nowrap"
            >
              {item.label}
              <ChevronDown size={14} />
            </span>
          ))}
        </div>

        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-1 flex-1 justify-center min-w-0"
          aria-label="Primary"
        >
          <NavLink to="/" end className={({ isActive }) =>
            `px-3 py-2 rounded-full text-[0.92rem] font-medium tracking-tight transition-all whitespace-nowrap ${
              isActive ? "bg-[var(--mla-ink)] text-[var(--mla-bg)]" : "text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] hover:text-[var(--mla-ink)]"
            }`} data-testid="nav-link-explore">
            Explore
          </NavLink>
          {visible.map((item) => (
            <TabDropdown key={item.key} item={item} />
          ))}
          <MoreDropdown items={overflow} />
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
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

              {NAV_TYPES.map((item) => {
                const trips = tripsByType(item.key);
                const isOpen = mobileGroup === item.key;
                return (
                  <div key={item.key}>
                    <div className="flex items-center">
                      <NavLink
                        to={item.to}
                        className="flex-1 px-4 py-3 rounded-2xl text-base font-medium text-[var(--mla-ink)] hover:bg-[var(--mla-surface)]"
                      >
                        {item.label}
                      </NavLink>
                      {trips.length > 0 && (
                        <button
                          aria-label={`Toggle ${item.label}`}
                          className="p-2 rounded-xl hover:bg-[var(--mla-surface)]"
                          onClick={() => setMobileGroup(isOpen ? null : item.key)}
                        >
                          <ChevronDown size={18} className={isOpen ? "rotate-180" : ""} />
                        </button>
                      )}
                    </div>
                    {isOpen && (
                      <div className="pl-4 flex flex-col gap-1 pb-2">
                        {item.key === "domestic"
                          ? domesticByState().map(([st, sTrips]) => (
                              <div key={st} className="mb-1">
                                <div className="px-4 pt-2 pb-1 text-[0.7rem] uppercase tracking-[0.14em] font-bold text-[var(--mla-secondary)]">
                                  {st}
                                </div>
                                {sTrips.map((t) => (
                                  <NavLink
                                    key={t.id}
                                    to={`/trip/${t.id}`}
                                    className="px-4 py-2 rounded-xl text-[0.92rem] text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)] block"
                                  >
                                    {t.title}
                                  </NavLink>
                                ))}
                              </div>
                            ))
                          : trips.map((t) => (
                              <NavLink
                                key={t.id}
                                to={`/trip/${t.id}`}
                                className="px-4 py-2.5 rounded-xl text-[0.95rem] text-[var(--mla-ink-soft)] hover:bg-[var(--mla-surface)]"
                              >
                                {t.title}
                              </NavLink>
                            ))}
                      </div>
                    )}
                  </div>
                );
              })}

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
