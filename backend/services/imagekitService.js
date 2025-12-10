import dotenv from "dotenv";
dotenv.config();

import ImageKit from "imagekit";
import fs from "fs";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export async function uploadToImageKit(filePath, fileName) {
  const buffer = fs.readFileSync(filePath);

  const upload = await imagekit.upload({
    file: buffer,
    fileName,
    folder: "/image-caption-ai",
  });

  return upload.url;
}
