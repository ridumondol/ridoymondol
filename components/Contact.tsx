"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionTitle from "@/components/SectionTitle";
import SocialLinks from "@/components/SocialLinks";

const projectTypes = ["Website", "Web App", "UI/UX Design", "Landing Page", "Other"];
const budgets = ["Under $500", "$500 – $1,000", "$1,000 – $3,000", "$3,000+"];

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", description: "" });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email) || !form.description.trim()) {
      setError("Please add your name, a valid email and a short project description.");
      return;
    }
    setError("");
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType || "-"}`,
      `Budget: ${form.budget || "-"}`,
      "",
      form.description,
    ].join("\n");
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      "Project Inquiry from " + form.name
    )}&body=${encodeURIComponent(body)}`;
  };

  const field = "input-control w-full rounded-full px-6 py-3.5 text-sm";

  return (
    <section id="contact" className="bg-pattern-blue py-24">
      <div className="max-w-[880px] mx-auto px-4">
        <SectionTitle eyebrow="For Project inquiry and information" title="Contact Me" color="var(--success)" />

        <div className="bg-surface/90 backdrop-blur-sm rounded-xl shadow-[0_30px_60px_-30px_rgba(37,99,235,0.25)] px-6 md:px-14 py-12">
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            <a href={`mailto:${personal.email}`} className="button-secondary flex justify-start gap-3 rounded-xl px-5 py-5 text-left hover:shadow-md">
              <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center">
                <Mail size={18} className="text-link" />
              </span>
              <span className="text-primary text-sm truncate">{personal.email}</span>
            </a>
            <a href={personal.whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-secondary flex justify-start gap-3 rounded-xl px-5 py-5 text-left hover:shadow-md">
              <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center">
                <MessageCircle size={18} className="text-success" />
              </span>
              <span className="text-primary text-sm">{personal.whatsapp}</span>
            </a>
            <a href={`tel:${personal.phone}`} className="button-secondary flex justify-start gap-3 rounded-xl px-5 py-5 text-left hover:shadow-md">
              <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center">
                <Phone size={18} className="text-link" />
              </span>
              <span className="text-primary text-sm">{personal.phone}</span>
            </a>
          </div>

          {/* ── Follow me row ─────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted shrink-0">
              Follow me
            </span>
            <SocialLinks
              variant="pill"
              colorScheme="dark"
              size="sm"
              className="flex-wrap"
            />
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5" noValidate>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className={field} />
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email address" className={field} />
            <select name="projectType" value={form.projectType} onChange={handleChange} className={field}>
              <option value="">Select project type</option>
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <select name="budget" value={form.budget} onChange={handleChange} className={field}>
              <option value="">Select project budget</option>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            <textarea
              name="description"
              rows={6}
              value={form.description}
              onChange={handleChange}
              placeholder="Write some description..."
              className="input-control md:col-span-2 rounded-2xl px-6 py-4 text-sm"
            />

            {error && <p className="md:col-span-2 text-sm text-[var(--danger)]">{error}</p>}

            <div className="md:col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                className="button-primary px-5 pr-8 py-3.5"
              >
                <Send size={18} className="text-brand-coral" /> Contact Me!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
