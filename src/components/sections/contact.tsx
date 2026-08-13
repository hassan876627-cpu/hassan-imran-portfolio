import { socials } from "@/lib/site";
import { socialIcons } from "@/components/social-icons";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[30rem] w-[46rem] -translate-x-1/2 translate-y-1/3 opacity-[0.14] blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 68%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:px-10 md:py-32">
        <Reveal>
          <p className="text-eyebrow">Get in touch</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-display text-[clamp(2rem,6vw,3.5rem)]">
            Let's build something worth watching
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="mailto:hassan876627@gmail.com"
              className="inline-block font-display text-base text-muted-foreground underline decoration-border underline-offset-8 transition-colors duration-500 hover:text-accent-soft hover:decoration-accent md:text-lg"
            >
              hassan876627@gmail.com
            </a>
            <a
              href="tel:+923367359268"
              className="inline-block font-display text-base text-muted-foreground underline decoration-border underline-offset-8 transition-colors duration-500 hover:text-accent-soft hover:decoration-accent md:text-lg"
            >
              +92 336 7359268
            </a>
          </div>
        </Reveal>


        <Reveal delay={140}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="group flex size-14 items-center justify-center rounded-2xl border border-border bg-surface text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent hover:bg-accent/12 hover:text-accent-soft md:size-16"
                  >
                    {Icon ? <Icon className="size-5 md:size-[22px]" /> : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
