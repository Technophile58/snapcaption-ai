import express from "express";
import auth from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { getCaption } from "../controllers/captionController.js";

const router = express.Router();

router.post("/caption", auth, upload.single("image"), getCaption);

export default router;
