import {
  BadgeCheck,
  CalendarCheck,
  CircleDotDashed,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  WandSparkles
} from "lucide-react";

import type { Doctor, Service, Stat, Testimonial } from "@/types/site";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Doctors", href: "#doctors" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

export const services: Service[] = [
  {
    title: "Smile Design",
    description: "Digital planning, veneer artistry, and facially guided aesthetics for a smile that feels natural.",
    image: "/images/originals/smiling-patient-chair.png",
    icon: WandSparkles
  },
  {
    title: "Dental Implants",
    description: "Precise implant care with guided diagnostics, restorative planning, and long-term support.",
    image: "/images/portfolio/dental-implants.png",
    icon: CircleDotDashed
  },
  {
    title: "Orthodontics",
    description: "Clear aligners and discreet orthodontic plans designed around your lifestyle.",
    image: "/images/portfolio/clear-aligners.png",
    icon: ScanLine
  },
  {
    title: "Whitening",
    description: "Clinician-supervised brightening with sensitivity-aware protocols and polished results.",
    image: "/images/portfolio/veneer-whitening.png",
    icon: Sparkles
  },
  {
    title: "Preventive Care",
    description: "Refined hygiene visits, diagnostics, and coaching that keep your smile healthy year-round.",
    image: "/images/portfolio/dental-instruments.png",
    icon: ShieldCheck
  },
  {
    title: "Emergency Dentistry",
    description: "Responsive urgent care for pain, fractures, swelling, and unexpected dental concerns.",
    image: "/images/originals/treatment-collage.png",
    icon: HeartPulse
  }
];

export const stats: Stat[] = [
  { value: "12+", label: "years of clinical excellence" },
  { value: "8,000+", label: "smiles transformed" },
  { value: "98%", label: "patient satisfaction" },
  { value: "24/7", label: "emergency support" }
];

export const doctors: Doctor[] = [
  {
    name: "Dr. Emilia Ross",
    role: "Cosmetic Dentist",
    bio: "Specializes in smile design, porcelain veneers, and minimally invasive aesthetic dentistry.",
    image: "/images/doctors/cosmetic-dentist.png",
    imagePosition: "object-center"
  },
  {
    name: "Dr. Marcus Vale",
    role: "Implantologist",
    bio: "Leads digital implant planning and restorative coordination for complex treatment cases.",
    image: "/images/doctors/implantologist.png",
    imagePosition: "object-center"
  },
  {
    name: "Dr. Nora Chen",
    role: "Orthodontic Specialist",
    bio: "Creates clear aligner and bite correction plans that blend precision with everyday comfort.",
    image: "/images/doctors/orthodontic-specialist.png",
    imagePosition: "object-center"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The experience felt calm from the first consultation. My smile design looked refined, natural, and exactly like me.",
    name: "Maya R.",
    detail: "Smile Design Patient"
  },
  {
    quote:
      "I was nervous about implants, but the team explained every step with clarity. The result feels secure and beautifully done.",
    name: "Daniel K.",
    detail: "Implant Patient"
  },
  {
    quote:
      "Their technology is impressive, but the warmth is what I remember most. It never felt rushed or impersonal.",
    name: "Amelia S.",
    detail: "Preventive Care Patient"
  }
];

export const processSteps = [
  {
    title: "Consultation",
    description: "We listen first, understand your goals, and map the clinical priorities behind your ideal outcome.",
    icon: CalendarCheck
  },
  {
    title: "Digital Evaluation",
    description: "High-resolution imaging and diagnostics help us design treatment with accuracy and transparency.",
    icon: ScanLine
  },
  {
    title: "Personalized Treatment",
    description: "Your plan is sequenced around comfort, timing, aesthetics, and long-term oral health.",
    icon: Stethoscope
  },
  {
    title: "Confident Smile",
    description: "We finish with refinement, maintenance guidance, and follow-up care that protects your result.",
    icon: BadgeCheck
  }
];

export const serviceOptions = [
  "Smile Design",
  "Dental Implants",
  "Orthodontics",
  "Whitening",
  "Preventive Care",
  "Emergency Dentistry"
];

export const trustHighlights = [
  "Digital smile previews",
  "Comfort-first appointments",
  "Board-certified specialists",
  "Same-day emergency guidance"
];

export const whyChooseUs = [
  {
    title: "Expert dentists",
    description: "A multidisciplinary team coordinates aesthetic, surgical, orthodontic, and preventive care.",
    icon: BadgeCheck
  },
  {
    title: "Advanced technology",
    description: "Digital imaging, guided planning, and modern materials support predictable outcomes.",
    icon: ScanLine
  },
  {
    title: "Personal treatment plans",
    description: "Every recommendation is tailored to your goals, timeline, comfort, and oral health baseline.",
    icon: Sparkles
  },
  {
    title: "Calm patient experience",
    description: "Private rooms, clear communication, and gentle protocols help appointments feel easier.",
    icon: Syringe
  }
];
