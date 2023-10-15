import { FeedBack } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FeedbackService } from './feedback.service';

const createFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.createFeedback(req.body);
  sendResponse<FeedBack>(res, {
    statusCode: httpStatus.CREATED,
    message: 'Feedback created successfully',
    data: result,
    success: true,
  });
});

// get all feedbacks
const getAllFeedbacks = catchAsync(async (req: Request, res: Response) => {
  const feedBack = await FeedbackService.getAllFeedbacks();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedbacks retrieved successfully',
    data: feedBack,
  });
});

// update feedback
const updateFeedback = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const feedBack = await FeedbackService.updateFeedback(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback updated successfully',
    data: feedBack,
  });
});

// delete feedbacks
const deleteFeedback = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const feedBack = await FeedbackService.deleteFeedback(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback deleted successfully',
    data: feedBack,
  });
});

export const FeedBackServiceController = {
  createFeedback,
  getAllFeedbacks,
  updateFeedback,
  deleteFeedback,
};
