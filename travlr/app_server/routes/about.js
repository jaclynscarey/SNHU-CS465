var express = require('express');
var router = express.Router();
var ctrlAbout = require('../controllers/about');

/* GET about page */
router.get('/', ctrlAbout.about);

module.exports = router;