"use client";

import { useActionState } from "react";
import { submitVolunteer, type FormState } from "@/actions/forms";
import { Field, Select, TextArea, FormMessage } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function VolunteerForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(
    submitVolunteer,
    {},
  );
  if (state.status === "success") {
    return (
      <div className="border-gold/40 border p-8">
        <p className="font-display text-2xl">Thank you.</p>
        <p className="mt-2 text-white/75">{state.message}</p>
      </div>
    );
  }
  const e = state.errors ?? {};
  return (
    <form action={action} noValidate className="grid gap-8 sm:grid-cols-2">
      <Field label="Full name" name="name" required autoComplete="name" error={e.name} />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
        error={e.email}
      />
      <Field
        label="Phone"
        name="phone"
        type="tel"
        required
        autoComplete="tel"
        error={e.phone}
      />
      <Select
        label="How would you like to help?"
        name="role"
        required
        error={e.role}
        options={[
          { value: "groomer", label: "Professional groomer" },
          { value: "bather", label: "Bather / groomer's assistant" },
          { value: "transport", label: "Transport" },
          { value: "photo", label: "Photography / video" },
          { value: "events", label: "Events & fundraising" },
          { value: "other", label: "Something else" },
        ]}
      />
      <Field
        label="Years of grooming experience"
        name="groomingYears"
        hint="Groomers only."
        error={e.groomingYears}
      />
      <Field
        label="Availability"
        name="availability"
        hint="Days, hours a month, anything helpful."
        error={e.availability}
      />
      <TextArea
        label="Anything else?"
        name="message"
        className="sm:col-span-2"
        error={e.message}
      />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="flex flex-col gap-4 sm:col-span-2">
        <FormMessage status={state.status} message={state.message} />
        <div>
          <Button type="submit" size="lg" disabled={pending}>
            {pending ? "Sending…" : "Sign up to volunteer"}
          </Button>
        </div>
      </div>
    </form>
  );
}
