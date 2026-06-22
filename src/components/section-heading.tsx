import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)}>
      <span className="inline-flex rounded-full bg-aurea-mintSoft px-5 py-2 text-sm font-semibold text-[#12866f]">
        {eyebrow}
      </span>
      <h2 className="mt-6 text-balance text-4xl font-medium leading-tight text-ink md:text-6xl">{title}</h2>
      {description ? (
        <p className={cn("mt-5 max-w-2xl text-base leading-7 text-graphite md:text-lg", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
