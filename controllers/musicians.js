var Teacher = require('../models/teacher');
var Student = require('../models/student');

module.exports = {
  getStudents: getStudents,
  getTeachers: getTeachers
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
