const express = require("express");
const router = express.Router();

const swipeMeme = require("../controllers/swipeController");
const authMiddleware = require("../middleware/auth");

router.post("/:id/swipe", authMiddleware, swipeMeme);

module.exports = router;



