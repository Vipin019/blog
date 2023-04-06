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
exports.createBlogController = () => {};

//update blog
exports.updateBlogController = () => {};

//get a single blog
exports.getSingleBlogController = () => {};

// delete blog
exports.deleteblogController = () => {};
