const express = require("express");
const formidableMiddleware = require("express-formidable");
const {
  getAllUsers,
  registerController,
  loginController,
  deleteAccountController,
} = require("../controllers/userController");
const { requireSignIn } = require("../middlewares/authMiddlewares");

//router object
const router = express.Router();

//get all users || get
router.get("/all-users", getAllUsers);

//creat user || post
router.post("/register", formidableMiddleware(), registerController);

//login ||post
router.post("/login", loginController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//delete account
router.post("/delete-account", deleteAccountController);

module.exports = router;
