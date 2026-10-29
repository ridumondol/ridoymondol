import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import SectionTitle from "@/components/SectionTitle";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="bg-pattern pt-6 pb-16 sm:pb-20 md:pb-28">
      <div className="max-w-[880px] lg:max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle eyebrow="My Strong Arenas" title="Recent Works" color="var(--brand-gold)" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-surface/90 backdrop-blur-sm flex flex-col min-h-[300px] rounded-xl border border-border/40 overflow-hidden shadow-[0_30px_50px_-25px_rgba(124,92,255,0.25)] hover:shadow-[0_35px_60px_-20px_rgba(124,92,255,0.35)] transition-shadow"
            >
              <div className="relative w-full h-44 sm:h-48 bg-surface-alt shrink-0">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-muted">{p.badge}</p>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold leading-snug text-primary break-words">{p.name}</h3>
                </div>
                <Link
                  href={`/projects/${p.id}`}
                  className="button-ghost mt-4 w-fit justify-start rounded-lg px-2 text-sm font-medium underline underline-offset-4 text-link hover:text-primary"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
