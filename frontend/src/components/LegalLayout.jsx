import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Info, Mail, MessageCircle, Printer } from 'lucide-react';
import { CONTACT } from '@/data/trips';

/* Support email used in both legal documents (taken from the policy PDFs). */
export const SUPPORT_EMAIL = 'support@mylittleadventure.in';

/* Soft yellow tint built from the global brand token, so it follows
   --mla-button if the brand yellow ever changes in index.css. */
export const tint = (pct = 22) => ({
  background: `color-mix(in srgb, var(--mla-button) ${pct}%, white)`,
});

/* ---------- scroll spy ---------- */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    const els = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -65% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);

  return active;
}

/* ---------- small building blocks ---------- */
export function BulletList({ items, tone }) {
  const dot = tone === 'danger' ? 'bg-destructive' : 'bg-[var(--mla-primary)]';
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[var(--mla-ink-soft)] leading-relaxed"
        >
          <span
            className={`mt-[0.6rem] w-1.5 h-1.5 rounded-full shrink-0 ${dot}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberList({ items }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex gap-3.5 text-[var(--mla-ink-soft)] leading-relaxed"
        >
          <span className="shrink-0 w-6 h-6 mt-0.5 rounded-full bg-[var(--mla-ink)] text-white text-xs font-bold flex items-center justify-center">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function Callout({ children }) {
  return (
    <div
      className="flex gap-3 rounded-2xl border border-[var(--mla-button-border)] p-4 sm:p-5 text-[var(--mla-ink)]"
      style={tint(24)}
    >
      <Info size={18} className="shrink-0 mt-0.5 text-[var(--mla-ink)]" />
      <div className="text-sm sm:text-[0.95rem] leading-relaxed font-medium">
        {children}
      </div>
    </div>
  );
}

/* Generic renderer: [{ sub, p, list, ol, tone, note, link }] */
export function Blocks({ blocks }) {
  return (
    <>
      {blocks.map((b, i) => (
        <div key={i} className="space-y-3.5">
          {b.sub && (
            <h3 className="font-display text-lg font-bold tracking-tight text-[var(--mla-ink)]">
              {b.sub}
            </h3>
          )}
          {b.p && (
            <p className="text-[var(--mla-ink-soft)] leading-relaxed">{b.p}</p>
          )}
          {b.list && <BulletList items={b.list} tone={b.tone} />}
          {b.ol && <NumberList items={b.ol} />}
          {b.after && (
            <p className="text-[var(--mla-ink-soft)] leading-relaxed">
              {b.after}
            </p>
          )}
          {b.note && <Callout>{b.note}</Callout>}
          {b.link && (
            <Link
              to={b.link.to}
              className="btn-yellow btn-sm focus-ring"
              data-testid="legal-inline-link"
            >
              {b.link.label} <ChevronRight size={15} className="ticker-arrow" />
            </Link>
          )}
        </div>
      ))}
    </>
  );
}

export function LegalSection({ id, index, icon: Icon, title, children }) {
  return (
    <section
      id={id}
      data-testid={`section-${id}`}
      className="scroll-mt-32 rounded-3xl border border-[var(--mla-border)] bg-[var(--mla-card)] p-6 sm:p-9"
    >
      <header className="flex items-start gap-4">
        <span className="shrink-0 w-12 h-12 rounded-2xl bg-[var(--mla-button)] border border-[var(--mla-button-border)] text-[var(--mla-ink)] flex items-center justify-center">
          {Icon ? <Icon size={20} strokeWidth={1.8} /> : null}
        </span>
        <div className="min-w-0">
          <div className="overline">
            Section {String(index).padStart(2, '0')}
          </div>
          <h2 className="h2 text-2xl sm:text-3xl mt-1 text-[var(--mla-ink)]">
            {title}
          </h2>
        </div>
      </header>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

/* ---------- help card used in the sidebar and at the end ---------- */
function HelpCard() {
  return (
    <div className="rounded-3xl bg-[var(--mla-ink)] text-white p-6">
      <div className="overline text-[var(--mla-yellow-bright)]">
        Need clarity?
      </div>
      <p className="font-display text-xl font-bold tracking-tight mt-2 leading-snug">
        Talk to a real person before you book.
      </p>
      <div className="mt-5 flex flex-col gap-2.5">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp btn-sm justify-center"
          data-testid="legal-help-whatsapp"
        >
          <MessageCircle size={16} /> WhatsApp us
        </a>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
          data-testid="legal-help-email"
        >
          <Mail size={15} /> {SUPPORT_EMAIL}
        </a>
      </div>
    </div>
  );
}

/* ---------- page shell ---------- */
export default function LegalLayout({
  testId,
  crumb,
  overline,
  titleTop,
  titleAccent,
  intro,
  chips = [],
  sections,
  children,
}) {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <div data-testid={testId} className="bg-[var(--mla-bg)]">
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden pt-32 sm:pt-44 pb-12 sm:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-[26rem] h-[26rem] rounded-full blur-3xl"
          style={tint(55)}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 -left-32 w-72 h-72 rounded-full blur-3xl opacity-60"
          style={{
            background:
              'color-mix(in srgb, var(--mla-primary) 12%, transparent)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs font-semibold text-[var(--mla-muted)]"
            >
              <Link to="/" className="hover:text-[var(--mla-ink)] transition">
                Home
              </Link>
              <ChevronRight size={13} />
              <span className="text-[var(--mla-ink)]">{crumb}</span>
            </nav>

            <div className="overline mt-6">{overline}</div>
            <h1 className="h1 text-4xl sm:text-6xl lg:text-7xl mt-4 text-[var(--mla-ink)]">
              {titleTop}
              <br />
              <span className="font-serif-editorial italic text-[var(--mla-secondary)] font-normal">
                {titleAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--mla-ink-soft)]">
              {intro}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              {chips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--mla-border)] bg-white px-3.5 py-2 text-xs sm:text-[0.8rem] font-semibold text-[var(--mla-ink-soft)]"
                >
                  <Icon size={14} className="text-[var(--mla-primary)]" />
                  {label}
                </span>
              ))}
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-ghost btn-sm print:hidden"
                data-testid="legal-print"
              >
                <Printer size={14} /> Print / Save PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- body ---------- */}
      <section className="pb-6 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* mobile section pills */}
          <div
            className="lg:hidden sticky top-[68px] z-30 -mx-4 px-4 py-2.5 mb-6 bg-white/90 backdrop-blur border-b border-[var(--mla-border)] overflow-x-auto no-scrollbar flex gap-2 print:hidden"
            aria-label="Sections"
          >
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  active === s.id
                    ? 'bg-[var(--mla-button)] border-[var(--mla-button-border)] text-[var(--mla-ink)]'
                    : 'border-[var(--mla-border)] text-[var(--mla-muted)]'
                }`}
              >
                {i + 1}. {s.short || s.title}
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* desktop table of contents */}
            <aside className="hidden lg:block lg:col-span-3 print:hidden">
              <div className="sticky top-28 space-y-5 max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar pb-4">
                <nav
                  aria-label="On this page"
                  className="rounded-3xl border border-[var(--mla-border)] bg-[var(--mla-surface)] p-3"
                >
                  <div className="overline px-3 pt-2 pb-3">On this page</div>
                  <ul className="space-y-0.5">
                    {sections.map((s, i) => {
                      const on = active === s.id;
                      return (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            data-testid={`toc-${s.id}`}
                            className={`flex items-start gap-3 rounded-2xl px-3 py-2 text-[0.85rem] leading-snug transition ${
                              on
                                ? 'bg-[var(--mla-button)] text-[var(--mla-ink)] font-bold shadow-sm'
                                : 'text-[var(--mla-ink-soft)] hover:bg-white hover:text-[var(--mla-ink)] font-medium'
                            }`}
                          >
                            <span
                              className={`shrink-0 w-5 text-right tabular-nums text-xs mt-px ${
                                on
                                  ? 'text-[var(--mla-ink)]'
                                  : 'text-[var(--mla-muted)]'
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span>{s.short || s.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <HelpCard />
              </div>
            </aside>

            {/* content */}
            <div className="lg:col-span-9 space-y-6">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
