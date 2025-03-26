require("dotenv").config();
const { drizzle } = require("drizzle-orm/postgres-js");
const postgres = require("postgres");

const sql = postgres({
  host: "localhost", // or your host
  port: 5432, // default PostgreSQL port
  user: "samueldaniel",
  password: "", // Replace with your actual password
  database: "samueldaniel", // Database name
});

// Initialize drizzle with the postgres client
const db = drizzle(sql);

module.exports = db;
