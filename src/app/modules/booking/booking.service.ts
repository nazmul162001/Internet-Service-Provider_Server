import { Booking } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBooking = async (data: Booking): Promise<Booking> => {
  const result = await prisma.booking.create({
    //@ts-ignore
    data,
  });
  return result;
};

// update booking
const updateBooking = async (
  id: string,
  data: Partial<Booking>
): Promise<Booking | null> => {
  const booking = await prisma.booking.update({
    where: {
      id,
    },
    //@ts-ignore
    data,
  });
  return booking;
};

// delete booking
const deleteBooking = async (id: string) => {
  const booking = await prisma.booking.delete({
    where: {
      id,
    },
  });
  return booking;
};

// get all booking
const getAllBooking = async () => {
  const booking = await prisma.booking.findMany({
    include: {
      service: true
    }
  });
  return booking;
};

const getSingleBooking = async (id: string) => {
  const booking = await prisma.booking.findUnique({
    where: {
      id,
    },
  });
  return booking;
};

export const BookingService = {
  createBooking,
  getAllBooking,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
