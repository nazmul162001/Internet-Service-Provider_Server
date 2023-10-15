import express from 'express';
import { FaqServiceController } from './faq.controller';
const router = express.Router();

// user routes
router.get('/', FaqServiceController.getAllFaq);
router.post('/create-faq', FaqServiceController.createFaq);
router.patch('/:id', FaqServiceController.updateFaq);
router.delete('/:id', FaqServiceController.deleteFaq);

export const FaqRoute = router;
