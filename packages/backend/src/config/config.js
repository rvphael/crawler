require('dotenv').config();

function createConfig(databaseName) {
  return {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || databaseName,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  };
}

module.exports = {
  development: createConfig('crawler_db_dev'),
  test: createConfig('crawler_db_test')
};
