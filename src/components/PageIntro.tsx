type PageIntroProps = {
  section: string;
  title: string;
  description: string;
};

export default function PageIntro({ section, title, description }: PageIntroProps) {
  return (
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-sm">
        {section}
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </header>
  );
}
