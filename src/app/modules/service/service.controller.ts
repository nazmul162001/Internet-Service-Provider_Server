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

// update service
const updateIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const service = await InternetService.updateIntoDb(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service updated successfully',
    data: service,
  });
});

// delete book
const deleteIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await InternetService.deleteIntDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
    data: service,
  });
});

export const InternetServiceController = {
  insertIntoDB,
  updateIntoDb,
  deleteIntoDb,
};
