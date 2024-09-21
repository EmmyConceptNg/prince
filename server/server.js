// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/User.js";
import subscriptionRoutes from "./routes/Subscription.js";
import planRoutes from "./routes/Plan.js";
import blogsRoutes from "./routes/Blogs.js";
import waitlistRoutes from "./routes/Waitlist.js";
import updatesController from "./routes/Update.js";
import path from "path";
import { fileURLToPath } from "url";

// CONFIGURATION

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://certriddle.com",
  "https://www.certriddle.com",
  "https://prince-i58e.onrender.com",
  // Add more origins as needed
];

// CORS setup
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env.local";
dotenv.config({ path: envFile });

// Serve static files from the "public/images" directory
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`Request from origin: ${req.headers.origin}`);
  next();
});

// Route handling
app.use("/api/auth", userRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/plan", planRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/waitlist", waitlistRoutes);
app.use("/api/updates", updatesController);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error message:", err.message);
  console.error("Error stack:", err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

// MongoDB setup
const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("================================================");
    console.log("============== Connected to MongoDB ==============");
    app.listen(PORT, () => {
      console.log("================================================");
      console.log(`====== Server is running on ${PORT} ==============`);
      console.log("================================================");
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
