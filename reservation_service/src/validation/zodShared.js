import { z } from "zod";

export const createReservationSchema = z.object({
  clientID: z.string(),
  serviceID: z.string(),
  reservation_starts: z.string(),
  reservation_ends: z.string(),
});