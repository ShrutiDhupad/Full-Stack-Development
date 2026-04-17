import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Failed to load feedback records." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { studentName, prn, courseName, rating, suggestions } = req.body;

    if (!studentName || !prn || !courseName || !rating || !suggestions) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const feedback = await Feedback.create({
      studentName,
      prn,
      courseName,
      rating: Number(rating),
      suggestions,
    });

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: "Failed to save feedback." });
  }
});

export default router;
