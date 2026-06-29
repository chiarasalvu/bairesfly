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
      width="16"
      height="16"
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
      width="16"
      height="16"
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

function InstagramIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.25 4.75H15.75C17.68 4.75 19.25 6.32 19.25 8.25V15.75C19.25 17.68 17.68 19.25 15.75 19.25H8.25C6.32 19.25 4.75 17.68 4.75 15.75V8.25C4.75 6.32 6.32 4.75 8.25 4.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 15.25C13.79 15.25 15.25 13.79 15.25 12C15.25 10.21 13.79 8.75 12 8.75C10.21 8.75 8.75 10.21 8.75 12C8.75 13.79 10.21 15.25 12 15.25Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M16.55 7.55H16.56"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14.25 8.25H15.75V5.25H13.75C11.82 5.25 10.25 6.82 10.25 8.75V10.25H8.25V13.25H10.25V19.25H13.25V13.25H15.35L15.75 10.25H13.25V8.75C13.25 8.47 13.47 8.25 13.75 8.25H14.25Z"
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
    label: "Hangar",
    value: "4776-2800 / 4776-0844",
    href: "tel:47762800",
    icon: PhoneIcon,
  },
  {
    label: "Celular",
    value: "11 3210-4850",
    href: "tel:+541132104850",
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "consultas@bairesfly.com",
    href: "mailto:consultas@bairesfly.com",
    icon: MailIcon,
  },
  {
    label: "Instagram",
    value: "@bairesfly",
    href: "https://www.instagram.com/bairesfly",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    value: "@bairesfly",
    href: "https://www.facebook.com/bairesfly",
    icon: FacebookIcon,
  },
];

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5167531084594!2d-58.41155652422118!3d-34.565788955496224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb573297c3825%3A0x91fd614d89179aeb!2sBaires%20Fly!5e0!3m2!1ses!2sar!4v1782260882891!5m2!1ses!2sar";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="font-gt-america relative w-full overflow-hidden bg-[#F7F7F6] px-[18px] py-[76px] text-[#312726] sm:px-[48px] sm:py-[96px] lg:px-[56px] lg:py-[118px]"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full flex-col"
        >
          <h2 className="max-w-[860px] text-[42px] font-[500] leading-[42px] tracking-[-3px] text-[#312726] sm:text-[52px] sm:leading-[52px] sm:tracking-[-4px] lg:text-[60px] lg:leading-[58px] lg:tracking-[-5px]">
            Coordinemos tu próximo vuelo
          </h2>

          <p className="mt-[18px] max-w-[610px] text-[16px] font-[400] leading-[1.32] tracking-[-0.035em] text-[#312726]/55 sm:mt-[22px] sm:text-[18px] lg:text-[19px]">
            Contanos origen, destino, fecha aproximada y cantidad de pasajeros.
            Te respondemos con disponibilidad en menos de 24 horas.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="mt-[42px] grid grid-cols-1 border-t border-[#312726]/12 sm:mt-[52px] sm:grid-cols-2 lg:mt-[66px] lg:grid-cols-5"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isSocial =
              item.label === "Instagram" || item.label === "Facebook";

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={isSocial ? "_blank" : undefined}
                rel={isSocial ? "noopener noreferrer" : undefined}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                className="group flex min-h-[88px] flex-col justify-between border-b border-[#312726]/12 py-[16px] transition-opacity duration-300 hover:opacity-60 sm:min-h-[104px] sm:px-[16px] sm:py-[18px] lg:min-h-[112px] lg:border-r lg:px-[22px] lg:py-[22px] last:lg:border-r-0"
              >
                <div className="flex items-center justify-between gap-[12px]">
                  <p className="text-[9px] font-[500] uppercase leading-none tracking-[0.08em] text-[#312726]/42 sm:text-[10px]">
                    {item.label}
                  </p>

                  <Icon className="h-[13px] w-[13px] text-[#312726]/42 sm:h-[14px] sm:w-[14px]" />
                </div>

                <p className="mt-[18px] break-words text-[17px] font-[500] leading-[1.05] tracking-[-0.045em] text-[#312726] sm:text-[18px] lg:text-[17px] xl:text-[18px]">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-[46px] h-[300px] w-full overflow-hidden rounded-[22px] border border-[#312726]/8 bg-white/50 sm:mt-[64px] sm:h-[380px] sm:rounded-[28px] lg:mt-[84px] lg:h-[430px]"
        >
          <iframe
            src={mapSrc}
            title="Ubicación de Baires Fly en el mapa"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}