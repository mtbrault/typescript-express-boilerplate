import type { User } from './database';

export type Login = Pick<User, 'email' | 'password'>;

export type JWTPayload = {
  uuid: string
};
