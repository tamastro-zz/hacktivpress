const blog = require('../models/blog');
const jwt = require('jsonwebtoken');

exports.getbloglist = (req, res) => {
  blog.find()
  .then(data => {
    res.send(data)
  })
}

exports.postblog = (req, res) => {
  blogobj = new blog(req.body)
  blog.create(blogobj)
  .then(data => {
    res.send(data)
  })
}

exports.editblog = (req, res) => {
  blog.updateOne({
    _id: req.parmas.id
  }, {
    $set: req.body
  })
  .then(data => {
    res.send(data)
  })
}

exports.deleteblog = (req, res) => {
  blog.deleteOne({
    _id: req.params.id
  })
  .then(data => {
    req.send(data)
  })
}