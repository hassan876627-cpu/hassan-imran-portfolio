import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { useActiveSection } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const ids = navLinks.map((l) => l.id);

export function SiteNav() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled ? "bg-background/75 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-px bg-border transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:px-10">
        <a
          href="#home"
          className="min-w-0 truncate font-nav text-sm font-semibold tracking-[0.02em] text-foreground"
        >
          Hassan Imran
          <span className="ml-2 hidden text-xs font-normal tracking-[0.12em] text-muted-foreground uppercase sm:inline">
            — Video Editor
          </span>
        </a>

        <ul className="hidden shrink-0 items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "relative rounded-full px-4 py-2 font-nav text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-300",
                  active === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-px origin-center bg-accent-soft transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    active === link.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="glass-surface shrink-0 rounded-2xl p-2.5 text-foreground transition-all duration-300 hover:bg-accent/12 md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div className="animate-soft-fade mx-4 mb-4 md:hidden">
          <ul className="glass-surface flex flex-col rounded-3xl px-5 py-2">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-4 font-nav text-base tracking-[0.1em] uppercase transition-colors duration-300",
                    i < navLinks.length - 1 && "border-b border-border",
                    active === link.id ? "text-accent-soft" : "text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
