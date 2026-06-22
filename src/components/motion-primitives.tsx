"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function FadeIn({ children, className, delay = 0, amount = 0.18 }: MotionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0, amount = 0.2 }: MotionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, amount = 0.16 }: MotionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "show"}
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.09,
            delayChildren: 0.08
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: MotionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01 }}
      whileTap={reducedMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ImageZoom({ children, className }: MotionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("absolute inset-0", className)}
      style={{ transformOrigin: "center" }}
      whileHover={reducedMotion ? undefined : { scale: 1.025 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type AnimatedStatValueProps = {
  value: string;
  className?: string;
};

export function AnimatedStatValue({ value, className }: AnimatedStatValueProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.55 });
  const reducedMotion = useReducedMotion();
  const { number, suffix } = useMemo(() => parseStat(value), [value]);
  const [displayValue, setDisplayValue] = useState(reducedMotion ? number : 0);

  useEffect(() => {
    if (!isInView) return;

    if (reducedMotion) {
      setDisplayValue(number);
      return;
    }

    const controls = animate(0, number, {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    });

    return () => controls.stop();
  }, [isInView, number, reducedMotion]);

  return (
    <p ref={ref} className={className}>
      {displayValue.toLocaleString()}
      {suffix}
    </p>
  );
}

function parseStat(value: string) {
  const match = value.match(/^([\d,]+)(.*)$/);

  if (!match) {
    return { number: 0, suffix: value };
  }

  return {
    number: Number(match[1].replaceAll(",", "")),
    suffix: match[2]
  };
}
