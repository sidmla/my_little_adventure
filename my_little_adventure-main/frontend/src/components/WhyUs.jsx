import React from "react";
import { motion } from "framer-motion";
import { Compass, HandCoins, Shield, Sparkle } from "lucide-react";

const POINTS = [
  {
    icon: HandCoins,
    title: "Honestly budget-friendly.",
    body: "No hidden markups. We negotiate stays directly, pass the savings to you, and tell you exactly where every rupee goes.",
  },
  {
    icon: Compass,
    title: "Routes you'd actually plan yourself.",
    body: "Less ticking-off-monuments, more long lunches and quiet mornings. Every trip is designed by someone who lives the route.",
  },
  {
    icon: Shield,
    title: "Built for solo & first-timers.",
    body: "Female trip captains, vetted stays, 24×7 helpline. Around 40% of every batch is solo travelers.",
  },
  {
    icon: Sparkle,
    title: "Small groups, big personalities.",
    body: "12–20 people max. Just enough for new friendships, not so many that you become a number.",
  },
];

export default function WhyUs() {
  return (
    <section
      data-testid="why-us-section"
      className="py-24 sm:py-32 bg-[var(--mla-ink)] text-[var(--mla-bg)] relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--mla-primary)] opacity-30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[var(--mla-secondary)] opacity-20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="overline text-[var(--mla-yellow)]">Why Us</div>
            <h2 className="h2 text-4xl sm:text-5xl mt-4">
              We're not a booking site.
              <br />
              <span className="font-serif-editorial italic text-[var(--mla-yellow)] font-normal">
                We're a travel company.
              </span>
            </h2>
            <p className="mt-6 text-[var(--mla-bg)]/70 leading-relaxed text-base sm:text-lg">
              Four things we obsess over so you don't have to — and the reason 1 in 3 travelers comes back for another trip within 12 months.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[var(--mla-ink)] p-7 sm:p-8"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--mla-bg)] text-[var(--mla-ink)] flex items-center justify-center mb-5">
                  <p.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--mla-bg)]/65 text-sm leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
