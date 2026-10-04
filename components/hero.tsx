"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Download, FolderGit2, Mail } from "lucide-react";
import {
  LinkedinIcon,
  GithubIcon,
  ReactIcon,
  TypeScriptIcon,
  NestJsIcon,
  PostgresIcon,
} from "@/components/icons";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-800/60"
    >
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 -translate-x-1/2 w-[650px] h-[380px] sm:w-[850px] sm:h-[450px] bg-gradient-to-tr from-emerald-600/20 via-indigo-600/20 to-sky-500/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/4 -right-24 -z-10 w-96 h-96 bg-purple-600/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-0 -left-20 -z-10 w-80 h-80 bg-teal-600/15 blur-3xl rounded-full" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-300 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="tracking-wide">{t.hero.statusBadge}</span>
          </div>

          <div className="space-y-3.5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              {t.hero.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-0.5 text-sm font-medium text-slate-200">
            <div className="flex items-center gap-2">
              <ReactIcon size={18} />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2">
              <TypeScriptIcon size={18} />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <NestJsIcon size={18} />
              <span>NestJS</span>
            </div>
            <div className="flex items-center gap-2">
              <PostgresIcon size={18} />
              <span>PostgreSQL</span>
            </div>
          </div>

          <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-slate-300">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#proyectos"
              id="cta-proyectos"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/25 transition-all hover:bg-emerald-400 active:scale-[0.98]"
            >
              <FolderGit2 className="size-4" />
              <span>{t.hero.primaryCta}</span>
            </a>

            <a
              href={t.hero.cvHref}
              download={t.hero.cvFilename}
              id="cta-descargar-cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-xs transition-all hover:border-slate-500 hover:bg-slate-800 active:scale-[0.98]"
            >
              <Download className="size-4 text-emerald-400" />
              <span>{t.hero.downloadCv}</span>
              <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                {language.toUpperCase()}
              </span>
            </a>

            <div className="flex items-center gap-2 pl-0 sm:pl-3">
              <a
                href="mailto:ferransolischorvat@gmail.com"
                aria-label="Email Ferran Solis Chorvat"
                className="flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300"
              >
                <Mail className="size-4" />
              </a>
              <a
                href="https://linkedin.com/in/ferran-solis-chorvat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Ferran Solis Chorvat"
                className="flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-colors hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-300"
              >
                <LinkedinIcon className="size-4 text-[#0A66C2]" />
              </a>
              <a
                href="https://github.com/Instyc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
              >
                <GithubIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
