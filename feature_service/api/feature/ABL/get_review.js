import { StatusCodes } from "http-status-codes";
import { findReviewByID } from "../feature.dao.js";

export async function getReview(req, res) {
    try {

        const {id} = req.validatedParams;

        const result = await findReviewByID(id);
        if (!result) {
            return res.status(StatusCodes.CONFLICT).json({
                message: "Review not exist"
            });
        }

        return res.status(StatusCodes.OK).json(result);
    } catch (err) {
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}