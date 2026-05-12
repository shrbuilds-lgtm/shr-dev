import { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    n: "00",
    title: "THIS PORTFOLIO",
    cat: "CODE / WEB",
    desc: "The interface you're inhabiting right now. Cinematic Spider-verse OS, built from scratch.",
    tags: ["React", "TS", "Motion"],
    href: "https://shr-dev.lovable.app",
  },
  {
    n: "01",
    title: "NIGHTRIDE EDIT",
    cat: "VIDEO / EDIT",
    desc: "Cinematic edit reel — color graded, sound designed, motion-packed neon nightlife.",
    tags: ["Premiere", "After FX", "Color"],
  },
  {
    n: "02",
    title: "RANK GRIND",
    cat: "GAMING / HIGHLIGHT",
    desc: "Highlight reel from competitive ranked sessions. Quick cuts, raw plays, real signal.",
    tags: ["FPS", "Capture", "Edit"],
  },
  {
    n: "03",
    title: "TERMINAL.OS",
    cat: "CODE / WEB",
    desc: "Terminal-inspired digital dashboard engineered for speed, clarity, and life on the grid.",
    tags: ["React", "TS", "UI"],
  },
  {
    n: "04",
    title: "NEON DROP",
    cat: "VIDEO / MOTION",
    desc: "Short-form motion piece exploring type, color, and rhythm at 60fps.",
    tags: ["Motion", "Type", "FX"],
  },
  {
    n: "05",
    title: "RIG BUILD",
    cat: "HARDWARE / PC",
    desc: "Custom PC build & tuning log. Performance benchmarks, thermals, and cable porn.",
    tags: ["Hardware", "Tuning"],
  },
  {
    n: "06",
    title: "STREAM KIT",
    cat: "DESIGN / STREAM",
    desc: "Full overlay & alert pack for streamers. Cyberpunk aesthetic, modular & themed.",
    tags: ["Design", "OBS", "Brand"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      variants={cardVariants}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: (i % 3) * 0.06 }}
      className="corner-brackets group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-techblue hover:glow-techblue"
      style={{
        backgroundImage:
          "radial-gradient(400px circle at var(--mx, -200px) var(--my, -200px), color-mix(in oklab, var(--techblue) 14%, transparent), transparent 60%)",
      }}
    >
      {/* Cover */}
      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg border border-border bg-secondary/40">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-halftone opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-spider/10 via-transparent to-techblue/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[8rem] leading-none text-spider/30 transition-all duration-500 group-hover:scale-110 group-hover:text-spider/70 group-hover:[text-shadow:2px_0_0_var(--spider),-2px_0_0_var(--neon)]">
            {p.n}
          </span>
        </div>
        <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-neon">
          ● {p.cat}
        </div>
        <div className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-techblue opacity-0 transition-opacity group-hover:opacity-100">
          [HOVER]
        </div>
        {/* Scanline sweep on hover */}
        <div className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-transparent via-neon/10 to-transparent transition-transform duration-700 group-hover:translate-y-full" />
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
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative border-t border-border py-40">
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-spider/10 blur-[120px]"
      />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-20 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-spider">
              02 / Selected Work
            </div>
            <h2 className="mt-3 font-display text-6xl sm:text-8xl">
              THE <span className="text-spider">VAULT</span>
            </h2>
          </div>
          <p className="max-w-sm font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // A drop of recent edits, builds, and experiments. More dropping soon.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.n} p={p} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
