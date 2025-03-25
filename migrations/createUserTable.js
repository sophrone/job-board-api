const db = require("../db");
const User = require("../models/User");

async function createUsersTable() {
  try {
    await db.schema.createTable(User.name, (table) => {
      table.increments("id").primary();
      table.string("username").notNullable().unique();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.timestamp("createdAt").defaultTo(db.fn.now());
    });
    console.log("Users table created successfully");
  } catch (error) {
    console.error("Error creating users table:", error);
  }
}

createUsersTable();
