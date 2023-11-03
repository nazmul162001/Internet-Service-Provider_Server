"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBooking = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.create({
        //@ts-ignore
        data,
    });
    return result;
});
// update booking
const updateBooking = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield prisma_1.default.booking.update({
        where: {
            id,
        },
        //@ts-ignore
        data,
    });
    return booking;
});
// // delete booking
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield prisma_1.default.booking.delete({
        where: {
            id,
        },
    });
    return booking;
});
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
const getAllBooking = () => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield prisma_1.default.booking.findMany({
        include: {
            user: true,
            service: true,
        },
    });
    return booking;
});
const getSingleBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield prisma_1.default.booking.findUnique({
        where: {
            id,
        },
        include: {
            user: true,
            service: true,
        },
    });
    return booking;
});
exports.BookingService = {
    createBooking,
    getAllBooking,
    getSingleBooking,
    updateBooking,
    deleteBooking,
};
