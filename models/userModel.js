const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "This user name is not available"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "This email is already registred"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
