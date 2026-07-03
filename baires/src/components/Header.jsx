"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
};

const menuOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const menuItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        variants={container}
        initial="hidden"
        animate="visible"
        className="font-gt-america absolute inset-x-0 top-0 z-50 flex w-full items-center justify-between px-[18px] py-[18px] text-white sm:px-[32px] sm:py-[20px] lg:px-[48px]"
      >
        <motion.a
          variants={fadeDown}
          transition={{ duration: 0.6, ease: "easeOut" }}
          href="#"
          className="relative z-50 flex items-center gap-[10px]"
          onClick={closeMenu}
        >
          <img
            src="/img/logo.png"
            alt="Baires Fly S.A."
            className="h-[130px] w-auto sm:h-[110px] lg:h-[128px]"
          />
        </motion.a>

        {/* NAV DESKTOP */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[28px] lg:flex">
          {t.header.nav.slice(0, 5).map((item) => (
            <motion.a
              key={item.label}
              variants={fadeDown}
              transition={{ duration: 0.6, ease: "easeOut" }}
              href={item.href}
              className="group relative overflow-hidden text-[15px] font-normal leading-none lg:text-[17px]"
            >
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                {item.label}
              </span>
              <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-[20px] lg:flex">
          <motion.a
            variants={fadeDown}
            transition={{ duration: 0.6, ease: "easeOut" }}
            href="mailto:consultas@bairesfly.com"
            className="text-[15px] font-normal leading-none transition-opacity hover:opacity-70 lg:text-[17px]"
          >
            consultas@bairesfly.com
          </motion.a>

          <motion.button
            variants={fadeDown}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={toggle}
            className="flex items-center gap-[6px] text-[13px] leading-none tracking-[0.06em] lg:text-[14px]"
          >
            <span className={lang === "es" ? "font-[700] text-white" : "font-[400] text-white/50"}>ES</span>
            <span className="font-[400] text-white/30">|</span>
            <span className={lang === "en" ? "font-[700] text-white" : "font-[400] text-white/50"}>EN</span>
          </motion.button>
        </div>

        {/* BOTÓN MOBILE */}
        <div className="relative z-50 flex items-center gap-[16px] lg:hidden">
          <button
            onClick={toggle}
            className="flex items-center gap-[6px] text-[13px] leading-none tracking-[0.06em]"
          >
            <span className={lang === "es" ? "font-[700] text-white" : "font-[400] text-white/50"}>ES</span>
            <span className="font-[400] text-white/30">|</span>
            <span className={lang === "en" ? "font-[700] text-white" : "font-[400] text-white/50"}>EN</span>
          </button>

          <motion.button
            variants={fadeDown}
            transition={{ duration: 0.6, ease: "easeOut" }}
            type="button"
            aria-label={isOpen ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-[34px] w-[34px] items-center justify-center"
          >
            <span
              className={`absolute h-[1.5px] w-[24px] bg-white transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-[24px] bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="font-gt-america fixed inset-0 z-40 flex min-h-screen w-full flex-col items-center justify-center bg-black px-[24px] text-white lg:hidden"
          >
            <motion.nav
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-[28px]"
            >
              {t.header.nav.map((item) => (
                <motion.a
                  key={item.label}
                  variants={menuItem}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-[25px] font-[400] leading-none tracking-[-0.04em] text-white transition-opacity hover:opacity-60 sm:text-[46px]"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute bottom-[32px] left-1/2 w-full max-w-[260px] -translate-x-1/2 text-center text-[12px] font-[400] leading-[1.35] text-white/40"
            >
              {t.header.tagline}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
