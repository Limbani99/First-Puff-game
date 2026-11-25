const jwt = require("jsonwebtoken");
const { getJwtSecret } = require("../utils/authToken");

/**
 * Career-Bridge style Auth Middleware with optional role checking
 * @param {string|string[]} roles - Allowed role or array of allowed roles
 */
const authMiddleware = (roles = []) => {
  if (typeof roles === "string") roles = [roles];

  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
      const decoded = jwt.verify(token, getJwtSecret());
      req.user = decoded;

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
      }

      next();
    } catch (err) {
      if (err.message === "JWT_SECRET is not configured") {
        console.error("Authentication unavailable: JWT_SECRET is not configured");
        return res.status(503).json({ message: "Authentication service is not configured" });
      }
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};

module.exports = authMiddleware;
