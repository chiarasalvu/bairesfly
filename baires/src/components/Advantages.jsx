"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    title: "Equipaje sin límites",
    description: "Viajá con lo que necesites, sin restricciones de peso ni tamaño.",
    image: "/img/avion.jpg",
  },
  {
    title: "Pet Friendly",
    description: "Tu mascota viaja con vos en cabina.",
    image: "/img/perro.svg",
  },
  {
    title: "Catering a bordo",
    description: "Menú a tu gusto, preparado para cada vuelo.",
    image: "/img/catering.svg",
  },
  {
    title: "Entretenimiento a bordo",
    description: "Contenido a demanda en cada butaca.",
    image: "/img/entretenimiento.svg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Advantages() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="beneficios"
      className="font-gt-america w-full bg-[#f7f6f4] px-[18px] py-[100px] text-[#312726] sm:px-[32px] lg:px-[48px] lg:py-[140px]"
    >
      <div className="grid grid-cols-1 gap-y-[48px] lg:grid-cols-2 lg:gap-x-[100px]">
        <div className="order-1">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[520px] text-[44px] font-[500] leading-[44px] tracking-[-3px] text-[#312726] sm:text-[52px] sm:leading-[52px] sm:tracking-[-4px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-5px]"
          >
            Volar bien es no resignar nada.
          </motion.h2>

          <div className="mt-[60px] lg:mt-[100px]">
            {items.map((item, index) => {
              const isOpen = index === openIndex;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="border-b border-black/15"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between py-[22px] text-left"
                  >
                    <span className="text-[16px] font-[400] tracking-[-0.01em]">
                      {item.title}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path
                          d="M1 1L8 8L15 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-[24px] text-[14px] leading-[1.6] text-black/60">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative order-2 aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:h-[600px]"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={items[openIndex]?.image ?? items[0].image}
              src={items[openIndex]?.image ?? items[0].image}
              alt={items[openIndex]?.title ?? items[0].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}