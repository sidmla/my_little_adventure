import React from "react";
import { motion } from "framer-motion";
import { CATEGORY_META, TYPE_META, tripsForCategory, tripsForType, domesticByState } from "@/data/trips";
import DestinationCard from "@/components/DestinationCard";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function CategoryPage({ slug }) {
  // New type-based tabs (weekend / backpacking / pilgrimage / international / domestic)
  // resolve via TYPE_META; legacy couple/group slugs fall back to CATEGORY_META.
  const isType = Boolean(TYPE_META[slug]);
  const meta = isType ? TYPE_META[slug] : CATEGORY_META[slug];
  const trips = isType ? tripsForType(slug) : tripsForCategory(slug);
  const heroImg = meta.image || trips[0]?.image;

  return (
    <div data-testid={`category-page-${slug}`} className="bg-[var(--mla-bg)]">
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--mla-bg)] via-[var(--mla-bg)]/80 to-[var(--mla-bg)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs sm:text-sm text-[var(--mla-muted)] flex items-center gap-1.5 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[var(--mla-ink)]">Home</Link>
            <ChevronRight size={13} />
            <span className="text-[var(--mla-ink)] font-medium">{meta.label}</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="overline">{meta.label}</div>
            <h1 className="h1 text-5xl sm:text-6xl lg:text-7xl mt-4 text-[var(--mla-ink)]">
              {meta.title}
            </h1>
            <p className="mt-5 text-[var(--mla-muted)] text-base sm:text-lg leading-relaxed max-w-xl">
              {meta.sub}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {trips.length > 0 ? (
            slug === "domestic" ? (
              <div className="space-y-14">
                {domesticByState().map(([st, sTrips]) => (
                  <div key={st}>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--mla-ink)] mb-6 flex items-center gap-3">
                      {st}
                      <span className="text-sm font-medium text-[var(--mla-muted)]">{sTrips.length} {sTrips.length === 1 ? "trip" : "trips"}</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {sTrips.map((trip, i) => (
                        <DestinationCard key={trip.id} trip={trip} index={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {trips.map((trip, i) => (
                  <DestinationCard key={trip.id} trip={trip} index={i} />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-20 border border-dashed border-[var(--mla-border)] rounded-3xl">
              <div className="font-display text-2xl font-bold text-[var(--mla-ink)]">
                New trips coming soon
              </div>
              <p className="mt-3 text-[var(--mla-muted)] max-w-md mx-auto">
                We're curating a fresh batch for {meta.label}. Drop us a WhatsApp and we'll let you know first.
              </p>
              <a
                href="https://wa.me/919100120796"
                target="_blank"
                rel="noreferrer"
                data-testid={`empty-cta-${slug}`}
                className="btn-primary mt-6 inline-flex"
              >
                Notify me on WhatsApp →
              </a>
            </div>
          )}
        </div>
      </section>

      <FAQ />
      <ContactSection />
    </div>
  );
}
