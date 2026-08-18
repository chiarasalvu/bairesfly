"use client";

import { useState } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";

const icons = ["/img/vuelos-privados.png", "/img/vuelos-sanitarios.png", "/img/vuelo-incucai.png"];
const photoSets = [
  ["/img/60/jet60-interior1.png", "/img/60/jet60-interior2.png", "/img/60/60-portada.png"],
  ["/img/vuelos-sanitarios/vuelo-sanitario1.png", "/img/vuelos-sanitarios/vuelo-sanitario2.png", "/img/vuelos-sanitarios/vuelo-sanitario3.png"],
  ["/img/vuelos-incucai.png"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const panelVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function ServicePanel({ service, photos, t }) {
  return (
    <div className="grid grid-cols-1 gap-[40px] border-t border-white/10 pt-[40px] lg:grid-cols-2 lg:gap-[64px]">
      <div className="flex flex-col gap-[28px]">
        <h3
          className="text-[34px] font-[500] text-white sm:text-[44px] lg:text-[52px]"
          style={{ lineHeight: "1.0", letterSpacing: "-3.2px" }}
        >
          {service.title}
        </h3>
        <p className="max-w-[480px] text-[15px] font-[400] leading-[1.65] tracking-[-0.02em] text-white/55 sm:text-[16px] lg:text-[17px]">
          {service.description}
        </p>

        <div className="rounded-[16px] border border-white/10 p-[20px] sm:p-[24px]">
          <p className="mb-[16px] text-[11px] font-[500] uppercase leading-none tracking-[-0.03em] text-white/35">
            {t.servicios.featuresLabel}
          </p>
          <div className="grid grid-cols-1 gap-x-[24px] gap-y-[13px] sm:grid-cols-2">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-[10px]">
                <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-white/35" />
                <p className="text-[13px] font-[400] leading-none tracking-[-0.01em] text-white/70 sm:text-[14px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <a
            href="#contacto"
            className="flex items-center gap-[10px] rounded-full border border-white/20 px-[22px] py-[13px] text-[14px] font-[500] tracking-[-0.02em] text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            {t.servicios.cta}
          </a>
          <a
            href="#contacto"
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-[10px]">
        {photos.length === 1 ? (
          <div className="relative h-[280px] w-full overflow-hidden rounded-[14px] bg-white/5 sm:h-[380px] lg:h-full lg:min-h-[420px]">
            <NextImage
              src={photos[0]}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-[10px]">
              {photos.slice(0, 2).map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-white/5">
                  <NextImage
                    src={src}
                    alt={`${service.title} ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="relative h-[200px] w-full overflow-hidden rounded-[14px] bg-white/5 sm:h-[240px]">
              <NextImage
                src={photos[2]}
                alt={`${service.title} 3`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ServiciosAereos() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const renderCard = (service, index) => {
    const isOpen = openId === index;
    return (
      <motion.button
        key={index}
        variants={fadeUp}
        onClick={() => toggle(index)}
        whileHover={{ y: isOpen ? 0 : -6, transition: { duration: 0.35, ease: "easeOut" } }}
        className={`group flex h-[188px] w-full cursor-pointer flex-col items-center justify-between rounded-[22px] px-[24px] pb-[28px] pt-[26px] text-black transition-all duration-300 sm:h-[214px] sm:max-w-[214px] sm:rounded-[24px] sm:px-[28px] sm:pb-[42px] sm:pt-[34px] ${
          isOpen ? "bg-white" : "bg-[#F4F4F4] hover:bg-white"
        }`}
      >
        <div className="flex h-[96px] w-full items-center justify-center sm:h-[100px]">
          <NextImage
            src={icons[index]}
            alt={service.title}
            width={100}
            height={100}
            className="max-h-[88px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:max-h-[100px]"
          />
        </div>
        <h3 className="text-center text-[15px] font-[400] leading-[18px] tracking-[-0.04em] text-[#5E5E5E] sm:text-[14px]">
          {service.title}
        </h3>
      </motion.button>
    );
  };

  return (
    <section
      id="servicios"
      className="font-gt-america relative w-full overflow-hidden bg-black px-[18px] py-[72px] text-white sm:px-[48px] sm:py-[96px] lg:px-[72px] lg:py-[20px] xl:py-[86px]"
    >
      <div className="mx-auto w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col"
        >
          <p className="mb-[10px] text-[12px] font-[500] uppercase leading-none tracking-[-0.03em] text-white/55 sm:mb-[12px] sm:text-[14px]">
            {t.servicios.label}
          </p>
          <h2
            className="max-w-[320px] text-[42px] font-[500] text-white sm:max-w-[620px] sm:text-[52px] lg:text-[60px]"
            style={{ lineHeight: "42px", letterSpacing: "-3.2px" }}
          >
            {t.servicios.title}
          </h2>
        </motion.div>

        {/* Mobile: card + panel inline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-[42px] flex flex-col gap-[16px] sm:hidden"
        >
          {t.servicios.items.map((service, index) => {
            const isOpen = openId === index;
            return (
              <div key={index} className="flex flex-col">
                {renderCard(service, index)}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key={index}
                      variants={panelVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="pt-[32px]">
                        <ServicePanel service={service} photos={photoSets[index]} t={t} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Desktop: cards en fila + panel al final */}
        <div className="hidden sm:block">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto mt-[58px] flex w-full flex-row flex-wrap items-center justify-center gap-[28px] lg:mt-[68px] lg:gap-[56px]"
          >
            {t.servicios.items.map((service, index) => renderCard(service, index))}
          </motion.div>

          <AnimatePresence mode="wait">
            {openId !== null && (() => {
              const service = t.servicios.items[openId];
              return service ? (
                <motion.div
                  key={openId}
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <div className="mt-[48px]">
                    <ServicePanel service={service} photos={photoSets[openId]} t={t} />
                  </div>
                </motion.div>
              ) : null;
            })()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
