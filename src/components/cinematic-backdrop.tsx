/**
 * Layered editorial backdrop: soft spotlight, drifting light streaks,
 * teal glow pockets, vignette and film grain. Purely decorative.
 */
export function CinematicBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top spotlight */}
      <div
        className="animate-soft-fade absolute inset-x-0 -top-1/3 h-[70rem]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, oklch(1 0 0) 7%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Teal glow pockets */}
      <div
        className="animate-veil absolute -left-32 top-24 h-[38rem] w-[38rem] rounded-full opacity-[0.16] blur-[150px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 68%)" }}
      />
      <div
        className="animate-veil absolute -bottom-48 right-[-6rem] h-[34rem] w-[34rem] rounded-full opacity-[0.1] blur-[160px]"
        style={{
          background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
          animationDelay: "600ms",
          animationDirection: "reverse",
        }}
      />

      {/* Blurred light streaks */}
      <div
        className="animate-streak absolute left-[-20%] top-[18%] h-[2px] w-[70%] opacity-[0.16] blur-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.7), transparent)",
        }}
      />
      <div
        className="animate-streak absolute left-[-10%] top-[62%] h-px w-[60%] opacity-[0.1] blur-[4px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent-soft) 90%, transparent), transparent)",
          animationDelay: "3.5s",
          animationDuration: "22s",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 45%, oklch(0.145 0 0 / 0.55) 78%, oklch(0.145 0 0 / 0.9) 100%)",
        }}
      />

      <div className="grain-overlay opacity-[0.055]" />
    </div>
  );
}
