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
    default: "Baires Fly | Aviación Privada de Lujo en Argentina",
    template: "%s | Baires Fly",
  },
  description:
    "Baires Fly S.A. — Empresa líder en aviación privada en Argentina desde 1996. Vuelos ejecutivos, sanitarios e INCUCAI en jets Learjet y Gulfstream. Más de 1200 vuelos realizados.",
  keywords: [
    "aviación privada Argentina",
    "jets privados Buenos Aires",
    "charter aéreo Argentina",
    "vuelos ejecutivos privados",
    "alquiler jet privado",
    "vuelos sanitarios Argentina",
    "traslado órganos INCUCAI",
    "Learjet Argentina",
    "Gulfstream Argentina",
    "Baires Fly",
    "aviación ejecutiva Argentina",
    "jet privado Argentina",
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
    title: "Baires Fly | Aviación Privada de Lujo en Argentina",
    description:
      "Empresa líder en aviación privada en Argentina desde 1996. Vuelos ejecutivos, sanitarios e INCUCAI en jets Learjet y Gulfstream. Más de 1200 vuelos realizados.",
    images: [
      {
        url: "/img/avion-hero.png",
        width: 1200,
        height: 630,
        alt: "Baires Fly — Aviación Privada Argentina",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baires Fly | Aviación Privada de Lujo en Argentina",
    description:
      "Empresa líder en aviación privada en Argentina desde 1996. Vuelos ejecutivos, sanitarios e INCUCAI en jets Learjet y Gulfstream.",
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
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Baires Fly S.A.",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/img/logo.png`,
        contentUrl: `${BASE_URL}/img/logo.png`,
      },
      foundingDate: "1996",
      description:
        "Empresa líder en aviación privada en Argentina desde 1996. Operamos vuelos ejecutivos, sanitarios e INCUCAI con flota propia de jets Learjet y Gulfstream.",
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
              name: "Vuelos Ejecutivos Privados",
              description:
                "Traslados privados en jets de última generación con total discreción y confort. Tripulación certificada FAA, disponibilidad 24/7, salidas desde aeropuertos privados.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vuelos Sanitarios",
              description:
                "Aeronaves equipadas para el traslado de pacientes críticos con atención médica especializada. Disponibilidad 24/7, coordinación con hospitales, camilla médica, respirador y desfibrilador.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vuelos INCUCAI — Traslado de Órganos",
              description:
                "Vuelos de emergencia para el traslado de órganos y tejidos en coordinación directa con el INCUCAI. Respuesta inmediata 24/7, protocolo de emergencia activo.",
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
      name: "Baires Fly | Aviación Privada de Lujo en Argentina",
      description:
        "Baires Fly S.A. — Empresa líder en aviación privada en Argentina desde 1996. Vuelos ejecutivos, sanitarios e INCUCAI en jets Learjet y Gulfstream.",
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
        <link
          rel="preload"
          as="image"
          href="/img/avion-hero.png"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
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
