import { motion } from "framer-motion";

const skills = [
  "GAMING",
  "VIDEO EDITING",
  "COMPUTERS",
  "CODING",
  "MOTION FX",
  "CREATIVE DIR.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-40">
      <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-techblue/10 blur-[120px]"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12, ease: [0.22, 1, 0.36, 1] as const, duration: 0.8 }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12"
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="lg:col-span-2">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-spider">
            01 / About
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl leading-tight sm:text-7xl"
          >
            I make things <span className="text-spider">work</span>,
            <br /> and make them <span className="text-neon">look good</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            I'm Srihari — a student by day, a gamer by night, and an editor in between. I live in
            front of a screen and I love it. Whether it's chopping up footage, grinding ranked, or
            breaking things in code — I'm all in.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            I excel at everything computer-related. Curious, fast, and a little chaotic.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-10 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="group relative overflow-hidden rounded-md border border-neon/40 bg-neon/5 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-neon transition-all hover:border-neon hover:glow-neon hover:-translate-y-0.5"
              >
                <span className="relative z-10">{s}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-neon/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stat block */}
        <motion.div variants={fadeUp} transition={{ duration: 0.8 }} className="lg:col-span-3">
          <div className="corner-brackets group relative rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-techblue hover:glow-techblue">
            <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-techblue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
                <div
                  key={k}
                  className="flex items-center justify-between border-b border-border/60 pb-2"
                >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
