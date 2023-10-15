import { Service } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Service): Promise<Service> => {
  const result = await prisma.service.create({
    data,
  });
  return result;
};

// update service
const updateIntoDb = async (
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
const deleteIntDb = async (id: string) => {
  const service = await prisma.service.delete({
    where: {
      id,
    },
  });
  return service;
};

export const InternetService = {
  insertIntoDB,
  updateIntoDb,
  deleteIntDb,
};
