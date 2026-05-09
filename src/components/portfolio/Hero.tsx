import portrait from "@/assets/srihari.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
      <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-spider/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-neon/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-12 lg:items-center">
        {/* Left: Type */}
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-spider flicker" />
            SYS.STATUS // ONLINE
          </div>

          <h1 className="font-display text-[18vw] leading-[0.85] sm:text-[14vw] lg:text-[10vw]">
            <span className="block text-foreground">SRI</span>
            <span className="block text-spider hover:text-glitch transition-all">HARI.</span>
          </h1>

          <p className="mt-8 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
            <span className="text-spider">{">"}</span> Student. Gamer. Editor. Coder.
            <br />
            <span className="text-spider">{">"}</span> Building, breaking, and editing things on the
            grid since day one.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 rounded-xl bg-spider px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-spider"
            >
              View_Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="font-mono text-xs uppercase tracking-widest text-foreground/80 underline-offset-4 hover:text-neon hover:underline"
            >
              About_Me()
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              { k: "ROLE", v: "STUDENT" },
              { k: "MODE", v: "CREATOR" },
              { k: "VER", v: "v1.0" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </div>
                <div className="font-display text-xl text-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-2xl border border-techblue/40" />
            <div className="absolute -inset-3 corner-brackets" />
            <div className="relative scanline overflow-hidden rounded-xl">
              <img
                src={portrait}
                alt="Srihari portrait — graffiti red background"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-halftone opacity-20 mix-blend-multiply" />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="text-techblue">ID_0001 // SRIHARI</span>
              <span className="text-spider">● REC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        scroll ↓
      </div>
    </section>
  );
}
