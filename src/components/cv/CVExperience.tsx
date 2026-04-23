import { experiences } from "@/data/content";

export function CVExperience() {
  return (
    <section aria-labelledby="cv-experience">
      <h2
        id="cv-experience"
        className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent"
      >
        Expérience
      </h2>

      <ol className="space-y-4">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className="cv-experience-item">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {exp.role}{" "}
                <span className="font-normal text-muted-foreground">
                  · {exp.company}
                </span>
              </h3>
              <span className="shrink-0 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {exp.period}
              </span>
            </div>

            <p className="mt-1 text-xs leading-relaxed text-foreground/90">
              {exp.description}
            </p>

            <p className="mt-1 text-[11px] text-muted-foreground">
              {exp.tech.join(" · ")}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
