const { Schema } = require("drizzle-orm");

const Job = new Schema({
  id: {
    type: "serial",
    primaryKey: true,
  },
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "text",
    required: true,
  },
  company: {
    type: "string",
    required: true,
  },
  location: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: "timestamp",
    default: () => new Date(), // Automatically set to current date
  },
  updatedAt: {
    type: "timestamp",
    default: () => new Date(), // Automatically set to current date
    onUpdate: () => new Date(), // Update timestamp on record update
  },
});

module.exports = Job;
