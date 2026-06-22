import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type Doctor = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imagePosition: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type Stat = {
  value: string;
  label: string;
};
