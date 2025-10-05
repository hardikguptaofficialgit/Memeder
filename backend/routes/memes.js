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


// Get liked memes
router.get('/liked', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('likedMemes');
    res.json(user.likedMemes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get disliked memes
router.get('/disliked', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('dislikedMemes');
    res.json(user.dislikedMemes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
