var express = require('express');
var router = express.Router();

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
    .post(controller.new);
router.route('/:book_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;