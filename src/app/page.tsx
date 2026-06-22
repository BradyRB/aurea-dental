import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  MapPin,
  Phone,
  Play,
  ShieldCheck,
  Star
} from "lucide-react";

import { AppointmentForm } from "@/components/appointment-form";
import { DoctorCard } from "@/components/doctor-card";
import { FadeIn, HoverLift, ImageZoom, ScaleIn, Stagger, StaggerItem } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StatCard } from "@/components/stat-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { doctors, processSteps, services, stats, testimonials, trustHighlights, whyChooseUs } from "@/data/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="container-padding relative overflow-hidden pt-32 md:pt-36">
          <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[780px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Stagger className="relative z-10" amount={0.1}>
              <StaggerItem>
                <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-graphite shadow-card">
                  <ShieldCheck className="h-4 w-4 text-aurea-mint" aria-hidden="true" />
                  Premium dental care in New York
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-8 text-balance text-5xl font-medium leading-none text-ink md:text-7xl lg:text-8xl">
                  Aurea Dental Studio
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 text-3xl font-medium leading-tight text-ink md:text-5xl">
                  Smile with <span className="text-aurea-mint">Confidence.</span>
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 max-w-xl text-lg leading-8 text-graphite">
                  High-touch aesthetic dentistry, implantology, orthodontics, and preventive care for patients who want
                  precision without losing warmth.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <HoverLift>
                    <Link
                      href="#contact"
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-base font-semibold text-white transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurea-mint"
                    >
                      Book a Consultation
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </HoverLift>
                  <HoverLift>
                    <Link
                      href="#services"
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-7 text-base font-semibold text-ink shadow-card transition-colors hover:bg-mist"
                    >
                      Explore Services
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </HoverLift>
                </div>
              </StaggerItem>

              <Stagger className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4" amount={0.25}>
                {trustHighlights.map((item) => (
                  <StaggerItem key={item}>
                    <HoverLift className="h-full">
                      <div className="h-full rounded-3xl border border-white bg-white/80 p-4 text-sm font-semibold text-ink shadow-card">
                        <Check className="mb-3 h-4 w-4 text-aurea-mint" aria-hidden="true" />
                        {item}
                      </div>
                    </HoverLift>
                  </StaggerItem>
                ))}
              </Stagger>
            </Stagger>

            <ScaleIn className="relative min-h-[520px] overflow-hidden rounded-[40px] border border-white bg-mist shadow-soft lg:min-h-[700px]">
              <Image
                src="/images/originals/tooth-close-up.png"
                alt="Realistic close-up of a healthy tooth representing premium Aurea Dental Studio care"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-graphite shadow-card backdrop-blur">
                <MapPin className="mr-2 inline h-4 w-4 text-aurea-mint" aria-hidden="true" />
                Park Avenue, NY
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 md:grid-cols-[1fr_auto]">
                <div className="rounded-3xl bg-white/90 p-5 shadow-card backdrop-blur">
                  <p className="text-sm font-semibold text-aurea-mint">Digital smile preview</p>
                  <p className="mt-2 text-2xl font-medium text-ink">See your outcome before treatment begins.</p>
                </div>
                <HoverLift>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 rounded-3xl bg-ink px-5 py-4 text-sm font-semibold text-white"
                    aria-label="Play patient story"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink">
                      <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                    </span>
                    Patient Story
                  </button>
                </HoverLift>
              </div>
            </ScaleIn>
          </div>
        </section>

        <section id="experience" className="container-padding py-24 md:py-32">
          <FadeIn className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <h2 className="text-balance text-4xl font-medium leading-tight text-ink md:text-6xl">
                Modern dentistry backed by years of clinical precision and deep patient trust.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-graphite">
                Every appointment is designed around calm pacing, refined diagnostics, and transparent recommendations
                from a team that treats aesthetics and oral health as one connected experience.
              </p>
            </div>
            <Stagger className="mt-12 grid gap-4 md:grid-cols-4" amount={0.25}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <StatCard stat={stat} />
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>
        </section>

        <section id="services" className="container-padding overflow-hidden bg-mist py-24 md:py-32">
          <FadeIn className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <SectionHeading
                eyebrow="Services"
                title="Comprehensive dental services designed for every smile and lifestyle."
              />
              <p className="text-lg leading-8 text-graphite">
                From preventive care to smile transformations, our services are sequenced to feel clear, calm, and
                medically precise from the first scan to the final polish.
              </p>
            </div>
            <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <StaggerItem key={service.title}>
                  <ServiceCard service={service} index={index} />
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>
        </section>

        <section className="container-padding py-24 md:py-32">
          <FadeIn className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A premium clinic experience with clinical rigor at every touchpoint."
              description="The difference is in the small decisions: diagnostics that inform, consultations that feel human, and treatment plans that make sense before they begin."
            />
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <HoverLift className="h-full">
                      <article className="h-full rounded-clinic border border-ink/5 bg-white p-6 shadow-card">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aurea-mintSoft text-aurea-mint">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-graphite">{item.description}</p>
                      </article>
                    </HoverLift>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </FadeIn>
        </section>

        <section className="container-padding bg-ink py-24 text-white md:py-32">
          <FadeIn className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-aurea-mint">
                Smile Transformation
              </span>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-tight md:text-6xl">
                Aesthetic dentistry that respects the face behind the smile.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Our smile design process studies shape, shade, symmetry, bite, and facial movement before recommending
                veneers, whitening, contouring, orthodontics, or restorative care.
              </p>
              <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Facially guided planning", "Natural shade mapping", "Minimally invasive options", "Long-term maintenance"].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 text-sm font-semibold text-white/85">
                      <Check className="h-4 w-4 text-aurea-mint" aria-hidden="true" />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <ScaleIn className="relative overflow-hidden rounded-[36px] bg-white/8 p-3">
              <div className="relative aspect-[1.12] overflow-hidden rounded-[28px]">
                <ImageZoom>
                  <Image
                    src="/images/originals/smiling-patient-chair.png"
                    alt="Smiling patient reclining in a bright dental clinic chair"
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover"
                  />
                </ImageZoom>
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/90" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink">Before</div>
                <div className="absolute bottom-4 right-4 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white">After</div>
              </div>
            </ScaleIn>
          </FadeIn>
        </section>

        <section className="container-padding py-24 md:py-32">
          <FadeIn className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Process"
              title="A simple journey from first consultation to confident smile."
              align="center"
            />
            <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <StaggerItem key={step.title}>
                    <HoverLift className="h-full">
                      <article className="h-full rounded-clinic border border-ink/5 bg-white p-6 shadow-card">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-aurea-mint">0{index + 1}</span>
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-ink">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                        </div>
                        <h3 className="mt-8 text-xl font-semibold text-ink">{step.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-graphite">{step.description}</p>
                      </article>
                    </HoverLift>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </FadeIn>
        </section>

        <section id="doctors" className="container-padding bg-mist py-24 md:py-32">
          <FadeIn className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Doctors"
              title="A trusted team of modern dental experts focused on your smile."
              description="Meet specialists who combine advanced training, aesthetic judgment, and deeply human patient care."
              align="center"
            />
            <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
              {doctors.map((doctor, index) => (
                <StaggerItem key={doctor.name}>
                  <DoctorCard doctor={doctor} index={index} />
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>
        </section>

        <section id="reviews" className="container-padding py-24 md:py-32">
          <FadeIn className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Testimonials"
                  title="Patient stories with the quiet confidence of great care."
                  description="Realistic experiences shaped by clear communication, gentle treatment, and outcomes that look considered."
                />
                <div className="mt-8 flex items-center gap-2 text-aurea-mint" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-graphite">4.9 average patient rating</span>
                </div>
              </div>
              <Stagger className="grid gap-5">
                {testimonials.map((testimonial) => (
                  <StaggerItem key={testimonial.name}>
                    <TestimonialCard testimonial={testimonial} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </FadeIn>
        </section>

        <section className="container-padding pb-24 md:pb-32">
          <FadeIn className="mx-auto overflow-hidden rounded-[42px] bg-aurea-mintSoft">
            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#12866f]">Appointments</span>
                <h2 className="mt-6 text-balance text-4xl font-medium leading-tight text-ink md:text-6xl">
                  Ready for dentistry that feels precise, calm, and personal?
                </h2>
                <p className="mt-5 text-lg leading-8 text-graphite">
                  Schedule a consultation and leave with clarity: your priorities, options, timing, and the path to a
                  healthier, more confident smile.
                </p>
              </div>
              <Stagger className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { icon: CalendarDays, label: "Mon-Fri", value: "8:00 AM - 6:00 PM" },
                  { icon: Phone, label: "Phone", value: "(212) 555-0194" },
                  { icon: Clock, label: "Emergency", value: "24/7 support line" }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={item.label}>
                      <HoverLift className="h-full">
                        <div className="h-full rounded-3xl bg-white p-5 shadow-card">
                          <Icon className="h-5 w-5 text-aurea-mint" aria-hidden="true" />
                          <p className="mt-4 text-sm font-semibold text-graphite">{item.label}</p>
                          <p className="mt-1 text-lg font-semibold text-ink">{item.value}</p>
                        </div>
                      </HoverLift>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </FadeIn>
        </section>

        <section id="contact" className="container-padding pb-24 md:pb-32">
          <FadeIn className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Request an appointment with the Aurea care team."
                description="Tell us what you are considering. We will help you choose the right first visit and prepare the next step."
              />
              <ScaleIn className="mt-8 overflow-hidden rounded-clinic border border-ink/5 bg-white shadow-card">
                <div className="relative aspect-[1.35]">
                  <ImageZoom>
                    <Image
                      src="/images/originals/treatment-collage.png"
                      alt="Dental implant, aligner, veneer, and instrument treatment visuals"
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              </ScaleIn>
            </div>
            <ScaleIn>
              <AppointmentForm />
            </ScaleIn>
          </FadeIn>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
