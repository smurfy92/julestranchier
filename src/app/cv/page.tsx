import type { Metadata } from "next";
import { CVHeader } from "@/components/cv/CVHeader";
import { CVExperience } from "@/components/cv/CVExperience";
import { CVSidebar } from "@/components/cv/CVSidebar";

export const metadata: Metadata = {
  title: "CV — Jules Tranchier",
  description:
    "CV imprimable de Jules Tranchier, AI-augmented Full-Stack Engineer freelance basé à Paris.",
  robots: { index: false, follow: true },
};

export default function CVPage() {
  return (
    <main className="cv-page mx-auto max-w-5xl px-6 py-10 md:py-14 print:py-0">
      <CVHeader />

      <div className="cv-grid mt-6 grid gap-8 md:grid-cols-[1.7fr_1fr] print:mt-4 print:gap-5">
        <CVExperience />
        <CVSidebar />
      </div>

      <footer className="cv-footer mt-8 border-t border-border pt-4 text-[11px] text-muted-foreground print:mt-4">
        Références disponibles sur demande · 5 recommandations LinkedIn
        accessibles sur julestranchier.com
      </footer>
    </main>
  );
}
