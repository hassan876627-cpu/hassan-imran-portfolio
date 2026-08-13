import { Reveal } from "@/components/reveal";
const portraitSrc = "/assets/hassan-portrait.png";

export function About() {
  return (
    <section id="about" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <p className="text-eyebrow">Profile</p>
          <h2 className="mt-4 text-display text-[clamp(2rem,6vw,3.25rem)]">About Me</h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.42fr_0.58fr] md:items-center md:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface shadow-card md:max-w-none">
              <img
                src={portraitSrc}
                alt="Portrait of Hassan Imran, video editor and motion designer"
                width={1786}
                height={999}
                loading="lazy"
                className="h-full w-full scale-[1.35] object-cover object-[52%_18%] contrast-[1.03] saturate-[0.85]"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.145 0 0) 2%, transparent 48%), radial-gradient(120% 80% at 50% 100%, color-mix(in oklab, var(--accent) 22%, transparent) 0%, transparent 60%)",
                }}
              />
              <div className="grain-overlay opacity-[0.07]" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg leading-[1.75] text-muted-foreground md:text-xl md:leading-[1.7]">
              I'm <span className="text-foreground">Hassan</span>, a video editor and motion designer
              passionate about creating engaging content through cinematic storytelling, motion
              graphics, and clean editing. I enjoy helping creators, brands, and businesses transform
              ideas into visually compelling content that captures attention and leaves a lasting
              impression.
            </p>
            <div aria-hidden className="mt-10 h-px w-24 bg-accent" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
