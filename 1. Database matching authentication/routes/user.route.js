const express = require("express");
const router = express.Router();

const { createUser, loginUser } = require("../controllers/user.controller");

const User = require("../models/user.model");
// Register Route
router.post("/register", createUser);

// Login Route
router.post("/login", loginUser);

module.exports = router;
