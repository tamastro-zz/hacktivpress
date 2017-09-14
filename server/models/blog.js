var mongoose = require('mongoose')

var blogSchema = mongoose.Schema({
  title: String,
  content: String,
  category: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

var blogModel = mongoose.model('blog', blogSchema);


module.exports = blogModel;