import React from "react";
import { motion } from "framer-motion";
import { Star, Calendar, ArrowRight } from "lucide-react";
import { CONTACT } from "@/data/trips";

function formatINR(n) {
  return n.toLocaleString("en-IN");
}

export default function DestinationCard({ trip, index = 0 }) {
  const save = trip.original - trip.price;
  const whatsappMsg = `https://wa.me/919059589696?text=Hi%20My%20Little%20Adventure%2C%20I%27m%20interested%20in%20${encodeURIComponent(trip.title)}%20(${encodeURIComponent(trip.duration)}).`;

  return (
    <motion.article
      data-testid={`dest-card-${trip.id}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
      className="dest-card group relative flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          loading="lazy"
          className="dest-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        {save > 0 && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[var(--mla-secondary)] text-white text-xs font-bold tracking-tight shadow-lg">
            Save ₹{formatINR(save)}
          </div>
        )}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[var(--mla-ink)] text-xs font-bold tracking-tight flex items-center gap-1">
          <Star size={11} fill="#F4B942" stroke="#F4B942" /> {trip.rating}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] font-semibold opacity-80">
              {trip.state}
            </div>
            <div className="font-display text-lg sm:text-xl font-bold leading-tight mt-0.5 max-w-[14rem]">
              {trip.title}
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] font-bold bg-white/15 backdrop-blur px-2 py-1 rounded-full">
            {trip.duration}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <p className="text-sm text-[var(--mla-muted)] leading-relaxed line-clamp-2">
          {trip.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {trip.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[var(--mla-surface)] text-[var(--mla-ink-soft)] border border-[var(--mla-border)]"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-[var(--mla-border)] flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-[var(--mla-ink)] tracking-tight">
                ₹{formatINR(trip.price)}
              </span>
              {trip.original > trip.price && (
                <span className="text-sm text-[var(--mla-muted)] line-through">
                  ₹{formatINR(trip.original)}
                </span>
              )}
            </div>
            <div className="text-[11px] text-[var(--mla-muted)] mt-1 flex items-center gap-1">
              <Calendar size={11} /> Next batch · {trip.next_batch}
            </div>
          </div>

          <a
            href={whatsappMsg}
            target="_blank"
            rel="noreferrer"
            data-testid={`dest-card-cta-${trip.id}`}
            className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full bg-[var(--mla-ink)] text-[var(--mla-bg)] text-sm font-semibold hover:bg-[var(--mla-primary)] transition group/btn"
          >
            Details
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
