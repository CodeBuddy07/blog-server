/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import * as BlogService from './blogServices'
import { createBlogSchema, updateBlogSchema } from './blogValidation'
import catchAsync from '../utils/catchAsync'

export const createBlog = catchAsync(
  async (req: Request, res: Response): Promise<any> => {
    const validatedData = createBlogSchema.parse(req.body)
    const newBlog = {
      title: validatedData.title,
      content: validatedData.content,
      author: req.user?.id, //
    }
    const blog = await BlogService.createBlog(newBlog)
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      statusCode: 201,
      data: {
        _id: blog._id,
        ...newBlog,
      },
    })
  },
)

export const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const blogs = await BlogService.getAllBlogs(req.query)
  res.status(200).json({
    success: true,
    message: 'Blogs retrieved successfully',
    data: blogs,
  })
})

export const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const blog = await BlogService.getBlogById(req.params.id, req.user.id)
  res.status(200).json({
    success: true,
    message: 'Blog retrieved successfully',
    data: blog,
  })
})

export const updateBlog = catchAsync(
  async (req: Request, res: Response): Promise<any> => {
    const validatedData = updateBlogSchema.parse(req.body)
    const blog = await BlogService.updateBlog(req.params.id, validatedData)
    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      statusCode: 200,
      data: {
        _id: blog?._id,
        title: blog?.title,
        content: blog?.content,
        author: blog?.author,
      },
    })
  },
)

export const deleteBlog = catchAsync(
  async (req: Request, res: Response): Promise<any> => {
    await BlogService.deleteBlog(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      statusCode: 200,
    })
  },
)
