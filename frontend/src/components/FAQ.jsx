import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/trips";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      data-testid="faq-section"
      className="py-24 sm:py-32 bg-[var(--mla-surface)]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="overline">FAQ</div>
            <h2 className="h2 text-4xl sm:text-5xl mt-4 text-[var(--mla-ink)]">
              Things people <span className="font-serif-editorial italic text-[var(--mla-secondary)]">always ask.</span>
            </h2>
            <p className="text-[var(--mla-muted)] mt-4 leading-relaxed">
              Still unsure? WhatsApp us — we usually reply within 10 minutes.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-[var(--mla-border)] border-y border-[var(--mla-border)]">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} data-testid={`faq-item-${i}`}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                      data-testid={`faq-toggle-${i}`}
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold text-lg sm:text-xl text-[var(--mla-ink)] tracking-tight pr-4">
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 w-9 h-9 rounded-full bg-[var(--mla-bg)] border border-[var(--mla-border)] flex items-center justify-center text-[var(--mla-ink)] group-hover:bg-[var(--mla-ink)] group-hover:text-[var(--mla-bg)] group-hover:border-[var(--mla-ink)] transition"
                      >
                        <Plus size={18} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-[var(--mla-ink-soft)] leading-relaxed max-w-2xl">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
