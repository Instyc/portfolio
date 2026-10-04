"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/context";
import { Cpu, Server, Layout, Cloud, Wrench } from "lucide-react";
import {
  ReactIcon,
  TypeScriptIcon,
  NestJsIcon,
  PostgresIcon,
  NodeJsIcon,
  NextJsIcon,
  DockerIcon,
  AwsIcon,
  TailwindIcon,
} from "@/components/icons";

export function TechStack() {
  const { t, language } = useLanguage();
  const { categories } = t.techStack;

  const keyTechList = [
    { name: "NestJS", role: "Backend Framework", icon: NestJsIcon },
    { name: "PostgreSQL", role: "Relational Database", icon: PostgresIcon },
    { name: "Node.js", role: "Runtime Environment", icon: NodeJsIcon },
    { name: "TypeScript", role: "Typed JavaScript", icon: TypeScriptIcon },
    { name: "React", role: "UI Library", icon: ReactIcon },
    { name: "Next.js", role: "React Framework", icon: NextJsIcon },
    { name: "Docker", role: "Containerization", icon: DockerIcon },
    { name: "AWS", role: "Cloud Infrastructure", icon: AwsIcon },
    { name: "Tailwind CSS", role: "Styling", icon: TailwindIcon },
  ];

  const domainSections = [
    {
      title: categories.backend.title,
      icon: Server,
      accent: "text-emerald-400",
      skills: categories.backend.skills,
    },
    {
      title: categories.frontend.title,
      icon: Layout,
      accent: "text-sky-400",
      skills: categories.frontend.skills,
    },
    {
      title: categories.cloud.title,
      icon: Cloud,
      accent: "text-amber-400",
      skills: categories.cloud.skills,
    },
    {
      title: categories.tools.title,
      icon: Wrench,
      accent: "text-purple-400",
      skills: categories.tools.skills,
    },
  ];

  return (
    <section id="tecnologias" className="py-20 border-b border-slate-800/60 relative">
      <div className="pointer-events-none absolute top-1/2 right-0 -z-10 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-xs text-slate-400">
            <Cpu className="size-3 text-emerald-400" />
            <span>{t.techStack.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            {t.techStack.title}
          </h2>
          <p className="max-w-2xl text-base text-slate-300">
            {t.techStack.subtitle}
          </p>
        </div>

        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6">
            {language === "es" ? "Tecnologías Principales" : "Core Technologies"}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">
            {keyTechList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3.5 group cursor-default"
                >
                  <Icon size={24} className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <div>
                    <div className="text-sm font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {item.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="divide-y divide-slate-800/70 border-t border-slate-800/70">
          {domainSections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <div className="md:col-span-4 flex items-center gap-2.5">
                  <Icon className={`size-4 ${sec.accent}`} />
                  <span className="text-sm font-semibold text-white">
                    {sec.title}
                  </span>
                </div>
                <div className="md:col-span-8 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm font-mono text-slate-300 leading-relaxed">
                  {sec.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span className="whitespace-nowrap">{skill}</span>
                      {sIdx < sec.skills.length - 1 && (
                        <span className="text-slate-600 select-none">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
