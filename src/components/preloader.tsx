import { useEffect, useState } from "react";

const FADE_START = 950;
const DURATION = 1150;

/**
 * Minimal, fast curtain: a thin teal progress hairline fills to 100%, then the
 * black veil dissolves into the hero. No spinner, counter or particles.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = requestAnimationFrame(() => setProgress(100));
    const f = setTimeout(() => setFading(true), FADE_START);
    const d = setTimeout(onDone, DURATION);
    return () => {
      cancelAnimationFrame(start);
      clearTimeout(f);
      clearTimeout(d);
    };
  }, [onDone]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="h-px w-40 overflow-hidden rounded-full bg-border md:w-56">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
