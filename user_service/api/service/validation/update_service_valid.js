import { z } from "zod";
import {
  hourSchema,
  slotDurationHoursSchema,
  workingDaysSchema,
} from "../../validation/zodShared.js";

export const updateServiceSchema = z.object({

    userID: z.string().optional(),
    categoryID: z.string().optional(),
    company_name: z.string().min(1).max(255).optional(),
    description: z.string().max(4096).optional().optional(),
    company_address: z.string().min(1).max(512).optional(),
    working_days: workingDaysSchema.optional(),
    hour_start: z.string().optional(),
    hour_end: z.string().optional(),
    slot_duration: z.string().optional(),
    banned_users: z.array(z.string()).optional(),
    active: z.boolean().optional(),
    blocked: z.boolean().optional(),

});