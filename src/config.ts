import 'dotenv/config';

type Config = {
  LOG_LEVEL: string;
  HOST: string;
  PORT: number;
  MYSQL_HOST: string;
  MYSQL_PORT: number;
  MYSQL_USER: string;
  MYSQL_PASSWORD: string;
  MYSQL_DATABASE: string;
  JWT_SECRET: string;
};

const config = Object.freeze({
  LOG_LEVEL: process.env.LOG_LEVEL,
  HOST: process.env.HOST,
  PORT: Number(process.env.PORT) || undefined,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: Number(process.env.MYSQL_PORT) || undefined,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  JWT_SECRET: process.env.JWT_SECRET,
});

Object.entries(config).forEach(([key, value]) => {
  if (value === undefined) {
    throw new Error(`Missing en variable ${key} value`);
  }
});

export default config as Config;
