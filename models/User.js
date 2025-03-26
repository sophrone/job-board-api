const User = {
  id: {
    type: "serial",
    primaryKey: true, // Auto-incrementing primary key
  },
  username: {
    type: "string",
    notNull: true,
    unique: true, // Ensure unique usernames
  },
  email: {
    type: "string",
    notNull: true,
    unique: true, // Ensure unique emails
  },
  password: {
    type: "string",
    notNull: true,
  },
  createdAt: {
    type: "timestamp",
    default: () => new Date(), // Default to current timestamp
  },
  updatedAt: {
    type: "timestamp",
    default: () => new Date(),
    onUpdate: () => new Date(), // Update timestamp on row update
  },
};

module.exports = User;
