import { Cart } from '@prisma/client';
import prisma from '../../../shared/prisma';

const addToCart = async (data: Cart): Promise<Cart> => {
  const result = await prisma.cart.create({
    //@ts-ignore
    data,
  });
  return result;
};

// delete cart
const deleteCart = async (id: string) => {
  const cart = await prisma.cart.delete({
    where: {
      id,
    },
  });
  return cart;
};

// get all cartItems
const getAllCartItems = async () => {
  const carts = await prisma.cart.findMany({
    include: {
      user: true,
      service: true,
    },
  });
  return carts;
};

export const CartService = {
  addToCart,
  getAllCartItems,
  deleteCart,
};
