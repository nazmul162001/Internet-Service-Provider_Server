import express from 'express';
import { InternetServiceController } from './service.controller';
const router = express.Router();

// user routes
router.post('/create-service', InternetServiceController.insertIntoDB);
router.patch('/:id', InternetServiceController.updateIntoDb);
router.delete('/:id', InternetServiceController.deleteIntoDb);

export const ServiceRoute = router;
