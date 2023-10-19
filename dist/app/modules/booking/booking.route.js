"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoute = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const router = express_1.default.Router();
// user routes
router.get('/', booking_controller_1.BookingController.getAllBooking);
router.get('/:id', booking_controller_1.BookingController.getSingleBooking);
router.post('/create-booking', booking_controller_1.BookingController.createBooking);
router.patch('/:id', booking_controller_1.BookingController.updateBooking);
router.delete('/:id', booking_controller_1.BookingController.deleteBooking);
exports.BookingRoute = router;
