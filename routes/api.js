var router = require('express').Router();
var musiciansCtrl = require('../controllers/musicians');

// GET /api/students
router.get('/students', musiciansCtrl.getStudents);
router.get('/teachers', musiciansCtrl.getTeachers);
router.put('/students', musiciansCtrl.updateStudent);
router.put('/teachers', musiciansCtrl.updateTeacher);

module.exports = router;
