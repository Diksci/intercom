import express from "express";
import { analyzeCommand } from "../commands/analyze";

const router = express.Router();

router.get("/analyze/:token", (req, res) => {
  const { token } = req.params;
  const response = analyzeCommand(token);
  res.send(response);
});

export default router;