import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { StatusCodes } from 'http-status-codes';

export default (schema: joi.AnySchema) => (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }

  return next();
};
