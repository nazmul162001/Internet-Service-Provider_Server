import { FeedBack } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createFeedback = async (data: FeedBack): Promise<FeedBack> => {
  const result = await prisma.feedBack.create({
    //@ts-ignore
    data,
  });
  return result;
};

// update feedback
const updateFeedback = async (
  id: string,
  data: Partial<FeedBack>
): Promise<FeedBack | null> => {
  const feedback = await prisma.feedBack.update({
    where: {
      id,
    },
    //@ts-ignore
    data,
  });
  return feedback;
};

// delete feedback
const deleteFeedback = async (id: string) => {
  const feedBack = await prisma.feedBack.delete({
    where: {
      id,
    },
  });
  return feedBack;
};

// get all feedback
const getAllFeedbacks = async () => {
  const feedBacks = await prisma.feedBack.findMany();
  return feedBacks;
};

export const FeedbackService = {
  createFeedback,
  updateFeedback,
  deleteFeedback,
  getAllFeedbacks,
};
