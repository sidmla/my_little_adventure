import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DestinationCard({ trip, index = 0 }) {
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
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://images.pexels.com/photos/17344039/pexels-photo-17344039.jpeg?auto=compress&cs=tinysrgb&w=900";
          }}
          className="dest-img w-full h-full object-cover bg-[var(--mla-surface)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
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
        <p className="text-sm text-[var(--mla-muted)] leading-relaxed line-clamp-3">
          {trip.blurb}
        </p>

        {trip.highlights?.length > 0 && (
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
        )}

        <div className="mt-5 pt-4 border-t border-[var(--mla-border)] flex items-center justify-end">
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