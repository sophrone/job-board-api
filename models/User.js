const { Schema } = require("drizzle-orm");

const User = new Schema({
  id: {
    type: "serial",
    primaryKey: true,
  },
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  createdAt: {
    type: "timestamp",
    default: () => new Date(),
  },
});

module.exports = User;
