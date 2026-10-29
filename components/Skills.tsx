"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { portfolioData, type SkillItem } from "@/data/portfolioData";
import SectionTitle from "@/components/SectionTitle";

/* ── Category metadata ─────────────────────────────────────────────────── */

interface CategoryMeta {
  label: SkillItem["category"];
  icon: LucideIcon;
  accent: string;
  description: string;
}

const CATEGORY_META: CategoryMeta[] = [
  {
    label: "Frontend",
    icon: Code2,
    accent: "var(--accent)",
    description:
      "Interactive UIs and responsive layouts with modern frameworks and typed CSS.",
  },
  {
    label: "Backend",
    icon: Server,
    accent: "var(--purple)",
    description:
      "Scalable REST APIs, database schemas, and secure authentication flows.",
  },
  {
    label: "Tools",
    icon: Wrench,
    accent: "var(--brand-coral)",
    description:
      "Version control, continuous deployment, and developer-experience tooling.",
  },
];

/* ── Radial progress ring (SVG) ─────────────────────────────────────── */

function ProgressRing({
  value,
  accent,
  label,
}: {
  value: number;
  accent: string;
  label: string;
}) {
  const radius = 18;
  const stroke = 3;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className="relative flex h-11 w-11 shrink-0 items-center justify-center"
      role="img"
      aria-label={`${label}: ${value}% proficiency`}
    >
      <svg
        width={44}
        height={44}
        viewBox="0 0 44 44"
        className="-rotate-90"
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          cx={22}
          cy={22}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-border/40"
        />
        {/* Fill */}
        <circle
          cx={22}
          cy={22}
          r={radius}
          fill="none"
          stroke={accent}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <span className="absolute text-[10px] font-bold text-primary">
        {value}
      </span>
    </div>
  );
}

/* ── Scroll‑triggered fade‑in hook ─────────────────────────────────── */

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers‑reduced‑motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ── Skills component ──────────────────────────────────────────────── */

export default function Skills() {
  const skills = portfolioData.skills;

  // Group skills by category (preserves only categories that have items)
  const grouped = CATEGORY_META.filter((cat) =>
    skills.some((s) => s.category === cat.label),
  ).map((cat) => ({
    ...cat,
    items: skills.filter((s) => s.category === cat.label),
  }));

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-[880px] px-4 sm:px-6">
        <SectionTitle
          eyebrow="What I work with"
          title="Skills & Tech Stack"
          color="var(--brand-teal)"
        />

        {/* Category cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.map((category, catIdx) => (
            <CategoryCard
              key={category.label}
              category={category}
              index={catIdx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Category card ──────────────────────────────────────────────────── */

function CategoryCard({
  category,
  index,
}: {
  category: CategoryMeta & { items: SkillItem[] };
  index: number;
}) {
  const { ref, visible } = useFadeIn();
  const Icon = category.icon;

  return (
    <div
      ref={ref}
      className="motion-reveal-static group flex flex-col rounded-2xl border border-border/40 bg-surface/90 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(24px)",
        transitionDelay: `${index * 120}ms`,
        transitionProperty: "opacity, transform, box-shadow",
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {/* Card header */}
      <div
        className="flex items-center gap-3 rounded-t-2xl bg-surface-alt px-5 py-4"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface shadow-sm transition-transform duration-200 group-hover:scale-110">
          <Icon
            size={20}
            style={{ color: category.accent }}
            aria-hidden="true"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-primary">
            {category.label}
          </h3>
          <p className="text-[11px] leading-snug text-muted">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skills list */}
      <ul className="flex flex-col divide-y divide-border/30 px-5 py-2">
        {category.items.map((skill) => (
          <li
            key={skill.name}
            className="group/item flex items-center gap-3 py-3 transition-colors duration-150"
          >
            <ProgressRing
              value={skill.proficiency}
              accent={category.accent}
              label={skill.name}
            />

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-primary">
                  {skill.name}
                </span>
                <LevelBadge level={skill.level} />
              </div>
              <p className="mt-0.5 text-[11px] leading-snug text-muted">
                {skill.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Level badge ────────────────────────────────────────────────────── */

function LevelBadge({ level }: { level: SkillItem["level"] }) {
  const styles: Record<SkillItem["level"], string> = {
    Advanced: "bg-success/10 text-success border-success/40",
    Proficient: "bg-link/10 text-link border-link/40",
    Familiar: "bg-surface-alt text-muted border-border/40",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2 py-px text-[9px] font-semibold uppercase tracking-wide ${styles[level]}`}
    >
      {level}
    </span>
  );
}
