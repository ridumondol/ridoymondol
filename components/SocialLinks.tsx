/**
 * SocialLinks
 * -----------
 * Single-source-of-truth social button row.
 *
 * To add a new platform (e.g. Behance, Dribbble):
 *   1. Add the URL to personalInfo.socialLinks in data/portfolioData.ts.
 *   2. Export its icon from components/Icons.tsx.
 *   3. Add one entry to the PLATFORMS array below.
 *   Done — every instance of SocialLinks picks it up automatically.
 *
 * Props
 * -----
 * variant      "icon"  – round icon buttons (default, compact)
 *              "pill"  – icon + label side by side
 * colorScheme  "light" – neutral icons on a theme-aware surface
 *              "dark"  – accent icons on a theme-aware surface
 * size         "sm" | "md" (default "md")
 * className    extra classes forwarded to the wrapper <div>
 * ownerName    used for aria-label; defaults to portfolioData.personal.name
 */

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

/* ── Types ──────────────────────────────────────────────────────────────── */

type Variant = "icon" | "pill";
type ColorScheme = "light" | "dark";
type Size = "sm" | "md";

export interface SocialLinksProps {
  variant?: Variant;
  colorScheme?: ColorScheme;
  size?: Size;
  className?: string;
  /** Replaces the owner name used in aria-labels */
  ownerName?: string;
}

/** Shape of one entry in the PLATFORMS list */
interface PlatformDef {
  /** Key must match a key in personalInfo.socialLinks */
  key: keyof typeof portfolioData.personal.socialLinks;
  /** Human-readable label; appears in pill variant and aria-label */
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}

/* ── Platform registry ───────────────────────────────────────────────────
   Add new platforms here — nothing else needs to change.
────────────────────────────────────────────────────────────────────────── */
const PLATFORMS: PlatformDef[] = [
  { key: "github",   label: "GitHub",      Icon: GithubIcon   },
  { key: "linkedin", label: "LinkedIn",    Icon: LinkedinIcon },
  { key: "twitter",  label: "Twitter / X", Icon: TwitterIcon  },
  { key: "facebook", label: "Facebook",    Icon: FacebookIcon },
];

/* ── Style maps ─────────────────────────────────────────────────────────── */

const sizeMap: Record<Size, { wrap: string; icon: string }> = {
  sm: { wrap: "w-11 h-11", icon: "w-3.5 h-3.5" },
  md: { wrap: "w-11 h-11", icon: "w-4 h-4"     },
};

const schemeMap: Record<ColorScheme, { base: string; hover: string; ring: string }> = {
  // Neutral theme-aware buttons for content on the shared background.
  light: {
    base:  "bg-surface text-primary border border-border/40 backdrop-blur-sm",
    hover: "hover:bg-surface-alt",
    ring:  "focus-visible:ring-focus focus-visible:ring-offset-page",
  },
  // Accent icons on a theme-aware surface.
  dark: {
    base:  "bg-surface-alt text-accent border border-border/40",
    hover: "hover:bg-button-secondary hover:text-button-secondary-text",
    ring:  "focus-visible:ring-focus focus-visible:ring-offset-page",
  },
};

/* ── Component ──────────────────────────────────────────────────────────── */

export default function SocialLinks({
  variant = "icon",
  colorScheme = "dark",
  size = "md",
  className = "",
  ownerName,
}: SocialLinksProps) {
  const { personal } = portfolioData;
  const name = ownerName ?? personal.name;
  const { wrap, icon } = sizeMap[size];
  const { base, hover, ring } = schemeMap[colorScheme];

  // Filter out platforms whose URL is empty / not set
  const platforms = PLATFORMS.filter((p) => !!personal.socialLinks[p.key]);

  const anchorBase = [
    "button-ghost inline-flex items-center justify-center rounded-full transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    // Respect prefers-reduced-motion — strip the lift animation
    "motion-safe:hover:-translate-y-[2px]",
    base,
    hover,
    ring,
  ].join(" ");

  if (platforms.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="list"
      aria-label={`${name}'s social profiles`}
    >
      {platforms.map(({ key, label, Icon }) => {
        const href = personal.socialLinks[key];
        const ariaLabel = `Visit ${name} on ${label}`;

        if (variant === "pill") {
          return (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              role="listitem"
              className={[
                anchorBase,
                "gap-2 px-4",
                size === "sm" ? "min-h-11 text-xs" : "h-11 text-sm",
              ].join(" ")}
            >
              <Icon className={icon} aria-hidden="true" />
              <span className="font-medium">{label}</span>
            </a>
          );
        }

        // Default: icon-only button — minimum tap target enforced by wrap size
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            role="listitem"
            className={`${anchorBase} ${wrap}`}
          >
            <Icon className={icon} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
