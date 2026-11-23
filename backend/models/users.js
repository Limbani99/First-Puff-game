const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["player", "admin"],
      default: "player",
    },
    avatar: {
      type: String,
      enum: ["hippo", "frog", "pig", "penguin"],
      default: "hippo",
    },
    image: {
      type: String,
      default: "",
    },
    // Game progression stats
    unlockedLevel: {
      type: Number,
      default: 1,
      min: 1,
      max: 10,
    },
    stars: {
      type: Map,
      of: Number,
      default: {},
    },
    bestTimes: {
      type: Map,
      of: Number,
      default: {},
    },
    settings: {
      sound: {
        type: Boolean,
        default: true,
      },
      vibration: {
        type: Boolean,
        default: true,
      },
    },
    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Hash password before saving (matches Career-Bridge pattern)
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Helper method to compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
