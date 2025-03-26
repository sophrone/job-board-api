const db = require("../db");
const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const { title, description, company, location } = req.body;

    // Validate input data
    if (!title || !description || !company || !location) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newJob = await db
      .insert(Job)
      .values({ title, description, company, location })
      .returning("*");

    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Failed to create job" });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await db.select().from(Job);
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

exports.updateJob = async (req, res) => {
  const { id } = req.params; // Assuming you're using URL parameters for job ID
  const { title, description, company, location } = req.body;

  // Validate input data
  if (!title && !description && !company && !location) {
    return res
      .status(400)
      .json({ error: "At least one field is required for update" });
  }

  try {
    const updatedJob = await db
      .update(Job)
      .set({ title, description, company, location })
      .where({ id })
      .returning("*");

    if (updatedJob.length === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json(updatedJob);
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ error: "Failed to update job" });
  }
};

exports.deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedJob = await db.delete(Job).where({ id });

    if (deletedJob.rowCount === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: "Failed to delete job" });
  }
};
