export default function SectionTitle({
  eyebrow,
  title,
  color = "var(--brand-coral)",
}: {
  eyebrow: string;
  title: string;
  color?: string;
}) {
  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex items-start gap-3">
        <span className="w-1.5 h-[64px] sm:h-[76px] md:h-[88px] rounded-full mt-1 shrink-0" style={{ background: color }} />
        <div className="min-w-0">
          <p className="text-muted text-xs sm:text-[15px]">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight break-words">{title}</h2>
        </div>
      </div>
    </div>
  );
}
