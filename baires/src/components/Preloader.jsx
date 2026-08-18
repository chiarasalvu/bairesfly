"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Duración mínima de la animación de marca (antes 1800ms fijo, sin tope máximo:
// en conexiones lentas podía bloquear el scroll y retrasar el LCP indefinidamente
// hasta que cargara *todo* el contenido de la página, video incluido).
const MIN_DURATION = 600;
// Tope duro: si "load" tarda de más, no seguimos bloqueando la página por esto.
const MAX_DURATION = 2500;

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  useEffect(() => {
    const start = Date.now();
    let finished = false;

    function finish() {
      if (finished) return;
      finished = true;

      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DURATION - elapsed, 0);

      setTimeout(() => {
        setLoading(false);
      }, remaining);
    }

    const safetyTimer = setTimeout(finish, MAX_DURATION);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="font-gt-america fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black px-[24px] text-center text-white"
        >
          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.15,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className="font-gt-america text-[10px] font-[400] uppercase leading-none tracking-[0.18em] text-white/55 sm:text-[11px]"
          >
            Baires Fly
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.35,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.45,
            }}
            className="font-gt-america mt-[18px] max-w-[520px] text-[28px] font-[500] leading-[30px] tracking-[-1px] text-white sm:text-[34px] sm:leading-[36px] sm:tracking-[-2px] lg:text-[40px] lg:leading-[42px] lg:tracking-[-5px]"
          >
            El lujo de viajar a tu manera
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.7,
            }}
            className="mt-[28px] h-px w-[120px] origin-left bg-white/25"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}