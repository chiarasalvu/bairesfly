"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Vuelos Ejecutivos",
    icon: "/img/vuelos-privados.png",
  },
  {
    title: "Vuelos Sanitarios",
    icon: "/img/vuelos-sanitarios.png",
  },
  {
    title: "Vuelos Incucai",
    icon: "/img/vuelo-incucai.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ServiciosAereos() {
  return (
    <section className="font-gt-america relative w-full overflow-hidden bg-black px-[18px] py-[72px] text-white sm:px-[48px] sm:py-[96px] lg:px-[72px] lg:py-[20px] xl:py-[86px]">
      <div className="mx-auto w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col"
        >
          <p className="mb-[10px] text-[12px] font-[500] uppercase leading-none tracking-[-0.03em] text-white/55 sm:mb-[12px] sm:text-[14px]">
            Nuestros Servicios
          </p>

          <h2
            className="max-w-[320px] text-[42px] font-[500] text-white sm:max-w-[620px] sm:text-[52px] lg:text-[60px]"
            style={{
              lineHeight: "42px",
              letterSpacing: "-3.2px",
            }}
          >
            Soluciones aéreas
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mt-[42px] flex w-full flex-col items-center justify-center gap-[16px] sm:mt-[58px] sm:flex-row sm:flex-wrap sm:gap-[28px] lg:mt-[68px] lg:gap-[56px]"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{
                y: -6,
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className="group flex h-[188px] w-full max-w-none flex-col items-center justify-between rounded-[22px] bg-[#F4F4F4] px-[24px] pb-[28px] pt-[26px] text-black transition-all duration-300 hover:bg-white sm:h-[214px] sm:max-w-[214px] sm:rounded-[24px] sm:px-[28px] sm:pb-[42px] sm:pt-[34px]"
            >
              <div className="flex h-[96px] w-full items-center justify-center sm:h-[100px]">
                {service.icon ? (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="max-h-[88px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:max-h-[100px]"
                  />
                ) : (
                  <div className="flex h-[88px] w-full items-center justify-center rounded-[12px] border border-dashed border-[#BDBDBD] text-center text-[11px] font-medium uppercase leading-[14px] tracking-[-0.2px] text-[#8A8A8A] sm:h-[100px]">
                    Icono
                  </div>
                )}
              </div>

              <h3 className="text-center text-[15px] font-[400] leading-[18px] tracking-[-0.04em] text-[#5E5E5E] sm:text-[14px]">
                {service.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}