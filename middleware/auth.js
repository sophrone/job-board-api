const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ error: "No token provided" });
  }

  // Remove "Bearer " prefix if present
  const bearerToken = token.startsWith("Bearer ") ? token.slice(7) : token;

  jwt.verify(bearerToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // Handle different types of token errors
      if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ error: "Invalid token" });
      } else if (err.name === "TokenExpiredError") {
        return res.status(401).json({ error: "Token has expired" });
      }
      return res.status(500).json({ error: "Failed to authenticate token" });
    }

    req.userId = decoded.id; // Store user ID from token in request object
    next(); // Proceed to the next middleware or route handler
  });
};
