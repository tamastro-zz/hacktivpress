var express = require('express');
var router = express.Router();
var controller = require('../controllers/blogcontroller')
var auth = require('../helpers/auth')

/* GET home page. */
router.get('/', auth.auth, controller.getbloglist);

router.post('/',  auth.auth, controller.postblog);

router.put('/:id',  auth.auth, controller.editblog);

router.delete('/:id',  auth.auth, controller.deleteblog);

module.exports = router;
