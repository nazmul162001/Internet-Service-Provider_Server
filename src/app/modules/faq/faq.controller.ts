import { Faq } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FaqService } from './faq.service';

const createFaq = catchAsync(async (req: Request, res: Response) => {
  const result = await FaqService.createFaq(req.body);
  sendResponse<Faq>(res, {
    statusCode: httpStatus.CREATED,
    message: 'Faq created successfully',
    data: result,
    success: true,
  });
});

// get all Faq
const getAllFaq = catchAsync(async (req: Request, res: Response) => {
  const faqs = await FaqService.getAllFaq();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faqs retrieved successfully',
    data: faqs,
  });
});

// update faq
const updateFaq = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const faq = await FaqService.updateFaq(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq updated successfully',
    data: faq,
  });
});

// delete faq
const deleteFaq = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const faq = await FaqService.deleteFaq(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq deleted successfully',
    data: faq,
  });
});

export const FaqServiceController = {
  createFaq,
  getAllFaq,
  updateFaq,
  deleteFaq,
};
