"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const { t } = useLanguage();
  const { education } = t;

  return (
    <section id="formacion" className="py-20 border-b border-slate-800/60 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-xs text-slate-400">
            <GraduationCap className="size-3 text-emerald-400" />
            <span>{education.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            {education.title}
          </h2>
          <p className="text-base text-slate-300">
            {education.institution} · Argentina
          </p>
        </div>

        <div className="divide-y divide-slate-800/70 border-y border-slate-800/70">
          {education.degrees.map((deg, idx) => (
            <div
              key={idx}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 text-emerald-400">
                  <Award className="size-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {deg.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Universidad Nacional del Chaco Austral
                  </p>
                </div>
              </div>

              <div className="sm:self-center pl-11 sm:pl-0 font-mono text-xs">
                <span
                  className={
                    deg.badgeVariant === "default"
                      ? "text-emerald-400 font-semibold"
                      : "text-indigo-400 font-semibold"
                  }
                >
                  ● {deg.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
