import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, Star } from "lucide-react";
import { CONTACT } from "@/data/trips";
import HERO_VIDEO from "@/assets/intro.mp4";
import HERO_POSTER from "@/assets/intro-poster.jpg";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative w-full min-h-[100svh] overflow-hidden bg-[var(--mla-ink)]"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_POSTER}
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-16 min-h-[100svh] flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-[0.18em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--mla-yellow)] animate-pulse" />
            A Travel Company to Cherish Happiness
          </div>

          <h1
            data-testid="hero-headline"
            className="h1 text-white text-5xl sm:text-7xl lg:text-[5.5rem] mt-6"
          >
            Every little moment,
            <br />
            <span className="font-serif-editorial italic text-[var(--mla-yellow)] font-normal">
              made unforgettable.
            </span>
          </h1>

          <p className="text-white/85 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            Budget-friendly, small-group trips across India — handcrafted by people who actually travel for a living. No tourist traps. Just good company and great stories.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-cta-plan"
              className="btn-secondary text-base"
            >
              Plan My Trip
              <span className="ticker-arrow">→</span>
            </a>
            <a
              href="#top-sellers"
              data-testid="hero-cta-explore"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white border border-white/30 hover:bg-white/10 transition font-medium"
            >
              <Play size={15} fill="currentColor" /> See top trips
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="#F4B942" stroke="#F4B942" />
                ))}
              </div>
              <span className="font-medium">4.9 on Google</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="font-medium">10,000+ travelers</div>
            <div className="h-4 w-px bg-white/20" />
            <div className="font-medium">Since 2019</div>
          </div>
        </motion.div>

        <motion.a
          href="#trust-strip"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden sm:flex absolute bottom-8 right-8 items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-[0.2em] font-semibold"
        >
          Scroll
          <span className="w-px h-10 bg-white/40 relative overflow-hidden">
            <span className="absolute inset-x-0 h-3 bg-[var(--mla-yellow)] animate-bounce" />
          </span>
          <ChevronDown size={14} />
        </motion.a>
      </div>
    </section>
  );
}
