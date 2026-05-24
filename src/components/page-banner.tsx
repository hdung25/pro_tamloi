import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Crumb[];
  align?: "left" | "right";
};

export function PageBanner({
  title,
  subtitle,
  image,
  breadcrumbs,
  align = "left",
}: Props) {
  const isLeft = align === "left";
  return (
    <>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="bg-white py-3 text-[12px]" aria-label="Breadcrumb">
          <ol className="container-page flex flex-wrap items-center gap-1.5 text-[var(--color-ink-muted)]">
            {breadcrumbs.map((c, i) => (
              <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-[var(--color-brand)]">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-[var(--color-ink)]">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="text-[var(--color-ink-soft)]">›</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <section className="relative overflow-hidden bg-[#E9E1D2]">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`object-cover ${isLeft ? "object-right" : "object-left"}`}
          />
          <div
            className="absolute inset-0"
            style={{
              background: isLeft
                ? "linear-gradient(90deg, rgba(255,248,240,0.95) 0%, rgba(255,248,240,0.7) 40%, rgba(255,248,240,0) 65%)"
                : "linear-gradient(270deg, rgba(255,248,240,0.95) 0%, rgba(255,248,240,0.7) 40%, rgba(255,248,240,0) 65%)",
            }}
          />
        </div>

        <div className="container-page relative grid min-h-[280px] items-center py-12 md:min-h-[340px] md:py-16">
          <div className={`max-w-xl ${isLeft ? "" : "ml-auto text-right"}`}>
            <Reveal direction="up">
              <h1 className="font-sans text-4xl font-extrabold uppercase leading-none tracking-tight text-[var(--color-brand)] md:text-6xl">
                {title}
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal direction="up" delay={150}>
                <p className="mt-4 max-w-md text-[13px] leading-relaxed text-[var(--color-ink-muted)] md:text-sm">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
