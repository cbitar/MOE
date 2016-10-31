var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


var lessonSchema = new mongoose.Schema({
  teacher: String,
  student: String,
  time: Date,
  date: Date,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lesson', lessonSchema);
