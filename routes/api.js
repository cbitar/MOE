var router = require('express').Router();
var musiciansCtrl = require('../controllers/musicians');

// GET /api/students
router.get('/students', musiciansCtrl.getStudents);
router.get('/teachers', musiciansCtrl.getTeachers);

module.exports = router;
