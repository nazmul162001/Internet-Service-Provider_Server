"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoute = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
// user routes
router.get('/', cart_controller_1.CartController.getAllCarts);
router.post('/add-cart', cart_controller_1.CartController.addToCart);
router.delete('/:id', cart_controller_1.CartController.deleteCart);
exports.CartRoute = router;
