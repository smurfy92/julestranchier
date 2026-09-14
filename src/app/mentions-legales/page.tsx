import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Mentions légales | Jules Tranchier",
  description: "Mentions légales du site julestranchier.com.",
  robots: { index: false, follow: true },
};

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <main>
      <SectionWrapper id="mentions-legales">
        <Link
          href="/"
          className="mb-8 inline-block text-xs text-muted-foreground hover:text-accent"
        >
          ← Retour au portfolio
        </Link>

        <SectionHeading
          title="Mentions légales"
          subtitle="Informations légales relatives au site julestranchier.com."
        />

        <div className="max-w-3xl space-y-12">
          <LegalSection title="Éditeur du site">
            <p>
              Jules Tranchier, entrepreneur individuel (micro-entreprise)
              <br />
              SIREN : 802 069 260 — SIRET du siège : 802 069 260 00031
              <br />
              Activité : programmation informatique (code NAF 62.01Z)
              <br />
              Siège : Fontenay-aux-Roses (92260), France
              <br />
              Contact :{" "}
              <a
                href="mailto:tranchierjules@gmail.com"
                className="text-foreground underline decoration-border underline-offset-4 hover:text-accent"
              >
                tranchierjules@gmail.com
              </a>
              <br />
              Directeur de la publication : Jules Tranchier
              <br />
              TVA non applicable, article 293 B du CGI
            </p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>
              Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
              États-Unis —{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:text-accent"
              >
                https://vercel.com
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              Les contenus, textes et visuels de ce site sont la propriété de
              Jules Tranchier, sauf mention contraire. Les logos des entreprises
              citées appartiennent à leurs propriétaires respectifs. Toute
              reproduction, totale ou partielle, nécessite une autorisation
              écrite préalable.
            </p>
          </LegalSection>

          <LegalSection title="Données personnelles et cookies">
            <p>
              Ce site n&apos;utilise aucun cookie ni traceur et ne collecte
              aucune donnée personnelle. Le choix du thème (clair ou sombre)
              est mémorisé localement dans votre navigateur et n&apos;est
              transmis à aucun serveur.
            </p>
            <p>
              Le site ne comporte aucun formulaire de contact : la prise de
              contact se fait par e-mail ou via un lien de prise de rendez-vous
              externe (Calendly).
            </p>
            <p>
              Vous pouvez exercer vos droits d&apos;accès et de rectification
              par e-mail à l&apos;adresse indiquée ci-dessus.
            </p>
          </LegalSection>
        </div>
      </SectionWrapper>
    </main>
  );
}
