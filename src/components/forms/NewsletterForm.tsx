"use client";

import { useActionState } from "react";
import { subscribeNewsletter, type FormState } from "@/actions/forms";
import { FormMessage } from "@/components/ui/Field";
import { cn } from "@/lib/utils";

export function NewsletterForm({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  const [state, action, pending] = useActionState<FormState, FormData>(
    subscribeNewsletter,
    {},
  );
  return (
    <form
      action={action}
      className={cn("flex flex-col gap-3", light && "on-light")}
      noValidate
    >
      <div className="flex items-end gap-3">
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor={compact ? "nl-email-compact" : "nl-email"} className="sr-only">
            Email address
          </label>
          <input
            id={compact ? "nl-email-compact" : "nl-email"}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            aria-invalid={!!state.errors?.email}
            className={cn("field", !compact && "text-lg")}
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
          className={cn(
            "h-11 shrink-0 px-5 text-[0.75rem] font-semibold tracking-[0.16em] uppercase transition-colors",
            light
              ? "hover:bg-surface bg-black text-white"
              : "bg-gold hover:bg-gold-light text-black",
          )}
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
