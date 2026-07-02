"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function GlobalReach() {
  return (
    <section
      id="destinos"
      className="font-gt-america relative flex min-h-[820px] w-full items-start overflow-hidden px-[18px] py-[60px] text-[#312726] sm:px-[32px] lg:min-h-[840px] lg:px-[48px] lg:py-[72px]"
    >
      {/* Mobile */}
      <Image
        src="/img/mundo-mobile.png"
        alt=""
        fill
        priority
        className="object-cover object-top sm:hidden"
      />
      {/* Tablet / Desktop */}
      <Image
        src="/img/mapa-destinos-mundo.png"
        alt=""
        fill
        priority
        className="hidden object-cover object-center sm:block"
      />

      <div className="relative z-10 flex w-full flex-col">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="ml-auto max-w-[760px] text-right text-[44px] font-[500] leading-[44px] tracking-[-3px] text-[#312726] sm:text-[52px] sm:leading-[52px] sm:tracking-[-4px] md:text-[56px] md:leading-[56px] lg:mr-[110px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-5px]"
        >
          Donde tengas que estar,
          <br />
          ahi llegamos.
        </motion.h2>
      </div>
    </section>
  );
}