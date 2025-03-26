const db = require("../db");

async function createJobTable() {
  await db.$client`CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;
}

createJobTable()
  .then(() => {
    console.log("Job table created successfully.");
  })
  .catch((error) => {
    console.error("Migration failed:", error);
  });
