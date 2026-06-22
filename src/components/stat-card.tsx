import type { Stat } from "@/types/site";
import { AnimatedStatValue, HoverLift } from "@/components/motion-primitives";

type StatCardProps = {
  stat: Stat;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <HoverLift className="h-full">
      <div className="h-full rounded-clinic border border-white/70 bg-white/80 p-6 shadow-card backdrop-blur">
        <AnimatedStatValue value={stat.value} className="text-4xl font-medium text-ink md:text-5xl" />
        <p className="mt-3 text-sm leading-5 text-graphite">{stat.label}</p>
      </div>
    </HoverLift>
  );
}
