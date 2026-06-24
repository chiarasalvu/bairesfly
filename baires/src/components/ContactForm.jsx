"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function PlaneIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 13.5L21 4L16.5 20L11.5 14.5L7 18L8.8 12.2L3 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function UserIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 12C14.4 12 16.35 10.05 16.35 7.65C16.35 5.25 14.4 3.3 12 3.3C9.6 3.3 7.65 5.25 7.65 7.65C7.65 10.05 9.6 12 12 12Z"
        fill="currentColor"
      />
      <path
        d="M4.5 20.2C5.2 16.65 8.25 14.4 12 14.4C15.75 14.4 18.8 16.65 19.5 20.2H4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FlightField({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  icon,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-[10px] text-[13px] font-[400] leading-none tracking-[-0.02em] text-[#312726]/50"
      >
        {label}
      </label>

      <div className="flex items-center gap-[8px] border-b border-[#312726]/18 pb-[14px] transition-colors duration-300 focus-within:border-[#8B001F]">
        {icon && (
          <span className="flex shrink-0 items-center text-[#312726]/45">
            {icon}
          </span>
        )}

        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full bg-transparent text-[17px] font-[400] leading-none tracking-[-0.03em] text-[#312726] outline-none placeholder:text-[#312726]/32"
        />
      </div>
    </div>
  );
}

function PersonalField({ name, placeholder, type = "text", required = false }) {
  return (
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="h-[54px] w-full rounded-[12px] border border-[#312726]/15 bg-white px-[18px] text-[15px] font-[400] tracking-[-0.025em] text-[#312726] outline-none transition-colors duration-300 placeholder:text-[#312726]/32 focus:border-[#8B001F]"
    />
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  return (
    <section
      id="contacto"
      className="font-gt-america relative w-full overflow-hidden bg-[#F7F7F6] px-[24px] py-[100px] text-[#312726] sm:px-[48px] lg:px-[56px] lg:py-[145px]"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="grid grid-cols-1 gap-[72px] lg:grid-cols-[0.72fr_1fr] lg:gap-[90px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="font-gt-america max-w-[610px] text-[44px] font-[500] leading-[44px] tracking-[-3px] text-[#312726] sm:text-[52px] sm:leading-[52px] sm:tracking-[-4px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-5px]">
              Coordinemos tu próximo vuelo
            </h2>

            <p className="mt-[28px] max-w-[500px] text-[18px] font-[400] leading-[1.35] tracking-[-0.035em] text-[#312726]/60 sm:text-[20px]">
              Contanos origen, destino, fecha aproximada y cantidad de
              pasajeros. Te respondemos con disponibilidad en menos de 24 horas.
            </p>

            <div className="mt-[44px] flex flex-col gap-[14px] text-[18px] font-[400] tracking-[-0.035em] text-[#312726]">
              <a
                href="tel:+5491140484399"
                className="w-fit transition-opacity hover:opacity-55"
              >
                +54 9 11 4048-4399
              </a>

              <a
                href="mailto:consultas@bairesfly.com"
                className="w-fit transition-opacity hover:opacity-55"
              >
                consultas@bairesfly.com
              </a>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            onSubmit={handleSubmit}
            className="w-full"
          >
            <div className="rounded-[28px] border border-[#312726]/8 bg-white/45 p-[22px] sm:p-[34px] lg:p-[40px]">
              <div className="grid grid-cols-1 gap-x-[42px] gap-y-[34px] sm:grid-cols-2">
                <FlightField
                  id="origin"
                  name="origin"
                  label="Origen"
                  placeholder="Origen"
                  required
                  icon={<PlaneIcon className="-rotate-45" />}
                />

                <FlightField
                  id="destination"
                  name="destination"
                  label="Destino"
                  placeholder="Destino"
                  required
                  icon={<PlaneIcon className="rotate-[135deg]" />}
                />

                <FlightField
                  id="departure"
                  name="departure"
                  label="Fecha de viaje"
                  placeholder="Partida dd/mm/aaaa"
                  required
                />

                <FlightField
                  id="return"
                  name="return"
                  label="Regreso"
                  placeholder="Regreso"
                />

                <FlightField
                  id="passengers"
                  name="passengers"
                  label="Pasajeros"
                  placeholder="Cantidad"
                  type="number"
                  required
                  icon={<UserIcon />}
                />

                <FlightField
                  id="aircraft"
                  name="aircraft"
                  label="Aeronave"
                  placeholder="Aeronave"
                  icon={<PlaneIcon />}
                />
              </div>

              <div className="my-[42px] h-px w-full bg-[#8B001F]" />

              <p className="mb-[24px] text-center text-[15px] font-[400] tracking-[-0.02em] text-[#312726]/45">
                Datos personales
              </p>

              <div className="grid grid-cols-1 gap-[14px] md:grid-cols-3">
                <PersonalField
                  name="name"
                  placeholder="Nombre completo"
                  required
                />

                <PersonalField
                  name="phone"
                  type="tel"
                  placeholder="Teléfono"
                  required
                />

                <PersonalField
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-[24px] flex h-[54px] w-full items-center justify-center rounded-full bg-[#8B001F] px-[28px] text-[14px] font-[500] uppercase tracking-[0.04em] text-white transition-all duration-300 hover:bg-[#312726] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit sm:min-w-[210px]"
              >
                {status === "sending" ? "Enviando..." : "Cotizar"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-[20px] text-[15px] font-[400] tracking-[-0.02em] text-[#312726]/65"
                >
                  Gracias, recibimos tu consulta. Te contactamos a la brevedad.
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-[72px] w-full overflow-hidden rounded-[28px] lg:mt-[96px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5167531084594!2d-58.41155652422118!3d-34.565788955496224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb573297c3825%3A0x91fd614d89179aeb!2sBaires%20Fly!5e0!3m2!1ses!2sar!4v1782260882891!5m2!1ses!2sar"
            title="Ubicación de Baires Fly en el mapa"
            width="100%"
            height="420"
            className="w-full border-0 grayscale"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>
      </div>
    </section>
  );
}