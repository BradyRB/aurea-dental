import Image from "next/image";

import { HoverLift, ImageZoom } from "@/components/motion-primitives";
import type { Doctor } from "@/types/site";
import { cn } from "@/lib/utils";

type DoctorCardProps = {
  doctor: Doctor;
  index: number;
};

export function DoctorCard({ doctor, index }: DoctorCardProps) {
  return (
    <HoverLift className="h-full">
      <article className="h-full rounded-clinic border border-ink/5 bg-white p-3 shadow-card">
        <div className="relative aspect-[0.85] overflow-hidden rounded-3xl bg-aurea-pearl">
          <ImageZoom>
            <Image
              src={doctor.image}
              alt={`${doctor.name}, ${doctor.role}`}
              fill
              sizes="(min-width: 1024px) 28vw, 90vw"
              className={cn("object-cover", doctor.imagePosition)}
            />
          </ImageZoom>
          <span className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink shadow-soft">
            Specialist
          </span>
        </div>
        <div className="p-5">
          <p className="text-sm font-semibold text-aurea-mint">0{index + 1}</p>
          <h3 className="mt-2 text-2xl font-medium text-ink">{doctor.name}</h3>
          <p className="mt-1 text-sm font-semibold text-graphite">{doctor.role}</p>
          <p className="mt-4 text-sm leading-6 text-graphite">{doctor.bio}</p>
        </div>
      </article>
    </HoverLift>
  );
}
