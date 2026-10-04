"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full border-b border-[#26292E] bg-[#0E0F11]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[920px] items-center justify-between px-6 sm:px-8">
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-normal text-[#A3A19C] transition-colors duration-150 hover:text-[#E7E5E1]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-lg border border-[#26292E] text-[#A3A19C] md:hidden hover:text-[#E7E5E1] hover:bg-[#15171A] transition-colors duration-150 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <div className="flex items-center gap-2 text-sm font-medium">
          <button
            type="button"
            id="lang-select-es"
            onClick={() => setLanguage("es")}
            className={`min-h-[44px] min-w-[36px] flex items-center justify-center cursor-pointer transition-colors duration-150 ${
              language === "es"
                ? "text-[#E7E5E1] underline underline-offset-4"
                : "text-[#A3A19C] hover:text-[#E7E5E1]"
            }`}
            aria-pressed={language === "es"}
            title="Español"
          >
            ES
          </button>
          <span className="text-[#26292E] select-none">|</span>
          <button
            type="button"
            id="lang-select-en"
            onClick={() => setLanguage("en")}
            className={`min-h-[44px] min-w-[36px] flex items-center justify-center cursor-pointer transition-colors duration-150 ${
              language === "en"
                ? "text-[#E7E5E1] underline underline-offset-4"
                : "text-[#A3A19C] hover:text-[#E7E5E1]"
            }`}
            aria-pressed={language === "en"}
            title="English"
          >
            EN
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-[#26292E] bg-[#0E0F11] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-normal text-[#A3A19C] hover:text-[#E7E5E1] py-2.5 transition-colors duration-150"
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
