"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function GlobalReach() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="destinos"
      className="font-gt-america relative flex min-h-[820px] w-full items-start overflow-hidden px-[18px] py-[60px] text-[#312726] sm:px-[32px] lg:min-h-[840px] lg:px-[48px] lg:py-[72px]"
    >
      <Image
        src={lang === "en" ? "/img/mapa-ingles-mobile.png" : "/img/mundo-mobile.png"}
        alt={
          lang === "en"
            ? "World map showing destinations reached by Baires Fly private jets"
            : "Mapa mundial con los destinos alcanzados por los jets privados de Baires Fly"
        }
        fill
        priority
        className="object-cover object-top sm:hidden"
      />
      <Image
        src={lang === "en" ? "/img/mapa-destinos-ingles.png" : "/img/mapa-destinos-mundo.png"}
        alt={
          lang === "en"
            ? "World map showing destinations reached by Baires Fly private jets"
            : "Mapa mundial con los destinos alcanzados por los jets privados de Baires Fly"
        }
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
          {t.globalReach.line1}
          <br />
          {t.globalReach.line2}
        </motion.h2>
      </div>
    </section>
  );
}
