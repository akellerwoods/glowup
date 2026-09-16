"use client";

import { useActionState } from "react";
import { submitFoster, type FormState } from "@/actions/forms";
import { Field, Select, TextArea, FormMessage } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function FosterForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(submitFoster, {});
  if (state.status === "success") {
    return (
      <div className="rule pt-6">
        <p className="font-display text-2xl">Thank you.</p>
        <p className="text-bone/75 mt-2">{state.message}</p>
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
      <Field
        label="ZIP code"
        name="zip"
        required
        autoComplete="postal-code"
        error={e.zip}
      />
      <Select
        label="Home type"
        name="home"
        required
        error={e.home}
        options={[
          { value: "house", label: "House" },
          { value: "townhome", label: "Townhome" },
          { value: "apartment", label: "Apartment" },
          { value: "other", label: "Other" },
        ]}
      />
      <Select
        label="When could you take a dog?"
        name="availability"
        required
        error={e.availability}
        options={[
          { value: "now", label: "Right away" },
          { value: "month", label: "Within a month" },
          { value: "later", label: "Later this year" },
        ]}
      />
      <Field
        label="Other pets at home"
        name="otherPets"
        className="sm:col-span-2"
        hint="Species, ages, temperaments."
        error={e.otherPets}
      />
      <TextArea
        label="Experience with dogs"
        name="experience"
        className="sm:col-span-2"
        hint="Recovering glow-up dogs may need medicated baths or wound care. Any experience helps."
        error={e.experience}
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
          <Button type="submit" disabled={pending}>
            {pending ? "Sending…" : "Sign up to foster"}
          </Button>
        </div>
      </div>
    </form>
  );
}
