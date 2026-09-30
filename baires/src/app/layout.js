import { Geist, Geist_Mono } from "next/font/google";
import Preloader from "../components/Preloader";
import WhatsAppButton from "../components/WhatsAppButton";
import FloatingBookingButton from "../components/FloatingBookingButton";
import { LanguageProvider } from "../lib/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.bairesfly.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Baires Fly | Vuelos Privados y Sanitarios en Argentina",
    template: "%s | Baires Fly",
  },
  description:
    "Vuelos privados, jets privados y vuelos sanitarios en Argentina desde 1996. Flota propia Learjet y Gulfstream, tripulación certificada FAA, disponibilidad 24/7.",
  keywords: [
    "vuelos privados Argentina",
    "jets privados Buenos Aires",
    "jet privado Argentina",
    "alquiler de jet privado",
    "charter privado Argentina",
    "vuelos ejecutivos Argentina",
    "aviación ejecutiva",
    "taxi aéreo Argentina",
    "vuelos sanitarios Argentina",
    "avión sanitario",
    "ambulancia aérea Argentina",
    "traslado órganos INCUCAI",
    "Learjet Argentina",
    "Gulfstream Argentina",
    "Baires Fly",
  ],
  authors: [{ name: "Baires Fly S.A." }],
  creator: "Baires Fly S.A.",
  publisher: "Baires Fly S.A.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: "Baires Fly",
    title: "Baires Fly | Vuelos Privados y Sanitarios en Argentina",
    description:
      "Vuelos privados, jets privados y vuelos sanitarios en Argentina desde 1996. Flota propia Learjet y Gulfstream, tripulación certificada FAA, disponibilidad 24/7.",
    images: [
      {
        url: "/img/avion-hero.png",
        width: 1200,
        height: 630,
        alt: "Baires Fly — Vuelos Privados y Sanitarios en Argentina",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baires Fly | Vuelos Privados y Sanitarios en Argentina",
    description:
      "Vuelos privados, jets privados y vuelos sanitarios en Argentina desde 1996. Flota propia Learjet y Gulfstream, disponibilidad 24/7.",
    images: ["/img/avion-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Airline"],
      "@id": `${BASE_URL}/#organization`,
      name: "Baires Fly S.A.",
      url: BASE_URL,
      slogan: "Tu cielo, tus reglas.",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/img/logo.png`,
        contentUrl: `${BASE_URL}/img/logo.png`,
      },
      foundingDate: "1996",
      description:
        "Empresa líder en aviación privada en Argentina desde 1996. Operamos vuelos privados, jets privados, vuelos ejecutivos, vuelos sanitarios e INCUCAI con flota propia de jets Learjet y Gulfstream.",
      email: "consultas@bairesfly.com",
      telephone: ["+54-11-4776-2800", "+54-11-3210-4850"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      areaServed: [
        { "@type": "Country", name: "Argentina" },
        { "@type": "Continent", name: "South America" },
      ],
      knowsAbout: [
        "Vuelos privados",
        "Jets privados",
        "Alquiler de jet privado",
        "Charter privado",
        "Vuelos ejecutivos",
        "Aviación ejecutiva",
        "Taxi aéreo",
        "Vuelos sanitarios",
        "Ambulancia aérea",
        "Traslado de órganos INCUCAI",
      ],
      sameAs: [
        "https://www.instagram.com/bairesfly",
        "https://www.facebook.com/bairesfly",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Aviación Privada",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              serviceType: "Vuelos privados y jets privados",
              name: "Vuelos Ejecutivos Privados",
              description:
                "Traslados privados en jets de última generación con total discreción y confort. Tripulación certificada FAA, disponibilidad 24/7, salidas desde aeropuertos privados.",
              areaServed: { "@type": "Country", name: "Argentina" },
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              serviceType: "Vuelos sanitarios y ambulancia aérea",
              name: "Vuelos Sanitarios",
              description:
                "Aeronaves equipadas para el traslado de pacientes críticos con atención médica especializada. Disponibilidad 24/7, coordinación con hospitales, camilla médica, respirador y desfibrilador.",
              areaServed: { "@type": "Country", name: "Argentina" },
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              serviceType: "Traslado de órganos INCUCAI",
              name: "Vuelos INCUCAI — Traslado de Órganos",
              description:
                "Vuelos de emergencia para el traslado de órganos y tejidos en coordinación directa con el INCUCAI. Respuesta inmediata 24/7, protocolo de emergencia activo.",
              areaServed: { "@type": "Country", name: "Argentina" },
              provider: { "@id": `${BASE_URL}/#organization` },
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Baires Fly",
      description: "Aviación Privada de Lujo en Argentina desde 1996",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: ["es", "en"],
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${BASE_URL}/#localbusiness`,
      name: "Baires Fly S.A.",
      url: BASE_URL,
      telephone: ["+54-11-4776-2800", "+54-11-3210-4850"],
      email: "consultas@bairesfly.com",
      image: `${BASE_URL}/img/avion-hero.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "$$$",
      sameAs: [
        "https://www.instagram.com/bairesfly",
        "https://www.facebook.com/bairesfly",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Baires Fly | Vuelos Privados y Sanitarios en Argentina",
      description:
        "Baires Fly S.A. — Vuelos privados, jets privados y vuelos sanitarios en Argentina desde 1996. Flota propia Learjet y Gulfstream, disponibilidad 24/7.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "es",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2"],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
      
        {/* Google Tag Manager - Baires Fly */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M7ZGDFP6');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        <link
          rel="preload"
          as="image"
          href="/img/avion-hero.webp"
          fetchPriority="high"
          type="image/webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">

           {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7ZGDFP6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}


        <LanguageProvider>
          <Preloader />
          {children}
          <WhatsAppButton />
          <FloatingBookingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
