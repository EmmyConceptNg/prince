// server.js
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

// Import routes
import userRoutes from "./routes/User.js";
import subscriptionRoutes from "./routes/Subscription.js";
import planRoutes from "./routes/Plan.js";
import blogsRoutes from "./routes/Blogs.js";
import waitlistRoutes from "./routes/Waitlist.js";
import sessionRoutes from "./routes/Sessions.js";
import updatesController from "./routes/Update.js";
import Session from "./models/Session.js";

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://certriddle.com",
  "https://www.certriddle.com",
  "https://prince-i58e.onrender.com",
];

// Middleware setup
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({
  path:
    process.env.NODE_ENV === "production" ? ".env.production" : ".env.local",
});

// Serve static files
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "prince-session",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      collectionName: "sessions",
    }),
    cookie: {
      secure: process.env.NODE_ENV === "development",
      httpOnly: true,
    },
  })
);

// Middleware to generate token and set browserId cookie
app.use((req, res, next) => {
  if (!req.session.token) {
    req.session.token = crypto.randomBytes(16).toString("hex");
    req.session.browserId = crypto.randomBytes(16).toString("hex");
    res.cookie("browserId", req.session.browserId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
    });
  }
  next();
});

// Endpoint to fetch session token
app.get("/api/sessions", (req, res) => {
  res.json({ token: req.session.token });
});

// Validate session and browser ID
app.get("/api/sessions/validate", async (req, res) => {
  const { token: clientToken } = req.query;
  const clientBrowserId = req.cookies.browserId;

  try {
    const sessionDocs = await Session.find();

    const sessionDoc = sessionDocs.find(doc => {
      const sessionData = JSON.parse(doc.session);
      return sessionData.token === clientToken && sessionData.browserId === clientBrowserId;
    });

    if (!sessionDoc || new Date(sessionDoc.expires) < new Date()) {
      return res.status(404).json({ valid: false });
    }

    res.json({ valid: true });
  } catch (error) {
    console.error("Error validating session:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Regenerate session
app.get("/api/sessions/regenerate", (req, res) => {
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to regenerate session" });
    }
    req.session.token = crypto.randomBytes(16).toString("hex");
    req.session.browserId = crypto.randomBytes(16).toString("hex");
    res.cookie("browserId", req.session.browserId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    res.json({ token: req.session.token });
  });
});


// Log incoming requests
app.use((req, res, next) => {
  console.log(`Request from origin: ${req.headers.origin}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Certriddle" });
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
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
