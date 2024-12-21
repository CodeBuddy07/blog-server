import { Request, Response, NextFunction } from 'express';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {

    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({
        success: false,
        message: 'Forbidden, admin access required',
        statusCode: 403,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({
      success: false,
      message: 'Forbidden, admin access required',
      statusCode: 403,
    });
  }
};