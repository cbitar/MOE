var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Student = require('../models/student');
var Teacher = require('../models/teacher');
var token = require('../config/token-auth');
var jwt = require('jsonwebtoken');

var secret = 'shhhhh';

var jwtOptions = {
 algorithm: 'HS256',
 expiresIn: '7 days'
};

router.post('/login', token.create);

router.get('/teachers', function(req, res, next){
  Teacher.find({}).exec().then((user) => {
    res.json(users);
  })
});

router.get('/students', function(req, res, next){
  Student.find({}).exec().then((user) => {
    res.json(users);
  })
});


router.post('/form-teacher', function(req, res, next) {
  Teacher.create(req.body, function(err, newTeacher) {
    if(err) return res.status(400).json({error: 'Invalid new teacher'});
    let token = jwt.sign({ user: newTeacher }, secret, jwtOptions);
    return res.json({
      token: token
    });
  });
})

router.post('/form-student', function(req, res, next) {
  Student.create(req.body, function(err, newStudent) {
    if(err) return res.status(400).json({error: 'Invalid new student'});
    let token = jwt.sign({ user: newStudent }, secret, jwtOptions);
    return res.json({
      token: token
    });
  });
})

module.exports = router;
