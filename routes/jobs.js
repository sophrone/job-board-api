const express = require("express");
const {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

// Protected route for creating a job
router.post("/", verifyToken, createJob);

// Public route for getting all jobs
router.get("/", getJobs);

// Protected route for updating a job
router.put("/:id", verifyToken, updateJob);

// Protected route for deleting a job
router.delete("/:id", verifyToken, deleteJob);

module.exports = router;
