export default Object.freeze({
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: Number(process.env.PORT) || 8080,
});
