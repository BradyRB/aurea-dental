import { Quote } from "lucide-react";

import { HoverLift } from "@/components/motion-primitives";
import type { Testimonial } from "@/types/site";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <HoverLift>
      <figure className="rounded-clinic border border-ink/5 bg-white p-7 shadow-card">
        <Quote className="h-8 w-8 text-aurea-mint" aria-hidden="true" />
        <blockquote className="mt-6 text-lg leading-8 text-ink">"{testimonial.quote}"</blockquote>
        <figcaption className="mt-7 border-t border-ink/10 pt-5">
          <p className="font-semibold text-ink">{testimonial.name}</p>
          <p className="mt-1 text-sm text-graphite">{testimonial.detail}</p>
        </figcaption>
      </figure>
    </HoverLift>
  );
}
