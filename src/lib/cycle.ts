import { impact } from "@/content/impact";

/** One dog a week, thirteen weeks a quarter, four quarters a cycle. */
export const CYCLE_LENGTH = 52;
export const MILESTONE_WEEKS = [13, 26, 39, 52];

export const pad = (n: number) => String(n).padStart(2, "0");

/** Brand convention: always "Week 07 / 52". Two digits, forward slash, spaces around it. */
export const weekLabel = (n: number) => `Week ${pad(n)} / ${CYCLE_LENGTH}`;

/** Dogs groomed so far this cycle, clamped to the cycle. Driven by src/content/impact.ts. */
export const groomedThisCycle = () => Math.min(CYCLE_LENGTH, Math.max(0, impact.glowUps));
