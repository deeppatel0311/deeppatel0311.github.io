"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { Reveal, LineReveal, Magnetic } from "@/components/Motion";

const LINKS = [
  { label: "Email", value: "deep.p0311@gmail.com", href: "mailto:deep.p0311@gmail.com" },
  { label: "Phone", value: "+91 8490919815", href: "tel:+918490919815" },
  { label: "LinkedIn", value: "in/deeppatel0311", href: "https://www.linkedin.com/in/deeppatel0311/" },
  { label: "GitHub", value: "deeppatel0311", href: "https://github.com/deeppatel0311" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xrebnoza", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        const data = await response.json();
        throw new Error(data?.errors?.[0]?.message || "Failed to send message");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Something went wrong — please try again or email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-white/20 focus:border-acid focus:ring-0 outline-none py-4 text-lg text-paper placeholder:text-muted/60 transition-colors duration-300";

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">04 / Contact</p>
        </Reveal>

        <h2 className="display-heading text-giant mb-6">
          <LineReveal>
            <span className="text-paper">Let&apos;s build</span>
          </LineReveal>
          <LineReveal delay={0.1}>
            <span className="text-outline hover-fill">something.</span>
          </LineReveal>
        </h2>

        <Reveal delay={0.2}>
          <a
            href="mailto:deep.p0311@gmail.com"
            className="link-sweep inline-block text-xl md:text-3xl font-bold text-acid"
          >
            deep.p0311@gmail.com
          </a>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mt-6 mb-20 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-acid inline-block animate-pulse" />
            Open to full-time roles, freelance projects & collaborations
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Direct links */}
          <Reveal className="lg:col-span-5">
            <ul className="border-t border-white/15">
              {LINKS.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-baseline justify-between border-b border-white/15 py-6 transition-colors duration-300 hover:bg-ink-soft px-4 -mx-4"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {link.label}
                    </span>
                    <span className="flex items-center gap-2 text-paper group-hover:text-acid transition-colors duration-300">
                      {link.value}
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-baseline justify-between py-6 px-4 -mx-4 border-b border-white/15">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Location
                </span>
                <span className="text-paper">Ahmedabad, India</span>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-7 relative">
            {isSubmitted && (
              <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-acid mx-auto mb-4" />
                  <h3 className="display-heading text-2xl text-paper mb-2">
                    Message sent
                  </h3>
                  <p className="text-muted">I&apos;ll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Your name"
                  className={inputClass}
                  placeholder="Your name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Your email"
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                aria-label="Your message"
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project…"
              />

              {error && (
                <p className="font-mono text-sm text-red-400">{error}</p>
              )}

              <Magnetic>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary disabled:opacity-60 disabled:cursor-wait"
                >
                  {isLoading ? "Sending…" : "Send message"}
                  {!isLoading && <ArrowUpRight className="ml-2 w-4 h-4" />}
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
