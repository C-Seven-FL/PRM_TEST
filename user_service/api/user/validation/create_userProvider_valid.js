import { z } from "zod";
import {
  birthdateSchema,
  genderSchema,
  hourSchema,
  mailSchema,
  passwordSchema,
  phoneNumberOptionalSchema,
  slotDurationHoursSchema,
  userFullNameSchema,
  userTypeSchema,
  workingDaysSchema,
} from "../../validation/zodShared.js";

export const createProviderSchema = z.object({

    id: z.string().optional(),
    password: passwordSchema,
    name: userFullNameSchema,
    gender: genderSchema,
    mail: mailSchema,
    phone_number: phoneNumberOptionalSchema,
    birthdate: birthdateSchema,
    address: z.string().max(512).optional(),
    user_type: userTypeSchema,

    categoryID: z.string(),
    company_name: z.string().min(1).max(255),
    description: z.string().max(4096).optional(),
    company_address: z.string().min(1).max(512),
    working_days: workingDaysSchema,
    hour_start: z.string(),
    hour_end: z.string(),
    slot_duration: z.string(),

});