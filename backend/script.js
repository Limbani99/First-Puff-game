const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded avatars / images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Mount API Routers
app.use("/api/users", require("./routers/users"));
app.use("/api/game", require("./routers/game"));

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "First Puff API is running 🦛💨" });
});

// MongoDB Connection
const DEFAULT_ATLAS_URI =
  "mongodb+srv://patelmann2424_db_user:argMpoZzSVqoBOJP@cluster0.a4ncyih.mongodb.net/first_puff?retryWrites=true&w=majority";
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || DEFAULT_ATLAS_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully for First Puff 🦛💨"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`First Puff server running on port ${PORT}`);
});

module.exports = app;
