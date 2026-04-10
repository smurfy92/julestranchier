import { contactLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Jules Tranchier. Tous droits r\u00E9serv\u00E9s.
        </p>
        <div className="flex items-center gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
