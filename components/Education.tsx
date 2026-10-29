"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import SectionTitle from "@/components/SectionTitle";

export default function Education() {
  const { education } = portfolioData;
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
    <section
      id="education"
      className="relative mx-auto max-w-[880px] px-4 sm:px-6 py-12 sm:py-16 md:py-24"
    >
      <SectionTitle
        eyebrow="My Academic Foundation"
        title="Education"
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
          {education.map((item) => (
            <li key={item.degree} className="relative pl-6 sm:pl-9">
              {/* Timeline marker with graduation cap icon */}
              <span
                className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-surface text-accent shadow-sm ring-4 ring-surface-alt"
                aria-hidden="true"
              >
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              </span>

              {/* Education Card */}
              <div className="group rounded-2xl border border-border/40 bg-surface p-6 sm:p-8 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md hover:border-brand-teal/70">
                {/* Meta row: Duration & Ongoing Badge & Location */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 font-medium text-secondary">
                      <Calendar
                        className="h-3.5 w-3.5 text-accent"
                        aria-hidden="true"
                      />
                      <time dateTime="2024">{item.duration}</time>
                    </span>

                    {item.status.toLowerCase().includes("ongoing") && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        <span
                          className="relative flex h-2 w-2"
                          aria-hidden="true"
                        >
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        {item.status}
                      </span>
                    )}
                  </div>

                  {item.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <MapPin
                        className="h-3.5 w-3.5 text-accent"
                        aria-hidden="true"
                      />
                      {item.location}
                    </span>
                  )}
                </div>

                {/* Institution & Degree */}
                <div className="mt-4">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent">
                    {item.institution}
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-primary leading-snug">
                    {item.degree}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-secondary">
                  {item.description}
                </p>

                {/* Highlights as 3 labeled tiles */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-6 border-t border-border/30 pt-5">
                    <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                      <Sparkles
                        className="h-3.5 w-3.5 text-accent"
                        aria-hidden="true"
                      />
                      Key Academic Highlights
                    </p>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {item.highlights.map((h, i) => (
                        <li
                          key={h.label || i}
                          className="flex flex-col justify-between rounded-xl border border-border/40 bg-surface-alt/75 p-3.5 sm:p-4 transition-all duration-200 hover:border-brand-teal hover:bg-surface hover:shadow-sm"
                        >
                          <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                            {h.label}
                          </span>
                          <span className="mt-1 text-xs sm:text-[13px] font-semibold text-primary leading-snug">
                            {h.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
