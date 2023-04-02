const userModel = require("../models/userModel");

//get all users
exports.getAllUsers = async (req, res) => {
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
    //creating new user
    const newUser = new userModel({ userName, email, password });
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
exports.registerController = () => {};

//login
exports.loginController = () => {};
