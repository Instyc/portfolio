"use client";

import { LanguageProvider } from "@/lib/i18n/context";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-emerald-500/30 selection:text-emerald-200">
        <Header />
        <main className="flex-1">
          <Hero />
          <TechStack />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
