import { Service } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createService = async (data: Service): Promise<Service> => {
  const result = await prisma.service.create({
    data,
  });
  return result;
};

// get single service
const getSingleService = async (id: string) => {
  const service = await prisma.service.findUnique({
    where: {
      id,
    },
  });
  return service;
};

// update service
const updateService = async (
  id: string,
  data: Partial<Service>
): Promise<Service | null> => {
  const service = await prisma.service.update({
    where: {
      id,
    },
    data,
  });
  return service;
};

// delete service
const deleteService = async (id: string) => {
  const service = await prisma.service.delete({
    where: {
      id,
    },
  });
  return service;
};

export const InternetService = {
  createService,
  getSingleService,
  updateService,
  deleteService,
};
