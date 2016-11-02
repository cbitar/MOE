var router = require('express').Router();
var musiciansCtrl = require('../controllers/musicians');

// GET /api/students
router.get('/students', musiciansCtrl.getStudents);
router.get('/teachers', musiciansCtrl.getTeachers);
router.get('/students', musiciansCtrl.updateStudent);
router.get('/teachers', musiciansCtrl.updateTeacher);

module.exports = router;
