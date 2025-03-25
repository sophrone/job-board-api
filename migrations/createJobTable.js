const db = require("../db");
const Job = require("../models/Job");

async function createJobsTable() {
  try {
    await db.schema.createTable(Job.name, (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.text("description").notNullable();
      table.string("company").notNullable();
      table.string("location").notNullable();
      table.timestamp("createdAt").defaultTo(db.fn.now());
    });
    console.log("Jobs table created successfully");
  } catch (error) {
    console.error("Error creating jobs table:", error);
  }
}

createJobsTable();
