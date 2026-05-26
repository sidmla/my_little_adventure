import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_META } from "@/data/trips";

const ORDER = ["pilgrimage", "couple", "group", "international"];

export default function CategoriesByDuration() {
  return (
    <section
      data-testid="categories-section"
      className="relative bg-[var(--mla-surface)] py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="overline">Find your trip</div>
            <h2 className="h2 text-4xl sm:text-5xl mt-4 text-[var(--mla-ink)]">
              Trips for every kind of traveller.
            </h2>
          </div>
          <p className="text-[var(--mla-muted)] max-w-md text-sm sm:text-base leading-relaxed">
            Couples, big groups, sacred pilgrimages, or a passport-stamping escape abroad — pick your vibe and we'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {ORDER.map((key, i) => {
            const m = CATEGORY_META[key];
            // 4 tiles → two balanced rows (6+6, 6+6) so the grid fills with no gap.
            const bento = [
              "lg:col-span-6",
              "lg:col-span-6",
              "lg:col-span-6",
              "lg:col-span-6",
            ];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`${bento[i]} relative group min-h-[260px] sm:min-h-[300px]`}
              >
                <Link
                  to={`/${key}`}
                  data-testid={`category-link-${key}`}
                  className="block relative h-full rounded-3xl overflow-hidden border border-[var(--mla-border)] bg-[var(--mla-ink)]"
                >
                  <img
                    src={m.image}
                    alt={m.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-[var(--mla-yellow)] group-hover:text-[var(--mla-ink)] transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[var(--mla-yellow)]">
                      {m.label}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 tracking-tight">
                      {m.title}
                    </h3>
                    <p className="text-sm text-white/75 mt-2 max-w-md leading-relaxed">
                      {m.sub}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
