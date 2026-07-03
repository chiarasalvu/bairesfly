"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    title: "Pet Friendly",
    description: "Tu mascota viaja con vos en cabina.",
    image: "/img/perro.svg",
    photos: ["/img/perro.svg", "/img/perro2.jpeg", "/img/perro3.jpeg"],
  },
  {
    title: "Catering a bordo",
    description: "Menú a tu gusto, preparado para cada vuelo.",
    image: "/img/catering.svg",
    photos: ["/img/catering1.jpeg", "/img/catering2.jpeg", "/img/catering3.png"],
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
  const [photoIndex, setPhotoIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    setPhotoIndex(0);
  }, [openIndex]);

  const activeItem = openIndex >= 0 ? items[openIndex] : items[0];
  const photos = openIndex >= 0 && activeItem.photos ? activeItem.photos : null;

  const prev = () => setPhotoIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setPhotoIndex((i) => (i + 1) % photos.length);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || !photos) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

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
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.06 }}
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
                        <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

        {/* Panel derecho: imagen o carrusel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative order-2 aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:h-[600px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {photos ? (
            <>
              <AnimatePresence mode="wait">
                <motion.img
                  key={photos[photoIndex]}
                  src={photos[photoIndex]}
                  alt={activeItem.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Controles carrusel */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-[12px] top-1/2 z-10 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-[12px] top-1/2 z-10 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-[14px] left-1/2 z-10 flex -translate-x-1/2 gap-[6px]">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPhotoIndex(i)}
                        className={`h-[6px] rounded-full transition-all duration-300 ${i === photoIndex ? "w-[18px] bg-white" : "w-[6px] bg-white/45"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
