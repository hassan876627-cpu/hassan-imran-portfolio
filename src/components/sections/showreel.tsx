import { Reveal } from "@/components/reveal";

export function Showreel() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <p className="text-eyebrow">Featured</p>
        <h2 className="mt-4 text-display text-[clamp(1.9rem,5vw,3rem)]">Showreel</h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 flex justify-center md:mt-14">
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-border bg-surface p-2 shadow-card">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-24 -z-10 opacity-25 blur-[110px]"
              style={{
                background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
              }}
            />
            <div className="aspect-[9/16] overflow-hidden rounded-[22px] bg-background">
              <iframe
                src="https://www.youtube.com/embed/PS1dQzVAxRk?rel=0&modestbranding=1"
                title="Hassan Imran — featured showreel"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
