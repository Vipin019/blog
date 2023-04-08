const express = require("express");
const {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
} = require("../controllers/blogController");

//router object
const router = express.Router();

/*******************Routes******************/
//get all blogs
router.get("/all-blog", getAllBlogController);

//create blog
router.post("/create-blog", createBlogController);

//update blog
router.put("/update-blog/:id", updateBlogController);

//get single blog
router.get("/get-blog/:id", getSingleBlogController);

//delete blog
router.delete("/delete-blog/:id", deleteBlogController);

module.exports = router;
