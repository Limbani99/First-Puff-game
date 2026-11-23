const { User } = require("../models/users");
const { GameProgress } = require("../models/gameProgress");

/**
 * Save level run result for logged-in user
 */
const saveProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { levelId, time, bumps, stars } = req.body;

    const numLevel = Number(levelId);
    const numTime = Number(Number(time).toFixed(1));
    const numBumps = Number(bumps) || 0;
    const numStars = Number(stars) || 1;

    // Log the run in history
    await GameProgress.create({
      userId,
      levelId: numLevel,
      stars: numStars,
      time: numTime,
      bumps: numBumps,
    });

    // Update user bests and unlocked levels
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Initialize maps if needed
    if (!user.stars) user.stars = new Map();
    if (!user.bestTimes) user.bestTimes = new Map();

    // Update star rating (keep max)
    const currentStars = user.stars.get(String(numLevel)) || 0;
    if (numStars > currentStars) {
      user.stars.set(String(numLevel), numStars);
    }

    // Update best time (keep minimum)
    const currentBest = user.bestTimes.get(String(numLevel));
    if (currentBest === undefined || numTime < currentBest) {
      user.bestTimes.set(String(numLevel), numTime);
    }

    // Unlock next level if applicable (up to 50 levels)
    if (numLevel >= user.unlockedLevel && user.unlockedLevel < 50) {
      user.unlockedLevel = numLevel + 1;
    }

    // Recalculate total stars for user profile
    const starsObj = Object.fromEntries(user.stars);
    user.totalStars = Object.values(starsObj).reduce((acc, curr) => acc + (Number(curr) || 0), 0);

    await user.save();

    res.status(200).json({
      message: "Progress saved 🎉",
      unlockedLevel: user.unlockedLevel,
      totalStars: user.totalStars,
      stars: starsObj,
      bestTimes: Object.fromEntries(user.bestTimes),
    });
  } catch (err) {
    console.error("Save progress error:", err);
    res.status(500).json({ message: "Failed to save progress", error: err.message });
  }
};

/**
 * Sync offline localStorage game progress to user's account
 */
const syncProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { unlockedLevel, stars = {}, bestTimes = {}, settings = {} } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.stars) user.stars = new Map();
    if (!user.bestTimes) user.bestTimes = new Map();

    // Merge unlocked level (keep max)
    user.unlockedLevel = Math.max(user.unlockedLevel || 1, Number(unlockedLevel) || 1);

    // Merge stars
    for (const [lvl, val] of Object.entries(stars)) {
      const existing = user.stars.get(String(lvl)) || 0;
      if (Number(val) > existing) {
        user.stars.set(String(lvl), Number(val));
      }
    }

    // Merge best times (keep minimum)
    for (const [lvl, val] of Object.entries(bestTimes)) {
      const existing = user.bestTimes.get(String(lvl));
      const newTime = Number(val);
      if (existing === undefined || newTime < existing) {
        user.bestTimes.set(String(lvl), newTime);
      }
    }

    // Update settings if supplied
    if (settings.sound !== undefined || settings.vibration !== undefined) {
      user.settings = {
        sound: settings.sound ?? user.settings.sound,
        vibration: settings.vibration ?? user.settings.vibration,
      };
    }

    // Recalculate total stars for user profile
    const starsObj = Object.fromEntries(user.stars);
    user.totalStars = Object.values(starsObj).reduce((acc, curr) => acc + (Number(curr) || 0), 0);

    await user.save();

    res.status(200).json({
      message: "Progress synced successfully ☁️",
      unlockedLevel: user.unlockedLevel,
      totalStars: user.totalStars,
      stars: starsObj,
      bestTimes: Object.fromEntries(user.bestTimes),
      settings: user.settings,
    });
  } catch (err) {
    console.error("Sync progress error:", err);
    res.status(500).json({ message: "Failed to sync progress", error: err.message });
  }
};

/**
 * Get top 10 fastest times for a level
 */
const getLeaderboard = async (req, res) => {
  try {
    const { levelId } = req.params;
    const numLevel = Number(levelId) || 1;

    const topRuns = await GameProgress.find({ levelId: numLevel })
      .sort({ time: 1, bumps: 1 })
      .limit(10)
      .populate("userId", "username avatar image");

    res.status(200).json({
      levelId: numLevel,
      leaderboard: topRuns,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch leaderboard", error: err.message });
  }
};

/**
 * Get user stats and total stars
 */
const getUserStats = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const starsObj = user.stars ? Object.fromEntries(user.stars) : {};
    const bestTimesObj = user.bestTimes ? Object.fromEntries(user.bestTimes) : {};

    const totalStars = Object.values(starsObj).reduce((acc, curr) => acc + (curr || 0), 0);

    res.status(200).json({
      unlockedLevel: user.unlockedLevel,
      totalStars,
      stars: starsObj,
      bestTimes: bestTimesObj,
      settings: user.settings,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch stats", error: err.message });
  }
};

/**
 * Get top 3 players of the game (ranked by totalStars, then unlockedLevel)
 */
const getTopPlayers = async (req, res) => {
  try {
    const topUsers = await User.find({})
      .select("username avatar image totalStars unlockedLevel stars")
      .sort({ totalStars: -1, unlockedLevel: -1, createdAt: 1 })
      .limit(3)
      .lean();

    const formatted = topUsers.map((u) => {
      let starsCount = u.totalStars || 0;
      if (starsCount === 0 && u.stars) {
        const starsMap = u.stars instanceof Map ? Object.fromEntries(u.stars) : u.stars;
        starsCount = Object.values(starsMap).reduce((a, b) => a + (Number(b) || 0), 0);
      }

      return {
        _id: u._id,
        username: u.username,
        avatar: u.avatar || "hippo",
        image: u.image || "",
        totalStars: starsCount,
        unlockedLevel: u.unlockedLevel || 1,
      };
    });

    res.status(200).json({ topPlayers: formatted });
  } catch (err) {
    console.error("Fetch top players error:", err);
    res.status(500).json({ message: "Failed to fetch top players", error: err.message });
  }
};

module.exports = {
  saveProgress,
  syncProgress,
  getLeaderboard,
  getUserStats,
  getTopPlayers,
};
