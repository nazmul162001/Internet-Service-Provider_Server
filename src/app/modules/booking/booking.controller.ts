import { Booking } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookingService } from './booking.service';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingService.createBooking(req.body);
  sendResponse<Booking>(res, {
    statusCode: httpStatus.CREATED,
    message: 'Booked Service successfully',
    data: result,
    success: true,
  });
});

// get all booking
const getAllBooking = catchAsync(async (req: Request, res: Response) => {
  const booking = await BookingService.getAllBooking();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings retrieved successfully',
    data: booking,
  });
});

// get single booking
const getSingleBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const blog = await BookingService.getSingleBooking(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking retrieved successfully',
    data: blog,
  });
});

// update booking
const updateBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const booking = await BookingService.updateBooking(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking updated successfully',
    data: booking,
  });
});

// delete booking
const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const booking = await BookingService.deleteBooking(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking deleted successfully',
    data: booking,
  });
});

export const BookingController = {
  createBooking,
  getAllBooking,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
