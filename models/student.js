var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  videos: Array,
  genre: String,
  bio: String,
  userId: String,
  level: String,
  created: { type: Date, default: Date.now }
});

studentSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('Student', studentSchema);
