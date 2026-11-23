const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  saveProgress,
  syncProgress,
  getLeaderboard,
  getUserStats,
  getTopPlayers,
} = require("../controllers/gameController");

// Game Progress and Leaderboard Routes
router.post("/save", authMiddleware(), saveProgress);
router.post("/sync", authMiddleware(), syncProgress);
router.get("/leaderboard/:levelId", getLeaderboard);
router.get("/stats", authMiddleware(), getUserStats);
router.get("/top-players", getTopPlayers);

module.exports = router;
