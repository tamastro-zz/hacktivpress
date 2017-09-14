var express = require('express');
var router = express.Router();
var controller = require('../controllers/blogcontroller')

/* GET home page. */
router.get('/', controller.getbloglist);

module.exports = router;
