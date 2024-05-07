const express = require("express");

const { login, signup, signout } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/signout", signout);

module.exports = router;
