var mongoose = require('./database');

var Student = require('../models/student');
var Teacher = require('../models/teacher');

var teachers = [
  {email: 'admin', password: 'admin', name:"Clarissa"},
  {email: 'askit', password: 'abc123', name: "Jim"},
  {email: 'lr', password: 'cool'}
];
var students = [
  {email: 'stud', password: 'ugly', name: 'Hani'},
  {email: 'askme', password: '123', name: "Karl"},
  {email: 'hr', password: 'uncool'}
];

Student
  .remove({})
  .then(() => {
    console.log('Emptying and seeding database...');
    return Student.create(students);
  })
  .then((users) => {
    console.log(`Seeded ${users.length} students`);
  })
  .then(() => {
    Teacher
    .remove({})
    .then(() => {
      console.log('Emptying and seeding database...');
      return Teacher.create(teachers);
    })
    .then((users) => {
      console.log(`Seeded ${users.length} teachers`);
      return mongoose.connection.close();
    })
    .then(() => {
      process.exit()
    });
  });



