const express = require("express");
const { registerUser, loginUser } = require("../controllers/UserController");
const UserAuth = require("../middleware/UserAuth");
const router = express.Router();

// Route for user registration
router.post("/register", UserAuth, registerUser);

// Route for user login
router.post("/login", UserAuth, loginUser);

module.exports = router;
