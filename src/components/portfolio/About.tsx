const skills = [
  "GAMING",
  "VIDEO EDITING",
  "COMPUTERS",
  "CODING",
  "MOTION FX",
  "CREATIVE DIR.",
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-32">
      <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-spider">
            01 / About
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="font-display text-5xl leading-tight sm:text-7xl">
            I make things <span className="text-spider">work</span>,
            <br /> and make them <span className="text-neon">look good</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm Srihari — a student by day, a gamer by night, and an editor in between.
            I live in front of a screen and I love it. Whether it's chopping up footage,
            grinding ranked, or breaking things in code — I'm all in.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I excel at everything computer-related. Curious, fast, and a little chaotic.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="border border-neon/40 bg-neon/5 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-neon transition-colors hover:bg-neon hover:text-accent-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Stat block */}
        <div className="lg:col-span-3">
          <div className="corner-brackets relative border border-border bg-card/60 p-6 backdrop-blur">
            <div className="font-mono text-[10px] uppercase tracking-widest text-spider">
              // PROFILE.SYS
            </div>
            <dl className="mt-4 space-y-3 font-mono text-sm">
              {[
                ["NAME", "SRIHARI"],
                ["ROLE", "STUDENT"],
                ["CLASS", "CREATOR"],
                ["WEAPON", "KEYBOARD"],
                ["STATUS", "ONLINE"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-border/60 pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neon">
              <span className="h-1.5 w-1.5 rounded-full bg-neon flicker" />
              live signal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
