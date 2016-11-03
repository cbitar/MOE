var Teacher = require('../models/teacher');
var Student = require('../models/student');
var jwt = require('jsonwebtoken');
var secret = 'shhhhh';

var jwtOptions = {
 algorithm: 'HS256',
 expiresIn: '7 days'
};

module.exports = {
  getStudents: getStudents,
  getTeachers: getTeachers,
  updateStudent: updateStudent,
  updateTeacher: updateTeacher
};

function getTeachers(req, res) {
  Teacher.find({}, function(err, teachers) {
    if (err) return res.status(err.statusCode || 500).json(err);
    res.json(teachers);
  });
}

function getStudents(req, res) {
  Student.find({}, function(err, students) {
    if (err) return res.status(err.statusCode || 500).json(err);
    res.json(students);
  });
}

function updateStudent(req, res) {
  Student.findByIdAndUpdate(req.body._id, req.body, {new: true}, function(err, student) {
    if (err) return res.status(err.statusCode || 500).json(err);
    var token = jwt.sign({ user: student }, secret, jwtOptions);
    return res.json({
      token: token
    });
  });
}

function updateTeacher(req, res) {
  Teacher.findByIdAndUpdate(req.body._id, req.body, {new: true}, function(err, teacher) {
    if (err) return res.status(err.statusCode || 500).json(err);
    var token = jwt.sign({ user: teacher }, secret, jwtOptions);
    return res.json({
      token: token
    });
  });
}
