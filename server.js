const express = require("express");
const db = require("./db");
const redisClient = require("./redisClient");
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobs");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
