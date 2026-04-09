"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/content";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experiences"
        subtitle="Mon parcours professionnel en France et a l'international."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-1 z-10 md:left-1/2 md:-translate-x-1/2">
                <div
                  className={`h-3 w-3 rounded-full border-2 ${
                    exp.current
                      ? "border-accent bg-accent"
                      : "border-border bg-background"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        Actuel
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {exp.role}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
