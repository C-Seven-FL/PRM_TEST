import { z } from "zod";

/** 16 hex characters (hex16), case-insensitive. */
export const hex16Id = z
  .string()
  .length(16)
  .regex(/^[0-9a-fA-F]{16}$/, "Must be a 16-character hexadecimal id");

/** Printable ASCII (ANSI-style), length 8–32. */
export const passwordSchema = z
  .string()
  .min(8)
  .max(32)
  .regex(/^[\x20-\x7E]+$/, "Password must use printable ASCII characters");

export const userFullNameSchema = z.string().min(1).max(128);

export const genderSchema = z.preprocess(
  (v) => (typeof v === "string" ? v.trim().toLowerCase() : v),
  z.enum(["male", "female"])
);

export const mailSchema = z.string().email();

/** Optional E.164-ish or common grouped format. */
export const phoneNumberOptionalSchema = z
  .string()
  .regex(/^\+?[0-9][0-9\s\-().]{6,19}$/)
  .optional();

export const birthdateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((s) => {
    const [y, m, d] = s.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    return (
      dt.getUTCFullYear() === y &&
      dt.getUTCMonth() === m - 1 &&
      dt.getUTCDate() === d
    );
  }, "Invalid birth date (YYYY-MM-DD)");

export const userTypeSchema = z.preprocess(
  (v) => (typeof v === "string" ? v.trim().toLowerCase() : v),
  z.enum(["client", "provider", "administrator"])
);

export const notificationSchema = z.object({
  id: z.string(),
  userID: z.string(),
  serviceID: z.string(),
  notification_type: z.string(),
  message: z.string(),
});

export const notificationObjectSchema = z.record(z.string(), z.unknown());

export const notificationsListSchema = z.array(notificationObjectSchema);

export const weekdaySchema = z.enum([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]);

export const workingDaysSchema = z.array(weekdaySchema).min(1);

/** Accepts integer hour or legacy "HH:MM" and normalizes to 0–23. */
export const hourSchema = z.preprocess((v) => {
  if (typeof v === "string" && /^\d{1,2}:\d{2}$/.test(v.trim())) {
    return parseInt(v.trim().split(":")[0], 10);
  }
  return v;
}, z.coerce.number().int().min(0).max(23));

function parseSlotDurationHours(v) {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const t = v.trim();
    if (/^\d+(\.\d+)?$/.test(t)) return parseFloat(t);
    if (/^\d{1,2}:\d{2}$/.test(t)) {
      const [h, m] = t.split(":").map(Number);
      return h + m / 60;
    }
  }
  return v;
}

function isQuarterHourIncrement(n) {
  return Math.abs(n * 4 - Math.round(n * 4)) < 1e-9;
}

/** Duration in hours; 0.25 steps; cross-check with hours in superRefine on parent object. */
export const slotDurationHoursSchema = z.preprocess(
  parseSlotDurationHours,
  z
    .number()
    .refine((n) => Number.isFinite(n), "slot_duration must be a number")
    .refine((n) => n >= 0.25, "slot_duration must be at least 0.25 hours")
    .refine(isQuarterHourIncrement, "slot_duration must use 0.25 hour increments")
);

/** Category name: letters only (Unicode), per “A–ž” style naming. */
export const categoryNameSchema = z
  .string()
  .min(1)
  .max(128)
  .regex(/^[\p{L}\p{M}]+$/u, "Name must be letters only");

export const categoryDescriptionSchema = z.string().min(1).max(8192);