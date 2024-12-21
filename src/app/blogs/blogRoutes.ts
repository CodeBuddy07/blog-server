import express from 'express';
import * as BlogController from './blogController';
import authMiddleware from '../middlewares/authMiddleware';
import validateRequest from '../utils/validateRequest';
import { createBlogSchema, updateBlogSchema } from './blogValidation';



const router = express.Router();

router.post('/', authMiddleware, validateRequest(createBlogSchema), BlogController.createBlog);
router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getBlogById);
router.patch('/:id', authMiddleware, validateRequest(updateBlogSchema), BlogController.updateBlog);
router.delete('/:id', authMiddleware, BlogController.deleteBlog);

export default router;
