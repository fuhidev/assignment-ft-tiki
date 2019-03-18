var exjwt = require('express-jwt');
var jwt = require('jsonwebtoken');

const secret = 'fuhi.dev';

const jwtMW = exjwt({
  secret
});

const generateToken = function (username) {
  let token = jwt.sign({
    username: username
  },secret, {
    expiresIn: 129600
  }); // Sigining the token;
  return token;
}

exports.jwtMW = jwtMW;
exports.generateToken = generateToken;