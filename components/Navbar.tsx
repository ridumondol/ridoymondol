"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

// ─── Nav link definitions ────────────────────────────────────────────────────
type NavLink = { href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { href: "#hero",         label: "Home"         },
  { href: "#about",        label: "About"        },
  { href: "#skills",       label: "Skills"       },
  { href: "#projects",     label: "Projects"     },
  { href: "#education",    label: "Education"    },
  { href: "#experience",   label: "Experience"   },
  { href: "#contact",      label: "Contact"      },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));
const THEME_STORAGE_KEY = "portfolio-theme";

// ─── Component ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeId, setActiveId] = useState<string>("hero");
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef  = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => {
      setTheme(root.dataset.theme === "dark" ? "dark" : "light");
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
      const savedTheme = event.newValue;
      const nextTheme =
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
      root.dataset.theme = nextTheme;
      setTheme(nextTheme);
    };

    syncTheme();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Scroll → apply backdrop + shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver → active section highlight
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const rootMargin = prefersReduced
      ? "-50% 0px -50% 0px"
      : "-64px 0px -60% 0px";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin, threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        btnRef.current  && !btnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = useCallback(() => setMenuOpen(false), []);
  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    root.dataset.theme = nextTheme;
    setTheme(nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (error) {
      console.warn("Unable to save the theme preference.", error);
    }
  };

  // Derived nav classes
  const navBase = "fixed inset-x-0 top-0 z-50 h-16 bg-page/90 backdrop-blur-md transition-all duration-300 ease-out";
  const navScrolled = scrolled
    ? "shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-border/50"
    : "";

  return (
    <>
      {/* ── Main bar ───────────────────────────────────────────────────────── */}
      <nav className={`${navBase} ${navScrolled}`} aria-label="Main navigation">
        <div className="max-w-[1100px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">

          {/* Brand */}
          <a
            href="#hero"
            onClick={handleLinkClick}
            className={`
              inline-flex min-h-11 items-center text-lg font-bold font-heading tracking-tight shrink-0
              transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded
              text-primary
            `}
            aria-label="Back to top"
          >
            Portfolio<span className="opacity-50">.</span>
          </a>

          {/* ── Desktop links ─────────────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-0.5 lg:gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleLinkClick}
                    aria-current={isActive ? "location" : undefined}
                    className={`
                      button-ghost nav-link relative inline-flex items-center justify-center
                      min-h-[44px] px-2.5 lg:px-3 py-2
                      text-[12.5px] lg:text-[13.5px] font-medium rounded-lg
                      after:absolute after:bottom-1.5 after:left-2.5 after:right-2.5 after:h-[2px]
                      after:rounded-full after:transition-all after:duration-200
                      ${
                        isActive
                          ? "text-accent after:bg-accent after:opacity-100"
                          : "text-muted hover:text-primary after:opacity-0 hover:after:opacity-30 hover:after:bg-accent"
                      }
                    `}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            aria-pressed={theme === "dark"}
            className="button-ghost min-w-11 rounded-lg"
          >
            {theme === "light"
              ? <Moon size={20} aria-hidden="true" />
              : <Sun size={20} aria-hidden="true" />
            }
          </button>

          {/* ── Hamburger (mobile / tablet) ───────────────────────────────── */}
          <button
            ref={btnRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`
              button-ghost md:hidden min-w-11 rounded-lg
            `}
          >
            {menuOpen
              ? <X    size={22} strokeWidth={2.2} aria-hidden="true" />
              : <Menu size={22} strokeWidth={2.2} aria-hidden="true" />
            }
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ────────────────────────────────────── */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          md:hidden fixed inset-0 z-40 flex flex-col
          transition-all duration-300 ease-out
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Blurred backdrop */}
        <div className="absolute inset-0 bg-page/95 backdrop-blur-xl" aria-hidden="true" />

        {/* Links panel – offset below the fixed bar */}
        <nav
          aria-label="Mobile navigation"
          className={`
            relative z-10 flex flex-col justify-center items-center
            flex-1 gap-1 mt-16
            transition-transform duration-300 ease-out
            ${menuOpen ? "translate-y-0" : "-translate-y-4"}
          `}
        >
          <ul className="w-full max-w-xs flex flex-col gap-1 px-6" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleLinkClick}
                    aria-current={isActive ? "location" : undefined}
                    className={`
                      button-ghost mobile-nav-link w-full flex items-center min-h-[52px] px-5 py-3
                      rounded-xl text-[16px] font-semibold
                    `}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
