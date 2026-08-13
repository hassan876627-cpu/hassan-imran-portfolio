export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-8 md:px-10">
        <p className="min-w-0 truncate text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hassan Imran
        </p>
        <a
          href="#home"
          className="shrink-0 text-xs text-muted-foreground transition-colors duration-500 hover:text-accent-soft"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
