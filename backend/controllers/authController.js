const { User } = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// Generate JWT token matching Career-Bridge pattern
const createToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role, username: user.username },
    process.env.JWT_SECRET || "default_fallback_secret",
    { expiresIn: "7d" }
  );
};

// ================== Player Auth ===================

// Register player
const register = async (req, res) => {
  try {
    const { username, email, password, avatar, gameSave } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Username, email, and password are required" });
    }

    const emailExists = await User.findOne({ email: email.toLowerCase() });
    if (emailExists) {
      return res.status(400).json({ message: "An account with this email already exists" });
    }

    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    const validAvatars = ["hippo", "frog", "pig", "penguin"];
    const chosenAvatar = validAvatars.includes(avatar) ? avatar : "hippo";

    const initialStars = gameSave?.stars && typeof gameSave.stars === "object" ? gameSave.stars : {};
    const totalStars = Object.values(initialStars).reduce((acc, curr) => acc + (Number(curr) || 0), 0);

    // Create user with any existing offline progress
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      role: "player",
      avatar: chosenAvatar,
      unlockedLevel: gameSave?.unlockedLevel || 1,
      totalStars,
      stars: initialStars,
      bestTimes: gameSave?.bestTimes || {},
      settings: gameSave?.settings || { sound: true, vibration: true },
    });

    const token = createToken(user);

    // Sanitize user object for response
    const userData = user.toObject();
    delete userData.password;
    userData.totalStars = totalStars;
    userData.stars = initialStars;

    res.status(201).json({
      message: "Welcome aboard! Account created and saved to DB 🦛💨",
      token,
      user: userData,
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Failed to register account", error: err.message });
  }
};

