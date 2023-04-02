const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Success:: Connected to mongodb database ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(`Error:: mongo can not connect ${error}`);
  }
};

module.exports = connectDB;
