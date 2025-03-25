const express = require("express");
const { createJob, getJobs } = require("../controllers/jobController");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

router.post("/", verifyToken, createJob); // Protected route
router.get("/", getJobs);

module.exports = router;
