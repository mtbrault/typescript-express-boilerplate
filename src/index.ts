import express from 'express';
import config from './config';
import router from './router';

const { HOST, PORT } = config;

const app = express()
  .disable('x-powered-by')
  .use(express.json())
  .use('/api/v1', router);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

export default app;
