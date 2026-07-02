"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "Flota Verificada",
    description:
      "Cada aeronave pasa controles de mantenimiento estrictos antes de cada salida. Contamos con mantenimiento propio habilitado y certificado por ANAC.",
  },
  {
    title: "Tripulación Certificada",
    description: "Pilotos y staff con horas de vuelo y formación continua. Realizamos simulaciones en CAE certificado por la FAA.",
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
      className="font-gt-america relative w-full overflow-hidden bg-[#F7F7F6] px-[32px] pb-[150px] pt-[130px] text-[#312726] sm:px-[48px] lg:px-[56px] lg:pb-[160px] lg:pt-[158px]"
    >
      {/* Imagen decorativa de fondo */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-full w-full select-none sm:w-[65%] lg:w-[55%]">
        <Image
          src="/img/avion-hero.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.14] grayscale sm:object-left"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F6]/60 via-transparent to-transparent lg:from-[#F7F7F6] lg:via-[#F7F7F6]/20 lg:to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-l from-[#F7F7F6] via-[#F7F7F6]/40 to-transparent lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F6]/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
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
          Operando desde el año 1996, Baires Fly S.A. es líder en su rubro, con una vasta cartera de clientes que año tras año nos siguen eligiendo y confiando en nuestra idoneidad.
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
      </div>
    </section>
  );
}