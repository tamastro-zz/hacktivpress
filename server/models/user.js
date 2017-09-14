var mongoose = require('mongoose')

var userschema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  salt: String
})

var usermodel = mongoose.model('user', userschema);


module.exports = usermodel;