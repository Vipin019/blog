const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
  deleteAccountController,
} = require("../controllers/userController");

//router cbject
const router = express.Router();

//get all users || get
router.get("/all-users", getAllUsers);

//creat user || post
router.post("/register", registerController);

//login ||post
router.post("/login", loginController);

//delete account
router.post("/delete-account", deleteAccountController);

module.exports = router;
