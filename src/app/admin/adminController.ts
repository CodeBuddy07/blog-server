/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import * as AdminService from './adminServices'

export const adminDeleteBlog = catchAsync(
  async (req: Request, res: Response): Promise<any> => {
    await AdminService.adminDeleteBlog(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      statusCode: 200,
    })
  },
)

export const updateBlockStatus = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.params
    await AdminService.updateStatus(userId)

    res.status(200).json({
      success: true,
      message: 'User blocked successfully',
      statusCode: 200,
    })
  },
)
