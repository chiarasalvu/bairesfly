"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const planes = [
  {
    name: "Lear Jet 35",
    capacity: "6 pasajeros.",
    cardImage: "/img/jet35.png",
    exteriorImage: "/img/jet35-interior1.png",
    interiorImage: "/img/jet35-interior2.png",
    specs: [
      { label: "Cantidad de pasajeros", value: "6 PASAJEROS" },
      { label: "Camas", value: "—" },
      { label: "Velocidad", value: "—" },
      { label: "Alcance", value: "—" },
    ],
    services: ["Información próximamente."],
  },
  {
    name: "Learjet 60",
    capacity: "7/8 pasajeros.",
    cardImage: "/img/jet60.png",
    exteriorImage: "/img/jet60-interior1.png",
    interiorImage: "/img/jet60-interior2.png",
    specs: [
      { label: "Cantidad de pasajeros", value: "7/8 PASAJEROS" },
      { label: "Camas", value: "PARA 2 PASAJEROS AL MISMO TIEMPO" },
      { label: "Velocidad", value: "420 KTS  |  778 KM/H" },
      { label: "Alcance", value: "2409 NM  |  4461 KM" },
    ],
    services: [
      "Catering especial: comida gourmet, snacks, bebidas, gaseosas y open bar.",
      "Amenities: iPads, diarios, revistas especializadas, mantas y almohadas de puro algodón.",
      "Servicio de cabina.",
      "Aire acondicionado Freon.",
      "Cafetera.",
      "Baño con sistema de vacío.",
      "Toma de corriente 110V.",
    ],
  },
  {
    name: "Gulfstream G400",
    capacity: "13 pasajeros.",
    cardImage: "/img/gulfstream-g400.jpeg",
    exteriorImage: "/img/g400-interior1.jpeg",
    interiorImage: "/img/g400-interior2.jpeg",
    specs: [
      { label: "Cantidad de pasajeros", value: "13 PASAJEROS" },
      { label: "Camas", value: "PARA 6 PASAJEROS AL MISMO TIEMPO" },
      { label: "Velocidad", value: "850 KTS  |  935 KM/H" },
      { label: "Alcance", value: "3800 NM  |  7040 KM" },
    ],
    services: [
      "Catering especial: comida gourmet, snacks, bebidas, gaseosas y open bar.",
      "Amenities: iPads, diarios, revistas especializadas, mantas y almohadas de puro algodón.",
      "Servicio personalizado disponible 24hs.",
      "Auxiliar de vuelo.",
      "Galley trasero.",
      "Cafetera.",
      "Horno de convección.",
      "Cajones de hielo.",
      "Baño AFT con sistema de vacío.",
      "Toma de corriente 110V.",
    ],
  },
  {
    name: "Gulfstream G500",
    capacity: "14 pasajeros.",
    cardImage: "/img/g500.jpeg",
    exteriorImage: "/img/g500-interior1.jpeg",
    interiorImage: "/img/g500-interior2.jpeg",
    specs: [
      { label: "Cantidad de pasajeros", value: "14 PASAJEROS" },
      { label: "Camas", value: "PARA 6 PASAJEROS AL MISMO TIEMPO" },
      { label: "Velocidad", value: "850 KTS  |  880 KM/H" },
      { label: "Alcance", value: "5500 NM  |  10200 KM" },
    ],
    services: [
      "Catering especial: comida gourmet, snacks, bebidas, gaseosas, soft drinks y open bar.",
      "Amenities: iPads, diarios, revistas especializadas, mantas y almohadas de puro algodón.",
      "Servicio personalizado disponible 24hs.",
      "Auxiliar de vuelo.",
      "Galley trasero.",
      "Cafetera.",
      "Horno de convección.",
      "Cajones de hielo.",
      "Baños FWD y AFT con sistema de vacío.",
      "Toma de corriente 110V.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function PlaneDetails({ selected }) {
  return (
    <div className="mt-[20px] grid grid-cols-1 gap-[32px] rounded-[20px] bg-[#1c1c1c] p-[22px] text-white sm:mt-[32px] sm:rounded-[24px] sm:p-[40px] lg:grid-cols-[0.8fr_1fr_1fr] lg:gap-[48px]">
      <div>
        <h3 className="text-[26px] font-[400] tracking-[-0.02em] lg:text-[32px]">
          {selected.name}
        </h3>

        <dl className="mt-[28px] flex flex-col gap-[18px] sm:mt-[32px] sm:gap-[20px]">
          {selected.specs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-[11px] uppercase tracking-[0.02em] text-white/45 sm:text-[12px]">
                {spec.label}
              </dt>

              <dd className="mt-[4px] text-[13px] font-[400] uppercase leading-[1.35] tracking-[-0.01em] text-white sm:text-[14px]">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-[16px] sm:gap-[20px]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-white/5">
          <Image
            src={selected.exteriorImage}
            alt={`${selected.name} exterior`}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-white/5">
          <Image
            src={selected.interiorImage}
            alt={`${selected.name} interior`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <h4 className="text-[11px] uppercase tracking-[0.02em] text-white/45 sm:text-[12px]">
          Servicios incluidos
        </h4>

        <div className="mt-[16px] flex flex-col gap-[10px]">
          {selected.services.map((service) => (
            <p
              key={service}
              className="text-[13px] leading-[1.45] text-white/85 sm:text-[14px]"
            >
              — {service}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Fleet() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selected = selectedIndex !== null ? planes[selectedIndex] : null;

  return (
    <section
      id="flota"
      className="font-gt-america relative w-full bg-black px-[18px] py-[100px] text-white sm:px-[32px] lg:px-[48px] lg:py-[160px]"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="ml-auto max-w-[640px] text-right"
      >
        <h2 className="text-[44px] font-[400] leading-[44px] tracking-[-3px] sm:text-[52px] sm:leading-[52px] sm:tracking-[-4px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-5px]">
          Nuestra flota
        </h2>

        <p className="mt-[16px] text-[14px] leading-[1.6] text-white/70 sm:text-[15px]">
          Poseemos una flota de aeronaves propias, ofreciendo alternativas a
          medida de cada pasajero:
        </p>
      </motion.div>

      <div className="mt-[56px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-4">
        {planes.map((plane, index) => (
          <div key={plane.name} className="contents sm:block">
            <motion.button
              type="button"
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className={`flex w-full flex-col rounded-[16px] p-[12px] text-left text-white transition-colors duration-300 ${
                selectedIndex === index ? "bg-[#242424]" : "bg-[#181818]"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={plane.cardImage}
                  alt={plane.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-[14px] text-[16px] font-[400] tracking-[-0.01em]">
                {plane.name}
              </h3>

              <p className="mt-[6px] border-b border-white/15 pb-[10px] text-[13px] text-white/55">
                <span className="font-[400] text-white">Capacidad: </span>
                {plane.capacity}
              </p>

              <span className="mt-[12px] flex items-center gap-[6px] text-[12px] font-medium">
                Ver más
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    selectedIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.button>

            {/* MOBILE: el detalle aparece debajo de cada card */}
            <AnimatePresence initial={false}>
              {selectedIndex === index && (
                <motion.div
                  key={`mobile-${plane.name}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden sm:hidden"
                >
                  <PlaneDetails selected={plane} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* TABLET / DESKTOP: mantiene el comportamiento original */}
      <AnimatePresence initial={false}>
        {selected && (
          <motion.div
            key={`desktop-${selected.name}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden overflow-hidden sm:block"
          >
            <PlaneDetails selected={selected} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}