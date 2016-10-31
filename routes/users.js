var express = require('express');
var router = express.Router();
var User = require('../models/user');
var token = require('../config/token-auth');

router.post('/login', token.create);

// router.get('/users');

module.exports = router;
