import { StatusCodes } from "http-status-codes";
import { createNewReview, findReviewByID, findReviewClientService } from "../feature.dao.js";
import crypto from "crypto";

export async function createReview(req, res) {
    try {

        const data = req.body;

        const existing = await findReviewClientService(data.clientID, data.serviceID);

        if (existing) {
            return res.status(StatusCodes.CONFLICT).json({
                message: "User has already rated this service"
            });
        }

        const newReview = {
        id: crypto.randomBytes(8).toString("hex"),
        ...data,
        };

        const result = await createNewReview(newReview);

        return res.status(StatusCodes.CREATED).json(result);
    } catch (err) {
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}