import Image from "next/image";

import { HoverLift, ImageZoom } from "@/components/motion-primitives";
import type { Service } from "@/types/site";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <HoverLift className="h-full">
      <article className="group h-full rounded-clinic border border-white bg-white p-3 shadow-card">
        <div className="relative aspect-[1.55] overflow-hidden rounded-3xl bg-mist">
          <ImageZoom>
            <Image
              src={service.image}
              alt={`${service.title} treatment detail`}
              fill
              sizes="(min-width: 1024px) 31vw, 90vw"
              className="object-cover"
            />
          </ImageZoom>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-aurea-mint text-ink shadow-soft">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-graphite backdrop-blur">
            0{index + 1}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-medium text-ink">{service.title}</h3>
          <p className="mt-3 text-sm leading-6 text-graphite">{service.description}</p>
        </div>
      </article>
    </HoverLift>
  );
}
