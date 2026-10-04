"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="inicio" className="pt-4 pb-2">
      <div className="flex flex-col items-start gap-6 max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#E7E5E1]">
            {t.hero.name}
          </h1>
          <p className="text-xl sm:text-2xl font-normal text-[#A3A19C]">
            {t.hero.title}
          </p>
        </div>

        <p className="text-[17px] leading-[1.65] text-[#E7E5E1]">
          {t.hero.description}
        </p>

        <p className="text-sm text-[#A3A19C] leading-relaxed">
          {t.hero.statsLine}
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-3">
          <a
            href="#proyectos"
            id="cta-proyectos"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#6FB58F] px-5 py-2.5 text-[15px] font-medium text-[#0E0F11] hover:bg-[#82C8A3] transition-colors duration-150 cursor-pointer"
          >
            {t.hero.primaryCta}
          </a>

          <a
            href={t.hero.cvHref}
            download={t.hero.cvFilename}
            id="cta-descargar-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-[#E7E5E1] underline underline-offset-4 hover:text-[#6FB58F] transition-colors duration-150 cursor-pointer"
          >
            {t.hero.downloadCv} ({language.toUpperCase()})
          </a>
        </div>
      </div>
    </section>
  );
}
