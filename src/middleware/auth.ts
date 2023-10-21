import { Request, Response, NextFunction } from 'express';

export default (req: Request, _: Response, next: NextFunction): void => {
  next();
};
