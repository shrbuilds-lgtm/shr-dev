import { motion } from "framer-motion";

const socials = [
  { label: "INSTAGRAM", handle: "@s_h_r_2011", href: "https://www.instagram.com/s_h_r_2011/" },
  { label: "GITHUB", handle: "shrbuilds-lgtm", href: "https://github.com/shrbuilds-lgtm" },
  { label: "EMAIL", handle: "shr.builds@gmail.com", href: "mailto:shr.builds@gmail.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border py-40">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-spider/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 right-10 h-[300px] w-[300px] rounded-full bg-techblue/20 blur-[120px]"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
        className="relative mx-auto max-w-7xl px-6"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-techblue"
        >
          // 03 / Contact
        </motion.div>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.9 }}
          className="mt-4 font-display text-6xl leading-[0.9] sm:text-[10vw]"
        >
          LET'S
          <br />
          <span className="text-spider">CONNECT.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          Got a project, an edit, or just wanna talk games and tech? Hit me up.
        </motion.p>

        <motion.a
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=shr.builds@gmail.com&su=Hey%20SHR%20%E2%80%94%20let's%20connect&body=Hi%20Srihari%2C%0A%0A"
          target="_blank"
          rel="noreferrer"
          className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-xl bg-spider px-8 py-4 font-mono text-sm uppercase tracking-widest text-primary-foreground transition-all hover:glow-spider"
        >
          <span className="relative z-10">send_message()</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-spider via-techblue to-spider transition-transform duration-500 group-hover:translate-x-0" />
        </motion.a>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-1 gap-6 border-t border-border pt-10 md:grid-cols-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-border bg-card/40 p-5 transition-all hover:-translate-y-1 hover:border-techblue hover:glow-techblue"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-techblue/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-techblue">
                {s.label}
              </div>
              <div className="mt-1 flex items-center justify-between font-display text-xl text-foreground transition-colors group-hover:text-neon">
                {s.handle}
                <span className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:flex-row"
        >
          <div>
            <span className="text-techblue">{"<"}</span> Made with{" "}
            <span className="text-spider">techy care</span> by{" "}
            <span className="text-foreground">SHR</span>{" "}
            <span className="text-techblue">{"/>"}</span>
          </div>
          <div>© {new Date().getFullYear()} // ALL SYSTEMS GO — v1.0</div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
