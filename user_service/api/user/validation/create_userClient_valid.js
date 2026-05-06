import { z } from "zod";
import {
  birthdateSchema,
  genderSchema,
  mailSchema,
  passwordSchema,
  phoneNumberOptionalSchema,
  userFullNameSchema,
  userTypeSchema,
} from "../../validation/zodShared.js";

export const createClientSchema = z.object({

    id: z.string().optional(),
    password: passwordSchema,
    name: userFullNameSchema,
    gender: genderSchema,
    mail: mailSchema,
    phone_number: phoneNumberOptionalSchema,
    birthdate: birthdateSchema,
    address: z.string().max(512).optional(),
    user_type: userTypeSchema,

});