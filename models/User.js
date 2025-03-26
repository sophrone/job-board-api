const { Schema } = require("drizzle-orm");

const User = new Schema({
  id: {
    type: "serial",
    primaryKey: true,
  },
  username: {
    type: "string",
    required: true,
    unique: true, // Ensure unique usernames
  },
  email: {
    type: "string",
    required: true,
    unique: true, // Ensure unique emails
  },
  password: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: "timestamp",
    default: () => new Date(),
  },
  updatedAt: {
    type: "timestamp",
    default: () => new Date(),
    onUpdate: () => new Date(),
  },
});

module.exports = User;
