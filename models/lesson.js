var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


var lessonSchema = new mongoose.Schema({
  teacher: {type: ObjectId, ref: 'Teacher'},
  student: {type: ObjectId, ref: 'Student'},
  dateTime: Date,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lesson', lessonSchema);
