"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(t.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contacto" className="border-t border-[#26292E] bg-[#0E0F11] mt-16 md:mt-24">
      <div className="mx-auto max-w-[920px] px-6 sm:px-8 py-16 md:py-20 space-y-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#E7E5E1]">
              {t.contact.heading}
            </h2>
            <p className="text-sm text-[#A3A19C]">
              {t.contact.availability} · {t.contact.location}
            </p>
          </div>

          <div className="flex flex-wrap items-baseline gap-4 pt-1">
            <a
              href={`mailto:${t.contact.email}`}
              className="text-xl sm:text-2xl font-medium text-[#6FB58F] underline underline-offset-4 hover:text-[#82C8A3] transition-colors duration-150"
            >
              {t.contact.email}
            </a>

            <button
              type="button"
              onClick={copyToClipboard}
              className="text-sm text-[#A3A19C] hover:text-[#E7E5E1] underline underline-offset-4 cursor-pointer transition-colors duration-150 py-1"
            >
              {copied ? t.contact.emailCopied : t.contact.copyEmail}
            </button>
          </div>

          <div className="pt-2">
            <a
              href={t.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[15px] text-[#A3A19C] hover:text-[#E7E5E1] underline underline-offset-4 transition-colors duration-150"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#26292E] text-sm text-[#A3A19C]">
          © {new Date().getFullYear()} Ferran Solis Chorvat
        </div>
      </div>
    </footer>
  );
}
