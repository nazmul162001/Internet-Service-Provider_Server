import express from 'express';
import { ReviewController } from './review.controller';
const router = express.Router();

// user routes
router.get('/', ReviewController.getAllReview);
router.post('/create-review', ReviewController.createReview);
router.patch('/:id', ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);

export const ReviewRoute = router;
