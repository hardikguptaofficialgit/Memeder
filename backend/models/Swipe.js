const mongoose = require("mongoose");


//Schema::credentials of user,meme,direction
const swipeSchema = new mongoose.Schema(
  {
    //user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    //meme
    meme: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meme",
      required: true,
    },
    //direction
    direction: {
      type: String,
      enum: ["left", "right"],
      required: true,
    },
  },
  { timestamps: true }
);

//⭐Prevent same user from swiping on the same meme again
swipeSchema.index({user:1,meme:1},{unique:true});

module.exports= mongoose.model("Swipe",swipeSchema);