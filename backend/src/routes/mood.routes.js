import express from "express";
import { getMoodAnalytics } from "../controllers/mood.controller.js";

const router = express.Router();

router.get("/analytics/:chatId", getMoodAnalytics);

export default router;