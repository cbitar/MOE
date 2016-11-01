var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Student = require('../models/student');
var Teacher = require('../models/teacher');
var token = require('../config/token-auth');

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
  var newTeacher = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    level: req.body.level,
    videos: req.body.videos,
    genre: req.body.genre,
    bio: req.body.bio,
    instrument: req.body.instrument,
    price_per_lesson: req.body.price_per_lesson,
    length_per_lesson: req.body.length_per_lesson,
  }
  Teacher.create(newTeacher, function(err, newTeacher) {
    if(err) return res.json(newTeacher)
      res.status(201).json(newTeacher)
  })
})

router.post('/form-student', function(req, res, next) {
  var newStudent = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    level: req.body.level,
    videos: req.body.videos,
    genre: req.body.genre,
    bio: req.body.bio,
    instrument: req.body.instrument
  }
  Student.create(newTeacher, function(err, newStudent) {
    if(err) return res.json(newStudent)
      res.status(201).json(newStudent)
  })
})

module.exports = router;
