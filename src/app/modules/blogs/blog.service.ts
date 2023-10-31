import { Blog } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBlog = async (data: Blog): Promise<Blog> => {
  const result = await prisma.blog.create({
    //@ts-ignore
    data,
  });
  return result;
};

// update blog
const updateBlog = async (
  id: string,
  data: Partial<Blog>
): Promise<Blog | null> => {
  const blog = await prisma.blog.update({
    where: {
      id,
    },
    //@ts-ignore
    data,
  });
  return blog;
};

// delete blog
const deleteBlog = async (id: string) => {
  const blog = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return blog;
};

// get all blog
const getAllBlog = async () => {
  const blogs = await prisma.blog.findMany({
    include: {
      user: true,
    },
  });
  return blogs;
};

const getSingleBlog = async (id: string) => {
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return blog;
};

export const BlogService = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
