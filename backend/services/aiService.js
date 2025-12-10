// import axios from "axios";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export async function generateCaptionFromURL(imageUrl) {
//   try {
//     const mime =
//       imageUrl.toLowerCase().endsWith(".png") ? "image/png" : "image/jpeg";

//     // Download file
//     const img = await axios.get(imageUrl, { responseType: "arraybuffer" });
//     const base64 = Buffer.from(img.data).toString("base64");

//     // Use Gemini 2.5 Flash model
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//     const result = await model.generateContent([
//       { text: "Write a short caption for this image." },
//       {
//         inlineData: {
//           mimeType: mime,
//           data: base64,
//         },
//       },
//     ]);

//     return result.response.text();
//   } catch (err) {
//     console.log("🔥 Gemini Error:", err.response?.data || err.message);
//     throw new Error("Gemini caption failed");
//   }
// }
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateCaptionFromURL(imageUrl) {
  try {
    const mime = imageUrl.endsWith(".png") ? "image/png" : "image/jpeg";

    // Download the image
    const img = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const base64 = Buffer.from(img.data).toString("base64");

    // Get the model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // New format — NO ROLES, NO PARTS
    const result = await model.generateContent([
      {
        text:
          "Generate ONE short Instagram-style caption (max 10–12 words). " +
          "Add 1 emoji + 2 short trending hashtags. " +
          "Do NOT give multiple options. " +
          "Return only the caption.",
      },
      {
        inlineData: {
          mimeType: mime,
          data: base64,
        },
      },
    ]);

    return result.response.text();
  } catch (err) {
    console.log("🔥 Gemini Error:", err.response?.data || err.message);
    throw new Error("Gemini caption failed");
  }
}
  