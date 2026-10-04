"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import {
  Mail,
  MapPin,
  Check,
  ArrowUp,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";

export function Footer() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("ferransolischorvat@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="relative pt-16 pb-12 border-t border-slate-800/80 bg-slate-950/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="pb-10">
          <div className="space-y-1 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              {t.nav.contact}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ferran Solis Chorvat
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
            <button
              type="button"
              onClick={copyToClipboard}
              className="flex items-center gap-2.5 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-pointer"
              title="Click para copiar email"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300 font-semibold">{t.contact.emailCopied}</span>
                </>
              ) : (
                <>
                  <Mail className="size-4 text-emerald-400 shrink-0" />
                  <span>ferransolischorvat@gmail.com</span>
                </>
              )}
            </button>

            <a
              href="https://linkedin.com/in/ferran-solis-chorvat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-sky-500/50 hover:text-sky-300 transition-all"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Instyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-slate-600 hover:text-white transition-all"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/40 text-slate-400">
              <MapPin className="size-4 text-indigo-400 shrink-0" />
              <span>Argentina</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 border-t border-slate-800/50">
          <span className="font-mono text-slate-400">
            © {new Date().getFullYear()} Ferran Solis Chorvat
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/ferran-solis-chorvat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://github.com/Instyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              title="Volver arriba"
              aria-label="Volver arriba"
              className="flex size-7 items-center justify-center rounded border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition-colors ml-2 cursor-pointer"
            >
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
