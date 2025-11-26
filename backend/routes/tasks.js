import express from "express";
import Task from "../models/Task.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.get("/", async (req, res) => {
  const { search, status } = req.query;
  const q = { user: req.user.id };
  if (status) q.status = status;
  if (search) q.title = { $regex: search, $options: "i" };
  const list = await Task.find(q).sort({ createdAt: -1 });
  res.json(list);
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const t = await Task.create({
    user: req.user.id,
    title,
    description
  });
  res.status(201).json(t);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const t = await Task.findOneAndUpdate(
    { _id: id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(t);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findOneAndDelete({ _id: id, user: req.user.id });
  res.json({ message: "deleted" });
});

export default router;
