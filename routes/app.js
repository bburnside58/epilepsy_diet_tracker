var express = require('express');
var router = express.Router();
var User = require('../models/user'); // NOTE THE REQUIREMENT OF User MODEL HERE
// var Charts = require('../models/chart');

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
