const Meme = require("../models/Meme");
const path = require('path');
const fs = require('fs');
const Swipe = require('../models/Swipe');

const createMeme = async (req, res, next) => {
  try {
    // If file is uploaded, use its path, else fallback to imageUrl from body
    let imagePath = req.file ? `/assets/images/${req.file.filename}` : req.body.imageUrl;
    const { title, description, tags } = req.body;
    const newMeme = new Meme({ imageUrl: imagePath, title, description, tags, createdBy: req.user.id });
    await newMeme.save();
    res.status(201).json(newMeme);
  } catch (error) {
    next(error);
  }
};

const getMemesById = async (req, res, next) => {
  try {
    const meme = await Meme.findById(req.params.id);
    if (!meme) {
      return res.status(404).json({ message: 'Meme not found' });
    }
    res.json(meme);
  } catch (error) {
    next(error);
  }
};

const updateMeme = async (req, res, next) => {
  try {
    const meme = await Meme.findById(req.params.id);
    if (!meme) {
      return res.status(404).json({ message: 'Meme not found' });
    }
    // Only the creator can update the meme
    if (meme.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    const { title, description, tags } = req.body;
    if (title) meme.title = title;
    if (description) meme.description = description;
    if (tags) meme.tags = tags;
    if (req.file) {
        const oldImagePath = path.join(__dirname, '../assets/images', meme.imageUrl.split('/').pop());
        fs.unlink(oldImagePath, (err) => {
            if (err) console.error('Failed to delete old image:', oldImagePath, err);
        });
        meme.imageUrl = `/assets/images/${req.file.filename}`;
    }
    await meme.save();
    res.json(meme);
  } catch (error) {
    next(error);
  }
};

const deleteMeme = async (req, res, next) => {
  try {
    const meme = await Meme.findById(req.params.id);
    if (!meme) {
      return res.status(404).json({ success: false, message: 'Meme not found' });
    }
    // Only the creator can delete the meme
    if (meme.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    // Delete associated swipes
    await Swipe.deleteMany({ meme: meme._id });
    // Delete image file
    if (meme.imageUrl) {
      const imagePath = path.join(__dirname, '../assets/images', meme.imageUrl.split('/').pop());
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Failed to delete image:', imagePath, err);
      });
    }
    // Delete meme
    await meme.deleteOne();
    res.json({ success: true, message: 'Meme deleted successfully' });
  } catch (error) {
    next(error);
  }
};

const getRandomMemes = async (req, res, next) => {
  try {
    // Find meme IDs the user has already swiped on
    const swipedMemes = await Swipe.find({ user: req.user.id }).distinct('meme');
    // Exclude swiped memes and fetch random memes
    const memes = await Meme.aggregate([
      { $match: { _id: { $nin: swipedMemes } } },
      { $sample: { size: 20 } }, // Fetch 20 random memes
      { $project: {
          _id: 1,
          imageUrl: 1,
          title: 1,
          description: 1,
          tags: 1,
          createdBy: 1
        }
      }
    ]);
    res.json(memes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMeme,
  getMemesById,
  updateMeme,
  deleteMeme,
  getRandomMemes,
};
