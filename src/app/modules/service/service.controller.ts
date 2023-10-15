import { Service } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { InternetService } from './service.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await InternetService.insertIntoDB(req.body);
  sendResponse<Service>(res, {
    statusCode: httpStatus.CREATED,
    message: 'Service created successfully',
    data: result,
    success: true,
  });
});

export const InternetServiceController = {
  insertIntoDB,
};
