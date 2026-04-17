const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,

  status: {
    type: String,
    enum: ["Pending","Interview","Rejected"],
    default: "Pending"
  },

  date: String,
  notes: String
});

module.exports = mongoose.model("Job", jobSchema);