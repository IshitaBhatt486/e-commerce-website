const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getUserDetails } = require('../controllers/authController');

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", getUserDetails);