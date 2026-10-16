import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, Loader2 } from 'lucide-react';
import { MONTHS, LEAD_CATEGORIES, CATEGORY_PLACES } from '@/data/trips';

const SHEETS_URL = process.env.REACT_APP_SHEETS_URL;
const STORAGE_KEY = 'mla_popup_state_v1';

// Popup cadence (per visit):
//   1st  - as soon as the visitor lands (after a short 2s so the page paints first)
//   2nd  - 45 seconds after the visitor closes the 1st
//   3rd  - 1:30 after they close the 2nd
//   4th  - 3:00 after they close the 3rd
//   After the 4th it does not come back during that visit.
//   If the visitor submits the form, it stops for 7 days.
// To change the timing, edit DELAYS_MS below (milliseconds).
// Want fewer appearances? Delete entries from the end of the list.
const DELAYS_MS = [2 * 1000, 45 * 1000, 90 * 1000, 180 * 1000];
const VISIT_KEY = 'mla_popup_visit_v3'; // sessionStorage: survives reloads, resets on a new visit

function readState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}
function writeState(p) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* storage unavailable (private mode etc.) - ignore */
  }
}
function readVisit() {
  try {
    const v = JSON.parse(sessionStorage.getItem(VISIT_KEY) || 'null');
    if (v && typeof v.shown === 'number') return v;
  } catch {
    /* ignore */
  }
  return { shown: 0, lastClosedAt: 0 };
}
function writeVisit(v) {
  try {
    sessionStorage.setItem(VISIT_KEY, JSON.stringify(v));
  } catch {
    /* ignore */
  }
}

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    category: '',
    place: '',
    month: '',
  });

  // How many times the popup has already been shown in this visit.
  const [shown, setShown] = useState(() => readVisit().shown);
  const visitRef = useRef(null);
  if (visitRef.current === null) visitRef.current = readVisit();
  const mountedAtRef = useRef(Date.now());

  const submittedAlready = useCallback(() => {
    const s = readState();
    if (!s.submittedAt) return false;
    const ageMs = Date.now() - s.submittedAt;
    return ageMs < 7 * 24 * 60 * 60 * 1000; // 7 days
  }, []);

  // Schedule the next appearance. Re-runs whenever the popup opens/closes or the count changes.
  useEffect(() => {
    if (open) return undefined;
    if (shown >= DELAYS_MS.length) return undefined;
    if (submittedAlready()) return undefined;

    // The 1st one counts from landing; every later one counts from the last close.
    const base =
      shown === 0
        ? mountedAtRef.current
        : visitRef.current.lastClosedAt || mountedAtRef.current;
    const delay = base + DELAYS_MS[shown] - Date.now();

    const t = setTimeout(
      () => {
        if (submittedAlready()) return;
        const next = shown + 1;
        visitRef.current = { ...visitRef.current, shown: next };
        writeVisit(visitRef.current);
        setShown(next);
        setOpen(true);
      },
      Math.max(delay, 0),
    );

    return () => clearTimeout(t);
  }, [open, shown, submittedAlready]);

  const handleClose = () => {
    visitRef.current = { ...visitRef.current, lastClosedAt: Date.now() };
    writeVisit(visitRef.current);
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (
      !form.name ||
      !form.mobile ||
      !form.category ||
      !form.place ||
      !form.month
    ) {
      setError('Please fill all fields.');
      return;
    }
    if (form.mobile.length !== 10) {
      setError('Enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    try {
      const body = new URLSearchParams({
        type: 'lead',
        name: form.name,
        mobile: form.mobile,
        category: form.category,
        place: form.place,
        month: form.month,
        source: 'popup',
        page_url: window.location.href,
      });
      // form-encoded body = "simple request", so no CORS preflight to Apps Script
      await fetch(SHEETS_URL, { method: 'POST', body });
      writeState({ submittedAt: Date.now() });
      setSubmitted(true);
      setTimeout(() => setOpen(false), 2200);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-3 sm:p-6 bg-[var(--mla-ink)]/55 backdrop-blur-sm"
          data-testid="lead-popup-overlay"
          onClick={handleClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[var(--mla-bg)] rounded-3xl overflow-hidden shadow-2xl border border-[var(--mla-border)] max-h-[calc(100dvh-3rem)] flex flex-col"
            data-testid="lead-popup-card"
          >
            <button
              onClick={handleClose}
              data-testid="lead-popup-close"
              aria-label="Close"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[var(--mla-ink)] transition"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <div className="px-7 pt-8 [@media(max-height:800px)]:pt-5 pb-2 bg-[var(--mla-surface)] relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--mla-secondary)]/15 blur-2xl" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--mla-secondary)] uppercase tracking-[0.18em]">
                      <Sparkles size={13} /> Exclusive Deal
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl [@media(max-height:800px)]:text-xl font-bold mt-3 [@media(max-height:800px)]:mt-2 text-[var(--mla-ink)] leading-tight">
                      Get up to{' '}
                      <span className="text-[var(--mla-secondary)]">
                        ₹3,000 off
                      </span>{' '}
                      your next trip.
                    </h3>
                    <p className="text-sm text-[var(--mla-muted)] mt-2">
                      Tell us where & when. We'll send a tailored quote on
                      WhatsApp within 10 minutes.
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="px-7 py-6 [@media(max-height:800px)]:py-4 space-y-3.5 [@media(max-height:800px)]:space-y-2.5 overflow-y-auto"
                  data-testid="lead-popup-form"
                >
                  <div>
                    <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">
                      Your name
                    </label>
                    <input
                      data-testid="popup-input-name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="e.g. Aarav"
                      className="w-full px-4 py-3 [@media(max-height:800px)]:py-2.5 rounded-xl bg-[var(--mla-surface)]/60 border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:bg-[var(--mla-card)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)] placeholder:text-[var(--mla-muted)]/60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">
                      Mobile number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl bg-[var(--mla-surface)] border border-r-0 border-[var(--mla-border)] text-sm font-semibold text-[var(--mla-ink)]">
                        +91
                      </span>
                      <input
                        data-testid="popup-input-mobile"
                        type="tel"
                        value={form.mobile}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            mobile: e.target.value
                              .replace(/\D/g, '')
                              .slice(0, 10),
                          })
                        }
                        placeholder="10-digit mobile"
                        className="flex-1 px-4 py-3 [@media(max-height:800px)]:py-2.5 rounded-r-xl bg-[var(--mla-surface)]/60 border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:bg-[var(--mla-card)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)] placeholder:text-[var(--mla-muted)]/60"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">
                      Trip category
                    </label>
                    <select
                      data-testid="popup-input-category"
                      value={form.category}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          category: e.target.value,
                          place: '',
                        })
                      }
                      className="w-full px-3 py-3 [@media(max-height:800px)]:py-2.5 rounded-xl bg-[var(--mla-surface)]/60 border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:bg-[var(--mla-card)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)]"
                    >
                      <option value="">Pick a category</option>
                      {LEAD_CATEGORIES.map((c) => (
                        <option key={c.key} value={c.label}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">
                        Place
                      </label>
                      <select
                        data-testid="popup-input-place"
                        value={form.place}
                        disabled={!form.category}
                        onChange={(e) =>
                          setForm({ ...form, place: e.target.value })
                        }
                        className="w-full px-3 py-3 [@media(max-height:800px)]:py-2.5 rounded-xl bg-[var(--mla-surface)]/60 border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:bg-[var(--mla-card)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">
                          {form.category ? 'Pick one' : 'Select category first'}
                        </option>
                        {(() => {
                          const sel = LEAD_CATEGORIES.find(
                            (c) => c.label === form.category,
                          );
                          const places = sel
                            ? CATEGORY_PLACES[sel.key] || []
                            : [];
                          return places.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ));
                        })()}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">
                        Month
                      </label>
                      <select
                        data-testid="popup-input-month"
                        value={form.month}
                        onChange={(e) =>
                          setForm({ ...form, month: e.target.value })
                        }
                        className="w-full px-3 py-3 [@media(max-height:800px)]:py-2.5 rounded-xl bg-[var(--mla-surface)]/60 border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:bg-[var(--mla-card)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)]"
                      >
                        <option value="">Pick one</option>
                        {MONTHS.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div
                      data-testid="popup-error"
                      className="text-sm text-[var(--mla-secondary)] font-medium"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="popup-submit"
                    className="btn-yellow btn-lg w-full justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />{' '}
                        Sending...
                      </>
                    ) : (
                      <>Send me a quote</>
                    )}
                  </button>
                  <p className="text-[11px] text-[var(--mla-muted)] text-center">
                    We never share your details. Unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              <div
                className="px-8 py-12 text-center"
                data-testid="popup-thankyou"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--mla-primary)] flex items-center justify-center text-[var(--mla-bg)] mb-4">
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--mla-ink)]">
                  You're in!
                </h3>
                <p className="text-[var(--mla-muted)] mt-2">
                  Our trip captain will WhatsApp you shortly with options.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
