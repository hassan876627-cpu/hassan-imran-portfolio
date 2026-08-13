import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <p className="text-eyebrow">Selected work</p>
          <h2 className="mt-4 text-display text-[clamp(2rem,6vw,3.5rem)]">Portfolio</h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 lg:gap-10">
          {categories.map((category, i) => (
            <Reveal as="li" key={category.title} delay={(i % 2) * 90}>
              <a
                href={category.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-accent hover:shadow-lift"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={category.cover}
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, color-mix(in oklab, var(--accent) 26%, transparent) 0%, transparent 55%)",
                    }}
                  />
                </div>

                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 p-6 md:p-7">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-[-0.015em] text-foreground transition-colors duration-500 group-hover:text-accent-soft md:text-xl">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft" />
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
