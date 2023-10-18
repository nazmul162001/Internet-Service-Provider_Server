import express from 'express';
import { CartController } from './cart.controller';
const router = express.Router();

// user routes
router.get('/', CartController.getAllCarts);
router.post('/add-cart', CartController.addToCart);
router.delete('/:id', CartController.deleteCart);

export const CartRoute = router;
