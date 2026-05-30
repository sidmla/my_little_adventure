import React from "react";
import { motion } from "framer-motion";
import { TOP_SELLERS } from "@/data/trips";

export default function TopSellerMarquee() {
  const items = [...TOP_SELLERS, ...TOP_SELLERS];
  return (
    <section
      data-testid="top-seller-marquee"
      className="py-12 border-y border-[var(--mla-border)] overflow-hidden bg-[var(--mla-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-4 text-[var(--mla-muted)]">
          <span className="overline">As loved on Instagram</span>
          <span className="h-px flex-1 bg-[var(--mla-border)]" />
        </div>
      </div>
      <div className="relative">
        <div className="marquee-track flex gap-5 w-max">
          {items.map((t, i) => (
            <motion.div
              key={`${t.tag}-${i}`}
              className="w-[260px] sm:w-[300px] shrink-0 relative aspect-[4/5] rounded-3xl overflow-hidden group"
            >
              <img src={t.image} alt={t.tag} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[var(--mla-yellow-bright)]">Theme</div>
                <div className="font-display text-2xl font-bold mt-1 leading-tight">{t.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
