/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import config from '../config';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500; 
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message: message,
    statusCode,
    error: err.details || null,
    stack: config.node_env === 'development' ? err.stack : undefined,
  });
};

export default errorMiddleware;
