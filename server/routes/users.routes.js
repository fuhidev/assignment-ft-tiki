var express = require('express');
var router = express.Router();
var authorization = require('../modules/jwt');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function (req, res) {
  if (req.body.username === 'tiki' &&
    req.body.password === 'tiki') {
    let token = authorization.generateToken(req.body.username);
    res.status(200).send({
      status: 'success',
      data: req.body,
      token
    });
  } else res.status(200)
    .send({
      status: 'error',
      message: 'Not correct'
    })
})

router.post('/find', authorization.jwtMW, function (req, res) {

  var userName = req.body.search; //userName = 'Juan David Nicholls';
  var searchString = new RegExp(userName, 'ig');

  User.aggregate()
    .project({
      fullname: {
        $concat: ['$firstname', ' ', '$lastname']
      },
      firstname: 1,
      lastname: 1,
      username: 1,
      email: 1,
      phone: 1,
      address: 1
    })
    .match({
      fullname: searchString
    })
    .exec(function (err, users) {
      if (err) throw err;

      res.json({
        users: users
      });
    });

});

module.exports = router;