var express = require('express');
var router = express.Router();
var ctrlNews = require('../controllers/news');

/* GET news page. */
router.get('/', ctrlNews.news);

module.exports = router;