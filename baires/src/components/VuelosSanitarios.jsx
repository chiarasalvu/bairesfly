"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  "Camilla médica incorporada",
  "Respirador artificial",
  "Oxígeno medicinal",
  "Desfibrilador",
  "Monitor multiparamétrico",
  "Acompañamiento médico/paramédico",
  "Coordinación con hospitales",
  "Disponibilidad 24/7",
];

const photos = [
  "/img/vuelos-sanitarios/vuelo-sanitario1.png",
  "/img/vuelos-sanitarios/vuelo-sanitario3.png",
  "/img/vuelos-sanitarios/vuelo-sanitario2.png",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function VuelosSanitarios() {
  return (
    <section id="vuelos-sanitarios" className="font-gt-america relative w-full overflow-hidden bg-black px-[18px] py-[72px] text-white sm:px-[48px] sm:py-[96px] lg:px-[72px] lg:py-[20px] xl:py-[86px]">
      <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-2 lg:gap-[64px]">

        {/* Izquierda: contenido */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-[36px] lg:gap-[40px]"
        >
          {/* Label + Heading */}
          <div>
            <p className="mb-[10px] text-[12px] font-[500] uppercase leading-none tracking-[-0.03em] text-white/55 sm:mb-[12px] sm:text-[14px]">
              Servicios especializados
            </p>
            <h2
              className="text-[42px] font-[500] text-white sm:text-[52px] lg:text-[60px]"
              style={{ lineHeight: "1.0", letterSpacing: "-3.2px" }}
            >
              Vuelos sanitarios
            </h2>
            <p className="mt-[24px] max-w-[480px] text-[15px] font-[400] leading-[1.65] tracking-[-0.02em] text-white/55 sm:text-[16px] lg:text-[17px]">
              Contamos con aeronaves equipadas para el traslado de pacientes críticos,
              brindando atención médica especializada durante todo el vuelo.
            </p>
          </div>

          {/* Features */}
          <div className="rounded-[16px] border border-white/10 p-[20px] sm:p-[24px] lg:p-[28px]">
            <p className="mb-[18px] text-[11px] font-[500] uppercase leading-none tracking-[-0.03em] text-white/35">
              Equipamiento y servicios
            </p>
            <div className="grid grid-cols-1 gap-x-[24px] gap-y-[13px] sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-[10px]">
                  <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-white/35" />
                  <p className="text-[13px] font-[400] leading-none tracking-[-0.01em] text-white/70 sm:text-[14px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-[12px]">
            <a
              href="#contacto"
              className="flex items-center gap-[10px] rounded-full border border-white/20 px-[22px] py-[13px] text-[14px] font-[500] tracking-[-0.02em] text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <rect x="1" y="2" width="13" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M4 5.5H11M4 8.5H8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Cotizar vuelo
            </a>
            <a
              href="#contacto"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Derecha: fotos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="flex flex-col gap-[10px]"
        >
          {/* Fila superior: 2 fotos */}
          <div className="grid grid-cols-2 gap-[10px]">
            {photos.slice(0, 2).map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-white/5"
              >
                <Image
                  src={src}
                  alt={`Vuelo sanitario ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Foto inferior full-width */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-[14px] bg-white/5 sm:h-[280px] lg:h-[300px]">
            <Image
              src={photos[2]}
              alt="Vuelo sanitario 3"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
