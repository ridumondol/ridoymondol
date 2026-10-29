"use client";

import {
  Code2,
  Laptop,
  Mail,
  Rocket,
  Sparkles,
  Target,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import ResumeButton from "@/components/ResumeButton";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  const { personal } = portfolioData;
  const { aboutContent } = personal;

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[880px] px-4 sm:px-6">
        {/* ── Section Title ──────────────────────────────────────────────── */}
        <SectionTitle
          eyebrow="Get to Know Me"
          title="Hey, I'm Ridoy 👋"
          color="var(--brand-teal)"
        />

        {/* ── 1. Introduction Card ───────────────────────────────────────── */}
        <div className="rounded-2xl border border-border/40 bg-surface/85 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-brand-teal/60">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Actively Learning & Building
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
              <Terminal className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Aspiring Full-Stack Developer
            </span>
          </div>

          <p className="text-base sm:text-lg font-medium leading-relaxed text-primary">
            {aboutContent.intro}
          </p>
        </div>

        {/* ── 2 & 3. Journey & What I'm Into (Side-by-Side Grid) ─────────── */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* My Journey 🚀 */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/40 bg-surface/85 p-6 sm:p-7 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md hover:border-brand-teal/60">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-alt text-accent">
                  <Rocket className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-primary tracking-tight">
                    My Journey 🚀
                  </h3>
                  <span className="text-[11px] font-medium text-muted">
                    From curiosity to code
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-[14.5px] leading-relaxed text-secondary">
                {aboutContent.journey}
              </p>
            </div>

            {aboutContent.journeyHighlights && (
              <ul className="mt-5 space-y-2 border-t border-border/30 pt-4 text-xs font-medium text-primary">
                {aboutContent.journeyHighlights.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* What I'm Into 💻 */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/40 bg-surface/85 p-6 sm:p-7 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md hover:border-brand-teal/60">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-alt text-accent">
                  <Laptop className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-primary tracking-tight">
                    What I&apos;m Into 💻
                  </h3>
                  <span className="text-[11px] font-medium text-muted">
                    Frontend craft &amp; user experience
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-[14.5px] leading-relaxed text-secondary mb-4">
                {aboutContent.workStyle}
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-border/30 pt-4">
              {aboutContent.whatImInto.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-border/40 bg-surface-alt/60 p-3 transition-colors hover:bg-surface hover:border-brand-teal"
                >
                  <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                    <Code2 className="h-3 w-3 text-accent" aria-hidden="true" />
                    {item.title}
                  </span>
                  <p className="mt-1 text-[11px] leading-snug text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── 4. Beyond the Code ✨ (3 Highlight Cards) ──────────────────── */}
        <div className="mt-10 sm:mt-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-5 rounded-full bg-brand-teal" aria-hidden="true" />
            <h3 className="text-base font-bold tracking-tight text-primary">
              Beyond the Code ✨
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {aboutContent.interests.map((interest) => (
              <div
                key={interest.title}
                className="group rounded-2xl border border-border/40 bg-surface/85 p-5 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md hover:border-brand-teal/70"
              >
                <span
                  className="text-2xl leading-none block mb-3"
                  role="img"
                  aria-label={interest.title}
                >
                  {interest.emoji}
                </span>
                <h4 className="font-bold text-primary text-sm mb-1.5 group-hover:text-accent transition-colors">
                  {interest.title}
                </h4>
                <p className="text-muted text-xs leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. The Bigger Picture 🎯 ──────────────────────────────────── */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-border/40 bg-surface/85 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-brand-teal/60">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-alt text-accent">
              <Target className="h-4 w-4" aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold text-primary tracking-tight">
              The Bigger Picture 🎯
            </h3>
          </div>
          <p className="text-sm sm:text-[15px] leading-relaxed text-secondary">
            {aboutContent.biggerPicture}
          </p>
        </div>

        {/* ── 6. Closing Tagline Banner ─────────────────────────────────── */}
        <blockquote className="mt-8 rounded-2xl bg-surface px-6 sm:px-8 py-6 text-center shadow-lg shadow-black/10">
          <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-1">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Personal Philosophy
          </p>
          <p className="font-heading text-lg sm:text-2xl font-extrabold text-primary tracking-tight">
            &ldquo;{aboutContent.tagline}&rdquo;
          </p>
        </blockquote>

        {/* ── CTA Action Buttons ───────────────────────────────────────── */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="button-secondary w-full sm:w-auto px-6 py-2.5 text-sm shadow-sm hover:shadow-md motion-safe:hover:-translate-y-[2px]"
          >
            <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            Let&apos;s Connect
          </a>
          <ResumeButton
            resumeUrl={personal.resumeUrl}
            fileName="Ridoy_Mondol_Resume.pdf"
            variant="subtle"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
