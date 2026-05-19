export function PageHero({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <section className="relative py-24 md:py-32 lg:py-36 bg-[var(--navy)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.155_75/0.6),transparent_50%)]" />
      <div className="container-px mx-auto max-w-7xl relative">
        <span className="label-tag">{label}</span>
        <h1 className="font-display text-4xl md:text-6xl mt-5 leading-tight max-w-3xl">{title}</h1>
        {subtitle && <p className="text-white/80 mt-6 max-w-2xl text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}