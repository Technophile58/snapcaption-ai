import fs from "fs";
import { uploadToImageKit } from "../services/imagekitService.js";
import { generateCaptionFromURL } from "../services/aiService.js";

export async function getCaption(req, res) {
  try {
    const localPath = req.file.path;
    const fileName = req.file.originalname;

    const imageUrl = await uploadToImageKit(localPath, fileName);

    const caption = await generateCaptionFromURL(imageUrl);

    fs.unlinkSync(localPath);

    res.json({ caption, imageUrl });
  } catch (err) {
    console.log("🔥 Caption Controller Error:", err);
    res.status(500).json({ message: "Error generating caption" });
  }
}
