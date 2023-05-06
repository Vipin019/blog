const express = require("express");
const {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");
const multerMiddleware = require("../middlewares/multer");

//router object
const router = express.Router();

/*******************Routes******************/
//get all blogs
router.get("/all-blog", getAllBlogController);

//create blog
router.post("/create-blog", multerMiddleware, createBlogController);

//update blog
router.put("/update-blog/:id", updateBlogController);

//get single blog
router.get("/get-blog/:id", getSingleBlogController);

//delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//get all blog of a user
router.get("/user-blog/:id", userBlogController);

module.exports = router;
