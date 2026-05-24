import React, { useState } from "react";
import { motion } from "framer-motion";
import { TRIPS } from "@/data/trips";
import DestinationCard from "@/components/DestinationCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FILTERS = [
  { key: "all", label: "All trips" },
  { key: "adventure", label: "Adventure" },
  { key: "beach", label: "Beach" },
  { key: "nature", label: "Nature" },
  { key: "seasonal", label: "Seasonal" },
  { key: "divine", label: "Divine" },
];

export default function TopSellers() {
  const [filter, setFilter] = useState("all");
  const visible = TRIPS.filter((t) => filter === "all" || t.category === filter).slice(0, 6);

  return (
    <section
      id="top-sellers"
      data-testid="top-sellers-section"
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="overline">Our Top Sellers</div>
            <h2 className="h2 text-4xl sm:text-5xl mt-4 text-[var(--mla-ink)]">
              Trips that have travelers <span className="font-serif-editorial italic text-[var(--mla-secondary)]">coming back</span> for more.
            </h2>
            <p className="mt-4 text-[var(--mla-muted)] text-base sm:text-lg max-w-xl leading-relaxed">
              A live look at what's most-booked this season — from snow-laced Manali to sun-drenched Gokarna.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" data-testid="top-sellers-filters">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                data-testid={`filter-${f.key}`}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  filter === f.key
                    ? "bg-[var(--mla-ink)] text-[var(--mla-bg)] border-[var(--mla-ink)]"
                    : "bg-transparent text-[var(--mla-ink-soft)] border-[var(--mla-border)] hover:border-[var(--mla-ink)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={filter}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {visible.map((trip, i) => (
            <DestinationCard key={trip.id} trip={trip} index={i} />
          ))}
        </motion.div>

        {visible.length === 0 && (
          <div className="text-center text-[var(--mla-muted)] py-12">
            No trips in this category yet — check back soon.
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            to="/4n-5d"
            data-testid="view-all-trips"
            className="inline-flex items-center gap-2 text-[var(--mla-ink)] font-semibold border-b border-[var(--mla-ink)] pb-1 hover:gap-3 transition-all"
          >
            View all trips by duration <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
