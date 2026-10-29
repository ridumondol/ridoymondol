import { Send, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectCTA() {
  const { personal } = portfolioData;

  return (
    <div className="relative py-8 sm:py-10">
      <div className="relative max-w-[880px] mx-auto px-4 sm:px-6">
        <div className="relative bg-surface/90 backdrop-blur-sm rounded-xl px-5 sm:px-8 py-6 sm:py-7 flex flex-col md:flex-row items-center gap-4 sm:gap-6 shadow-[0_40px_60px_-25px_rgba(124,92,255,0.3)]">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-surface-alt flex items-center justify-center shrink-0">
            <Send size={26} className="sm:w-[30px] sm:h-[30px] text-accent" />
          </div>
          <div className="hidden md:block h-14 w-px bg-border" />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-primary">Starting New Project?</h3>
            <p className="text-muted text-sm mt-1">Get an estimate for the new project</p>
          </div>
          <a
            href={`mailto:${personal.email}?subject=Project%20Estimate`}
            className="button-secondary w-full sm:w-auto px-6 py-3.5"
          >
            <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center shrink-0">
              <Mail size={18} className="text-brand-coral" />
            </span>
            Hire Me!
          </a>
        </div>
      </div>
    </div>
  );
}
