"use client";

import { Download } from "lucide-react";

export interface ResumeButtonProps {
  /** Full URL or absolute path of the PDF, e.g. "/resume.pdf" */
  resumeUrl: string;
  /** Suggested file name used by the browser download attribute */
  fileName?: string;
  /** Visual variant – primary accent or secondary button treatment */
  variant?: "accent" | "subtle";
  /** Optional custom button label (defaults to "Download Resume") */
  label?: string;
  /** Extra Tailwind utility classes forwarded to the outer anchor */
  className?: string;
}

export default function ResumeButton({
  resumeUrl,
  fileName = "Ridoy_Mondol_Resume.pdf",
  variant = "accent",
  label = "Download Resume",
  className = "",
}: ResumeButtonProps) {
  /* ── Base button styles ─────────────────────────────────────────── */
  const baseStyles = [
    "group inline-flex min-h-[44px] items-center justify-center gap-2.5",
    "rounded-full px-6 py-2.5 font-bold select-none cursor-pointer",
    "text-sm motion-safe:hover:-translate-y-[2px]",
  ].join(" ");

  /* ── Variant color palettes ─────────────────────────────────────── */
  const variantStyles = {
    accent: "button-primary shadow-sm hover:shadow-md",
    subtle: "button-secondary shadow-sm hover:shadow-md",
  };

  return (
    <a
      href={resumeUrl}
      download={fileName}
      target="_blank"
      rel="noopener noreferrer"
      title="PDF • Opens in a new tab & downloads"
      aria-label={`${label} as PDF (opens in new tab and downloads ${fileName})`}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <Download
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
      <span>{label}</span>

      {/* Secondary PDF format badge */}
      <span
        className="rounded bg-black/10 px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider opacity-80"
        aria-hidden="true"
      >
        PDF
      </span>
    </a>
  );
}
