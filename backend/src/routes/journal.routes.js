import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createJournal, getJournals, deleteJournal,getSingleJournal } from "../controllers/journal.controller.js";

const router = express.Router();

router.post("/new", verifyJWT, createJournal);
router.get("/all", verifyJWT, getJournals);
router.delete("/:id", verifyJWT, deleteJournal);
router.get("/:id", verifyJWT, getSingleJournal);

export default router;