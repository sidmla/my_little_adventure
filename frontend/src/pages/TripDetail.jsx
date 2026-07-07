import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, MapPin, CalendarDays, Clock, Users, Check, X,
  MessageCircle, Star, ChevronLeft, ChevronRight,
} from "lucide-react";
import { getTripById, CONTACT, BOOKING_POLICY } from "@/data/trips";
import ContactSection from "@/components/ContactSection";

export default function TripDetail() {
  const { tripId } = useParams();
  const trip = getTripById(tripId);
  const [photoIdx, setPhotoIdx] = useState(0);

  // If the id in the URL doesn't match any trip, show a friendly fallback.
  if (!trip) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-40 text-center">
        <h1 className="font-display text-3xl font-bold text-[var(--mla-ink)]">
          Trip not found
        </h1>
        <p className="mt-3 text-[var(--mla-muted)]">
          We couldn't find that trip. It may have moved or been renamed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 text-[var(--mla-ink)] font-semibold border-b border-[var(--mla-ink)] pb-1"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    );
  }

  // `details` is optional — trips that haven't been filled in yet still render.
  const d = trip.details || {};
  const whatsapp = `https://wa.me/919100120796?text=${encodeURIComponent(
    `Hi My Little Adventure, I'm interested in the ${trip.title} trip. Please share details.`
  )}`;

  return (
    <div data-testid={`trip-detail-${trip.id}`}>
      {/* ---------- HERO ---------- */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
            <Link
              to={`/${trip.categoryKey}`}
              className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm font-medium mb-4"
            >
              <ArrowLeft size={16} /> Back to {trip.region} trips
            </Link>
            <div className="text-[var(--mla-yellow-bright)] text-xs uppercase tracking-[0.22em] font-bold flex items-center gap-2">
              <MapPin size={14} /> {trip.state}
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mt-3 tracking-tight">
              {trip.title}
            </h1>
            <p className="text-white/85 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed">
              {trip.blurb}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- QUICK FACTS ---------- */}
      <section className="border-b border-[var(--mla-border)] bg-[var(--mla-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Fact icon={<Clock size={18} />} label="Duration" value={d.duration || "Ask us"} />
          <Fact icon={<CalendarDays size={18} />} label="Best time" value={d.bestTime || "Year-round"} />
          <Fact icon={<Users size={18} />} label="Ideal for" value={d.idealFor || "Everyone"} />
          <Fact icon={<Star size={18} />} label="Category" value={trip.region} />
        </div>
      </section>

      {/* ---------- BODY ---------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* main column */}
        <div className="lg:col-span-2 space-y-12">
          {/* About */}
          {d.about && (
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--mla-ink)]">About this trip</h2>
              <p className="mt-4 text-[var(--mla-muted)] leading-relaxed whitespace-pre-line">{d.about}</p>
            </div>
          )}

          {/* Highlights */}
          {trip.highlights?.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--mla-ink)]">Highlights</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {trip.highlights.map((h) => (
                  <span key={h} className="text-sm font-medium px-3 py-1.5 rounded-full bg-[var(--mla-surface)] text-[var(--mla-ink-soft)] border border-[var(--mla-border)]">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Photo gallery (client trip photos) — carousel */}
          {trip.gallery?.length > 0 && (() => {
            const photos = trip.gallery;
            const n = photos.length;
            const go = (dir) => setPhotoIdx((p) => (p + dir + n) % n);
            return (
              <div>
                <h2 className="font-display text-2xl font-bold text-[var(--mla-ink)]">Trip photos</h2>
                <p className="mt-2 text-sm text-[var(--mla-muted)]">Real moments from our {trip.title} group departures.</p>

                <div className="mt-5 relative rounded-2xl overflow-hidden border border-[var(--mla-border)] bg-[var(--mla-surface)] aspect-[16/10]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={photoIdx}
                      src={photos[photoIdx]}
                      alt={`${trip.title} trip photo ${photoIdx + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {n > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-[var(--mla-primary)] flex items-center justify-center shadow-lg transition"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-[var(--mla-primary)] flex items-center justify-center shadow-lg transition"
                      >
                        <ChevronRight size={22} />
                      </button>

                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[var(--mla-ink)]/60 text-white text-xs font-semibold">
                        {photoIdx + 1} / {n}
                      </div>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {photos.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setPhotoIdx(i)}
                            aria-label={`Go to photo ${i + 1}`}
                            className={`h-2 rounded-full transition-all ${
                              i === photoIdx ? "w-6 bg-[var(--mla-yellow-bright)]" : "w-2 bg-white/70 hover:bg-white"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {n > 1 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                    {photos.map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setPhotoIdx(i)}
                        className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition ${
                          i === photoIdx ? "border-[var(--mla-primary)]" : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={src} alt={`thumbnail ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}

          {/* Itinerary */}
          {d.itinerary?.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--mla-ink)]">Day-by-day itinerary</h2>
              <div className="mt-6 space-y-4">
                {d.itinerary.map((day, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-16 text-center">
                      <div className="text-[10px] uppercase tracking-wide font-bold text-[var(--mla-secondary)]">Day</div>
                      <div className="font-display text-2xl font-bold text-[var(--mla-ink)]">{day.day}</div>
                    </div>
                    <div className="flex-1 pb-4 border-b border-[var(--mla-border)]">
                      <div className="font-semibold text-[var(--mla-ink)]">{day.title}</div>
                      {day.desc && <p className="text-sm text-[var(--mla-muted)] mt-1 leading-relaxed">{day.desc}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions / Exclusions */}
          {(d.inclusions?.length > 0 || d.exclusions?.length > 0) && (
            <div className="grid sm:grid-cols-2 gap-8">
              {d.inclusions?.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--mla-ink)]">What's included</h3>
                  <ul className="mt-4 space-y-2">
                    {d.inclusions.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm text-[var(--mla-ink-soft)]">
                        <Check size={16} className="text-[var(--mla-primary)] mt-0.5 shrink-0" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {d.exclusions?.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--mla-ink)]">Not included</h3>
                  <ul className="mt-4 space-y-2">
                    {d.exclusions.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm text-[var(--mla-ink-soft)]">
                        <X size={16} className="text-red-500 mt-0.5 shrink-0" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Booking & cancellation policy */}
          <div className="rounded-2xl border border-[var(--mla-border)] bg-[var(--mla-surface)] p-6">
            <h3 className="font-display text-xl font-bold text-[var(--mla-ink)]">Booking & cancellation</h3>
            <div className="mt-4 space-y-3 text-sm text-[var(--mla-ink-soft)] leading-relaxed">
              <p><span className="font-semibold text-[var(--mla-ink)]">Booking amount:</span> {BOOKING_POLICY.bookingAmount}</p>
              <ul className="space-y-1.5">
                {BOOKING_POLICY.cancellation.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <X size={15} className="text-red-500 mt-0.5 shrink-0" /> {c}
                  </li>
                ))}
              </ul>
              <p><span className="font-semibold text-[var(--mla-ink)]">Full payment:</span> {BOOKING_POLICY.fullPayment}</p>
              <ul className="space-y-1.5 pt-1 text-[var(--mla-muted)] text-xs">
                {BOOKING_POLICY.notes.map((n) => (
                  <li key={n}>• {n}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* sticky booking card */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-28 rounded-3xl border border-[var(--mla-border)] bg-[var(--mla-bg)] p-6 shadow-lg">
            {trip.price?.from && (
              <div className="pb-5 mb-5 border-b border-[var(--mla-border)]">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--mla-muted)] font-semibold">
                  {trip.price.from === "Ask us" ? "Pricing" : "Starts from"}
                </div>
                <div className="font-display text-3xl font-bold text-[var(--mla-ink)] mt-1">
                  {trip.price.from}
                  {trip.price.from !== "Ask us" && (
                    <span className="text-sm font-medium text-[var(--mla-muted)]"> / person</span>
                  )}
                </div>
                {(trip.price.fromCity || trip.price.city || trip.price.ac3) && (
                  <div className="mt-2 space-y-0.5 text-xs text-[var(--mla-ink-soft)]">
                    {trip.price.city && <div><span className="text-[var(--mla-muted)]">{trip.price.city}:</span> {trip.price.from}</div>}
                    {trip.price.fromCity && <div>{trip.price.fromCity}</div>}
                    {trip.price.ac3 && <div>{trip.price.ac3}</div>}
                  </div>
                )}
                {trip.price.note && (
                  <div className="mt-2 text-[11px] text-[var(--mla-muted)]">{trip.price.note}</div>
                )}
                {d.departure && (
                  <div className="mt-3 flex items-start gap-1.5 text-xs text-[var(--mla-ink-soft)]">
                    <CalendarDays size={13} className="mt-0.5 shrink-0 text-[var(--mla-secondary)]" />
                    <span>{d.departure}</span>
                  </div>
                )}
              </div>
            )}
            <div className="text-sm text-[var(--mla-muted)]">Plan your</div>
            <div className="font-display text-2xl font-bold text-[var(--mla-ink)] mt-1">{trip.title} trip</div>
            <p className="text-sm text-[var(--mla-muted)] mt-3 leading-relaxed">
              Message us on WhatsApp and our team will confirm dates, seats, and a custom plan within minutes.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="trip-detail-whatsapp"
              className="btn-whatsapp btn-lg w-full justify-center mt-5"
            >
              <MessageCircle size={18} /> Enquire on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="btn-ghost w-full justify-center mt-3"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- BOTTOM CONTACT CTA ---------- */}
      <section className="bg-[var(--mla-ink)] text-[var(--mla-bg)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Ready for {trip.title}?
          </h2>
          <p className="mt-3 text-[var(--mla-bg)]/70 max-w-xl mx-auto">
            Tell us your dates and group size — our team will send a tailored plan and the best price on WhatsApp within minutes.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="trip-detail-contact-whatsapp"
              className="btn-whatsapp btn-lg justify-center"
            >
              <MessageCircle size={18} /> Contact Us on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[var(--mla-bg)]/30 text-[var(--mla-bg)] font-semibold hover:bg-[var(--mla-bg)]/10 transition"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

function Fact({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[var(--mla-bg)] border border-[var(--mla-border)] flex items-center justify-center text-[var(--mla-secondary)]">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-wide text-[var(--mla-muted)] font-semibold">{label}</div>
        <div className="text-sm font-semibold text-[var(--mla-ink)]">{value}</div>
      </div>
    </div>
  );
}
