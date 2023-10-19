"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const blog_route_1 = require("../modules/blogs/blog.route");
const booking_route_1 = require("../modules/booking/booking.route");
const cart_route_1 = require("../modules/cart/cart.route");
const faq_route_1 = require("../modules/faq/faq.route");
const feedback_route_1 = require("../modules/feedback/feedback.route");
const review_route_1 = require("../modules/review/review.route");
const service_route_1 = require("../modules/service/service.route");
const user_route_1 = require("../modules/users/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/services',
        route: service_route_1.ServiceRoute,
    },
    {
        path: '/feedbacks',
        route: feedback_route_1.FeedbackRoute,
    },
    {
        path: '/blogs',
        route: blog_route_1.BlogRoute,
    },
    {
        path: '/faqs',
        route: faq_route_1.FaqRoute,
    },
    {
        path: '/bookings',
        route: booking_route_1.BookingRoute,
    },
    {
        path: '/reviews',
        route: review_route_1.ReviewRoute,
    },
    {
        path: '/carts',
        route: cart_route_1.CartRoute,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
