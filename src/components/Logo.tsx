import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center" aria-label="RRPS home">
      <Image
        src="/images/rrps-logo.png"
        alt="RRPS — Rising Researchers in Psychedelic Science"
        width={908}
        height={381}
        className={className}
        priority
      />
    </Link>
  );
}
