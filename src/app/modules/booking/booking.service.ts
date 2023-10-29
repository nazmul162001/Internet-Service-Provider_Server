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

// // delete booking
const deleteBooking = async (id: string) => {
  const booking = await prisma.booking.delete({
    where: {
      id,
    },
  });
  return booking;
};

// const deleteBooking = async (id: any) => {
//   console.log(id);
//   const booking = await prisma.booking.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       user: true, // Include related User
//       service: true, // Include related Service
//     },
//   });

//   if (!booking) {
//     throw new Error('Booking not found.');
//   }

//   // Delete related User record
//   if (booking.user) {
//     await prisma.user.delete({
//       where: {
//         id: booking.user.id,
//       },
//     });
//   }

//   // Delete related Service record
//   if (booking.service) {
//     await prisma.service.delete({
//       where: {
//         id: booking.service.id,
//       },
//     });
//   }

//   // Delete the booking itself
//   await prisma.booking.delete({
//     where: {
//       id,
//     },
//   });

//   return 'Booking and related records deleted successfully.';
// };

// get all booking
const getAllBooking = async () => {
  const booking = await prisma.booking.findMany({
    include: {
      user: true,
      service: true,
    },
  });
  return booking;
};

const getSingleBooking = async (id: string) => {
  const booking = await prisma.booking.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      service: true,
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
