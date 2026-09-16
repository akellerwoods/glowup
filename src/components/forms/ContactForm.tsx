"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/actions/forms";
import { Field, Select, TextArea, FormMessage } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(submitContact, {});
  if (state.status === "success") {
    return (
      <div className="rule pt-6">
        <p className="font-display text-2xl">Message sent.</p>
        <p className="text-bone/75 mt-2">{state.message}</p>
      </div>
    );
  }
  const e = state.errors ?? {};
  return (
    <form action={action} noValidate className="grid gap-8 sm:grid-cols-2">
      <Field label="Name" name="name" required autoComplete="name" error={e.name} />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
        error={e.email}
      />
      <Select
        label="Topic"
        name="subject"
        required
        className="sm:col-span-2"
        error={e.subject}
        options={[
          { value: "general", label: "General question" },
          { value: "partner", label: "Partner or sponsor with us" },
          { value: "groomer", label: "I'm a groomer" },
          { value: "shelter", label: "Shelter or rescue inquiry" },
          { value: "media", label: "Press & media" },
          { value: "other", label: "Something else" },
        ]}
      />
      <TextArea
        label="Message"
        name="message"
        required
        rows={6}
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
          <Button type="submit" disabled={pending}>
            {pending ? "Sending…" : "Send message"}
          </Button>
        </div>
      </div>
    </form>
  );
}
