import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "00 / HOME" },
  { id: "about", label: "01 / ABOUT" },
  { id: "work", label: "02 / WORK" },
  { id: "contact", label: "03 / CONTACT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 backdrop-blur-xl bg-background/60 border-b border-techblue/20 shadow-[0_8px_32px_-12px_rgba(46,168,255,0.25)]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-2xl tracking-wider text-foreground">
          SR<span className="text-spider">/</span>HARI
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`group relative font-mono text-xs transition-colors ${
                  isActive ? "text-spider" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-spider transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          className="group relative overflow-hidden rounded-lg border border-techblue/60 px-4 py-2 font-mono text-xs uppercase tracking-widest text-techblue transition-all hover:text-primary-foreground hover:glow-techblue"
        >
          <span className="relative z-10">Hire_me()</span>
          <span className="absolute inset-0 -translate-x-full bg-techblue transition-transform duration-300 group-hover:translate-x-0" />
        </a>
      </div>
    </header>
  );
}
