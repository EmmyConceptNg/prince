import express from "express";
import { getBlogs, getBlog, createBlogs } from "../controllers/BlogsController.js";
import { fileURLToPath } from "url";
import path from 'path';
import multer from "multer";
import fs from "fs";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.join(__dirname, "../public/images");


if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagesDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/create", upload.single("image"), createBlogs);

// Add more routes as needed

export default router;
