// Import required models
const Meme = require("../models/Meme");
const Swipe = require("../models/Swipe");

// POST /api/memes/:id/swipe
//@desc user swipes left or right on a meme
const swipeMeme = async (req, res) => {
  const memeId = req.params.id;
  const { direction } = req.body;
  const userId = req.user._id;

  try {
    if (direction != "left" &&  direction != "right")
       return res.status(400).json({ status: "Invalid direction.Swipe left or right" });

    const meme = await Meme.findById(memeId);
    if (!meme || !meme.isActive) {
      return res.status(404).json({ status: "Meme not found" });
    }

    const duplicateSwipe = await Swipe.findOne({ user: userId, meme: memeId });
    if (duplicateSwipe) {
     return  res.status(400).json({ status: "already swiped" });
    }

    const swipe = await Swipe.create({
      user: userId,
      meme: memeId,
      direction,
    });

    if (direction == "right") {
      meme.likes += 1;
    } else {
      meme.dislikes += 1;
    }
    meme.totalSwipes += 1;

    await meme.save();

    return res.status(201).json({
      status: "Swipe recorded successfully",
      swipe,
      updatedMeme: {
        likes: meme.likes,
        dislikes: meme.dislikes,
        totalSwipes: meme.totalSwipes,
      },
    });
  } catch (err) {
    console.error("Swipe Error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = swipeMeme ;