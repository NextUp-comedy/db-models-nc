import Joi from 'joi';

import path from 'path';
import dotenv from 'dotenv';
import { IDatabase } from '../interfaces';

if (!process.env.NODE_ENV) {
  throw new Error('You have to set NODE_ENV');
}
console.log(process.cwd());

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`) });
}

const envVarsSchema = Joi.object({
  DATABASE_URL: Joi.string().uri().required(),
}).unknown().required();

const config = (): IDatabase => ({
  url: process.env.DATABASE_URL,
});
export default config();
