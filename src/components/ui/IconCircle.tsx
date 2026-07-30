export default function IconCircle({
  children,
  tone = "cream",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "cream" | "navy";
  className?: string;
}) {
  const toneClasses =
    tone === "navy"
      ? "bg-brand-navy text-brand-cream"
      : "bg-brand-cream-deep text-brand-navy";

  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${toneClasses} ${className}`}
    >
      {children}
    </div>
  );
}
