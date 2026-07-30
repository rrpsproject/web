export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-brand-cream-deep to-brand-sage/25 px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-serif text-4xl text-brand-navy sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-lg text-brand-navy/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
