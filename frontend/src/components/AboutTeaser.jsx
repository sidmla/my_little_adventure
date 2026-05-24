import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section
      data-testid="about-teaser"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/11659286/pexels-photo-11659286.jpeg"
                alt="Our travelers"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 sm:-right-10 bg-[var(--mla-bg)] rounded-2xl p-5 border border-[var(--mla-border)] shadow-xl max-w-[200px]">
                <div className="font-display text-3xl font-bold text-[var(--mla-primary)]">10k+</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--mla-muted)] mt-1 font-semibold">Happy Travelers</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <div className="overline">About Us</div>
            <h2 className="h2 text-4xl sm:text-5xl mt-4 text-[var(--mla-ink)]">
              We started this with one idea — <br />
              <span className="font-serif-editorial italic text-[var(--mla-secondary)]">travel should not be expensive.</span>
            </h2>
            <p className="mt-6 text-[var(--mla-ink-soft)] leading-relaxed text-base sm:text-lg">
              My Little Adventure was born out of a frustration with overpriced packages and rushed itineraries. Since 2019, we've been quietly building a different kind of travel company — one designed for young Indians, run by people who care about every stay, every meal, every sunset.
            </p>
            <p className="mt-4 text-[var(--mla-muted)] leading-relaxed">
              We don't have shareholders. We don't have a "growth target." We have a phone number, a small team, and a long list of travelers who keep coming back. That's the whole business plan.
            </p>
            <Link
              to="/about-us"
              data-testid="about-teaser-cta"
              className="mt-8 inline-flex items-center gap-2 text-[var(--mla-ink)] font-semibold border-b border-[var(--mla-ink)] pb-1 hover:gap-3 transition-all"
            >
              Read our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
