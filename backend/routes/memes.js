const express = require('express');
const Meme = require('../models/Meme');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/memes
// @desc    Get random memes for swiping (excluding already swiped)
router.get('/', authMiddleware, async (req, res, next) => {
    res.json('This is a placeholder response for GET /api/memes');
});


module.exports = router;
