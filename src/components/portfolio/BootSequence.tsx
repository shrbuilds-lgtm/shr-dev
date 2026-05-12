import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lines = [
  "> SHR.OS v1.0 // BOOTING SYSTEM...",
  "> CONNECTING TO THE GRID...",
  "> LOADING IDENTITY :: SRIHARI",
  "> RENDERING UI MODULES...",
  "> ACCESS GRANTED.",
];

export function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("shr-booted") === "1") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("shr-booted", "1");
      return;
    }
    setVisible(true);
    document.body.style.overflow = "hidden";

    const timers: number[] = [];
    lines.forEach((_, i) => {
      timers.push(window.setTimeout(() => setShown(i + 1), 220 + i * 240));
    });
    timers.push(
      window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
        sessionStorage.setItem("shr-booted", "1");
      }, 220 + lines.length * 240 + 600),
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-noise opacity-10" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-spider/15 blur-[120px]" />

          <div className="relative w-[min(560px,90vw)] rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-spider flicker" />
                SHR.OS // TERMINAL
              </div>
              <span className="text-techblue">SECURE</span>
            </div>
            <div className="mt-4 min-h-[170px] font-mono text-xs leading-relaxed text-foreground/90">
              {lines.slice(0, shown).map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={
                    l.includes("ACCESS GRANTED")
                      ? "text-neon"
                      : l.includes("IDENTITY")
                        ? "text-techblue"
                        : "text-muted-foreground"
                  }
                >
                  {l}
                  {i === shown - 1 && (
                    <span className="ml-1 inline-block h-3 w-2 translate-y-[2px] bg-spider align-middle flicker" />
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-2 h-[2px] w-full overflow-hidden rounded bg-border">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${(shown / lines.length) * 100}%` }}
                transition={{ ease: "easeOut", duration: 0.4 }}
                className="h-full bg-gradient-to-r from-spider via-techblue to-neon"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
