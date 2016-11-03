var Student = require('../models/student');
var Teacher = require('../models/teacher');
var jwt = require('jsonwebtoken');
var secret = 'shhhhh';

var jwtOptions = {
 algorithm: 'HS256',
 expiresIn: '7 days'
};

function authenticate(req, res, next) {
  var authHeader = req.get('Authorization');

  if (!authHeader) {
    return res.status(400).json({error: 'Bad credentials'});
  }

  var token = authHeader.split(' ')[1]

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return next(err)
    req.decoded = decoded;
    next()
  });
}

function create(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({error: 'Bad credentials'});
  }
  Promise.all([
    Student.findOne({email: req.body.email}),
    Teacher.findOne({email: req.body.email})
  ]).then(([student, teacher]) => {
    return student ? student : teacher;
  }).then((user) => {
    if ( !user || !user.verifyPasswordSync(req.body.password) ) {
      return res.status(400).json({error: 'Bad credentials'});
    } else {
      var token = jwt.sign({ user: user }, secret, jwtOptions);
      return res.json({
        token: token
      });
    }
  }).catch((err) => next(err));
}

module.exports = {
 create:       create,
 authenticate:  authenticate
};
