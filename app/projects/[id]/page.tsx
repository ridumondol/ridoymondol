import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} | ${portfolioData.personal.name}`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="relative z-10 min-h-screen bg-pattern">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link href="/#projects" className="button-ghost w-fit justify-start rounded-lg px-2 text-muted hover:text-primary">
          <ArrowLeft size={18} /> Back to works
        </Link>

        <div className="mt-6 bg-surface/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-surface-alt">
            <Image src={project.image} alt={project.name} fill unoptimized priority sizes="100vw" className="object-cover" />
          </div>

          <div className="p-6 md:p-10">
            <p className="text-xs uppercase tracking-widest text-muted">{project.badge}</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-primary">{project.name}</h1>
            <p className="mt-4 text-secondary leading-relaxed">{project.fullDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="text-xs bg-surface-alt text-accent px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary px-6 py-3">
                <ExternalLink size={18} /> Live Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-secondary px-6 py-3 hover:shadow-md">
                <GithubIcon className="w-4 h-4" /> Source Code
              </a>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.keyFeatures.map((f) => (
                    <li key={f} className="flex gap-3 text-secondary">
                      <Check size={18} className="text-success shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-2">Challenges</h2>
                  <p className="text-secondary leading-relaxed">{project.challenges}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Future Plans</h2>
                  <p className="text-secondary leading-relaxed">{project.futurePlans}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
