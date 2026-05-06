import { z } from "zod";

export const createCategorySchema = z.object({

    name: z.string().min(1).max(128),
    description: z.string().max(8192).optional()

});