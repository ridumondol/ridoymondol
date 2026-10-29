"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, Laptop, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionTitle from "@/components/SectionTitle";

export default function Experience() {
  const { experience } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24">
      <div className="relative mx-auto max-w-[880px] px-4 sm:px-6">
        <SectionTitle
          eyebrow="Hands-on Development"
          title="Experience"
          color="var(--brand-teal)"
        />

        <div
          ref={containerRef}
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0"
          }`}
        >
          <ol className="relative ml-4 sm:ml-6 border-l-2 border-brand-teal/40 space-y-10">
            {experience.map((item) => (
              <li key={item.role} className="relative pl-6 sm:pl-9">
                {/* Timeline marker with briefcase icon matching Education section */}
                <span
                  className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-surface text-accent shadow-sm ring-4 ring-surface-alt"
                  aria-hidden="true"
                >
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                </span>

                {/* Experience Card */}
                <article className="group rounded-2xl border border-border/40 bg-surface/90 p-6 sm:p-8 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md hover:border-brand-teal/70">
                  {/* Meta row: Duration, Status Badge & Context */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 font-medium text-secondary">
                        <Calendar
                          className="h-3.5 w-3.5 text-accent"
                          aria-hidden="true"
                        />
                        <time dateTime={item.duration.slice(0, 4)}>
                          {item.duration}
                        </time>
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        <span
                          className="relative flex h-2 w-2"
                          aria-hidden="true"
                        >
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        {item.status || "Independent / Current"}
                      </span>
                    </div>

                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <Laptop
                          className="h-3.5 w-3.5 text-accent"
                          aria-hidden="true"
                        />
                        {item.location}
                      </span>
                    )}
                  </div>

                  {/* Organization & Role */}
                  <div className="mt-4">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent">
                      {item.company}
                    </p>
                    <h3 className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-primary leading-snug">
                      {item.role}
                    </h3>
                  </div>

                  {/* Summary Lead Paragraph (approx. 65 characters per line for optimum readability) */}
                  <p className="mt-3.5 max-w-prose text-sm sm:text-[15px] font-medium leading-relaxed text-primary">
                    {item.summary || item.description}
                  </p>

                  {/* Body Paragraphs */}
                  {item.paragraphs && item.paragraphs.length > 0 && (
                    <div className="mt-3 space-y-2.5 max-w-prose text-sm sm:text-[14.5px] leading-relaxed text-secondary">
                      {item.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {/* Highlight Chips */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-6 border-t border-border/30 pt-5">
                      <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                        <Sparkles
                          className="h-3.5 w-3.5 text-accent"
                          aria-hidden="true"
                        />
                        Core Competencies & Focus
                      </p>
                      <ul className="flex flex-wrap gap-2 sm:gap-2.5">
                        {item.highlights.map((chip) => (
                          <li
                            key={chip}
                            className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-surface-alt px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:border-brand-teal hover:bg-surface hover:text-accent"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-accent"
                              aria-hidden="true"
                            />
                            {chip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technology Pills */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-xs font-medium text-muted">
                        Tech Stack:
                      </span>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/40 bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
