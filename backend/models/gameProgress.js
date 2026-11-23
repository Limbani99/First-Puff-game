const mongoose = require("mongoose");

const gameProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    levelId: {
      type: Number,
      required: true,
      min: 1,
      max: 50,
    },
    stars: {
      type: Number,
      required: true,
      min: 1,
      max: 3,
    },
    time: {
      type: Number,
      required: true,
    },
    bumps: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Compound index for fast leaderboard lookups (fastest times per level)
gameProgressSchema.index({ levelId: 1, time: 1 });

const GameProgress = mongoose.model("GameProgress", gameProgressSchema);

module.exports = { GameProgress };
