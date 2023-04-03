const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

//get all users
exports.registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    // checking validation
    if (!userName || !password || !email) {
      return res.status(400).send({
        success: false,
        message: "All fields all require",
      });
    }
    //checking existing users
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(400).send({
        success: false,
        message: "Email already registred",
      });
    }
    //hashing password
    const hasedPasswors = await bcrypt.hash(password, 10);
    //creating new user
    const newUser = new userModel({ userName, email, password: hasedPasswors });
    // save new user
    await newUser.save();
    return res.status(201).send({
      success: true,
      message: "User created successfylly",
      userName,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "User can not be created at this monent",
      error,
    });
  }
};

//creat user register
exports.getAllUsers = async (req, res) => {
  try {
    const allUser = await userModel.find({});
    const userCount = allUser.length;
    return res.status(200).send({
      userCount,
      seccess: true,
      message: "All user data find",
      allUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getAlluser",
      error,
    });
  }
};

//login
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(403).send({
        success: false,
        message: "Please enter email and password both",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user || user === undefined || user.password === undefined) {
      return res.status(403).send({
        success: false,
        message: "Email is not registred",
      });
    }
    const isMatched = await bcrypt.compare(password, user.password); //first parameter is without hashed and second is hashed
    if (!isMatched) {
      return res.status(403).send({
        success: false,
        message: "Email or password is invalid",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Login successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in loginController",
      error,
    });
  }
};
