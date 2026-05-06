import { z } from "zod";

export const createReviewSchema = z.object({

    clientID: z.string(),
    serviceID: z.string(),
    quality: z.number().min(1).max(5),
    message: z.string().max(128).optional()

});