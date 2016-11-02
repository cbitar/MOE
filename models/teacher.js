var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


var teacherSchema = new mongoose.Schema({
  name: { type : String, required : true },
  email: { type : String, unique : true, required : true },
  password: { type : String, required : true },
  videos: Array,
  level: String,
  price_per_lesson: { type : String, required : true },
  length_per_lesson: { type : String, required : true },
  genre: String,
  bio: String,
  instrument: { type : String, required : true },
  created: { type: Date, default: Date.now }
});

teacherSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('Teacher', teacherSchema);
