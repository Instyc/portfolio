"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Menu, X } from "lucide-react";
import { LinkedinIcon, GithubIcon, SpainFlag, UsFlag } from "@/components/icons";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#tecnologias", label: t.nav.tech },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#formacion", label: t.nav.education },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-slate-400 transition-colors hover:text-emerald-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-lg border border-slate-800 text-slate-300 md:hidden hover:bg-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Selector de idioma"
            className="flex items-center rounded-lg border border-slate-800 bg-slate-900/90 p-1 text-xs font-mono shadow-xs"
          >
            <button
              type="button"
              id="lang-select-es"
              onClick={() => setLanguage("es")}
              className={`flex items-center gap-2 rounded-md px-2.5 py-1 transition-all ${
                language === "es"
                  ? "bg-slate-800 text-emerald-300 font-bold border border-emerald-500/40 shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Cambiar a Español"
            >
              <SpainFlag className="w-4.5 h-3 rounded-[2px]" />
              <span>Español</span>
            </button>
            <button
              type="button"
              id="lang-select-en"
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-2 rounded-md px-2.5 py-1 transition-all ${
                language === "en"
                  ? "bg-slate-800 text-emerald-300 font-bold border border-emerald-500/40 shadow-xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Switch to English"
            >
              <UsFlag className="w-4.5 h-3 rounded-[2px]" />
              <span>English</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 border-l border-slate-800 pl-2.5">
            <a
              href="https://github.com/Instyc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-900 hover:text-white"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/ferran-solis-chorvat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn de Ferran Solis Chorvat"
              className="flex size-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-900 hover:text-sky-300"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950/95 px-4 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-300 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
