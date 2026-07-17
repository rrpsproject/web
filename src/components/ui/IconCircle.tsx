export default function IconCircle({
  children,
  tone = "cream",
}: {
  children: React.ReactNode;
  tone?: "cream" | "navy";
}) {
  const toneClasses =
    tone === "navy"
      ? "bg-brand-navy text-brand-cream"
      : "bg-brand-cream-deep text-brand-navy";

  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full ${toneClasses}`}
    >
      {children}
    </div>
  );
}
