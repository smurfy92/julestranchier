import Link from "next/link";
import { cv, hero } from "@/data/content";
import { PrintButton } from "./PrintButton";

export function CVHeader() {
  return (
    <header className="cv-header flex flex-col gap-6 border-b border-border pb-6 md:flex-row md:items-start md:justify-between">
      <div className="min-w-0">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {hero.name}
        </h1>
        <p className="mt-1 text-base font-medium text-accent md:text-lg">
          {hero.title} · Freelance · {cv.location}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {cv.pitch}
        </p>

        <ul className="cv-contact mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <li>
            <a href="mailto:tranchierjules@gmail.com" className="hover:text-accent">
              tranchierjules@gmail.com
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              href="https://www.linkedin.com/in/julestranchier/"
              className="hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/julestranchier
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              href="https://github.com/smurfy92"
              className="hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              github.com/smurfy92
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              href="https://julestranchier.com"
              className="hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              {cv.website}
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              href="https://calendly.com/tranchierjules/30min"
              className="hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              calendly.com/tranchierjules
            </a>
          </li>
        </ul>
      </div>

      <div className="flex shrink-0 flex-col items-start gap-2 md:items-end">
        <PrintButton />
        <Link
          href="/"
          className="print:hidden text-xs text-muted-foreground hover:text-accent"
        >
          ← Retour au portfolio
        </Link>
      </div>
    </header>
  );
}
