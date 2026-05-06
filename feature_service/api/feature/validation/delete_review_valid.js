import { z } from "zod";

export const deleteReviewSchema = z.object({

    id: z.string()

});