import Button from "@/components/ui/Button";
import { UsersIcon } from "@/components/ui/icons";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-brand-navy to-brand-teal">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-cream/40 text-brand-cream sm:flex">
            <UsersIcon className="h-5 w-5" />
          </span>
          <p className="text-lg font-medium text-brand-cream">
            Join a growing interdisciplinary network shaping the future of
            psychedelic science in Israel.
          </p>
        </div>
        <Button href="/join" variant="secondary" className="shrink-0">
          Apply to Join
        </Button>
      </div>
    </section>
  );
}
