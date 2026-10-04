import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  fallback: ["Consolas", "Monaco", "Lucida Console", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferrandev.vercel.app"),
  title: {
    default: "Ferran Solis Chorvat | Desarrollador Full Stack y Analista de Sistemas",
    template: "%s | Ferran Solis Chorvat",
  },
  description:
    "Desarrollador Full Stack y Analista de Sistemas freelance con perfil backend. Diseño, desarrollo y mantengo sistemas web en producción para organismos públicos y empresas con foco en consistencia de datos.",
  keywords: [
    "Ferran Solis Chorvat",
    "Desarrollador Full Stack",
    "Analista de Sistemas",
    "Backend Developer",
    "NestJS",
    "PostgreSQL",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Ferran Solis Chorvat", url: "https://ferrandev.vercel.app" }],
  creator: "Ferran Solis Chorvat",
  alternates: {
    canonical: "/",
    languages: {
      "es": "/",
      "en": "/?lang=en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US"],
    url: "https://ferrandev.vercel.app",
    title: "Ferran Solis Chorvat | Desarrollador Full Stack y Analista de Sistemas",
    description:
      "Desarrollador Full Stack y Analista de Sistemas freelance con perfil backend. Sistemas en producción para organismos públicos y empresas.",
    siteName: "Ferran Solis Chorvat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferran Solis Chorvat | Desarrollador Full Stack y Analista de Sistemas",
    description:
      "Desarrollador Full Stack y Analista de Sistemas freelance con perfil backend.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} dark scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-[#6FB58F]/20 selection:text-[#E7E5E1] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
