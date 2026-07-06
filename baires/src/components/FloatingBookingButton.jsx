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

function Field({ label, placeholder, type = "text", name, error = false, errorMsg = "Requerido", onChange }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className={`flex flex-col border-b pb-[8px] transition-colors duration-200 sm:pb-[12px] ${error ? "border-[#312726]/55" : "border-[#312726]/15"}`}>
        <label className={`mb-[6px] text-[10px] font-[500] uppercase leading-none tracking-[0.02em] transition-colors duration-200 sm:mb-[8px] ${error ? "text-[#312726]" : "text-[#312726]/70"}`}>
          {label}
        </label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full bg-transparent text-[14px] font-[500] leading-none tracking-[-0.02em] text-[#312726] outline-none placeholder:text-[14px] placeholder:font-[500] placeholder:tracking-[-0.02em] placeholder:text-[#312726]/32 sm:text-[15px] sm:placeholder:text-[15px]"
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[9px] font-[500] uppercase leading-none tracking-[0.06em] text-[#8B001F] sm:text-[10px]"
          >
            {errorMsg}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FloatingBookingButton() {
  const { t, lang } = useLanguage();
  const b = t.booking;
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const requiredMsg = lang === "en" ? "Required" : "Requerido";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function clearError(name) {
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  }

  function handleClose() {
    setIsOpen(false);
    setTimeout(() => { setStatus("idle"); setErrors({}); }, 400);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    const newErrors = {
      name: !data.get("name")?.trim(),
      email: !data.get("email")?.trim(),
      phone: !data.get("phone")?.trim(),
      destination: !data.get("destination")?.trim(),
      legalCheck: !form.elements["legalCheck"].checked,
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xaqgkopo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setErrors({});
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
                onClick={handleClose}
                className="absolute right-[18px] top-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white text-[#312726] shadow-[0_12px_34px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 lg:hidden"
              >
                <span className="relative h-[14px] w-[14px]">
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 rounded-full bg-[#312726]" />
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 rounded-full bg-[#312726]" />
                </span>
              </button>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-full flex-col items-start gap-[28px] py-[32px] sm:flex-row sm:items-center sm:gap-[40px] sm:py-[24px] lg:gap-[52px]"
                >
                  <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-[#312726]">
                    <PlaneIcon className="-rotate-45 text-white" />
                  </div>
                  <p className="flex-1 text-[22px] font-[500] leading-[1.1] tracking-[-1.5px] text-[#312726] sm:text-[24px] sm:tracking-[-2px] lg:text-[28px] lg:tracking-[-2.5px]">
                    {b.success}
                  </p>
                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 rounded-full border border-[#312726]/20 px-[28px] py-[13px] text-[13px] font-[500] tracking-[-0.02em] text-[#312726] transition-colors duration-200 hover:border-[#312726]/50 hover:bg-[#312726]/5"
                  >
                    {lang === "en" ? "Close" : "Cerrar"}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="w-full">
                  <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[0.28fr_1fr_auto] lg:items-start lg:gap-[52px]">
                    <div>
                      <h2 className="text-[42px] font-[500] leading-[42px] tracking-[-3px] text-[#312726] sm:text-[56px] sm:leading-[56px] sm:tracking-[-5px] lg:text-[60px] lg:leading-[60px]">
                        {b.formTitle}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 sm:gap-[26px] lg:grid-cols-4">
                      <Field
                        label={b.fields.name.label}
                        name="name"
                        placeholder={b.fields.name.placeholder}
                        error={!!errors.name}
                        errorMsg={requiredMsg}
                        onChange={() => clearError("name")}
                      />
                      <Field
                        label={b.fields.email.label}
                        name="email"
                        type="email"
                        placeholder={b.fields.email.placeholder}
                        error={!!errors.email}
                        errorMsg={requiredMsg}
                        onChange={() => clearError("email")}
                      />
                      <Field
                        label={b.fields.phone.label}
                        name="phone"
                        type="tel"
                        placeholder={b.fields.phone.placeholder}
                        error={!!errors.phone}
                        errorMsg={requiredMsg}
                        onChange={() => clearError("phone")}
                      />
                      <Field
                        label={b.fields.destination.label}
                        name="destination"
                        placeholder={b.fields.destination.placeholder}
                        error={!!errors.destination}
                        errorMsg={requiredMsg}
                        onChange={() => clearError("destination")}
                      />
                      <Field label={b.fields.origin.label} name="origin" placeholder={b.fields.origin.placeholder} />
                      <Field label={b.fields.date.label} name="date" placeholder={b.fields.date.placeholder} />
                      <Field label={b.fields.passengers.label} name="passengers" type="number" placeholder={b.fields.passengers.placeholder} />
                      <Field label={b.fields.aircraft.label} name="aircraft" placeholder={b.fields.aircraft.placeholder} />

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-[4px] flex h-[44px] w-full items-center justify-center rounded-full bg-[#312726] px-[28px] text-[13px] font-[500] uppercase leading-none tracking-[0.02em] text-white transition-all duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 lg:hidden"
                      >
                        {status === "sending" ? b.sending : b.send}
                      </button>
                    </div>

                    <div className="hidden flex-row items-center justify-end gap-[12px] lg:flex lg:flex-col lg:items-center lg:gap-[18px]">
                      <button
                        type="button"
                        aria-label={t.header.closeMenu}
                        onClick={handleClose}
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
                        className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#312726] text-white transition-all duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-60"
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

                  <div className="mt-[18px] flex flex-col gap-[6px] sm:mt-[30px]">
                    <label className={`flex max-w-[440px] cursor-pointer items-start gap-[10px] text-[9px] font-[500] uppercase leading-[1.15] tracking-[-0.02em] transition-colors duration-200 sm:gap-[12px] sm:text-[10px] sm:leading-[1.2] ${errors.legalCheck ? "text-[#312726]/65" : "text-[#312726]/35"}`}>
                      <input
                        type="checkbox"
                        name="legalCheck"
                        onChange={() => clearError("legalCheck")}
                        className="mt-[1px] h-[14px] w-[14px] shrink-0 rounded-full accent-[#312726] sm:h-[15px] sm:w-[15px]"
                      />
                      {b.legal}
                    </label>
                    <AnimatePresence>
                      {errors.legalCheck && (
                        <motion.span
                          initial={{ opacity: 0, y: -3 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[9px] font-[500] uppercase leading-none tracking-[0.06em] text-[#8B001F] sm:text-[10px]"
                        >
                          {requiredMsg}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
