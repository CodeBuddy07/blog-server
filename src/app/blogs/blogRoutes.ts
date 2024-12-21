import express from 'express'
import * as BlogController from './blogController'
import authMiddleware from '../middlewares/authMiddleware'

const router = express.Router()

router.post('/', authMiddleware, BlogController.createBlog)
router.get('/', BlogController.getAllBlogs)
router.get('/:id', authMiddleware, BlogController.getBlogById)
router.patch('/:id', authMiddleware, BlogController.updateBlog)
router.delete('/:id', authMiddleware, BlogController.deleteBlog)

export default router
