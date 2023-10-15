import { Service } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { InternetService } from './service.service';

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await InternetService.createService(req.body);
  sendResponse<Service>(res, {
    statusCode: httpStatus.CREATED,
    message: 'Service created successfully',
    data: result,
    success: true,
  });
});

// get single service
const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await InternetService.getSingleService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service retrieved successfully',
    data: service,
  });
});

// update service
const updateService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const service = await InternetService.updateService(id, body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service updated successfully',
    data: service,
  });
});

// delete book
const deleteService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const service = await InternetService.deleteService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
    data: service,
  });
});

export const InternetServiceController = {
  createService,
  getSingleService,
  updateService,
  deleteService,
};
