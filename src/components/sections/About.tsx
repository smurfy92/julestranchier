"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/content";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="À propos"
        subtitle="Développeur Full-Stack passionné avec un parcours international unique."
      />

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          {about.bio.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <p className="font-heading text-3xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
