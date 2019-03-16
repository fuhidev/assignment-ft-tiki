var Book = require('../models/book.model');
// Handle index actions
exports.index = function (req, res) {
  Book.get(function (err, books) {
    if (err) {
      res.statis(404)
        .send({
          status: "error",
          message: err,
        });
    }
    res.status(200)
      .send({
        status: "success",
        message: "Books retrieved successfully",
        data: books
      });
  });
};
// Handle create book actions
exports.new = function (req, res) {
  var book = new Book();
  book.name = req.body.name;
  book.id = req.body.id;
  // save the book and check for errors
  book.save(function (err) {
    // if (err)
    //     res.json(err);
    res
    .status(201)
    .send({
      message: 'New book created!',
      data: book
    });
  });
};
// Handle view book info
exports.view = function (req, res) {
  Book.findOne({id:req.params.book_id}, function (err, book) {
    if (err)
      res.status(400).send(err);
    res.json({
      message: 'Book details loading..',
      data: book
    });
  });
};
// Handle update book info
exports.update = function (req, res) {
  Book.findOne({id:req.params.book_id}, function (err, book) {
    if (err)
      res.send(err);
    book.id = req.body.id;
    book.name = req.body.name;
    // save the book and check for errors
    book.save(function (err) {
      if (err)
        res
        .status(400)
        .send(err);
      res
      .status(204)
      .send({
        message: 'Contact Info updated',
        data: book
      });
    });
  });
};
// Handle delete book
exports.delete = function (req, res) {
  Book.remove({
    id: req.params.book_id
  }, function (err, book) {
    if (err)
      res.status(400).send(err);
    res.status(200).send({
      status: "success",
      message: 'Contact deleted'
    });
  });
};