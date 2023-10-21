import 'dotenv/config';

export default Object.freeze({
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: Number(process.env.PORT) || 8080,
  MYSQL_HOST: process.env.MYSQL_HOST || 'localhost' as string,
  MYSQL_PORT: Number(process.env.MYSQL_PORT) || 3306,
  MYSQL_USER: process.env.MYSQL_USER || 'root' as string,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'password' as string,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'database' as string,
});
