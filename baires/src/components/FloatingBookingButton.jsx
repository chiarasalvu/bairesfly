"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";

const fadeOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalAnimation = {
  hidden: { opacity: 0, y: 80, scale: 0.96, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0, y: 60, scale: 0.98, filter: "blur(6px)",
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

function PlaneIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13.5L21 4L16.5 20L11.5 14.5L7 18L8.8 12.2L3 13.5Z" fill="currentColor" />
    </svg>
  );
}

function Field({ label, placeholder, type = "text", name, required = false }) {
  return (
    <div className="flex flex-col border-b border-[#312726]/15 pb-[8px] sm:pb-[12px]">
      <label className="mb-[6px] text-[10px] font-[500] uppercase leading-none tracking-[0.02em] text-[#312726]/70 sm:mb-[8px]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent text-[14px] font-[500] leading-none tracking-[-0.02em] text-[#312726] outline-none placeholder:text-[14px] placeholder:font-[500] placeholder:tracking-[-0.02em] placeholder:text-[#312726]/32 sm:text-[15px] sm:placeholder:text-[15px]"
      />
    </div>
  );
}

export default function FloatingBookingButton() {
  const { t } = useLanguage();
  const b = t.booking;
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.target;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xaqgkopo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="font-gt-america fixed bottom-[22px] left-1/2 z-[900] flex -translate-x-1/2 items-center gap-[8px] rounded-full bg-white/22 p-[7px] shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        aria-label={b.buttonLabel}
      >
        <span className="rounded-full bg-white px-[22px] py-[12px] text-[13px] font-[500] leading-none tracking-[-0.04em] text-[#312726] sm:px-[28px] sm:py-[14px] sm:text-[16px]">
          {b.buttonLabel}
        </span>
        <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-[#312726] sm:h-[48px] sm:w-[48px]">
          <PlaneIcon className="-rotate-45 scale-[0.9]" />
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={fadeOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/55 px-[12px] py-[12px] backdrop-blur-[10px] sm:items-end sm:px-[24px] sm:pb-[24px] sm:pt-[24px]"
          >
            <motion.div
              variants={modalAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="font-gt-america relative flex max-h-[calc(100dvh-24px)] w-full max-w-[1500px] overflow-y-auto rounded-[28px] bg-[#F7F7F6] px-[24px] pb-[24px] pt-[56px] text-[#312726] shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:rounded-[42px] sm:px-[40px] sm:py-[44px] lg:overflow-hidden lg:px-[56px] lg:py-[52px]"
            >
              <button
                type="button"
                aria-label={t.header.closeMenu}
                onClick={() => setIsOpen(false)}
                className="absolute right-[18px] top-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#312726] shadow-[0_12px_34px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 lg:hidden"
              >
                <span className="relative h-[14px] w-[14px]">
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 rounded-full bg-[#312726]" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-[#312726]" />
                </span>
              </button>

              <form onSubmit={handleSubmit} className="w-full">
                <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[0.28fr_1fr_auto] lg:items-start lg:gap-[52px]">
                  <div>
                    <h2 className="text-[42px] font-[500] leading-[42px] tracking-[-3px] text-[#312726] sm:text-[56px] sm:leading-[56px] sm:tracking-[-5px] lg:text-[60px] lg:leading-[60px]">
                      {b.formTitle}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 sm:gap-[26px] lg:grid-cols-4">
                    <Field label={b.fields.name.label} name="name" placeholder={b.fields.name.placeholder} required />
                    <Field label={b.fields.email.label} name="email" type="email" placeholder={b.fields.email.placeholder} required />
                    <Field label={b.fields.phone.label} name="phone" type="tel" placeholder={b.fields.phone.placeholder} required />
                    <Field label={b.fields.destination.label} name="destination" placeholder={b.fields.destination.placeholder} required />
                    <Field label={b.fields.origin.label} name="origin" placeholder={b.fields.origin.placeholder} />
                    <Field label={b.fields.date.label} name="date" placeholder={b.fields.date.placeholder} />
                    <Field label={b.fields.passengers.label} name="passengers" type="number" placeholder={b.fields.passengers.placeholder} />
                    <Field label={b.fields.aircraft.label} name="aircraft" placeholder={b.fields.aircraft.placeholder} />

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="mt-[4px] flex h-[44px] w-full items-center justify-center rounded-full bg-[#312726] px-[28px] text-[13px] font-[500] uppercase leading-none tracking-[0.02em] text-white transition-all duration-300 hover:bg-[#8B001F] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 lg:hidden"
                    >
                      {status === "sending" ? b.sending : b.send}
                    </button>
                  </div>

                  <div className="hidden flex-row items-center justify-end gap-[12px] lg:flex lg:flex-col lg:items-center lg:gap-[18px]">
                    <button
                      type="button"
                      aria-label={t.header.closeMenu}
                      onClick={() => setIsOpen(false)}
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white text-[#312726] shadow-[0_12px_34px_rgba(0,0,0,0.12)] transition-transform hover:scale-105"
                    >
                      <span className="relative h-[16px] w-[16px]">
                        <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 rounded-full bg-[#312726]" />
                        <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-[#312726]" />
                      </span>
                    </button>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#312726] text-white transition-all duration-300 hover:bg-[#8B001F] disabled:cursor-not-allowed disabled:opacity-60"
                      aria-label={b.send}
                    >
                      {status === "sending" ? (
                        <span className="text-[10px] uppercase tracking-[0.04em]">...</span>
                      ) : (
                        <PlaneIcon className="-rotate-45" />
                      )}
                    </button>
                  </div>
                </div>

                <label className="mt-[18px] flex max-w-[440px] cursor-pointer items-start gap-[10px] text-[9px] font-[500] uppercase leading-[1.15] tracking-[-0.02em] text-[#312726]/35 sm:mt-[30px] sm:gap-[12px] sm:text-[10px] sm:leading-[1.2]">
                  <input
                    type="checkbox"
                    required
                    className="mt-[1px] h-[14px] w-[14px] shrink-0 rounded-full accent-[#312726] sm:h-[15px] sm:w-[15px]"
                  />
                  {b.legal}
                </label>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-[14px] text-[13px] font-[500] tracking-[-0.02em] text-[#312726]/60 sm:mt-[22px] sm:text-[14px]"
                  >
                    {b.success}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
