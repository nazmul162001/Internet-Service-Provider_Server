import express from 'express';
import { BlogServiceController } from './blog.controller';
const router = express.Router();

// user routes
router.get('/', BlogServiceController.getAllBlogs);
router.get('/:id', BlogServiceController.getSingleBlog);
router.post('/create-blog', BlogServiceController.createBlog);
router.patch('/:id', BlogServiceController.updateBlog);
router.delete('/:id', BlogServiceController.deleteBlog);

export const BlogRoute = router;
