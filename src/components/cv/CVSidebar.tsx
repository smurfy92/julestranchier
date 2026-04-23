import { cv, skillCategories } from "@/data/content";

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function CVSidebar() {
  return (
    <aside className="space-y-5">
      <Block title="Compétences">
        <dl className="space-y-2 text-xs">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <dt className="font-semibold text-foreground">{category.name}</dt>
              <dd className="text-muted-foreground">
                {category.skills.map((s) => s.name).join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Formation">
        <p className="text-sm font-semibold text-foreground">
          {cv.education.school}
        </p>
        <p className="text-xs font-medium text-accent">{cv.education.level}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {cv.education.detail}
        </p>
      </Block>

      <Block title="Langues">
        <ul className="space-y-1 text-xs">
          {cv.languages.map((lang) => (
            <li key={lang.name} className="flex justify-between">
              <span className="font-medium text-foreground">{lang.name}</span>
              <span className="text-muted-foreground">{lang.level}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Divers">
        <ul className="space-y-1 text-xs">
          {cv.extras.map((extra) => (
            <li key={extra.label}>
              <span className="font-medium text-foreground">{extra.label}</span>{" "}
              <span className="text-muted-foreground">— {extra.company}</span>
            </li>
          ))}
          {cv.highlights.map((h) => (
            <li key={h} className="text-muted-foreground">
              {h}
            </li>
          ))}
        </ul>
      </Block>
    </aside>
  );
}
