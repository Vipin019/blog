const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Enter the title of post."],
    },
    description: {
      type: String,
      require: [true, "You can not submit blank post."],
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "User ID can not find"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
