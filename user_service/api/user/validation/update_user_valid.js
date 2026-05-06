import { z } from "zod";
import {
  birthdateSchema,
  genderSchema,
  mailSchema,
  passwordSchema,
  phoneNumberOptionalSchema,
  notificationSchema,
  userFullNameSchema,
} from "../../validation/zodShared.js";


export const updateUserSchema = z.object({
    
    password: passwordSchema.optional(),
    name: userFullNameSchema.optional(),
    gender: genderSchema.optional(),
    mail: mailSchema.optional(),
    phone_number: phoneNumberOptionalSchema.optional(),
    birthdate: birthdateSchema.optional(),
    address: z.string().max(512).optional(),
    notifications: z.array(notificationSchema).optional(),
    notification_turn: z.boolean().optional(),
    blocked: z.boolean().optional(),

});