const jwt = require("jsonwebtoken");

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }
  return secret;
};

const createToken = (user) =>
  jwt.sign(
    { id: user._id, role: user.role, username: user.username },
    getJwtSecret(),
    { expiresIn: "7d" }
  );

module.exports = { createToken, getJwtSecret };
