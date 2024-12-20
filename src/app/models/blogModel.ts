import mongoose, { Schema, Document } from 'mongoose';

interface IBlog extends Document {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

const Blog = mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
