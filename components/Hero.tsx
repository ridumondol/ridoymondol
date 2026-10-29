"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { portfolioData } from "@/data/portfolioData";
import ResumeButton from "@/components/ResumeButton";
import SocialLinks from "@/components/SocialLinks";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionPreference() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export default function Hero() {
  const { personal } = portfolioData;
  const roles = personal.roles;
  const [imgSrc, setImgSrc] = useState(personal.profileImage);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionPreference,
    () => false,
  );

  // ── Typewriter effect ──────────────────────────────────────────────────
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    if (prefersReducedMotion) return;

    const atFull = !deleting && text === current;
    const delay = atFull ? 2000 : deleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) setDeleting(true);
        else setText(current.slice(0, text.length + 1));
      } else if (text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex, roles, prefersReducedMotion]);
  const displayedRole = prefersReducedMotion ? roles[roleIndex] : text;

  return (
    <section
      id="hero"
      className="relative min-h-svh overflow-hidden"
    >
      {/* ── Main layout container ─────────────────────────────────────── */}
      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col lg:flex-row lg:items-center">
        {/* ── LEFT: Text content ────────────────────────────────────── */}
        <div className="z-10 flex flex-1 flex-col justify-center px-6 pt-28 pb-10 sm:px-10 lg:max-w-[55%] lg:py-24 lg:pr-8 xl:pl-16">
          {/* Brand logo */}
          <div
            className="mb-10 motion-safe:animate-[fadeSlideDown_0.5s_ease-out_both]"
          >
            <span className="font-heading text-2xl font-bold text-primary sm:text-3xl">
              {personal.brandName}
              <span className="text-brand-coral">.</span>
            </span>
          </div>

          {/* Eyebrow */}
          <p
            className="mb-3 flex items-center gap-2.5 text-sm font-medium tracking-wide text-accent sm:text-base motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.1s_both]"
          >
            <span className="inline-block h-px w-8 bg-brand-teal/60" />
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.2s_both]"
          >
            {personal.name}
          </h1>

          {/* Typewriter role line */}
          <div
            className="mt-4 flex items-center gap-2 text-lg font-medium text-accent sm:text-xl md:text-2xl motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.3s_both]"
          >
            <span className="text-muted">&lt;</span>
            <span>{displayedRole}</span>
            <span
              className="motion-safe:animate-pulse"
              aria-hidden="true"
            >
              |
            </span>
            <span className="text-muted">/&gt;</span>
          </div>

          {/* Bio paragraph */}
          <p
            className="mt-5 max-w-lg text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.4s_both]"
          >
            {personal.bio}
          </p>

          {/* Availability badge */}
          <div className="mt-6 motion-safe:animate-[fadeSlideUp_0.5s_ease-out_0.45s_both]">
            <span className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-3.5 py-1.5 text-xs font-medium text-success">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {personal.freelanceStatus} for New Projects &amp; Roles
            </span>
          </div>

          {/* ── CTA buttons ──────────────────────────────────────── */}
          <div
            className="mt-8 flex flex-wrap items-center gap-4 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.5s_both]"
          >
            <ResumeButton
              resumeUrl={personal.resumeUrl}
              fileName="Ridoy_Mondol_Resume.pdf"
              variant="accent"
            />
            <a
              href="#projects"
              className="button-secondary group px-6 py-2.5 text-sm backdrop-blur-sm motion-safe:hover:-translate-y-[2px]"
            >
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>

          {/* ── Social links ────────────────────────────────────── */}
          <SocialLinks
            variant="icon"
            colorScheme="dark"
            size="sm"
            className="mt-8 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.6s_both]"
          />
        </div>

        {/* ── RIGHT: Portrait ───────────────────────────────────────── */}
        <div
          className="relative flex flex-1 items-end justify-center lg:items-center lg:justify-end motion-safe:animate-[fadeSlideUp_0.8s_ease-out_0.3s_both]"
        >
          {/* Teal glow behind the portrait */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-[80px] lg:left-auto lg:right-0 lg:translate-x-0"
          />

          {/* Portrait container */}
          <div className="relative h-[400px] w-full max-w-[500px] sm:h-[480px] md:h-[540px] lg:h-[680px] lg:max-w-none lg:w-[50vw] xl:w-[45vw]">
            {/* Subtle gradient fade on the left edge to blend with text side */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 hidden lg:block"
              style={{
                background:
                  "linear-gradient(to right, var(--bg-primary) 0%, transparent 25%)",
              }}
            />
            {/* Bottom fade for mobile */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 lg:hidden"
              style={{
                background:
                  "linear-gradient(to top, var(--bg-primary) 0%, transparent 30%)",
              }}
            />

            <Image
              src={imgSrc}
              alt={`Portrait of ${personal.name}, ${personal.designation}`}
              fill
              preload
              sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 50vw, (min-width: 640px) 480px, 100vw"
              className="object-cover object-[center_top] lg:object-[60%_top]"
              onError={() => setImgSrc(personal.profileImageFallback)}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
