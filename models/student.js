var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var studentSchema = new mongoose.Schema({
  name: { type : String, required : true },
  email: { type : String, unique : true, required : true },
  videos: Array,
  genre: String,
  bio: String,
  instrument: { type : String, required : true },
  level: { type : String, required : true },
  created: { type: Date, default: Date.now }
});

studentSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('Student', studentSchema);
