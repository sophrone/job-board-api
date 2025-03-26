const db = require("../db");

async function createUserTable() {
  await db.$client`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;
}

createUserTable()
  .then(() => {
    console.log("User table created successfully.");
  })
  .catch((error) => {
    console.error("Migration failed:", error);
  });
