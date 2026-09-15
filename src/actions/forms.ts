"use server";

import { z } from "zod";

/**
 * Server Actions for every form on the site.
 * TODO: wire `deliver()` to Resend (email), a Google Sheet, or your CRM.
 * Right now submissions are validated and logged to the server console.
 */

export type FormState = {
  status?: "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

async function deliver(kind: string, data: Record<string, unknown>) {
  // TODO: replace with real delivery, e.g.
  // await resend.emails.send({ from, to: siteConfig.email, subject: `[${kind}] …`, text: JSON.stringify(data, null, 2) });
  console.log(`[form:${kind}]`, JSON.stringify(data, null, 2));
}

function flatten(err: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of err.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

function entries(fd: FormData) {
  const obj: Record<string, string | string[]> = {};
  for (const [k, v] of fd.entries()) {
    if (typeof v !== "string") continue;
    if (k in obj) {
      const cur = obj[k];
      obj[k] = Array.isArray(cur) ? [...cur, v] : [cur, v];
    } else obj[k] = v;
  }
  return obj;
}

const honeypot = z.string().max(0, "Spam detected").optional();
const email = z.string().trim().email("Enter a valid email address");
const name = z.string().trim().min(2, "Please enter your name").max(120);
const phone = z.string().trim().min(7, "Enter a phone number").max(30);

/* ---------- Newsletter ---------- */
const newsletterSchema = z.object({ email, company: honeypot });

export async function subscribeNewsletter(
  _: FormState,
  fd: FormData,
): Promise<FormState> {
  const parsed = newsletterSchema.safeParse(entries(fd));
  if (!parsed.success)
    return {
      status: "error",
      errors: flatten(parsed.error),
      message: "Check the highlighted field.",
    };
  await deliver("newsletter", parsed.data);
  return { status: "success", message: "You're in. Watch for this week's glow-up." };
}

/* ---------- Foster interest ---------- */
const fosterSchema = z.object({
  name,
  email,
  phone,
  zip: z.string().trim().min(5, "Enter your ZIP code").max(10),
  home: z.enum(["house", "apartment", "townhome", "other"], {
    message: "Select your home type",
  }),
  otherPets: z.string().trim().max(500).optional(),
  availability: z.enum(["now", "month", "later"], {
    message: "Select your availability",
  }),
  experience: z.string().trim().max(1500).optional(),
  company: honeypot,
});

export async function submitFoster(_: FormState, fd: FormData): Promise<FormState> {
  const parsed = fosterSchema.safeParse(entries(fd));
  if (!parsed.success)
    return {
      status: "error",
      errors: flatten(parsed.error),
      message: "A few fields need attention.",
    };
  await deliver("foster", parsed.data);
  return {
    status: "success",
    message: "Thank you. Our foster coordinator will reach out within a few days.",
  };
}

/* ---------- Volunteer ---------- */
const volunteerSchema = z.object({
  name,
  email,
  phone,
  role: z.enum(["groomer", "bather", "transport", "photo", "events", "other"], {
    message: "Pick a role",
  }),
  groomingYears: z.string().trim().max(10).optional(),
  availability: z.string().trim().max(500).optional(),
  message: z.string().trim().max(1500).optional(),
  company: honeypot,
});

export async function submitVolunteer(_: FormState, fd: FormData): Promise<FormState> {
  const parsed = volunteerSchema.safeParse(entries(fd));
  if (!parsed.success)
    return {
      status: "error",
      errors: flatten(parsed.error),
      message: "A few fields need attention.",
    };
  await deliver("volunteer", parsed.data);
  return {
    status: "success",
    message: "Thank you. We'll be in touch about the next glow-up day.",
  };
}

/* ---------- Contact ---------- */
const contactSchema = z.object({
  name,
  email,
  subject: z.enum(["general", "partner", "media", "groomer", "shelter", "other"], {
    message: "Choose a topic",
  }),
  message: z.string().trim().min(10, "Tell us a little more").max(3000),
  company: honeypot,
});

export async function submitContact(_: FormState, fd: FormData): Promise<FormState> {
  const parsed = contactSchema.safeParse(entries(fd));
  if (!parsed.success)
    return {
      status: "error",
      errors: flatten(parsed.error),
      message: "A few fields need attention.",
    };
  await deliver("contact", parsed.data);
  return {
    status: "success",
    message: "Got it. We answer every message within 48 hours.",
  };
}
