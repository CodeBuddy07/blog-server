import { Request, Response, NextFunction } from 'express';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({
        success: false,
        message: 'Forbidden, admin access required',
        statusCode: 403,
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(403).json({
      success: false,
      message: 'Forbidden, admin access required',
      statusCode: 403,
    });
  }
};
