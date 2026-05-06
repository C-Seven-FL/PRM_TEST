import { z } from "zod";

export const updateCategorySchema = z.object({

    name: z.string().min(1).max(128).optional(),
    description: z.string().max(8192).optional()

});