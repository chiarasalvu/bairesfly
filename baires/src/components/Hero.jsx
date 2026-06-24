"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="font-gt-america relative flex min-h-screen w-full overflow-hidden bg-black text-white">
      {/* VIDEO BACKGROUND */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/img/avion-hero.png"
          className="h-full w-full object-cover"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex min-h-screen w-full flex-col justify-end px-[34px] pb-[140px] pt-[120px] sm:px-[70px] sm:pb-[128px] md:px-[100px] lg:px-[145px] lg:pb-[140px]"
      >
        <div className="flex w-full flex-col">
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[580px] text-[46px] font-[400] leading-[0.9] tracking-[-0.055em] text-white sm:text-[68px] md:text-[78px] lg:text-[86px]"
          >
            <span className="block">Tu Cielo,</span>
            <span className="block">tus Reglas.</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-[30px] text-[20px] font-[400] leading-[0.97] tracking-[-0.045em] text-white sm:text-[23px] md:text-[25px]"
          >
            El lujo de viajar a tu manera.
          </motion.h2>
        </div>

        {/* OCULTO EN MOBILE */}
        <motion.a
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          href="#nosotros"
          whileHover={{ opacity: 0.72, x: 4 }}
          className="absolute bottom-[58px] right-[34px] hidden items-center gap-[14px] text-[17px] font-[400] uppercase leading-none tracking-[-0.02em] text-white sm:bottom-[76px] sm:right-[70px] sm:flex md:text-[20px] lg:bottom-[140px] lg:right-[82px]"
        >
          <span className="flex flex-col gap-[-2px] leading-none">
            <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
              <path
                d="M1 1L8 8L15 1"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
              <path
                d="M1 1L8 8L15 1"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Comenzá tu viaje
        </motion.a>
      </motion.div>
    </section>
  );
}