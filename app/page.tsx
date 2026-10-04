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
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 w-full max-w-[920px] mx-auto px-6 sm:px-8 py-16 md:py-24 space-y-16 md:space-y-24 text-left">
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
