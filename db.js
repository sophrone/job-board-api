require("dotenv").config();
const { drizzle } = require("drizzle-orm/postgres-js");
const postgres = require("postgres");

const sql = postgres({
  host: "localhost",
  port: 5432,
  user: "samueldaniel",
  password: "", // Replace with your actual password
  database: "samueldaniel",
});

// Initialize drizzle with the postgres client
const db = drizzle(sql);

module.exports = db;
