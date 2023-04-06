const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//routes inport
const userRoute = require("./routes/userRoutes");
const blogRoute = require("./routes/blogRoutes");

//mongodb connection
connectDB();
//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json()); //by using this we can receve JSON data from frontend
app.use(morgan("dev")); //by using this it will show all the url that are hit in console

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);

//port
const PORT = process.env.PORT || 8080;

//creating server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} on ${process.env.DEV_MOD}`);
});
