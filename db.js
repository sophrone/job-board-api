const { drizzle } = require("drizzle-orm"); // Adjust import if needed
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Initialize drizzle with the pool
const db = drizzle(pool);

module.exports = db;
