const socials = [
  { label: "INSTAGRAM", handle: "@s_h_r_2011", href: "https://www.instagram.com/s_h_r_2011/" },
  { label: "GITHUB", handle: "shrbuilds-lgtm", href: "https://github.com/shrbuilds-lgtm" },
  { label: "EMAIL", handle: "shr.builds@gmail.com", href: "mailto:shr.builds@gmail.com" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -bottom-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-spider/20 blur-[120px]" />
      <div className="absolute -top-20 right-10 h-[300px] w-[300px] rounded-full bg-techblue/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-techblue">
          // 03 / Contact
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
          href="https://mail.google.com/mail/?view=cm&fs=1&to=shr.builds@gmail.com&su=Hey%20SHR%20%E2%80%94%20let's%20connect&body=Hi%20Srihari%2C%0A%0A"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-spider px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:glow-spider"
        >
          send_message()
          <span>→</span>
        </a>

        <div className="mt-20 grid grid-cols-1 gap-6 border-t border-border pt-10 md:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-border bg-card/40 p-5 transition-all hover:border-techblue hover:glow-techblue"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-techblue">
                {s.label}
              </div>
              <div className="mt-1 font-display text-xl text-foreground transition-colors group-hover:text-neon">
                {s.handle}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row">
          <div>
            <span className="text-techblue">{"<"}</span> Made with{" "}
            <span className="text-spider">techy care</span> by{" "}
            <span className="text-foreground">SHR</span>{" "}
            <span className="text-techblue">{"/>"}</span>
          </div>
          <div>© {new Date().getFullYear()} // ALL SYSTEMS GO — v1.0</div>
        </div>
      </div>
    </footer>
  );
}
