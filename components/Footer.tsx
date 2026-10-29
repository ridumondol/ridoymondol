import { portfolioData } from "@/data/portfolioData";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-[var(--border-color)] py-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-5 text-center">
        <p className="text-2xl font-black">
          {personal.brandName}
          <span className="text-brand-coral">.</span>
        </p>

        <SocialLinks
          variant="icon"
          colorScheme="dark"
          size="md"
        />

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
