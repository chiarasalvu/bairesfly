"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Flota Verificada",
    description:
      "Cada aeronave pasa controles de mantenimiento estrictos antes de cada salida.",
  },
  {
    title: "Tripulación Certificada",
    description: "Pilotos y staff con horas de vuelo y formación continua",
  },
  {
    title: "Viaje a medida",
    description:
      "Coordinamos cada detalle, desde la planificación hasta el aterrizaje, para que cada viaje se sienta verdaderamente a medida.",
  },
  {
    title: "Privacidad total",
    description:
      "Tus datos y movimientos quedan siempre entre vos y nosotros.",
  },
];

const titleText = "Más de una década conectando personas con sus destinos.";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.018,
      delayChildren: 0.12,
    },
  },
};

const titleLetter = {
  hidden: {
    opacity: 0.18,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const words = titleText.split(" ");

  return (
    <section
      id="nosotros"
      className="font-gt-america relative w-full bg-[#F7F7F6] px-[32px] pb-[150px] pt-[130px] text-[#312726] sm:px-[48px] lg:px-[56px] lg:pb-[160px] lg:pt-[158px]"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-[860px]"
      >
        <motion.h2
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[860px] text-[44px] font-medium leading-[48px] tracking-[-3px] text-[#312726] sm:text-[58px] sm:leading-[58px] sm:tracking-[-4px] lg:text-[72px] lg:leading-[60px] lg:tracking-[-5px]"
        >
          {words.map((word, wordIndex) => (
            <span
              key={`${word}-${wordIndex}`}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${word}-${wordIndex}-${letter}-${letterIndex}`}
                  variants={titleLetter}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}

              {wordIndex !== words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </motion.h2>

        <p className="mt-[38px] max-w-[780px] text-[18px] font-medium leading-[20px] tracking-[-1px] text-[#312726]/45 sm:text-[19px] md:text-[20px]">
          En Baires Fly combinamos atención cercana, aeronaves de primer nivel y
          una operación eficiente para resolver cada trayecto con precisión,
          discreción y confort.
        </p>
      </motion.div>

      <div className="mt-[116px] grid grid-cols-1 gap-x-[72px] gap-y-[48px] sm:grid-cols-2 lg:grid-cols-4">
        {values.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.08,
            }}
            className="max-w-[285px]"
          >
            <h3 className="text-[18px] font-medium leading-[1.1] tracking-[-0.035em] text-[#312726]">
              {item.title}
            </h3>

            <p className="mt-[18px] text-[16px] font-[400] leading-[1.22] tracking-[-0.025em] text-[#312726]/45">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}