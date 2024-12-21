import express from 'express'
import { adminMiddleware } from '../middlewares/adminMiddleware'
import * as AdminController from './adminController'
import authMiddleware from '../middlewares/authMiddleware'

const router = express.Router()

router.delete(
  '/blogs/:id',
  authMiddleware,
  adminMiddleware,
  AdminController.adminDeleteBlog,
)
router.patch(
  '/users/:userId/block',
  authMiddleware,
  adminMiddleware,
  AdminController.updateBlockStatus,
)

export default router
