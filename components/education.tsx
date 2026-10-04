"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";

export function Education() {
  const { t } = useLanguage();
  const { education } = t;

  return (
    <section id="formacion" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#E7E5E1]">
          {education.title}
        </h2>
        <p className="text-sm sm:text-base text-[#A3A19C]">
          {education.institution}
        </p>
      </div>

      <div className="divide-y divide-[#26292E] border-y border-[#26292E]">
        {education.degrees.map((deg, idx) => (
          <div
            key={idx}
            className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <h3 className="text-base font-medium text-[#E7E5E1]">
              {deg.title}
            </h3>

            <div className="text-sm text-[#A3A19C]">
              {deg.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
