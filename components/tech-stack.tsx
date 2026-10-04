"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";

export function TechStack() {
  const { t } = useLanguage();
  const { categories } = t.techStack;

  const domainSections = [
    {
      title: categories.backend.title,
      skills: categories.backend.skills,
    },
    {
      title: categories.frontend.title,
      skills: categories.frontend.skills,
    },
    {
      title: categories.cloud.title,
      skills: categories.cloud.skills,
    },
    {
      title: categories.tools.title,
      skills: categories.tools.skills,
    },
  ];

  return (
    <section id="tecnologias" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#E7E5E1]">
          {t.techStack.title}
        </h2>
        <p className="text-sm sm:text-base text-[#A3A19C]">
          {t.techStack.subtitle}
        </p>
      </div>

      <div className="divide-y divide-[#26292E] border-y border-[#26292E]">
        {domainSections.map((sec, idx) => (
          <div
            key={idx}
            className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
          >
            <div className="sm:w-52 shrink-0 text-[15px] font-medium text-[#E7E5E1]">
              {sec.title}
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-mono text-[#A3A19C] leading-relaxed">
              {sec.skills.map((skill, sIdx) => (
                <React.Fragment key={skill}>
                  <span className="whitespace-nowrap">{skill}</span>
                  {sIdx < sec.skills.length - 1 && (
                    <span className="text-[#26292E] select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
