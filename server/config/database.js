const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
  logging: false
});

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
}

module.exports = { db: sequelize, initializeDatabase };