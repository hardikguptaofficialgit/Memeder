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

// @route  POST /api/memes/addmeme
// @desc   Add a new meme
router.post('/addmeme', authMiddleware, async (req, res) => {
  const { title, imageUrl, description, tags } = req.body;

  if (!title || !imageUrl) {
    return res.status(400).json({ message: 'Title and Image URL are required' });
  }

  try {
    const newMeme = new Meme({
      title,
      imageUrl,
      description,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      createdBy: req.user.id,
    });

    await newMeme.save();
    res.status(201).json(newMeme);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route  GET /api/memes/mine
// @desc   Get memes added by the logged-in user
router.get('/mine', authMiddleware, async (req, res) => {
  try {
    const memes = await Meme.find({ createdBy: req.user.id });
    res.json(memes);
  }
  catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
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
