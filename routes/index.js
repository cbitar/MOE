var express = require('express');
var router = express.Router();
var passport = require('passport');


var User = require("../models/user");



var usersCtrl = require('../controllers/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});


module.exports = router;
