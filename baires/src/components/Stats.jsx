"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const stats = [
  { value: 1200, prefix: "+", label: "Vuelos realizados" },
  { value: 30, prefix: "+", label: "destinos activos" },
  { value: 30, prefix: "", label: "años de experiencia" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Counter({ value, prefix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="inline-flex items-center justify-center">
      {prefix}
      {count}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="font-gt-america w-full bg-black px-[18px] py-[100px] text-white sm:px-[32px] lg:px-[48px] lg:py-[140px]">
      <div className="grid grid-cols-1 gap-y-[56px] sm:grid-cols-3 sm:gap-x-[32px]">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="flex w-full items-center justify-center text-center text-[56px] font-[400] leading-none tracking-[-0.02em] sm:text-[64px] lg:text-[72px]">
              <Counter value={stat.value} prefix={stat.prefix} />
            </p>

            <p className="mt-[16px] text-center text-[15px] text-white/70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}