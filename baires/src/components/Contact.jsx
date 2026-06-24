"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function PhoneIcon({ className = "" }) {
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
        d="M7.25 4.5L9.05 8.55C9.24 8.98 9.13 9.49 8.78 9.8L7.62 10.83C8.36 12.38 9.62 13.64 11.17 14.38L12.2 13.22C12.51 12.87 13.02 12.76 13.45 12.95L17.5 14.75C18.02 14.98 18.29 15.56 18.13 16.11L17.53 18.2C17.37 18.77 16.84 19.15 16.25 19.12C9.9 18.78 5.22 14.1 4.88 7.75C4.85 7.16 5.23 6.63 5.8 6.47L7.89 5.87C8.44 5.71 9.02 5.98 9.25 6.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className = "" }) {
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
        d="M4.75 7.25C4.75 6.42 5.42 5.75 6.25 5.75H17.75C18.58 5.75 19.25 6.42 19.25 7.25V16.75C19.25 17.58 18.58 18.25 17.75 18.25H6.25C5.42 18.25 4.75 17.58 4.75 16.75V7.25Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.25 7.25L12 12.35L18.75 7.25"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const contactItems = [
  {
    label: "Teléfono",
    value: "+54 9 11 4048-4399",
    href: "tel:+5491140484399",
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "consultas@bairesfly.com",
    href: "mailto:consultas@bairesfly.com",
    icon: MailIcon,
  },
];

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5167531084594!2d-58.41155652422118!3d-34.565788955496224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb573297c3825%3A0x91fd614d89179aeb!2sBaires%20Fly!5e0!3m2!1ses!2sar!4v1782260882891!5m2!1ses!2sar";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="font-gt-america relative w-full overflow-hidden bg-[#F7F7F6] px-[18px] py-[86px] text-[#312726] sm:px-[48px] sm:py-[110px] lg:px-[56px] lg:py-[155px]"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="grid grid-cols-1 gap-[44px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-[110px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="max-w-[760px] text-[42px] font-[500] leading-[42px] tracking-[-3px] text-[#312726] sm:text-[52px] sm:leading-[52px] sm:tracking-[-4px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-5px]">
              Coordinemos tu próximo vuelo
            </h2>

            <p className="mt-[22px] max-w-[620px] text-[17px] font-[400] leading-[1.35] tracking-[-0.035em] text-[#312726]/60 sm:mt-[30px] sm:text-[20px]">
              Contanos origen, destino, fecha aproximada y cantidad de
              pasajeros. Te respondemos con disponibilidad en menos de 24 horas.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="grid grid-cols-1 gap-[12px] sm:gap-[14px]"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="group flex items-center justify-between rounded-[22px] border border-[#312726]/8 bg-white/60 px-[18px] py-[18px] transition-all duration-300 hover:bg-white sm:rounded-[24px] sm:px-[28px] sm:py-[26px]"
                >
                  <div className="flex min-w-0 items-center gap-[14px] sm:gap-[16px]">
                    <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#312726]/6 text-[#312726] transition-colors duration-300 group-hover:bg-[#312726] group-hover:text-white sm:h-[46px] sm:w-[46px]">
                      <Icon />
                    </span>

                    <div className="min-w-0">
                      <p className="text-[11px] font-[500] uppercase leading-none tracking-[0.06em] text-[#312726]/38 sm:text-[12px]">
                        {item.label}
                      </p>

                      <p className="mt-[8px] break-words text-[17px] font-[500] leading-[1.1] tracking-[-0.04em] text-[#312726] sm:text-[22px]">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <span className="hidden text-[20px] text-[#312726]/30 transition-transform duration-300 group-hover:translate-x-[4px] sm:block">
                    →
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-[52px] h-[310px] w-full overflow-hidden rounded-[24px] border border-[#312726]/8 bg-white/50 sm:mt-[76px] sm:h-[400px] sm:rounded-[30px] lg:mt-[105px] lg:h-[460px]"
        >
          <iframe
            src={mapSrc}
            title="Ubicación de Baires Fly en el mapa"
            className="h-full w-full border-0 grayscale"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}