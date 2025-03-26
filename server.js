const express = require("express");
const db = require("./db"); // Database connection
const redisClient = require("./redisClient"); // Redis client (if needed)
const authRoutes = require("./routes/auth"); // Auth routes
const jobRoutes = require("./routes/jobs"); // Job routes
require("dotenv").config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
