import { Request, Response, NextFunction } from 'express';
import path from 'path';
import createError from 'http-errors';
import tsToJoi, { type Config } from 'typescript-schema-to-joi';

export default (config: Omit<Config, 'tsconfig'>) => (req: Request, res: Response, next: NextFunction): void => {
  const schema = tsToJoi({
    ...config,
    tsconfig: `${path.resolve(__dirname)}/tsconfig.json`,
  });
  const { error } = schema.validate(req.body);

  if (error) {
    throw createError.BadRequest(error.message);
  }

  next();
};
