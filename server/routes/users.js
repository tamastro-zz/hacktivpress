var express = require('express');
var router = express.Router();
var controller = require('../controllers/usercontroller')

/* GET users listing. */
router.post('/signin', controller.signin);

router.post('/signup', controller.signup);

router.get('/', controller.getusers)

module.exports = router;
