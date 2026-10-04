import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ferran Solis Chorvat | Desarrollador Full Stack & Analista de Sistemas",
  description:
    "Portfolio profesional de Ferran Solis Chorvat. Desarrollador Full Stack y Analista de Sistemas con experiencia en producción en organismos públicos y empresas. Especializado en backend, arquitectura de software y consistencia de datos.",
  keywords: [
    "Ferran Solis Chorvat",
    "Desarrollador Full Stack",
    "Analista de Sistemas",
    "Backend Developer",
    "NestJS",
    "PostgreSQL",
    "React",
    "TypeScript",
    "Arquitectura de Software",
  ],
  authors: [{ name: "Ferran Solis Chorvat" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30 selection:text-emerald-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}

