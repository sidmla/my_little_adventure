import React from 'react';
import {
  AlarmClock,
  ArrowLeftRight,
  CalendarDays,
  CloudRain,
  Mail,
  MessageCircle,
  ScrollText,
  Send,
  Ticket,
  Wallet,
  XCircle,
  Scale,
  Clock,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { CONTACT } from '@/data/trips';
import LegalLayout, {
  BulletList,
  Blocks,
  Callout,
  LegalSection,
  NumberList,
  SUPPORT_EMAIL,
} from '@/components/LegalLayout';

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */
const SECTIONS = [
  {
    id: 'long-weekend',
    title: 'Long Weekend & Special Departures',
    short: 'Long Weekend & Special',
    icon: Ticket,
  },
  {
    id: 'regular-weekend',
    title: 'Regular Weekend Trips',
    short: 'Regular Weekend',
    icon: CalendarDays,
  },
  {
    id: 'unforeseen',
    title: 'Cancellation Due to Unforeseen Circumstances',
    short: 'Unforeseen Circumstances',
    icon: CloudRain,
  },
  {
    id: 'refund-time',
    title: 'Refund Processing Time',
    short: 'Refund Processing',
    icon: Wallet,
  },
  {
    id: 'cancelled-by-mla',
    title: 'Cancellation by MLA',
    short: 'Cancelled by MLA',
    icon: XCircle,
  },
  {
    id: 'transfers',
    title: 'Booking Transfer & Name Changes',
    short: 'Transfers & Name Changes',
    icon: ArrowLeftRight,
  },
  {
    id: 'no-show',
    title: 'Missed Departures & No-Show',
    short: 'Missed Departures',
    icon: AlarmClock,
  },
  {
    id: 'how-to-cancel',
    title: 'How to Request a Cancellation',
    short: 'How to Cancel',
    icon: Send,
  },
  {
    id: 'terms',
    title: 'Important Terms & Conditions',
    short: 'Important Terms',
    icon: ScrollText,
  },
];

const sec = (id) => SECTIONS.find((s) => s.id === id);
const idx = (id) => SECTIONS.findIndex((s) => s.id === id) + 1;

/* ------------------------------------------------------------------ */
/* Quick facts                                                         */
/* ------------------------------------------------------------------ */
const FACTS = [
  { n: 'Non-refundable', l: 'Booking token amount' },
  { n: '6 months', l: 'Travel voucher validity' },
  { n: '7–10 days', l: 'Refund processing (working days)' },
  { n: 'In writing', l: 'Email or WhatsApp request' },
];

/* ------------------------------------------------------------------ */
/* Tier timeline                                                       */
/* ------------------------------------------------------------------ */
const TONES = {
  good: {
    bar: 'bg-[var(--mla-primary)]',
    top: 'border-t-[var(--mla-primary)]',
    pill: 'bg-[var(--mla-primary)] text-white',
    dot: 'bg-[var(--mla-primary)]',
  },
  mid: {
    bar: 'bg-[var(--mla-button)]',
    top: 'border-t-[var(--mla-button-border)]',
    pill: 'bg-[var(--mla-button)] text-[var(--mla-ink)] border border-[var(--mla-button-border)]',
    dot: 'bg-[var(--mla-button-border)]',
  },
  bad: {
    bar: 'bg-destructive',
    top: 'border-t-destructive',
    pill: 'bg-destructive text-white',
    dot: 'bg-destructive',
  },
};

function TierTimeline({ tiers }) {
  return (
    <div>
      {/* departure timeline bar */}
      <div aria-hidden="true">
        <div className="flex h-2.5 rounded-full overflow-hidden gap-1">
          {tiers.map((t) => (
            <div
              key={t.window}
              className={`${TONES[t.tone].bar} ${t.flex} rounded-full`}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[0.68rem] uppercase tracking-[0.16em] font-bold text-[var(--mla-muted)]">
          <span>Earlier</span>
          <span>Departure day</span>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {tiers.map((t) => (
          <div
            key={t.window}
            data-testid={`tier-${t.window.replace(/\W+/g, '-').toLowerCase()}`}
            className={`rounded-2xl border border-[var(--mla-border)] border-t-4 ${TONES[t.tone].top} bg-white p-5 flex flex-col`}
          >
            <div className="font-display text-3xl font-extrabold tracking-tight text-[var(--mla-ink)]">
              {t.window}
            </div>
            <div className="text-xs font-semibold text-[var(--mla-muted)] mt-0.5">
              before departure
            </div>
            <span
              className={`mt-4 self-start rounded-full px-3 py-1 text-xs font-bold ${TONES[t.tone].pill}`}
            >
              {t.outcome}
            </span>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--mla-ink-soft)] leading-relaxed">
              {t.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span
                    className={`mt-[0.55rem] w-1.5 h-1.5 rounded-full shrink-0 ${TONES[t.tone].dot}`}
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const LONG_WEEKEND_TIERS = [
  {
    window: '30+ days',
    tone: 'good',
    flex: 'flex-[2]',
    outcome: 'Travel voucher',
    points: [
      'If the full package amount is paid, MLA issues a travel voucher equal to the amount paid, excluding the non-refundable token.',
      'Redeemable against any eligible MLA group trip.',
      'Valid for 6 months from the date of issuance.',
      'No cash refund under this category.',
    ],
  },
  {
    window: '15–29 days',
    tone: 'mid',
    flex: 'flex-[1.3]',
    outcome: '50% cancellation charge',
    points: [
      '50% of the amount paid, excluding the token, is deducted as cancellation charges.',
      'The remaining eligible amount is refunded to the traveller.',
      'The booking token remains non-refundable.',
    ],
  },
  {
    window: '0–14 days',
    tone: 'bad',
    flex: 'flex-1',
    outcome: '100% cancellation charge',
    points: [
      'No refund or travel voucher is issued.',
      'Includes last-minute cancellations, no-shows, and failure to report at the designated departure point.',
    ],
  },
];

const REGULAR_TIERS = [
  {
    window: '15+ days',
    tone: 'good',
    flex: 'flex-[2]',
    outcome: '0% charge · Travel voucher',
    points: [
      'Cancellation charges: 0% on the eligible balance amount.',
      'MLA issues a travel voucher equal to the amount paid, excluding the non-refundable booking token.',
      'Valid for 6 months and redeemable against eligible MLA group trips.',
      'No cash refund will be provided.',
    ],
  },
  {
    window: '5–14 days',
    tone: 'mid',
    flex: 'flex-[1.3]',
    outcome: '50% cancellation charge',
    points: [
      'Cancellation charges: 50% of the eligible amount paid.',
      'The remaining 50% is issued as an MLA travel voucher, valid for 6 months.',
      'The booking token amount remains non-refundable.',
    ],
  },
  {
    window: '0–4 days',
    tone: 'bad',
    flex: 'flex-1',
    outcome: '100% cancellation charge',
    points: [
      'No refund or travel voucher is issued.',
      'The same applies to no-shows and last-minute cancellations.',
    ],
  },
];

const UNFORESEEN = [
  'Heavy rainfall, floods, landslides, cyclones, or other natural disasters',
  'Government restrictions, curfews, or unexpected regulatory changes',
  'Road closures, traffic disruptions, or transportation delays',
  'Forest department restrictions or closure of tourist attractions',
  'Train cancellations, delays, or changes in transportation schedules',
  'Safety concerns or other unavoidable circumstances',
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function CancellationPolicy() {
  return (
    <LegalLayout
      testId="cancellation-policy-page"
      crumb="Cancellation & Refund Policy"
      overline="Policies"
      titleTop="Cancellation &"
      titleAccent="Refund Policy"
      intro="Travel plans can change. To keep things transparent and fair for every traveller, here is exactly how cancellations, vouchers and refunds work at MLA – My Little Adventure. Please read this before confirming your booking."
      chips={[
        { icon: Scale, label: 'Subject to Indian consumer law' },
        { icon: FileCheck2, label: 'Applies to all MLA group trips' },
      ]}
      sections={SECTIONS}
    >
      {/* quick facts */}
      <div
        data-testid="policy-facts"
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--mla-border)] rounded-3xl overflow-hidden border border-[var(--mla-border)]"
      >
        {FACTS.map((f) => (
          <div
            key={f.l}
            className="bg-[var(--mla-surface)] p-5 sm:p-6 text-center"
          >
            <div className="font-display text-lg sm:text-xl font-bold text-[var(--mla-primary)] tracking-tight leading-tight whitespace-nowrap">
              {f.n}
            </div>
            <div className="text-xs sm:text-[0.8rem] text-[var(--mla-muted)] mt-2 font-medium leading-tight">
              {f.l}
            </div>
          </div>
        ))}
      </div>

      {/* 1 – Long weekend */}
      <LegalSection
        id="long-weekend"
        index={idx('long-weekend')}
        icon={sec('long-weekend').icon}
        title={sec('long-weekend').title}
      >
        <p className="text-[var(--mla-ink-soft)] leading-relaxed">
          This policy applies to trips scheduled during long weekends, public
          holidays, festival holidays, Christmas, New Year, and other special
          departures.
        </p>

        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-[var(--mla-ink)] mb-3">
            1.1 Booking token amount
          </h3>
          <BulletList
            items={[
              'The booking token or advance amount is non-refundable and non-transferable once the booking is confirmed.',
              'The token amount cannot be transferred to another traveller, departure date, or destination.',
            ]}
          />
        </div>

        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-[var(--mla-ink)] mb-4">
            1.2 – 1.4 Cancellation windows
          </h3>
          <TierTimeline tiers={LONG_WEEKEND_TIERS} />
        </div>
      </LegalSection>

      {/* 2 – Regular weekend */}
      <LegalSection
        id="regular-weekend"
        index={idx('regular-weekend')}
        icon={sec('regular-weekend').icon}
        title={sec('regular-weekend').title}
      >
        <p className="text-[var(--mla-ink-soft)] leading-relaxed">
          This policy applies to MLA's regular weekend group departures,
          including 2 Nights / 3 Days and other scheduled weekend trips.
        </p>
        <TierTimeline tiers={REGULAR_TIERS} />
      </LegalSection>

      {/* 3 – Unforeseen */}
      <LegalSection
        id="unforeseen"
        index={idx('unforeseen')}
        icon={sec('unforeseen').icon}
        title={sec('unforeseen').title}
      >
        <p className="text-[var(--mla-ink-soft)] leading-relaxed">
          Certain circumstances may arise beyond the control of MLA – My Little
          Adventure, including but not limited to:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {UNFORESEEN.map((u) => (
            <div
              key={u}
              className="flex gap-3 rounded-2xl border border-[var(--mla-border)] bg-[var(--mla-surface)] p-4 text-sm text-[var(--mla-ink-soft)] leading-relaxed"
            >
              <CloudRain
                size={16}
                className="shrink-0 mt-0.5 text-[var(--mla-primary)]"
              />
              <span>{u}</span>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-[var(--mla-ink)] mb-3">
            In such situations
          </h3>
          <NumberList
            items={[
              'MLA reserves the right to modify, reschedule, or cancel certain sightseeing locations, activities, routes, or parts of the itinerary.',
              'MLA will make reasonable efforts to arrange an alternative route, destination, or activity wherever feasible.',
              "No refund will be provided for sightseeing locations or activities missed due to circumstances beyond MLA's control.",
              'Any additional expenses arising from unforeseen circumstances may need to be borne by the traveller.',
              'The safety of travellers will remain our priority.',
            ]}
          />
        </div>
      </LegalSection>

      {/* 4 – Refund time */}
      <LegalSection
        id="refund-time"
        index={idx('refund-time')}
        icon={sec('refund-time').icon}
        title={sec('refund-time').title}
      >
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 items-center rounded-2xl border border-[var(--mla-border)] bg-[var(--mla-surface)] p-5 sm:p-6">
          <div className="text-center sm:text-left">
            <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--mla-primary)]">
              7–10
            </div>
            <div className="text-xs font-semibold text-[var(--mla-muted)] mt-1">
              working days after cancellation approval
            </div>
          </div>
          <BulletList
            items={[
              'Eligible refunds are processed through the original payment method or another approved banking method.',
              'Bank processing timelines may vary.',
              'Any applicable payment gateway charges or non-refundable third-party charges will be communicated during refund processing.',
            ]}
          />
        </div>
      </LegalSection>

      {/* 5 – Cancelled by MLA */}
      <LegalSection
        id="cancelled-by-mla"
        index={idx('cancelled-by-mla')}
        icon={sec('cancelled-by-mla').icon}
        title={sec('cancelled-by-mla').title}
      >
        <p className="text-[var(--mla-ink-soft)] leading-relaxed">
          If MLA cancels an entire trip due to operational reasons:
        </p>
        <NumberList
          items={[
            'Travellers are eligible for a 100% refund of the package amount paid, including the booking token, excluding applicable GST.',
            'Alternatively, travellers may choose to transfer the eligible amount towards another MLA trip, subject to availability.',
            'Refunds will be processed within 7–10 working days.',
            'MLA will not be responsible for independently booked transportation, accommodation, or other personal expenses.',
          ]}
        />
        <Callout>
          Cancellations arising from natural disasters, government restrictions,
          or other force majeure circumstances are handled under the “Unforeseen
          Circumstances” section above and any applicable legal requirements.
        </Callout>
      </LegalSection>

      {/* 6 – Transfers */}
      <LegalSection
        id="transfers"
        index={idx('transfers')}
        icon={sec('transfers').icon}
        title={sec('transfers').title}
      >
        <BulletList
          items={[
            'Booking tokens are non-transferable.',
            "Any request to change the traveller's name, departure date, or destination must be submitted to MLA in advance.",
            'Such requests are subject to availability, operational feasibility, and applicable charges.',
            "Train tickets, flight tickets, and other third-party reservations are governed by the respective service provider's cancellation and modification policies.",
            'MLA reserves the right to decline changes that cannot be accommodated.',
          ]}
        />
      </LegalSection>

      {/* 7 – No show */}
      <LegalSection
        id="no-show"
        index={idx('no-show')}
        icon={sec('no-show').icon}
        title={sec('no-show').title}
      >
        <div
          className="flex items-center gap-4 rounded-2xl border border-[var(--mla-button-border)] p-5"
          style={{
            background: 'color-mix(in srgb, var(--mla-button) 24%, white)',
          }}
        >
          <Clock size={26} className="shrink-0 text-[var(--mla-ink)]" />
          <p className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--mla-ink)] leading-snug">
            Report to the boarding point at least 30 minutes before the
            scheduled departure.
          </p>
        </div>
        <BulletList
          items={[
            'If a traveller misses the train, bus, or designated pickup due to personal delay, no refund will be provided.',
            'MLA will not be responsible for additional transportation expenses incurred by the traveller.',
            'Travellers who voluntarily discontinue the trip after departure are not eligible for a refund for unused services.',
          ]}
        />
      </LegalSection>

      {/* 8 – How to cancel */}
      <LegalSection
        id="how-to-cancel"
        index={idx('how-to-cancel')}
        icon={sec('how-to-cancel').icon}
        title={sec('how-to-cancel').title}
      >
        <p className="text-[var(--mla-ink-soft)] leading-relaxed">
          Travellers wishing to cancel must inform MLA through an official
          communication channel:
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            data-testid="cancel-email"
            className="group flex items-center gap-4 rounded-2xl border border-[var(--mla-border)] bg-white p-5 hover:border-[var(--mla-header-border-hover)] hover:shadow-md transition"
          >
            <span className="w-11 h-11 shrink-0 rounded-full bg-[var(--mla-ink)] text-white flex items-center justify-center">
              <Mail size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[var(--mla-muted)]">
                Email
              </span>
              <span className="block font-semibold text-[var(--mla-ink)] break-all">
                {SUPPORT_EMAIL}
              </span>
            </span>
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            data-testid="cancel-whatsapp"
            className="group flex items-center gap-4 rounded-2xl border border-[var(--mla-border)] bg-white p-5 hover:border-[var(--mla-header-border-hover)] hover:shadow-md transition"
          >
            <span className="w-11 h-11 shrink-0 rounded-full bg-[var(--mla-whatsapp-green)] text-white flex items-center justify-center">
              <MessageCircle size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[var(--mla-muted)]">
                WhatsApp
              </span>
              <span className="block font-semibold text-[var(--mla-ink)]">
                {CONTACT.phone}
              </span>
            </span>
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-[var(--mla-ink)] mb-3">
            Your request should include
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {[
              "Traveller's full name",
              'Registered mobile number',
              'Trip destination',
              'Departure date',
              'Booking ID or payment reference',
              'Reason for cancellation',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-[var(--mla-ink-soft)]"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[var(--mla-primary)]"
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        <Callout>
          The cancellation date is the date on which MLA receives your written
          cancellation request through an official communication channel.
        </Callout>
      </LegalSection>

      {/* 9 – Important terms */}
      <LegalSection
        id="terms"
        index={idx('terms')}
        icon={sec('terms').icon}
        title={sec('terms').title}
      >
        <NumberList
          items={[
            'Cancellation charges are calculated based on the scheduled departure date.',
            'The booking token amount is non-refundable unless MLA cancels the trip or a refund is otherwise required by applicable law.',
            'Travel vouchers cannot be exchanged for cash.',
            'Travel vouchers must be redeemed within their validity period.',
            'Unused travel vouchers expire automatically after 6 months.',
            'Flight, train, hotel, and other third-party bookings may carry separate cancellation charges.',
            'No refunds are provided for voluntarily missed sightseeing, meals, activities, or other included services.',
            'All cancellation requests must be submitted in writing.',
            'MLA reserves the right to make reasonable operational changes to trips in the interest of traveller safety.',
            'This policy is subject to applicable Indian laws and consumer protection requirements.',
          ]}
        />

        <div className="rounded-3xl bg-[var(--mla-ink)] text-white p-6 sm:p-8">
          <div className="overline text-[var(--mla-yellow-bright)]">
            Traveller acknowledgement
          </div>
          <p className="mt-3 text-white/80 leading-relaxed">
            By confirming a booking and making payment to MLA – My Little
            Adventure, the traveller acknowledges having read and understood
            this Cancellation & Refund Policy and agrees to the applicable
            terms, subject to prevailing laws.
          </p>
          <p className="mt-5 font-serif-editorial italic text-xl sm:text-2xl text-[var(--mla-yellow-bright)]">
            Travel Solo, But Not Alone.
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
