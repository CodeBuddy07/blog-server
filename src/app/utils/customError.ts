/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import config from '../config';
import { ZodError } from 'zod';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500; 
  const message = err.message || 'Internal Server Error';

  if( err instanceof ZodError){
    res.status(400).json({
      success: false,
      message: 'Validation Error',
      statusCode : 400,
      error: err.issues.map(zodIssue => {return{
        path: zodIssue.path[zodIssue.path.length-1],
        message:zodIssue.message,
      }}) || null,
      stack: config.node_env === 'development' ? err.stack : undefined,
    });
  }

  if( err.name === "CastError"){
    res.status(400).json({
      success: false,
      message: 'Cast Error',
      statusCode : 400,
      error: [
        {
          path: err.path,
          message:err.message,
        }
      ] ,
      stack: config.node_env === 'development' ? err.stack : undefined,
    });
  }
 
  const x = message === "Invalid credentials"? 401 :message === "Blog Not Found!"? 404: message ==='invalid token'? 498 : statusCode

  res.status(x).json({
    success: false,
    message: message,
    statusCode : x,
    error: err.details || null,
    stack: config.node_env === 'development' ? err.stack : undefined,
  });
};

export default errorMiddleware;
