import express from 'express';
import { FeedBackServiceController } from './feedback.controller';
const router = express.Router();

// user routes
router.get('/', FeedBackServiceController.getAllFeedbacks);
router.post('/create-feedback', FeedBackServiceController.createFeedback);
router.patch('/:id', FeedBackServiceController.updateFeedback);
router.delete('/:id', FeedBackServiceController.deleteFeedback);

export const FeedbackRoute = router;
