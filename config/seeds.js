require('dotenv').config()

var mongoose = require('./database');

var Student = require('../models/student');
var Teacher = require('../models/teacher');

var teachers = [
  {email: 'admin', password: 'admin', name:"Clarissa", level: 'advanced', price_per_lesson: '$60', length_per_lesson: '30min', instrument: 'guitar'},
  {email: 'askit', password: 'abc123', name: "Jim", level: 'advanced', price_per_lesson: '$60', length_per_lesson: '30min', instrument: 'guitar'},
  {email: 'lr', password: 'cool', name: "Karlos", level: 'advanced', price_per_lesson: '$60', length_per_lesson: '30min', instrument: 'guitar'}
];
var students = [
  {email: 'stud', password: 'ugly', name: 'Hani', instrument: 'guitar', level: 'advanced'},
  {email: 'askme', password: '123', name: "Karl", instrument: 'guitar', level: 'advanced'},
  {email: 'hr', password: 'uncool', name: "Karly", instrument: 'guitar', level: 'advanced'}
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
    return Teacher.remove({})
  })
  .then(() => {
    console.log('Emptying and seeding database...');
    return Teacher.create(teachers);
  })
  .then((users) => {
    console.log(`Seeded ${users.length} teachers`);
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    process.exit()
  });
