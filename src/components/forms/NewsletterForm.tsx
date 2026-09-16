"use client";

import { useActionState, useId } from "react";
import { subscribeNewsletter, type FormState } from "@/actions/forms";
import { FormMessage } from "@/components/ui/Field";

export function NewsletterForm() {
  const id = useId();
  const [state, action, pending] = useActionState<FormState, FormData>(
    subscribeNewsletter,
    {},
  );
  return (
    <form action={action} className="flex flex-col gap-3" noValidate>
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <label htmlFor={id} className="sr-only">
            Email address
          </label>
          <input
            id={id}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            aria-invalid={!!state.errors?.email}
            className="field"
          />
        </div>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
        <button
          type="submit"
          disabled={pending}
          className="btn btn-primary h-10 px-4 text-[0.6875rem]"
        >
          {pending ? "…" : "Subscribe"}
        </button>
      </div>
      {state.errors?.email ? (
        <p className="text-gold text-xs">{state.errors.email}</p>
      ) : null}
      <FormMessage
        status={state.status}
        message={state.status === "success" ? state.message : undefined}
      />
    </form>
  );
}
