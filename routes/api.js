var router = require('express').Router();
var studentsCtrl = require('../controllers/students');
var usersCtrl = require('../controllers/users');
var token = require('../config/token-auth');
// GET /api/students
router.get('/students', studentsCtrl.index);

router.post('/api/login', token.create);


/*-------------------------------------------------------
ReSTful routes for: users:
  Despite the fact that we don't have a 'users' collection,
  we still need routes that map to their creation and
  removal.
  GET: Not needed / users are fetched with each student
  POST: Creates a new fact for the currently
        authenticated student.
  DELETE: Deletes the fact with the :id param.
  PUT: Not used in this app.
-------------------------------------------------------*/

// POST /api/users
// router.post('/users', isLoggedIn, usersCtrl.create);

// DELETE /api/users/:id
// router.delete('/users/:id', isLoggedIn, usersCtrl.delete);

module.exports = router;
