"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const planes = [
  {
    name: "Learjet 35",
    capacity: "6 pasajeros.",
    cardImage: "/img/35/35.png",
    exteriorImage: "/img/35/learjet35-interior1.jpg",
    interiorImage: "/img/35/learjet35-interior2.png",
    photos: [
      "/img/35/learjet35-interior2.png",
      "/img/35/learjet35-interior3.jpg",
      "/img/35/learjet35-interior1.jpg",
      "/img/35/learjet35-interior4.png",
    ],
    floorPlans: [],
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
    cardImage: "/img/60/60-portada.png",
    exteriorImage: "/img/60/jet60-interior1.png",
    interiorImage: "/img/60/jet60-interior2.png",
    floorPlans: ["/img/60/jet60-plano1.png"],
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
    cardImage: "/img/400/g400-portada1.png",
    exteriorImage: "/img/400/g400-interior1.jpeg",
    interiorImage: "/img/400/g400-interior2.jpeg",
    photos: [
      "/img/400/g400-interior1.jpg",
      "/img/400/g400-interior2.jpg",
      "/img/400/g400-interior3.jpeg",
      "/img/400/g400-interior4.jpg",
      "/img/400/g400-interior5.jpg",
    ],
    floorPlans: ["/img/400/g400-dia-plano.png", "/img/400/g400-noche-plano.png"],
    floorPlanScale: "scale-[1.1] sm:scale-[1.5]",
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
    cardImage: "/img/500/500-portada.png",
    exteriorImage: "/img/500/g500-interior1.jpeg",
    interiorImage: "/img/500/g500-interior2.jpeg",
    photos: [
      "/img/500/g500-interior1.jpeg",
      "/img/500/g500-interior3.jpeg",
      "/img/500/g500-interior4.jpeg",
      "/img/500/g500-interior5.jpeg",
      "/img/500/g500-interior6.jpeg",
      "/img/500/g500-interior7.jpeg",
      // "/img/500/g500-interior8.jpeg",
    ],
    floorPlans: ["/img/500/g500-dia.png", "/img/500/g500-noche.png"],
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
  const hasFloorPlans = selected.floorPlans && selected.floorPlans.length > 0;
  const photos = selected.photos ?? [selected.exteriorImage, selected.interiorImage].filter(Boolean);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="mt-[20px] rounded-[20px] bg-[#1c1c1c] text-white sm:mt-[32px] sm:rounded-[24px]">
      <div className="p-[22px] sm:p-[40px]">
        {/* Specs + carrusel + servicios */}
        <div className="grid grid-cols-1 gap-[28px] lg:grid-cols-[0.8fr_1fr_1fr] lg:gap-[40px]">
          <div>
            <h3 className="text-[22px] font-[400] tracking-[-0.02em] lg:text-[28px]">
              {selected.name}
            </h3>

            <dl className="mt-[22px] flex flex-col gap-[14px] sm:mt-[26px]">
              {selected.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-[11px] uppercase tracking-[0.02em] text-white/45 sm:text-[12px]">
                    {spec.label}
                  </dt>
                  <dd className="mt-[3px] text-[13px] font-[400] uppercase leading-[1.35] tracking-[-0.01em] text-white sm:text-[14px]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Carrusel */}
          <div>
            <div className="relative h-[240px] w-full overflow-hidden rounded-[10px] bg-white/5 sm:h-[280px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={photoIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={photos[photoIndex]}
                    alt={`${selected.name} foto ${photoIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setPhotoIndex((photoIndex - 1 + photos.length) % photos.length)}
                    aria-label="Foto anterior"
                    className="absolute left-[10px] top-1/2 z-10 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M8 2L3 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPhotoIndex((photoIndex + 1) % photos.length)}
                    aria-label="Siguiente foto"
                    className="absolute right-[10px] top-1/2 z-10 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4 2L9 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div className="absolute bottom-[10px] left-1/2 z-10 flex -translate-x-1/2 gap-[6px]">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setPhotoIndex(i)}
                        aria-label={`Foto ${i + 1}`}
                        className={`h-[5px] rounded-full transition-all duration-300 ${
                          i === photoIndex ? "w-[14px] bg-white" : "w-[5px] bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.02em] text-white/45 sm:text-[12px]">
              Servicios incluidos
            </h4>

            <div className="mt-[14px] flex flex-col gap-[8px]">
              {selected.services.map((service) => (
                <p
                  key={service}
                  className="text-[13px] leading-[1.4] text-white/85 sm:text-[14px]"
                >
                  — {service}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Planos de cabina */}
        {hasFloorPlans && (
          <div className="mt-[28px] border-t border-white/10 pt-[28px]">
            <h4 className="text-[11px] uppercase tracking-[0.02em] text-white/45 sm:text-[12px]">
              Planos de cabina
            </h4>

            <div className="mt-[16px] grid grid-cols-1 gap-[12px] sm:grid-cols-2">
              {selected.floorPlans.map((plan, i) => (
                <div
                  key={i}
                  className="relative h-[140px] w-full overflow-hidden rounded-[10px] bg-white/5 sm:h-[160px]"
                >
                  <Image
                    src={plan}
                    alt={`${selected.name} plano ${i + 1}`}
                    fill
                    className={`object-contain ${selected.floorPlanScale ?? ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
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