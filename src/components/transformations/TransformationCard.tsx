import Image from "next/image";
import Link from "next/link";
import { statusLabel, type Transformation } from "@/content/transformations";
import { formatDate } from "@/lib/utils";

export function TransformationCard({
  t,
  priority = false,
}: {
  t: Transformation;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/transformations/${t.slug}`}
      className="group bg-surface relative block overflow-hidden"
      aria-label={`${t.name}, glow-up ${t.week}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={t.after}
          alt={`${t.name} after grooming`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <span className="font-display text-gold absolute top-4 left-4 bg-black/70 px-2.5 py-1 text-xs backdrop-blur-sm">
          Nº {String(t.week).padStart(2, "0")}
        </span>
        <span className="absolute top-4 right-4 border border-white/30 bg-black/50 px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-sm">
          {statusLabel[t.status]}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-3xl text-white transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
            {t.name}
          </p>
          <p className="mt-1 text-xs text-white/70">
            {t.breed} · {formatDate(t.date, { month: "short", day: "numeric" })}
          </p>
          <p className="text-gold mt-3 flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase opacity-0 transition-all duration-500 group-hover:opacity-100">
            See the glow-up
            <span aria-hidden className="bg-gold inline-block h-px w-6" />
          </p>
        </div>
      </div>
    </Link>
  );
}
