const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

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

// Mount API Routers
app.use("/api/users", require("./routers/users"));
app.use("/api/game", require("./routers/game"));

// Root / Health check route for Render
app.get("/", (req, res) => {
  res.json({
    name: "First Puff Game API",
    status: "healthy",
    environment: process.env.NODE_ENV || "development",
    version: "1.0.0",
    docs: {
      auth: "/api/users",
      game: "/api/game",
    },
  });
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/first_puff";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully for First Puff 🦛💨");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`First Puff server running on port ${PORT}`);
});

module.exports = app;
