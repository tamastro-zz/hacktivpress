const blog = require('../models/blog');
const jwt = require('jsonwebtoken');

exports.getbloglist = (req, res) => {
  blog.find()
  .populate('author')
  .then(data => {
    res.send(data)
  })
}

exports.postblog = (req, res) => {
  var token = req.headers.token
  var decode = jwt.verify(token, process.env.SECRET)
  blog.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: decode.id
  })
  .then(data => {
    res.send(data)
  })
}

exports.editblog = (req, res) => {
  var token = req.headers.token
  var decode = jwt.verify(token, process.env.SECRET)
  blog.updateOne({
    _id: req.params.id,
    author: decode.id
  }, {
    $set: req.body
  })
  .then(data => {
    res.send(data)
  })
}

exports.deleteblog = (req, res) => {
  var token = req.headers.token
  var decode = jwt.verify(token, process.env.SECRET)
  blog.deleteOne({
      _id: req.params.id,
      author: decode.id
    })
    .then(data => {
      res.send(data)
    })
}