import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { hashSync, genSaltSync, compareSync } from 'bcrypt';
import { createUser, getUserPassword } from '../dao/user';
import type { Login } from '../models/auth';
import { generateToken } from '../services/auth';

export const login = async (
  req: Request<{}, {}, Login>,
  res: Response,
): Promise<Response | void> => {
  try {
    const user = await getUserPassword(req.body.email);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: `User with email ${req.body.email} not found` });
    }
    if (!compareSync(req.body.password, user.password)) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid password' });
    }

    const token = generateToken({
      uuid: user.uuid,
    });

    return res.status(StatusCodes.OK).json({ token });
  } catch (e: any) {
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const register = async (req: Request<{}, {}, Login>, res: Response): Promise<Response> => {
  try {
    const user = await getUserPassword(req.body.email);
    if (user) {
      return res.status(StatusCodes.CONFLICT).json({ message: `User with email ${req.body.email} already exists` });
    }
    const encryptedPassword = hashSync(req.body.password, genSaltSync(10));
    await createUser(req.body.email, encryptedPassword);
    return res.status(StatusCodes.CREATED).json({ message: 'User created' });
  } catch (e: any) {
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
