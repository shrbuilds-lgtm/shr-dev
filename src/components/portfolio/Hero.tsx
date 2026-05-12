import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import portrait from "@/assets/srihari.jpg";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      el.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translate3d(${dx * 6}px, ${dy * 6}px, 0)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(900px) rotateY(0) rotateX(0) translate3d(0,0,0)";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-spider/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-techblue/15 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/4 top-1/3 h-[260px] w-[260px] rounded-full bg-neon/10 blur-[100px]"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-12 lg:grid-cols-12 lg:items-center"
      >
        {/* Left: Type */}
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-spider flicker" />
            SYS.STATUS // ONLINE
          </motion.div>

          <h1 className="font-display text-[18vw] leading-[0.85] sm:text-[14vw] lg:text-[11vw]">
            <motion.span variants={fadeUp} className="block text-foreground">
              SRI
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block text-spider transition-all hover:text-glitch"
            >
              HARI.
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-10 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground"
          >
            <span className="text-spider">{">"}</span> Student. Gamer. Editor. Coder.
            <br />
            <span className="text-spider">{">"}</span> Building, breaking, and editing things on the
            grid since day one.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-spider px-6 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-spider"
            >
              <span className="relative z-10">View_Work</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-spider via-techblue to-spider transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#about"
              className="font-mono text-xs uppercase tracking-widest text-foreground/80 underline-offset-4 hover:text-neon hover:underline"
            >
              About_Me()
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6"
          >
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
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div variants={fadeUp} className="lg:col-span-5">
          <div
            ref={portraitRef}
            className="relative mx-auto max-w-md transition-transform duration-300 ease-out will-change-transform"
          >
            <div className="absolute -inset-4 rounded-2xl border border-techblue/40" />
            <div className="absolute -inset-4 corner-brackets" />
            <div className="absolute -inset-8 rounded-3xl bg-spider/10 blur-2xl" />

            <div className="relative scanline overflow-hidden rounded-xl border border-border">
              <img
                src={portrait}
                alt="Srihari portrait — graffiti red background"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-halftone opacity-20 mix-blend-multiply" />
              {/* RGB split overlay on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300 hover:opacity-30"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,40,64,0.3), transparent 50%, rgba(46,168,255,0.3))",
                }}
              />
              {/* Top HUD */}
              <div className="absolute left-3 top-3 flex items-center gap-2 rounded border border-techblue/40 bg-background/60 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-techblue backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-neon flicker" />
                SCAN_ACTIVE
              </div>
              <div className="absolute right-3 top-3 rounded border border-spider/40 bg-background/60 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-spider backdrop-blur">
                ● REC
              </div>
              {/* Bottom data strip */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                <span className="text-techblue">ID_0001</span>
                <span>PROFILE :: SRIHARI</span>
                <span className="text-neon">100%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
