import type { User } from './database';

export type Login = Pick<User, 'email' | 'password'>;
