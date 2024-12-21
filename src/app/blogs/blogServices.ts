/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBlog } from './blogInterface'
import BlogModel from '.././models/blogModel'

export const createBlog = async (blogData: IBlog) => {
  const blog = new BlogModel(blogData)
  return await blog.save()
}

export const getAllBlogs = async (a:any) => {
  const { search, sortBy = 'createdAt', sortOrder = 'desc', filter } = a

  const query: any = {}
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } },
    ]
  }

  if (filter) {
    query.author = filter
  }

  const sort: { [key: string]: 1 | -1 } = {
    [sortBy as string]: sortOrder === 'asc' ? 1 : -1,
  }

  const blogs = await BlogModel.find(query)
    .sort(sort)
    .populate('author', 'name email')

  if (blogs.length !== 0) {
    return blogs
  }
  throw new Error('Blog Not Found!')
}

export const getBlogById = async (id: string) => {
  const blog = await BlogModel.findById(id)
  if (blog) {
    return blog
  }
  throw new Error('Blog Not Found!')
}

export const updateBlog = async (id: string, updateData: Partial<IBlog>) => {
  const blog = await BlogModel.findByIdAndUpdate(id, updateData, { new: true })
  if (blog) {
    return blog
  }
  throw new Error('Blog Not Found!')
}

export const deleteBlog = async (id: string) => {
  const blog = await BlogModel.findByIdAndDelete(id)
  if (blog) {
    return blog
  }
  throw new Error('Blog Not Found!')
}
