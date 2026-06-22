"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { serviceOptions } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Please share a little more about your goals.")
});

type AppointmentValues = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = async (values: AppointmentValues) => {
    await new Promise((resolve) => setTimeout(resolve, 450));
    setSubmittedName(values.name);
    reset();
  };

  return (
    <form className="rounded-clinic border border-ink/5 bg-white p-5 shadow-soft md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      {submittedName ? (
        <div className="mb-6 rounded-3xl bg-aurea-mintSoft p-4 text-sm text-ink" role="status" aria-live="polite">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#12866f]" aria-hidden="true" />
            <p>
              Thank you, <span className="font-semibold">{submittedName}</span>. Our care team will reach out shortly to
              coordinate your consultation.
            </p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input autoComplete="name" placeholder="Your full name" {...register("name")} aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...register("email")}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <Input type="tel" autoComplete="tel" placeholder="(212) 555-0194" {...register("phone")} aria-invalid={Boolean(errors.phone)} />
        </Field>
        <Field label="Service" error={errors.service?.message}>
          <Select {...register("service")} aria-invalid={Boolean(errors.service)}>
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" error={errors.message?.message}>
          <Textarea placeholder="Tell us what you would love to improve or maintain." {...register("message")} aria-invalid={Boolean(errors.message)} />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request Appointment"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm font-medium text-red-600">{error}</p> : null}
    </div>
  );
}
