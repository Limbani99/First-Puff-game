const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const upload = require("../middleware/upload");
const {
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
} = require("../controllers/authController");

// Public Player Auth Routes (Career-Bridge pattern)
router.post("/register", register);
router.post("/login", login);

// Password Management Routes
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/change-password", authMiddleware(), changePassword);

// Profile Management Routes
router.get("/profile", authMiddleware(), getProfile);
router.put("/profile", authMiddleware(), upload.single("image"), updateProfile);

// Admin Routes
router.post("/admin/register", adminRegister);
router.post("/admin/login", adminLogin);
router.get("/players", authMiddleware("admin"), playerList);
router.delete("/player/:id", authMiddleware("admin"), deletePlayer);

module.exports = router;
