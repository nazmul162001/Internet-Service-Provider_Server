import { Service } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (data: Service): Promise<Service> => {
  const result = await prisma.service.create({
    data,
  });
  return result;
};

export const InternetService = {
  insertIntoDB,
};
