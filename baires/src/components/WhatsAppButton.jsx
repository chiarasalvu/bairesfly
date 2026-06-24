"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491140484399"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-[20px] right-[20px] z-[999] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0_16px_34px_rgba(0,0,0,0.32)] sm:bottom-[28px] sm:right-[28px] sm:h-[62px] sm:w-[62px]"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-[30px] w-[30px]"
        aria-hidden="true"
      >
        <path
          d="M26.73 5.2A14.85 14.85 0 0 0 16.12 0.8C7.86 0.8 1.14 7.5 1.14 15.74C1.14 18.38 1.84 20.96 3.17 23.23L1 31.2L9.16 29.06C11.35 30.25 13.81 30.88 16.12 30.88H16.13C24.39 30.88 31.11 24.18 31.11 15.94C31.11 11.94 29.55 8.17 26.73 5.2ZM16.13 28.35C14.04 28.35 11.99 27.79 10.2 26.73L9.77 26.47L4.93 27.74L6.22 23.03L5.94 22.58C4.8 20.77 4.2 18.67 4.2 15.74C4.2 8.93 9.78 3.35 16.14 3.35C19.33 3.35 22.34 4.6 24.6 6.87C26.85 9.13 28.08 12.13 28.08 15.33C28.08 22.14 22.5 28.35 16.13 28.35Z"
          fill="white"
        />
        <path
          d="M22.73 19.27C22.37 19.09 20.62 18.23 20.29 18.11C19.96 17.99 19.72 17.93 19.48 18.29C19.24 18.65 18.55 19.45 18.34 19.69C18.13 19.93 17.92 19.96 17.56 19.78C17.2 19.6 16.04 19.22 14.66 17.99C13.59 17.03 12.87 15.84 12.66 15.48C12.45 15.12 12.64 14.93 12.82 14.75C12.98 14.59 13.18 14.33 13.36 14.12C13.54 13.91 13.6 13.76 13.72 13.52C13.84 13.28 13.78 13.07 13.69 12.89C13.6 12.71 12.88 10.96 12.58 10.24C12.29 9.54 11.99 9.64 11.77 9.63C11.56 9.62 11.32 9.62 11.08 9.62C10.84 9.62 10.45 9.71 10.12 10.07C9.79 10.43 8.86 11.29 8.86 13.04C8.86 14.79 10.15 16.48 10.33 16.72C10.51 16.96 12.87 20.57 16.48 22.13C17.34 22.5 18.01 22.72 18.54 22.89C19.4 23.16 20.18 23.12 20.8 23.03C21.49 22.93 22.91 22.17 23.21 21.34C23.51 20.51 23.51 19.8 23.42 19.65C23.33 19.5 23.09 19.41 22.73 19.27Z"
          fill="white"
        />
      </svg>
    </motion.a>
  );
}