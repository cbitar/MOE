var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


var teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  videos: Array,
  level: String,
  price_per_lesson: Number,
  length_per_lesson: Number,
  genre: String,
  bio: String,
  userId: String,
  created: { type: Date, default: Date.now }
});

teacherSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('Teacher', teacherSchema);
