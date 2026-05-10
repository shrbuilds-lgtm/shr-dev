const projects = [
  {
    n: "00",
    title: "THIS PORTFOLIO",
    cat: "CODE / WEB",
    desc: "The site you're on right now. Cyberpunk + Spider-verse themed portfolio built from scratch.",
    tags: ["React", "TS", "Tailwind"],
    href: "https://shr-dev.lovable.app",
  },
  {
    n: "01",
    title: "NIGHTRIDE EDIT",
    cat: "VIDEO / EDIT",
    desc: "Cinematic edit reel — color graded, sound designed, and packed with motion.",
    tags: ["Premiere", "After FX", "Color"],
  },
  {
    n: "02",
    title: "RANK GRIND",
    cat: "GAMING / HIGHLIGHT",
    desc: "Highlight reel from competitive ranked sessions. Quick cuts, raw plays.",
    tags: ["FPS", "Capture", "Edit"],
  },
  {
    n: "03",
    title: "TERMINAL.OS",
    cat: "CODE / WEB",
    desc: "Custom dashboard built with React. Clean, fast, and themed for the grid.",
    tags: ["React", "TS", "UI"],
  },
  {
    n: "04",
    title: "NEON DROP",
    cat: "VIDEO / MOTION",
    desc: "Short-form motion piece exploring type, color and rhythm.",
    tags: ["Motion", "Type", "FX"],
  },
  {
    n: "05",
    title: "RIG BUILD",
    cat: "HARDWARE / PC",
    desc: "Custom PC build & tuning log. Performance benchmarks included.",
    tags: ["Hardware", "Tuning"],
  },
  {
    n: "06",
    title: "STREAM KIT",
    cat: "DESIGN / STREAM",
    desc: "Full overlay & alert pack for streamers. Cyberpunk aesthetic.",
    tags: ["Design", "OBS", "Brand"],
  },
];

export function Projects() {
  return (
    <section id="work" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-spider">
              02 / Selected Work
            </div>
            <h2 className="mt-3 font-display text-5xl sm:text-7xl">
              THE <span className="text-spider">VAULT</span>
            </h2>
          </div>
          <p className="max-w-sm font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // A drop of recent edits, builds, and experiments. More dropping soon.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.n}
              className="corner-brackets group relative cursor-pointer rounded-xl border border-border bg-card/60 p-6 transition-all hover:border-techblue hover:bg-card hover:-translate-y-1 hover:glow-techblue"
            >
              {/* Cover */}
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg border border-border bg-secondary/40">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-halftone opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[8rem] leading-none text-spider/30 transition-transform duration-500 group-hover:scale-110 group-hover:text-spider/60">
                    {p.n}
                  </span>
                </div>
                <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-neon">
                  ● {p.cat}
                </div>
              </div>

              <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-spider">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    [{t}]
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-xs">
                <span className="text-muted-foreground">CASE_{p.n}</span>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-techblue transition-transform hover:translate-x-1"
                  >
                    LIVE →
                  </a>
                ) : (
                  <span className="text-spider transition-transform group-hover:translate-x-1">→</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