// Login player / user (with auto-create if new & automatic progress sync to DB)
const login = async (req, res) => {
  try {
    const { email, password, gameSave } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await User.findOne({ email: email.toLowerCase() });

    // If user does not exist yet, automatically register them and add them to DB!
    if (!user) {
      const cleanPrefix = email.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "");
      const generatedUsername = cleanPrefix || "Player" + Math.floor(100 + Math.random() * 900);

      // Check if username taken, append suffix if so
      let finalUsername = generatedUsername;
      const userExists = await User.findOne({ username: finalUsername });
      if (userExists) {
        finalUsername = `${generatedUsername}_${Math.floor(100 + Math.random() * 900)}`;
      }

      const initialStars = gameSave?.stars && typeof gameSave.stars === "object" ? gameSave.stars : {};
      const totalStars = Object.values(initialStars).reduce((acc, curr) => acc + (Number(curr) || 0), 0);

      user = await User.create({
        username: finalUsername,
        email: email.toLowerCase(),
        password,
        role: "player",
        avatar: "hippo",
        unlockedLevel: gameSave?.unlockedLevel || 1,
        totalStars,
        stars: initialStars,
        bestTimes: gameSave?.bestTimes || {},
        settings: gameSave?.settings || { sound: true, vibration: true },
      });

      const token = createToken(user);
      const userData = user.toObject();
      delete userData.password;
      userData.totalStars = totalStars;
      userData.stars = initialStars;

      return res.status(200).json({
        message: "New account created and game data added to DB! 🎉",
        token,
        user: userData,
        isNewUser: true,
      });
    }

    // Existing user: verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Merge offline game progress into DB if provided
    if (gameSave) {
      if (!user.stars) user.stars = new Map();
      if (!user.bestTimes) user.bestTimes = new Map();

      user.unlockedLevel = Math.max(user.unlockedLevel || 1, Number(gameSave.unlockedLevel) || 1);

      if (gameSave.stars && typeof gameSave.stars === "object") {
        for (const [lvl, val] of Object.entries(gameSave.stars)) {
          const existing = user.stars.get(String(lvl)) || 0;
          if (Number(val) > existing) {
            user.stars.set(String(lvl), Number(val));
          }
        }
      }

      if (gameSave.bestTimes && typeof gameSave.bestTimes === "object") {
        for (const [lvl, val] of Object.entries(gameSave.bestTimes)) {
          const existing = user.bestTimes.get(String(lvl));
          const newTime = Number(val);
          if (existing === undefined || newTime < existing) {
            user.bestTimes.set(String(lvl), newTime);
          }
        }
      }

      if (gameSave.settings) {
        user.settings = {
          sound: gameSave.settings.sound ?? user.settings?.sound ?? true,
          vibration: gameSave.settings.vibration ?? user.settings?.vibration ?? true,
        };
      }
    }

    // Always compute current total stars on login
    const starsObj = user.stars instanceof Map ? Object.fromEntries(user.stars) : (user.stars || {});
    user.totalStars = Object.values(starsObj).reduce((acc, curr) => acc + (Number(curr) || 0), 0);

    await user.save();

    const token = createToken(user);
    const userData = user.toObject();
    delete userData.password;
    userData.stars = starsObj;
    userData.bestTimes = user.bestTimes instanceof Map ? Object.fromEntries(user.bestTimes) : (user.bestTimes || {});
    userData.totalStars = user.totalStars;

    res.status(200).json({
      message: "Logged in and game data synced to DB 🎉",
      token,
      user: userData,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// Get current profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userData = user.toObject();
    const starsObj = userData.stars instanceof Map ? Object.fromEntries(userData.stars) : (userData.stars || {});
    const bestTimesObj = userData.bestTimes instanceof Map ? Object.fromEntries(userData.bestTimes) : (userData.bestTimes || {});
    userData.stars = starsObj;
    userData.bestTimes = bestTimesObj;
    userData.totalStars = Object.values(starsObj).reduce((acc, curr) => acc + (Number(curr) || 0), 0);
    res.status(200).json({ user: userData });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch profile", error: err.message });
  }
};

// Update profile (avatar, username, settings, or uploaded image)
const updateProfile = async (req, res) => {
  try {
    const updates = {};
    if (req.body.username) updates.username = req.body.username;
    if (req.body.avatar) updates.avatar = req.body.avatar;
    if (req.body.settings) {
      try {
        updates.settings = typeof req.body.settings === "string"
          ? JSON.parse(req.body.settings)
          : req.body.settings;
      } catch {}
    }
    if (req.file) {
      updates.image = `/uploads/${req.file.filename}`;
    }

    const user = await User.findByIdAndUpdate(req.user.id, { $set: updates }, { new: true }).select("-password");
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Failed to update profile", error: err.message });
  }
};

// ================== Password Management ===================

// Forget password
const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ message: "No account found with this email" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
    const resetUrl = `${clientUrl}/reset-password/${resetToken}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 12px;">
        <h2 style="color: #0284c7; text-align: center;">First Puff Password Reset</h2>
        <p>Hello <b>${user.username}</b>,</p>
        <p>You requested a password reset. Click the button below to choose a new password:</p>
        <div style="text-align: center; margin: 25px 0;">
          <a href="${resetUrl}" style="background-color: #0284c7; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Reset Password</a>
        </div>
        <p style="color: #666; font-size: 13px;">This link will expire in 1 hour. If you did not request this, please ignore this email.</p>
      </div>
    `;

    await sendEmail({
      to: user.email,
      subject: "First Puff - Reset Your Password",
      html,
    });

    res.status(200).json({
      message: "Password reset link sent to your email",
    });
  } catch (err) {
    console.error("Forget password error:", err);
    res.status(500).json({ message: "Error processing password reset", error: err.message });
  }
};

// Reset password with token
const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: "New password is required" });
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired reset token" });
    }

    user.password = password; // Will be hashed by pre-save hook
    user.resetPasswordToken = "";
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).json({ message: "Password reset successfully. You can now log in!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to reset password", error: err.message });
  }
};

// Change password (authenticated)
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "Old and new passwords are required" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect current password" });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to change password", error: err.message });
  }
};

// ================== Admin Actions ===================

const adminRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Admin email already exists" });

    const admin = await User.create({ username, email, password, role: "admin" });
    res.status(200).json({ message: "Admin created", admin });
  } catch (err) {
    res.status(500).json({ message: "Failed to create admin", error: err.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, role: "admin" });
    if (!user) return res.status(400).json({ message: "Admin account not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = createToken(user);
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: "Admin login failed", error: err.message });
  }
};

const playerList = async (req, res) => {
  try {
    const players = await User.find({ role: "player" }).select("-password").sort({ createdAt: -1 });
    res.status(200).json({ players });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch players", error: err.message });
  }
};

const deletePlayer = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Player removed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete player", error: err.message });
  }
};

module.exports = {
  register,
  login,
  getProfile,
  updateProfile,
  forgetPassword,
  resetPassword,
  changePassword,
  adminRegister,
  adminLogin,
  playerList,
  deletePlayer,
};
