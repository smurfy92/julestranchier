"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/content";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export function Projects() {
  return (
    <SectionWrapper id="projects" alternate>
      <SectionHeading
        title="Projets"
        subtitle="Une sélection de projets sur lesquels j'ai travaillé."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg"
          >
            {/* Placeholder image area */}
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-muted">
              <span className="text-4xl font-bold text-muted-foreground/20">
                {project.title.charAt(0)}
              </span>
            </div>

            <h3 className="font-heading text-xl font-semibold text-card-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Voir le projet <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  GitHub <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
