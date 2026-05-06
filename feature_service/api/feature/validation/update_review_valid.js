import { z } from "zod";

export const updateReviewSchema = z.object({

    quality: z.number().min(1).max(5).optional(),
    message: z.string().max(128).optional()

});