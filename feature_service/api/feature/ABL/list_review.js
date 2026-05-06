import { StatusCodes } from "http-status-codes";
import { getAllReviews } from "../feature.dao.js";

export async function listReviews (req, res) {
    try {

        const filters = req.params;

        const result = await getAllReviews(filters);

        return res.status(StatusCodes.OK).json(result);
    } catch (err) {
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}