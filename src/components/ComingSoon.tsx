import PageHero from "@/components/PageHero";

export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <PageHero title={title} />
      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
          Coming Soon
        </p>
        <p className="mt-3 text-lg text-brand-navy/75">{description}</p>
      </section>
    </div>
  );
}
