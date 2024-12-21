import BlogModel from '.././models/blogModel'
import User from '../models/userModel';

export const adminDeleteBlog = async (id: string) => {
    const blog = await BlogModel.findByIdAndDelete(id)
    if (blog) {
      return blog
    }
    throw new Error('Blog Not Found!')
  };

export const updateStatus = async (id: string) => {
    const updatedStatus = await User.findByIdAndUpdate(id,{ "isBlocked" : true });
    if (!updatedStatus) {
      throw new Error('User not found');
    }
  
    return updatedStatus;
  };
  
  