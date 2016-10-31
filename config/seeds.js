var mongoose = require('./database');

var Student = require('../models/student');
var Teacher = require('../models/teacher');

var Users = [
  {email: 'admin', password: 'admin'},
  {email: 'askit', password: 'l33t'},
  {email: 'hr', password: 'untoward'}
];

Student
  .remove({})
  .then(() => {
    console.log('Emptying and seeding database...');
    return Student.create(Users);
  })
  .then((users) => {
    console.log(`Seeded ${users.length} users`);
    return mongoose.connection.close();
  })
  .then(() => {
    process.exit()
  });

  Teacher
  .remove({})
  .then(() => {
    console.log('Emptying and seeding database...');
    return Teacher.create(Users);
  })
  .then((users) => {
    console.log(`Seeded ${users.length} users`);
    return mongoose.connection.close();
  })
  .then(() => {
    process.exit()
  });


