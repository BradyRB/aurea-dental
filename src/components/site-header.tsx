"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-xl">
        <Link href="#" className="flex min-w-0 items-center gap-3" aria-label="Aurea Dental Studio home">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-aurea-mint">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate text-sm font-semibold text-ink sm:text-base">Aurea Dental Studio</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-mist p-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-graphite transition-colors hover:bg-white hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="tel:+12125550194" className="text-sm font-semibold text-graphite hover:text-ink">
            (212) 555-0194
          </Link>
          <Link
            href="#contact"
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-black"
            )}
          >
            Book a Visit
          </Link>
        </div>

        <Button
          className="lg:hidden"
          size="icon"
          variant="secondary"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/80 bg-white p-4 shadow-soft lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-ink hover:bg-mist"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            Book a Visit
          </Link>
        </div>
      ) : null}
    </header>
  );
}
