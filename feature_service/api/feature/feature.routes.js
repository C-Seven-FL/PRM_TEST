import express from 'express';

// Importujeme logiku ze složky ABL
import { createReview } from './ABL/create_review.js';
import { getReview } from './ABL/get_review.js';
import { listReviews } from './ABL/list_review.js';
import { updateReview } from './ABL/update_review.js';
import { deleteReview } from './ABL/delete_review.js';

import {validateCreateReview, validateListReview, validateGetReview, validateUpdateReview, validateDeleteReview} from "../../services/validateReview.js"

const router = express.Router();

// Namapování cest na funkce
router.post('/',
    validateCreateReview,

    async (req, res) => {
        return await createReview(req, res)});

router.get('/:id',
    validateGetReview,
    
    async (req, res) => {
        return await getReview(req, res)});

router.get('/service/:serviceId',
    validateListReview,

    async (req, res) => {
        return await listReviews(req, res)});

router.put('/:id',
    validateUpdateReview,

    async (req, res) => {
        return await updateReview(req, res)});

router.delete('/:id',
    validateDeleteReview,
    
    async (req, res) => {
        return await deleteReview(req, res)});

export default router;