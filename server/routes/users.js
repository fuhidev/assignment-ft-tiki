var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function (req, res) {
  if (req.body.username === 'tiki' &&
    req.body.password === 'tiki')
    res.status(200).send({
      status: 'success',
      data: req.body
    });
  else res.status(200)
    .send({
      status: 'error',
      message: 'Not correct'
    })
})
module.exports = router;