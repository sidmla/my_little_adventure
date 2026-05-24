import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Compass, MapPin } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const STATS = [
  { n: "10k+", l: "Travelers since 2019" },
  { n: "4.9★", l: "Average Google rating" },
  { n: "42", l: "Destinations covered" },
  { n: "1 in 3", l: "Travelers come back" },
];

const VALUES = [
  { icon: Heart, title: "Hospitality first.", body: "We treat travelers like we'd treat a friend visiting from out of town. Always." },
  { icon: Users, title: "Small group, always.", body: "12–20 people max. Less chaos, more conversations that actually happen." },
  { icon: Compass, title: "Slow over fast.", body: "We don't tick off monuments. We give you space to actually arrive at a place." },
  { icon: MapPin, title: "Local, not lavish.", body: "Family-run stays, neighborhood cafes, real food. Luxury is comfort, not chandeliers." },
];

export default function About() {
  return (
    <div data-testid="about-page" className="bg-[var(--mla-bg)]">
      <section className="relative pt-32 sm:pt-44 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="overline">About Us</div>
            <h1 className="h1 text-5xl sm:text-7xl mt-5 text-[var(--mla-ink)]">
              A travel company to
              <br />
              <span className="font-serif-editorial italic text-[var(--mla-secondary)] font-normal">cherish happiness</span>
              <br />
              in every little moment.
            </h1>
          </motion.div>

          <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-[var(--mla-ink-soft)] text-lg leading-relaxed">
                My Little Adventure started in 2019 with a small group of friends, a beaten-up SUV, and a frustration with overpriced, rushed Indian travel packages. We wanted slower routes, smaller groups, and the kind of stays you'd actually recommend.
              </p>
              <p className="text-[var(--mla-muted)] mt-5 leading-relaxed">
                Five years later, we're still that — just with a few more trip captains, a much bigger WhatsApp group, and over 10,000 travelers who've trusted us with their first solo trip, their honeymoon, their friend group reunion, their first holiday after a hard year.
              </p>
              <p className="text-[var(--mla-muted)] mt-5 leading-relaxed">
                We are not a booking site. We don't believe in upselling. We don't have a "sales team." We're a small travel company, and we plan every trip like we're going on it ourselves — because most weekends, we are.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/11659286/pexels-photo-11659286.jpeg"
                  alt="Our travelers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--mla-border)] rounded-3xl overflow-hidden border border-[var(--mla-border)]">
            {STATS.map((s) => (
              <div key={s.l} className="bg-[var(--mla-surface)] p-6 sm:p-8 text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold text-[var(--mla-primary)] tracking-tight">
                  {s.n}
                </div>
                <div className="text-xs sm:text-sm text-[var(--mla-muted)] mt-2 font-medium leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[var(--mla-ink)] text-[var(--mla-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="overline text-[var(--mla-yellow)]">What we believe</div>
            <h2 className="h2 text-4xl sm:text-5xl mt-4">Four little rules we never break.</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--mla-yellow)] text-[var(--mla-ink)] flex items-center justify-center">
                  <v.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold mt-5 tracking-tight">{v.title}</h3>
                <p className="text-[var(--mla-bg)]/65 text-sm mt-3 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />
      <ContactSection />
    </div>
  );
}
