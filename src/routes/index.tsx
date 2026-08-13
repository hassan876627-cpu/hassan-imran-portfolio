import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Preloader } from "@/components/preloader";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Showreel } from "@/components/sections/showreel";
import { Portfolio } from "@/components/sections/portfolio";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

const title = "Hassan Imran — Video Editor & Motion Designer";
const description =
  "Freelance video editor and motion designer crafting cinematic edits, motion graphics and visual stories for creators, brands and businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [intro, setIntro] = useState(true);

  // Always open at the very top of the page — never restore prior scroll.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!intro) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [intro]);

  return (
    <>
      {/* Rendered during SSR too, so the black curtain is up from the very
          first paint; the canvas animation starts once React hydrates. */}
      {intro && <Preloader onDone={() => setIntro(false)} />}

      <div
        className={
          intro
            ? "intro-hold opacity-0"
            : "opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        }
      >
        <SiteNav />
        <main>
          <Hero />
          <Showreel />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
