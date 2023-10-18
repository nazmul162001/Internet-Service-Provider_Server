import { Cart } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CartService } from './cart.service';

const addToCart = catchAsync(async (req: Request, res: Response) => {
  const result = await CartService.addToCart(req.body);
  sendResponse<Cart>(res, {
    statusCode: httpStatus.CREATED,
    message: 'Add to cart successfully',
    data: result,
    success: true,
  });
});

// get all cartItems
const getAllCarts = catchAsync(async (req: Request, res: Response) => {
  const carts = await CartService.getAllCartItems();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart Items retrieved successfully',
    data: carts,
  });
});


// delete cart
const deleteCart = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const cart = await CartService.deleteCart(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Item deleted successfully',
    data: cart,
  });
});

export const CartController = {
  addToCart,
  getAllCarts,
  deleteCart
};
