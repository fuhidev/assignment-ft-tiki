var Book = require('../models/book.model');
var fs = require('fs');
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
    res
      .status(200)
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
  Object.keys(req.body).forEach(f => {
    if (req.body[f]) book[f] = req.body[f]
  });
  if (req.file) {
    book.photo.data = fs.readFileSync(req.file.path).toString('base64');
    book.photo.contentType = 'image/jpeg';
  }
  // save the book and check for errors
  book.save(function (err) {
    if (err)
      res.status(400).json(err);
    res
      .status(201)
      .send({
        message: 'New book created!',
        data: book
      });
  });
};

exports.saveImg = function (req, res) {
  Book.findById(req.params.book_id, function (err, book) {
    if (err)
      res.status(400).send(err);
    book.photo.data = fs.readFileSync(req.file.path);
    book.photo.contentType = 'image/jpeg';
  });
  book.save(function (err) {
    if (err)
      res
      .status(400)
      .send(err);
    res
      .status(200)
      .send({
        message: 'Book Info updated image',
        data: book
      });
  });
}
// Handle view book info
exports.view = function (req, res) {
  Book.findById(req.params.book_id, function (err, book) {
    if (err)
      res.status(400).send(err);
    res.json({
      message: 'Book details loading..',
      data: book
    });
  });
};

exports.viewPhotos = function (req, res) {

  Book.findById(req.params.book_id).exec(function (err, doc) {
    if (err) {
      return next(err)
    }

    var base64dataa = new Buffer(doc.fileData, 'binary').toString('base64');


    var ress = {
      fileData: base64dataa,
      mime: doc.mimeType,
      name: doc.fileName
    }

    // res.json(ress)
    res.contentType('image/jpeg')
    res.status(200).send(doc.fileData);
  })
}
// Handle update book info
exports.update = function (req, res) {
  Book.findByIdAndUpdate(req.params.book_id, req.body, {
      new: true
    },
    function (err, book) {
      if (err)
        res.send(err);
      // save the book and check for errors
      book.save(function (err) {
        if (err)
          res
          .status(400)
          .send(err);
        res
          .status(200)
          .send({
            message: 'Book Info updated',
            data: book
          });
      });
    });
};
exports.patch = function (req, res) {
  Book.findById(req.params.book_id,
    function (err, book) {
      if (err)
        res.send(err);
      for (var key in req.body) {
        if (req.body[key] === 'undefined') {
          delete req.body[key]
        }
      }
      Object.keys(req.body).forEach(key => {
        if (req.body[key]) book[key] = req.body[key]
      });
      if (req.file) {
        book.photo.data = fs.readFileSync(req.file.path).toString('base64');
        book.photo.contentType = 'image/jpeg';
      }
      // save the book and check for errors
      book.save(function (err) {
        if (err)
          res
          .status(400)
          .send(err);
        res
          .status(200)
          .send({
            message: 'Book Info updated',
            data: book
          });
      });
    });
};
// Handle delete book
exports.delete = function (req, res) {
  Book.findByIdAndDelete(req.params.book_id,
    function (err, book) {
      if (err)
        res.status(400).send(err);
      res.status(200).send({
        status: "success",
        message: 'Book deleted'
      });
    });
};