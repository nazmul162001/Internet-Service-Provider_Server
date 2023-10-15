import { Review } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './review.service';

const createReview = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.createReview(req.body);
  sendResponse<Review>(res, {
    statusCode: httpStatus.CREATED,
    message: 'Review created successfully',
    data: result,
    success: true,
  });
});

// get all review
const getAllReview = catchAsync(async (req: Request, res: Response) => {
  const review = await ReviewService.getAllReview();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews retrieved successfully',
    data: review,
  });
});

// update review
const updateReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const review = await ReviewService.updateReview(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully',
    data: review,
  });
});

// delete review
const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const review = await ReviewService.deleteReview(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review deleted successfully',
    data: review,
  });
});

export const ReviewController = {
  createReview,
  getAllReview,
  updateReview,
  deleteReview,
};
