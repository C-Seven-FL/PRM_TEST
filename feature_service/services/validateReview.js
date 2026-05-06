import { createReviewSchema } from "../api/feature/validation/create_review_valid.js"
import { listReviewSchema } from "../api/feature/validation/list_review_valid.js";
import { getReviewSchema } from "../api/feature/validation/get_review_valid.js";
import { updateReviewSchema } from "../api/feature/validation/update_review_valid.js";
import { deleteReviewSchema } from "../api/feature/validation/delete_review_valid.js";

import { StatusCodes } from "http-status-codes";

export function validateCreateReview(req, res, next) {
  try {
    const parsed = createReviewSchema.parse(req.body);

    req.body = parsed; 
    next();
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Invalid data',
          });
  }
}

export function validateListReview(req, res, next) {
  try {
    const parsed = listReviewSchema.parse(req.params);

    next();
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Invalid data',
          });
  }
}

export function validateGetReview(req, res, next) {
  try {
    const parsed = getReviewSchema.parse(req.params);

    req.validatedParams = parsed; 
    next();
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Invalid data',
          });
  }
}

export function validateUpdateReview(req, res, next) {
  try {

    const parsedParam = getReviewSchema.parse(req.params);
    const parsedBody = updateReviewSchema.parse(req.body);

    req.body = parsedBody; 
    next();
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Invalid data',
          });
  }
}

export function validateDeleteReview(req, res, next) {
  try {

    const parsedParam = deleteReviewSchema.parse(req.params);

    req.validatedParams = parsedParam;
    next();
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Invalid data',
          });
  }
}