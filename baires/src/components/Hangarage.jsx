"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const icons = {
  hangar: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M2 20V9.5L11 4L20 9.5V20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 20H20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8 20V13H14V20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  handling: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 17V6.5C3 5.67 3.67 5 4.5 5H9.5C10.33 5 11 5.67 11 6.5V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 10H17.5C18.88 10 20 11.12 20 12.5V17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17H20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="6" cy="19" r="1.4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16" cy="19" r="1.4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  fuel: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 3C11 3 6 9.2 6 13.2C6 16.4 8.24 19 11 19C13.76 19 16 16.4 16 13.2C16 9.2 11 3 11 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  flightPlan: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M6 2.5H13L17 6.5V19.5H6V2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 2.5V6.5H17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 11H14.5M8.5 14H14.5M8.5 17H12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  weather: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="7" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 1.5V2.3M3.3 3.3L3.9 3.9M1.5 6.5H2.3M10.1 3.3L10.7 3.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M6 16.5C4.07 16.5 2.5 14.93 2.5 13C2.5 11.24 3.8 9.79 5.5 9.54C6.02 7.72 7.7 6.5 9.6 6.5C11.9 6.5 13.8 8.3 13.98 10.58C15.68 10.86 17 12.35 17 14.13C17 16.13 15.38 17.5 13.5 17.5H6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  customs: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2L18.5 5V10.5C18.5 15 15.5 18.3 11 19.8C6.5 18.3 3.5 15 3.5 10.5V5L11 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.7 11L10 13.3L14.5 8.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  transfer: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3.5 14V9.5L5.5 5.5H16.5L18.5 9.5V14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 9.5H18.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 14H20V16.5H2V14Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.5" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="15.5" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  lounge: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 12V6.5C5 5.67 5.67 5 6.5 5H15.5C16.33 5 17 5.67 17 6.5V12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 12V19M18.5 12V19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M3.5 12H18.5C19.05 12 19.5 12.45 19.5 13V15C19.5 15.55 19.05 16 18.5 16H3.5C2.95 16 2.5 15.55 2.5 15V13C2.5 12.45 2.95 12 3.5 12Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  catering: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 15C3 10.58 6.58 7 11 7C15.42 7 19 10.58 19 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 15H20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 7V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16.5 3L17 4L18 4.3L17 4.6L16.5 5.6L16 4.6L15 4.3L16 4L16.5 3Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Hangarage() {
  const { t } = useLanguage();

  return (
    <section
      id="hangarage"
      className="font-gt-america w-full bg-[#F7F7F6] px-[18px] py-[100px] text-[#312726] sm:px-[32px] lg:h-screen lg:px-[48px] lg:py-0"
    >
      <div className="grid grid-cols-1 gap-y-[48px] lg:flex lg:h-full lg:items-stretch lg:gap-x-[100px] lg:pb-[48px] lg:pt-[104px]">
        <div className="order-1 lg:flex lg:flex-1 lg:flex-col lg:justify-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[520px] text-[44px] font-[500] leading-[44px] tracking-[-3px] text-[#312726] sm:text-[52px] sm:leading-[52px] sm:tracking-[-4px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-5px]"
          >
            {t.hangarage.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="mt-[24px] max-w-[460px] text-[16px] font-[400] leading-[1.4] tracking-[-0.02em] text-[#312726]/55 sm:text-[17px] lg:mt-[18px]"
          >
            {t.hangarage.subtitle}
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-[48px] lg:mt-[36px]"
          >
            {t.hangarage.items.map((item) => (
              <motion.div
                key={item.icon}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-[18px] border-b border-black/10 py-[18px] first:pt-0 lg:py-[13px]"
              >
                <span className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center text-[#312726]">
                  {icons[item.icon]}
                </span>
                <p className="text-[14px] font-[400] leading-[1.45] tracking-[-0.01em] text-[#312726] sm:text-[15px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="order-2 flex flex-col gap-[10px] lg:h-full lg:flex-1">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-black/5 lg:aspect-auto lg:min-h-0 lg:flex-[1.6]"
          >
            <Image
              src="/img/hangrage1.png"
              alt={t.hangarage.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-[10px] lg:flex lg:min-h-0 lg:flex-1">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-[14px] bg-black/5 lg:aspect-auto lg:h-full lg:flex-1"
            >
              <Image
                src="/img/hangrage2.png"
                alt={t.hangarage.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-[14px] bg-black/5 lg:aspect-auto lg:h-full lg:flex-1"
            >
              <Image
                src="/img/hangrage3.png"
                alt={t.hangarage.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
