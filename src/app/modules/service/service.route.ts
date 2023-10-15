import express from 'express';
import { InternetServiceController } from './service.controller';
const router = express.Router();

// user routes
router.post('/create-service', InternetServiceController.insertIntoDB);

export const ServiceRoute = router;
