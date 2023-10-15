import express from 'express';
import { BookingController } from './booking.controller';
const router = express.Router();

// user routes
router.get('/', BookingController.getAllBooking);
router.get('/:id', BookingController.getSingleBooking);
router.post('/create-booking', BookingController.createBooking);
router.patch('/:id', BookingController.updateBooking);
router.delete('/:id', BookingController.deleteBooking);

export const BookingRoute = router;
