const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// ADD
router.post("/add", async (req, res) => {
  const { company, role, status, date, notes } = req.body;

  const job = new Job({
    company,
    role,
    status,
    date,
    notes
  });

  await job.save();
  res.send(job);
});

// GET
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

// UPDATE ✅ FIXED
router.put("/:id", async (req, res) => {
  const { company, role, status, date, notes } = req.body;

  await Job.findByIdAndUpdate(req.params.id, {
    company,
    role,
    status,
    date,
    notes
  });

  res.send("Updated");
});

module.exports = router;