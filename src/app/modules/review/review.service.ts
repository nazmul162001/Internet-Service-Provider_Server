import { Review } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createReview = async (data: Review): Promise<Review> => {
  const result = await prisma.review.create({
    //@ts-ignore
    data,
  });
  return result;
};

// update review
const updateReview = async (
  id: string,
  data: Partial<Review>
): Promise<Review | null> => {
  const review = await prisma.review.update({
    where: {
      id,
    },
    //@ts-ignore
    data,
  });
  return review;
};

// delete review
const deleteReview = async (id: string) => {
  const review = await prisma.review.delete({
    where: {
      id,
    },
  });
  return review;
};

// get all review
const getAllReview = async () => {
  const review = await prisma.review.findMany();
  return review;
};

export const ReviewService = {
  createReview,
  getAllReview,
  updateReview,
  deleteReview,
};
