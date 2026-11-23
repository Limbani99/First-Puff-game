const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

// Middleware (matching Career-Bridge architecture)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded avatars / images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Mount API Routers
app.use("/api/users", require("./routers/users"));
app.use("/api/game", require("./routers/game"));

// Root / Health check route
app.get("/", (req, res) => {
  res.json({
    name: "First Puff Game API",
    status: "running",
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
app.listen(PORT, () => {
  console.log(`First Puff server running on port ${PORT}`);
});

module.exports = app;
