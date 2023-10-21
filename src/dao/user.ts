import { v4 as uuid } from 'uuid';
import db from '../services/database';
import type { User } from '../models/database';

export const createUser = async (email: string, password: string) => db<User>('user').insert({
  uuid: uuid(),
  email,
  password,
});

export const getUserPassword = async (email: string) => db<User>('user').select('password').where('email', email).first();
