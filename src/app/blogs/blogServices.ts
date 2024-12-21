import { IBlog } from './blogInterface';
import BlogModel from '.././models/blogModel';

export const createBlog = async (blogData: IBlog) => {
  const blog = new BlogModel(blogData);
  return await blog.save();
};

export const getAllBlogs = async () => {
  const blogs = await BlogModel.find();

  if(blogs){
    return blogs;
  }
  throw new Error("Blogs Not Found!")
};


export const getBlogById = async (id: string) => {
  const blog= await BlogModel.findById(id);
  if(blog){
    return blog;
  }
  throw new Error("Blog Not Found!")
};

export const updateBlog = async (id: string, updateData: Partial<IBlog>) => {

  const blog = await BlogModel.findByIdAndUpdate(id, updateData, { new: true });
  if(blog){
    return blog;
  }
  throw new Error("Blog Not Found!")
};

export const deleteBlog = async (id: string) => {
  const blog = await BlogModel.findByIdAndDelete(id);
  if(blog){
    return blog;
  }
  throw new Error("Blog Not Found!")

};
