"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";
import {
  ExternalLink,
  Building2,
  CheckCircle2,
  Activity,
} from "lucide-react";

export function Projects() {
  const { t, language } = useLanguage();
  const { featured, items } = t.projects;

  return (
    <section id="proyectos" className="py-20 border-b border-slate-800/60 relative">
      <div className="pointer-events-none absolute top-1/2 left-0 -z-10 w-96 h-96 bg-emerald-600/10 blur-3xl rounded-full" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-xs text-slate-400">
            <Activity className="size-3 text-emerald-400" />
            <span>{t.projects.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            {t.projects.title}
          </h2>
          <p className="max-w-2xl text-base text-slate-300">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/25 via-slate-900/40 to-slate-950/80 p-6 sm:p-9 shadow-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400" />

          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-1 text-xs font-mono font-medium text-emerald-300">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                {t.projects.liveDemoBadge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {featured.period}
              </span>
            </div>

            <span className="text-xs font-mono text-emerald-400/90 tracking-wide">
              {featured.tag}
            </span>
          </div>

          <div className="space-y-1.5 mb-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {featured.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
              <Building2 className="size-4 text-emerald-400" />
              <span>{featured.organization}</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-4xl">
            {featured.description}
          </p>

          <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 block">
              {language === "es"
                ? "Arquitectura & Reglas de Negocio Implementadas"
                : "Architecture & Implemented Domain Rules"}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {featured.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-3 border-t border-slate-800/80">
            <div className="text-xs font-mono text-slate-400">
              <span className="text-slate-300 font-semibold mr-1.5">Stack:</span>
              <span className="text-emerald-300/90">{featured.tech.join(" · ")}</span>
            </div>

            <a
              href={featured.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-ver-demo-operativa"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-2.5 text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>{t.projects.viewDemo}</span>
              <ExternalLink className="size-4 text-slate-950" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-xl font-bold tracking-tight text-white">
              {language === "es"
                ? "Trayectoria y Sistemas en Producción"
                : "Production Systems & Experience Log"}
            </h3>
            <span className="text-xs font-mono text-slate-500">
              {language === "es" ? "Historial profesional" : "Career history"}
            </span>
          </div>

          <div className="divide-y divide-slate-800/70 border-b border-slate-800/70">
            {items.map((proj, idx) => (
              <div
                key={idx}
                className="py-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3 space-y-1">
                  <div className="text-sm font-mono font-bold text-emerald-400">
                    {proj.period}
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {proj.tag}
                  </div>
                  {proj.stats && (
                    <div className="text-xs font-mono text-sky-400 pt-1 font-medium">
                      {proj.stats}
                    </div>
                  )}
                </div>

                <div className="md:col-span-9 space-y-3">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {proj.title}
                    </h4>
                    <p className="text-sm font-medium text-slate-300">
                      {proj.organization}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-400 pt-1">
                    {proj.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-emerald-400 font-mono select-none font-bold">›</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 text-xs font-mono text-slate-400">
                    <span className="text-slate-300 font-semibold mr-1.5">Stack:</span>
                    <span>{proj.tech.join(" · ")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
