import { ArrowUpRight } from "lucide-react";
import { CinematicBackdrop } from "@/components/cinematic-backdrop";
import heroBg from "@/assets/hero-cinematic-bg.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Full-bleed cinematic film still */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="animate-slow-zoom h-full w-full object-cover object-[72%_center] opacity-[0.55] blur-[2px] md:object-[right_center]"
        />
        {/* Strong dark overlay + horizontal grade so type stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.145 0 0 / 0.96) 0%, oklch(0.145 0 0 / 0.86) 42%, oklch(0.145 0 0 / 0.58) 100%)",
          }}
        />
        {/* Deep teal tint */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background:
              "radial-gradient(80% 70% at 78% 45%, var(--accent) 0%, transparent 68%)",
          }}
        />
        {/* Darkened edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 95% at 50% 45%, transparent 40%, oklch(0.145 0 0 / 0.7) 80%, oklch(0.145 0 0 / 0.96) 100%)",
          }}
        />
        {/* Bottom blend into the next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--background))",
          }}
        />
      </div>

      <CinematicBackdrop />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-28">
        <div className="max-w-2xl text-center lg:text-left">
          <h1
            className="animate-rise text-display text-[clamp(2.85rem,10vw,6.5rem)]"
            style={{ animationDelay: "450ms" }}
          >
            Hassan Imran
          </h1>

          <p
            className="animate-rise mt-5 font-display text-[clamp(1.05rem,3.2vw,1.85rem)] font-medium tracking-[-0.015em] text-muted-foreground"
            style={{ animationDelay: "800ms" }}
          >
            Video Editor <span className="text-accent-soft">&</span> Motion Designer
          </p>

          <p
            className="animate-rise mx-auto mt-8 max-w-xl text-base leading-[1.75] text-muted-foreground md:text-lg lg:mx-0"
            style={{ animationDelay: "1150ms" }}
          >
            Crafting cinematic edits, motion graphics, and engaging visual stories for creators,
            brands, and businesses.
          </p>

          <div
            className="animate-rise mt-11 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ animationDelay: "1500ms" }}
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-glow"
            >
              View Portfolio
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="glass-surface inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-accent/12"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
