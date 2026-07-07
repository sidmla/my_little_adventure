import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2, MessageCircle, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/data/trips";

const SHEETS_URL = process.env.REACT_APP_SHEETS_URL;

export default function ContactSection() {
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setStatus("loading");
    try {
      const body = new URLSearchParams({
        type: "contact",
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        message: form.message,
      });
      await fetch(SHEETS_URL, { method: "POST", body });
      setStatus("done");
      setForm({ first_name: "", last_name: "", email: "", message: "" });
    } catch (e) {
      setStatus("error");
      setErr("Could not send. Try WhatsApp instead.");
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="overline">Say hi</div>
            <h2 className="h2 text-4xl sm:text-5xl mt-4 text-[var(--mla-ink)]">
              Got a place in mind? <br />
              <span className="font-serif-editorial italic text-[var(--mla-primary)]">Let's build the trip.</span>
            </h2>
            <p className="mt-5 text-[var(--mla-muted)] leading-relaxed text-base sm:text-lg max-w-md">
              Drop us a quick note. Or skip the form — most travelers just WhatsApp us. We reply in under 10 minutes.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-whatsapp"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--mla-surface)] border border-[var(--mla-border)] hover:border-[var(--mla-ink)] transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div className="leading-tight">
                  <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--mla-muted)]">Fastest</div>
                  <div className="font-display font-bold text-[var(--mla-ink)] mt-0.5">WhatsApp us</div>
                </div>
                <span className="ml-auto ticker-arrow text-[var(--mla-ink)]">→</span>
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                data-testid="contact-call"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--mla-surface)] border border-[var(--mla-border)] hover:border-[var(--mla-ink)] transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--mla-primary)] text-white flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div className="leading-tight">
                  <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--mla-muted)]">Call</div>
                  <div className="font-display font-bold text-[var(--mla-ink)] mt-0.5">{CONTACT.phone}</div>
                </div>
                <span className="ml-auto ticker-arrow text-[var(--mla-ink)]">→</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                data-testid="contact-email"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--mla-surface)] border border-[var(--mla-border)] hover:border-[var(--mla-ink)] transition group"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--mla-secondary)] text-white flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div className="leading-tight">
                  <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--mla-muted)]">Email</div>
                  <div className="font-display font-bold text-[var(--mla-ink)] mt-0.5">{CONTACT.email}</div>
                </div>
                <span className="ml-auto ticker-arrow text-[var(--mla-ink)]">→</span>
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[var(--mla-surface)] border border-[var(--mla-border)] rounded-3xl p-6 sm:p-10"
            data-testid="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">First name</label>
                <input
                  data-testid="contact-first-name"
                  required
                  value={form.first_name}
                  onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[var(--mla-card)] border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">Last name</label>
                <input
                  data-testid="contact-last-name"
                  required
                  value={form.last_name}
                  onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[var(--mla-card)] border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)]"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">Email</label>
              <input
                data-testid="contact-email-input"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-[var(--mla-card)] border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)]"
              />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold text-[var(--mla-ink)] mb-1.5">Message</label>
              <textarea
                data-testid="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Where do you want to go and when?"
                className="w-full px-4 py-3.5 rounded-xl bg-[var(--mla-card)] border border-[var(--mla-border)] focus:border-[var(--mla-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--mla-primary)]/20 transition text-[var(--mla-ink)] resize-none"
              />
            </div>
            {err && <div className="mt-3 text-sm text-[var(--mla-secondary)] font-medium">{String(err)}</div>}
            <button
              type="submit"
              disabled={status === "loading"}
              data-testid="contact-submit"
              className="btn-yellow btn-lg mt-6 w-full justify-center disabled:opacity-70"
            >
              {status === "loading" && <><Loader2 size={16} className="animate-spin" /> Sending...</>}
              {status === "idle" && <><Send size={15} /> Send message</>}
              {status === "done" && <><Check size={16} /> Sent! We'll reply soon.</>}
              {status === "error" && <><Send size={15} /> Try again</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
