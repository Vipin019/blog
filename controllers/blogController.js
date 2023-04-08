const blogModel = require("../models/blogModel");

//Get all blog
exports.getAllBlogController = async (req, res) => {
  try {
    const blogs = await blogModel.find();
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
  try {
    const { title, description, image } = req.body;
    if (!title || !description) {
      return res.status(400).send({
        success: false,
        message: "title and description is required",
      });
    }
    let newBlog;
    if (!image) {
      newBlog = new blogModel({ title, description });
    } else {
      newBlog = new blogModel({ title, description, image });
    }
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
    const deletedBlog = await blogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).send({
        success: true,
        message: "Blog not found",
      });
    }
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
