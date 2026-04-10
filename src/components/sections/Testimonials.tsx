"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        title="Témoignages"
        subtitle="Ce que disent mes collaborateurs."
      />

      <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="break-inside-avoid rounded-2xl border border-border bg-card p-8"
          >
            <svg
              className="mb-4 h-8 w-8 text-accent/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-base leading-relaxed text-muted-foreground italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-heading font-semibold text-card-foreground">
                {testimonial.author}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role} &middot; {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
