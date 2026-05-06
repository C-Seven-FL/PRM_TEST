import { z } from "zod";
import {
  hourSchema,
  slotDurationHoursSchema,
  workingDaysSchema,
} from "../../validation/zodShared.js";

export const createServiceSchema = z.object({

    userID: z.string(),
    categoryID: z.string(),
    company_name: z.string().min(1).max(255),
    description: z.string().max(4096).optional(),
    company_address: z.string().min(1).max(512),
    working_days: workingDaysSchema,
    hour_start: z.string(),
    hour_end: z.string(),
    slot_duration: z.string(),

});