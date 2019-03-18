var express = require('express');
var fs = require('fs');
var router = express.Router();
var authorize = require('../modules/jwt');
var upload = require('../modules/fileupload');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res
//     .status(200)
//     .send([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(m => ({
//       id: 'book' + m,
//       name: 'Book ' + m,
//     })));
// });

var controller = require('../controllers/book.controller');
router.route('/')
    .get(controller.index)
    .post(upload.single('file'), controller.new);
router.route('/:book_id')
    .get(controller.view)
    .patch(upload.single('file'),controller.patch)
    .put(controller.update)
    .delete(controller.delete);
router.route('/:book_id/photos')
    .get(controller.viewPhotos)
module.exports = router;