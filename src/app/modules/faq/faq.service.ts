import { Faq } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createFaq = async (data: Faq): Promise<Faq> => {
  const result = await prisma.faq.create({
    //@ts-ignore
    data,
  });
  return result;
};

// update faq
const updateFaq = async (
  id: string,
  data: Partial<Faq>
): Promise<Faq | null> => {
  const faq = await prisma.faq.update({
    where: {
      id,
    },
    //@ts-ignore
    data,
  });
  return faq;
};

// delete faq
const deleteFaq = async (id: string) => {
  const faq = await prisma.faq.delete({
    where: {
      id,
    },
  });
  return faq;
};

// get all faq
const getAllFaq = async () => {
  const faqs = await prisma.faq.findMany();
  return faqs;
};

export const FaqService = {
  createFaq,
  getAllFaq,
  deleteFaq,
  updateFaq,
};
