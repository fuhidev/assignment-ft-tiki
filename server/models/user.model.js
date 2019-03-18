var moongose = require('mongoose');
var validate = require('mongoose-validator'); 
var crypto = require('crypto');

var schema = moongose.Schema({
  firstname: { type : String, trim : true },
  lastname: { type : String, trim : true },
  username: { type: String, required: true, unique: true, lowercase: true, trim : true, index : true },
  password: { type: String, validate: passwordValidator },
  email: { type : String, trim : true, validate: emailValidator },
  phone: { type : String, trim : true },
  address: { type : String, trim : true },
  groups: [{ type : Schema.Types.ObjectId, ref : 'Group' }],
  created_at: Date,
  updated_at: Date
});
{
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

userSchema.virtual('fullname').get(function () {
  return [this.firstname, this.lastname].filter(Boolean).join(' ');
});

userSchema.pre('save', function (next) {
  if (this.password) {
      this.password = encrypt(this.password);
  }
  utilities.reviewDate(this);
  next();
});

function encrypt(text) {
  return crypto.createHash("SHA512").update(text).digest("base64");
}

var emailValidator = [
  validate({
      validator: 'isEmail',
      message: 'Please fill a valid email address'
  })
];

var passwordValidator = [
  validate({
      validator: 'isLength',
      arguments: [6, 50],
      message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
      validator: 'matches',
      arguments: /\d/,
      message: 'Password should contain numbers'
  }),
  validate({
      validator: 'matches',
      arguments: /[a-zA-Z]/,
      message: 'Password should contain letters'
  }),
  validate({
      validator: 'matches',
      arguments: /[A-Z]/,
      message: 'Password must contain one uppercase letter'
  }),
  validate({
      validator: 'matches',
      arguments: /[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/,
      message: 'Password should contain a special characters like !@#$%^&*()_+'
  })
];

module.exports = mongoose.model('User', userSchema);