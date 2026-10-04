"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationDictionary } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_language_preference";

function getInitialLanguage(): Language {
  if (typeof window !== "undefined") {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "es" || urlLang === "en") {
        return urlLang;
      }
    } catch {}

    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "es" || saved === "en") {
        return saved;
      }
    } catch {}

    try {
      const browserLang = (navigator.language || (navigator as { userLanguage?: string }).userLanguage || "").toLowerCase();
      if (browserLang.startsWith("en")) {
        return "en";
      }
    } catch {}
  }
  return "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  };

  const toggleLanguage = () => {
    const next = language === "es" ? "en" : "es";
    setLanguage(next);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
