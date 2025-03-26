const Job = {
  id: {
    type: "serial",
    primaryKey: true, // Auto-incrementing primary key
  },
  title: {
    type: "string",
    notNull: true, // Title is required
  },
  description: {
    type: "text",
    notNull: true, // Description is required
  },
  company: {
    type: "string",
    notNull: true, // Company name is required
  },
  location: {
    type: "string",
    notNull: true, // Location is required
  },
  createdAt: {
    type: "timestamp",
    default: () => new Date(), // Default to current timestamp
  },
  updatedAt: {
    type: "timestamp",
    default: () => new Date(), // Default to current timestamp
    onUpdate: () => new Date(), // Update timestamp on row update
  },
};

module.exports = Job;
