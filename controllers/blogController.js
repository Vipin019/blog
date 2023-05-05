const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
const mongoose = require("mongoose");
const cloudinary = require("../utils/cloudinary");

//Get all blog
exports.getAllBlogController = async (req, res) => {
  try {
    const blogs = await blogModel.find().populate("user");
    if (!blogs) {
      return res.status(404).send({
        success: false,
        message: "blog can not found",
      });
    }
    return res.status(200).send({
      success: true,
      blogCont: blogs.length,
      message: "All blog list",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getAllBlogController",
      error,
    });
  }
};

//Create blog
exports.createBlogController = async (req, res) => {
  const { title, description, image, user } = req.body;
  try {
    let cloudResult;
    if (image) {
      cloudResult = await cloudinary.uploader.upload(image, {
        floder: "blog",
      });
    }
    if (!title || !description || !user) {
      return res.status(400).send({
        success: false,
        message: "title, description and user id is required",
      });
    }
    const existingUser = await userModel.findById(user);
    // validation
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    let newBlog;
    if (!image) {
      newBlog = new blogModel({ title, description, user });
    } else {
      newBlog = new blogModel({
        title,
        description,
        image: {
          public_id: cloudResult.public_id,
          url: cloudResult.secure_url,
        },
        user,
      });
    }
    const session = await mongoose.startSession(); //start new mongoose session
    session.startTransaction(); //do transaction
    await newBlog.save({ session }); //save the newBlog on the basis of session
    existingUser.blogs.push(newBlog); //push new blog in userModel blos array
    await existingUser.save({ session }); // save the updated user on the basis of session
    await session.commitTransaction(); //complet the session

    await newBlog.save();
    return res.status(200).send({
      success: true,
      message: "Blog created successfully",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in createBlogController",
    });
  }
};

//update blog
exports.updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const updatedBlog = await blogModel.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).send({
        success: true,
        message: "Blog not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Blog updated successfully",
      updatedBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in updateBlogController",
      error,
    });
  }
};

//get a single blog
exports.getSingleBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not fonud",
      });
    }
    return res.status(200).send({
      success: true,
      message: "requested blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getSingleBlogController function",
    });
  }
};

// delete blog
exports.deleteBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findOneAndDelete({ _id: id }).populate("user"); //populate will replace the user fiel of blog by user dedails related to the user of that blog
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }
    if (!blog.user) {
      return res.status(200).send({
        success: true,
        message: "Blog deleted successfully but it was not related to any user",
      });
    }
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    return res.status(200).send({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in deleteblogController",
      error,
    });
  }
};

//get all blog of a user
exports.userBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const allBlogOfaUser = await userModel
      .findById({ _id: id })
      .populate("blogs");
    const blogs = allBlogOfaUser.blogs;
    return res.status(200).send({
      success: true,
      message: "all blogs of a user",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in userBlogController",
    });
  }
};
