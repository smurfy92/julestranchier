"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/content";
import {
  ComputerDesktopIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const iconMap: Record<string, React.ReactNode> = {
  window: <ComputerDesktopIcon className="h-6 w-6" />,
  server: <ServerIcon className="h-6 w-6" />,
  phone: <DevicePhoneMobileIcon className="h-6 w-6" />,
  tools: <WrenchScrewdriverIcon className="h-6 w-6" />,
};

export function Skills() {
  return (
    <SectionWrapper id="skills" alternate>
      <SectionHeading
        title="Compétences"
        subtitle="Les technologies et outils que j'utilise au quotidien."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-accent-light p-2 text-accent">
                {iconMap[category.icon]}
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {category.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
