"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const destinationColumns = [
  ["Buenos Aires", "Montevideo", "Punta del Este"],
  ["São Paulo", "Asunción", "Bogotá"],
  ["Bariloche", "Mendoza", "Rio de Janeiro"],
  ["Lima", "Ciudad de México", "Santiago"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function GlobalReach() {
  return (
    <section
      id="destinos"
      className="font-gt-america relative flex min-h-[820px] w-full items-center overflow-hidden px-[18px] py-[90px] text-[#312726] sm:px-[32px] lg:min-h-[840px] lg:px-[48px] lg:py-[120px]"
    >
      <Image
        src="/img/mapa-baires-final.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      <div className="relative z-10 flex min-h-[640px] w-full flex-col justify-center">
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

        <div className="mx-auto mt-[110px] grid w-full max-w-[1120px] grid-cols-2 gap-x-[48px] gap-y-[34px] sm:grid-cols-4 sm:gap-x-[56px] lg:mt-[120px] lg:gap-x-[90px]">
          {destinationColumns.map((column, columnIndex) => (
            <motion.div
              key={column[0]}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: columnIndex * 0.08,
              }}
              className="flex flex-col items-start gap-[34px] sm:items-center lg:gap-[36px]"
            >
              {column.map((city) => (
                <span
                  key={city}
                  className="text-[15px] font-[500] uppercase leading-none tracking-[-0.06em] text-[#312726]/70 sm:text-center sm:text-[18px] lg:text-[20px]"
                >
                  {city}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}