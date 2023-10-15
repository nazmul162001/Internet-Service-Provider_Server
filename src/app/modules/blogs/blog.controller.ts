import { Blog } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BlogService } from './blog.service';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.createBlog(req.body);
  sendResponse<Blog>(res, {
    statusCode: httpStatus.CREATED,
    message: 'Blog created successfully',
    data: result,
    success: true,
  });
});

// get all blogs
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const blogs = await BlogService.getAllBlog();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs retrieved successfully',
    data: blogs,
  });
});

// get single blos
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const blog = await BlogService.getSingleBlog(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved successfully',
    data: blog,
  });
});

// update blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const blog = await BlogService.updateBlog(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: blog,
  });
});

// delete blog
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const blog = await BlogService.deleteBlog(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: blog,
  });
});

export const BlogServiceController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
