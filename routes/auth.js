const express = require("express");
const { register, login } = require("../controllers/userController");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Validation middleware
const validateRegistration = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

const validateLogin = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

// Error handling middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route for user registration
router.post(
  "/register",
  validateRegistration,
  handleValidationErrors,
  register
);

// Route for user login
router.post("/login", validateLogin, handleValidationErrors, login);

module.exports = router;
