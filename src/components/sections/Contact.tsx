"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactLinks } from "@/data/content";
import { Button } from "@/components/ui/Button";
import {
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export function Contact() {
  return (
    <SectionWrapper id="contact" alternate>
      <SectionHeading
        title="Contact"
        subtitle="Un projet en tete ? Discutons-en."
      />

      <div className="mx-auto max-w-xl text-center">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Je suis disponible pour des missions freelance, du conseil technique
          ou des collaborations sur des projets innovants. N&apos;hesitez pas a me
          contacter.
        </p>

        <div className="mt-8">
          <Button
            href="mailto:contact@julestranchier.com"
            size="lg"
          >
            <EnvelopeIcon className="mr-2 h-5 w-5" />
            Envoyer un email
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
