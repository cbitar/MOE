var Teacher = require('../models/teacher');

module.exports = {
  index: index
};

function index(req, res) {
  Teacher.find({}, function(err, teachers) {
    if (err) return res.status(err.statusCode || 500).json(err);
    res.json(teachers);
  });
}
