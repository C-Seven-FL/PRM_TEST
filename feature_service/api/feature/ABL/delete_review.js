import { StatusCodes } from "http-status-codes";
import { findReviewByID, deleteExistReview } from "../feature.dao.js";

export async function deleteReview(req, res) {
    try {

        const {id} = req.validatedParams;

        const findReview = await findReviewByID(id);
        if (!findReview) {
            return res.status(StatusCodes.CONFLICT).json({
                message: "Review not exist"
            });
        }

        const result = await deleteExistReview(id);

        return res.status(StatusCodes.OK).json(result);
    } catch (err) {
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}