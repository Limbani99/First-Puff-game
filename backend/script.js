const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dns = require("dns");

// Use public DNS for SRV records on Windows if needed
if (process.platform === "win32") {
  try {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  } catch {}
}

dotenv.config();

const app = express();

// CORS configuration (optimized for Vercel frontend & local development)
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, Postman)
      if (!origin) return callback(null, true);
      // Allow localhost or any vercel.app preview/production deployment
      if (
        origin.includes("localhost") ||
        origin.endsWith(".vercel.app") ||
        (process.env.CLIENT_URL && origin === process.env.CLIENT_URL)
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Fallback allow all origins
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded avatars / images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

let lastMongoError = null;

// Public Health check route (includes database status and error diagnostics)
app.get("/api/health", (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.status(isConnected ? 200 : 503).json({
    status: isConnected ? "healthy" : "database_disconnected",
    database: isConnected ? "connected" : "disconnected",
    readyState: mongoose.connection.readyState,
    error: lastMongoError,
    hint: isConnected
      ? "Database is connected and ready."
      : "Check MongoDB Atlas Network Access: make sure IP 0.0.0.0/0 is added.",
  });
});

// Check MongoDB connection state before database requests
app.use("/api", (req, res, next) => {
  if (req.path === "/health") return next();
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: lastMongoError
        ? `Database error: ${lastMongoError}. Make sure 0.0.0.0/0 is whitelisted in MongoDB Atlas Network Access.`
        : "Database is not connected. Please make sure MongoDB is running or check your MONGO_URI.",
    });
  }
  next();
});

// Mount API Routers
app.use("/api/users", require("./routers/users"));
app.use("/api/game", require("./routers/game"));

// Root / Health check route for Render
app.get("/", (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({
    name: "First Puff Game API",
    status: "healthy",
    database: isConnected ? "connected" : "disconnected",
    error: lastMongoError,
    environment: process.env.NODE_ENV || "development",
    version: "1.0.0",
    docs: {
      auth: "/api/users",
      game: "/api/game",
      health: "/api/health",
    },
  });
});

// MongoDB Connection
const DEFAULT_ATLAS_URI = "mongodb+srv://patelmann2424_db_user:argMpoZzSVqoBOJP@cluster0.a4ncyih.mongodb.net/first_puff?retryWrites=true&w=majority";
let MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || DEFAULT_ATLAS_URI;

// If deployed on Render or production and MONGO_URI is pointing to localhost, automatically override with Atlas!
if (MONGO_URI.includes("127.0.0.1") || MONGO_URI.includes("localhost")) {
  if (process.env.RENDER || process.env.NODE_ENV === "production") {
    console.log("Localhost URI detected in production/Render. Overriding with MongoDB Atlas URI.");
    MONGO_URI = DEFAULT_ATLAS_URI;
  }
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 8000,
    });
    lastMongoError = null;
    console.log("MongoDB connected successfully for First Puff 🦛💨");
  } catch (err) {
    lastMongoError = err.message;
    console.error("MongoDB connection error:", err.message);
    setTimeout(connectDB, 5000);
  }
};
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`First Puff server running on port ${PORT}`);
});

module.exports = app;
