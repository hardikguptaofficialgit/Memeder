const express = require('express');
const Meme = require('../models/Meme');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');
const upload = require('../middleware/upload');
const { validateMemeUpload, validateUpdatedMeme } = require('../middleware/validation');
const { createMeme, getMemesById, updateMeme, deleteMeme, getRandomMemes } = require('../controllers/memeController');

const router = express.Router();

// @route   GET /api/memes
// @desc    Get random memes for swiping (excluding already swiped)
router.get('/', authMiddleware, getRandomMemes);

// @route   POST /api/memes
// @desc    Add a new meme
router.post('/create', authMiddleware, upload.single('image'), validateMemeUpload, createMeme);

// @route   GET /api/memes/:id
// @desc    Get meme by ID
router.get('/:id', authMiddleware, getMemesById);

// @route  PUT /api/memes/:id
// @desc   Update a meme
router.put('/:id', authMiddleware, upload.single('image'), validateUpdatedMeme, updateMeme);

// @route   DELETE /api/memes/:id
// @desc    Delete a meme
router.delete('/:id', authMiddleware, deleteMeme);

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
