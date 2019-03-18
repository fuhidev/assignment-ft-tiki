var multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, 'uploads/')
  }
});
const upload = multer({
  storage: storage
});

module.exports = upload;