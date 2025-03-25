const db = require("../db");
const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const { title, description, company, location } = req.body;
    const newJob = await db
      .insert(Job)
      .values({ title, description, company, location })
      .returning("*");
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: "Failed to create job" });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await db.select().from(Job);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};
