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
      type: String,
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
