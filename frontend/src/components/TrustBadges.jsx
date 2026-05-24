import React from "react";
import { motion } from "framer-motion";
import { Headphones, Wallet, Star, Users } from "lucide-react";

const BADGES = [
  { icon: Headphones, title: "24×7 Support", sub: "On-trip & off-trip" },
  { icon: Wallet, title: "Budget-Friendly", sub: "From ₹3,499 per person" },
  { icon: Star, title: "4.9★ on Google", sub: "412+ reviews" },
  { icon: Users, title: "10,000+ Travelers", sub: "Since 2019" },
];

export default function TrustBadges() {
  return (
    <section
      id="trust-strip"
      data-testid="trust-badges"
      className="bg-[var(--mla-surface)] border-y border-[var(--mla-border)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {BADGES.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[var(--mla-bg)] border border-[var(--mla-border)] flex items-center justify-center text-[var(--mla-primary)] shrink-0">
                <b.icon size={20} strokeWidth={1.8} />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-[var(--mla-ink)] text-base sm:text-lg tracking-tight">
                  {b.title}
                </div>
                <div className="text-[var(--mla-muted)] text-xs sm:text-sm mt-0.5">
                  {b.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
