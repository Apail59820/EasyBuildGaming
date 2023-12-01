module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '123',
    database: 'easybuild_database',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
};
