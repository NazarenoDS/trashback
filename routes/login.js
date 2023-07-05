const express = require("express");
const router = express.Router();
const { loginCtrl } = require("../controllers/login");
const { validateLogin } = require("../validators/login");

// Login
router.post("/login", validateLogin, loginCtrl);

module.exports = router;