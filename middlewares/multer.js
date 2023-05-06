const multer = require("multer");
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const multerMiddleware = multer({ storage: storage }).single("image");

module.exports = multerMiddleware;
