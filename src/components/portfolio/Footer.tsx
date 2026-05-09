const socials = [
  { label: "INSTAGRAM", handle: "@srihari" },
  { label: "YOUTUBE", handle: "@srihari" },
  { label: "GITHUB", handle: "@srihari" },
  { label: "EMAIL", handle: "hello@srihari.dev" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -bottom-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-spider/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-spider">
          03 / Contact
        </div>
        <h2 className="mt-4 font-display text-6xl leading-[0.9] sm:text-[10vw]">
          LET'S
          <br />
          <span className="text-spider">CONNECT.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Got a project, an edit, or just wanna talk games and tech? Hit me up.
        </p>

        <a
          href="mailto:hello@srihari.dev"
          className="mt-10 inline-flex items-center gap-3 bg-spider px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:glow-spider"
        >
          send_message()
          <span>→</span>
        </a>

        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              className="group block"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-1 font-display text-xl text-foreground transition-colors group-hover:text-neon">
                {s.handle}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} SRIHARI // ALL RIGHTS RESERVED</div>
          <div>BUILT ON THE GRID — v1.0</div>
        </div>
      </div>
    </footer>
  );
}
