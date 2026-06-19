import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/data/trips";

export default function ReviewsCarousel() {
  // Duplicate list for seamless marquee
  const items = [...REVIEWS, ...REVIEWS];

  return (
    <section
      data-testid="reviews-section"
      className="py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="overline">From our Google reviews</div>
            <h2 className="h2 text-4xl sm:text-5xl mt-4 text-[var(--mla-ink)]">
              Loved by <span className="font-serif-editorial italic text-[var(--mla-primary)]">10,000+</span> travelers.
            </h2>
          </div>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[var(--mla-ink)] font-semibold border-b border-[var(--mla-ink)] pb-1 hover:gap-3 transition-all"
            data-testid="reviews-google-link"
          >
            See all 412+ on Google →
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--mla-bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--mla-bg)] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-6 w-max" data-testid="reviews-marquee">
          {items.map((r, i) => (
            <motion.article
              key={`${r.name}-${i}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-[var(--mla-surface)] rounded-3xl p-7 border border-[var(--mla-border)]"
            >
              <Quote className="text-[var(--mla-secondary)] mb-3" size={26} strokeWidth={2} />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} size={14} fill="#FFD400" stroke="#FFD400" />
                ))}
              </div>
              <p className="text-[var(--mla-ink)] leading-relaxed text-[0.95rem] mb-5">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--mla-border)]">
                <div className="w-10 h-10 rounded-full bg-[var(--mla-primary)] text-[var(--mla-bg)] flex items-center justify-center font-display font-bold">
                  {r.name.charAt(0)}
                </div>
                <div className="leading-tight">
                  <div className="font-display font-bold text-[var(--mla-ink)] text-sm">{r.name}</div>
                  <div className="text-xs text-[var(--mla-muted)] mt-0.5">{r.place}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
