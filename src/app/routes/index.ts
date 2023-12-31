import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BlogRoute } from '../modules/blogs/blog.route';
import { BookingRoute } from '../modules/booking/booking.route';
import { CartRoute } from '../modules/cart/cart.route';
import { FaqRoute } from '../modules/faq/faq.route';
import { FeedbackRoute } from '../modules/feedback/feedback.route';
import { ReviewRoute } from '../modules/review/review.route';
import { ServiceRoute } from '../modules/service/service.route';
import { UserRoutes } from '../modules/users/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/services',
    route: ServiceRoute,
  },
  {
    path: '/feedbacks',
    route: FeedbackRoute,
  },
  {
    path: '/blogs',
    route: BlogRoute,
  },
  {
    path: '/faqs',
    route: FaqRoute,
  },
  {
    path: '/bookings',
    route: BookingRoute,
  },
  {
    path: '/reviews',
    route: ReviewRoute,
  },
  {
    path: '/carts',
    route: CartRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
