import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import catchAsync from '../utils/catchAsync'
import config from '../config'

const authMiddleware = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      throw {
        statusCode: 401,
        message: 'Unauthorized',
        details: 'Token is missing',
      }
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      config.jwt_secret as string,
    ) as JwtPayload

    req.user = decoded
    next()
  },
)

export default authMiddleware
