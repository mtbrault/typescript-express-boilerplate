import knex from 'knex';
import config from '../config';

export default knex({
  client: 'mysql',
  connection: {
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE,
  },
});
