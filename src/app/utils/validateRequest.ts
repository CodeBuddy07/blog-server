import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

const validateRequest = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next() 
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: 'Validation error',
          statusCode: 400,
          errors: error.errors.map(err => ({
            path: err.path[err.path.length-1],
            message: err.message,
          })),
        })
      } else {
        next(error) 
      }
    }
  }
}

export default validateRequest
