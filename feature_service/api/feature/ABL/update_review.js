import { StatusCodes } from "http-status-codes";
import { findReviewByID, updateExistReview } from "../feature.dao.js";

export async function updateReview (req, res) {
    try {
        
        const {id} = req.params;
        const data = req.body;
        

        const existing = findReviewByID(id);
        if (!existing) {
            return res.status(StatusCodes.CONFLICT).json({
                message: "Review not exist"
            });
        }
        

        const updatedReview = {
        ...existing,
        ...data
        };
        

        const result = await updateExistReview(id, updatedReview);
        console.log(id)

        return res.status(StatusCodes.OK).json(result);
    } catch (err) {
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}