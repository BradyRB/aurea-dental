import Link from "next/link";
import { Facebook, Instagram, Linkedin, Sparkles } from "lucide-react";

import { navLinks, services } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-4 py-14 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Link href="#" className="flex items-center gap-3" aria-label="Aurea Dental Studio home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aurea-mint text-ink">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-semibold">Aurea Dental Studio</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/70">
            Premium aesthetic, restorative, and preventive dentistry designed around calm care and lasting confidence.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social profile"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-aurea-mint hover:text-ink"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Navigation</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>
                <Link href="#services" className="text-sm text-white/75 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">Clinic</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-white/75">
            <p>42 Park Avenue, Suite 1800</p>
            <p>New York, NY 10016</p>
            <p>hello@aureadental.com</p>
            <p>(212) 555-0194</p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 Aurea Dental Studio. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="#" className="hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
