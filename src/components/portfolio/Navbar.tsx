import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "00 / HOME" },
  { id: "about", label: "01 / ABOUT" },
  { id: "work", label: "02 / WORK" },
  { id: "contact", label: "03 / CONTACT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-2xl tracking-wider text-foreground">
          SR<span className="text-spider">/</span>HARI
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-spider"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-mono text-xs uppercase tracking-widest rounded-lg border border-techblue/60 px-4 py-2 text-techblue hover:bg-techblue hover:text-primary-foreground transition-colors"
        >
          Hire_me()
        </a>
      </div>
    </header>
  );
}
