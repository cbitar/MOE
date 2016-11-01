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
    return next({
      status:  401,
      message: 'Authentication failed: missing auth header'
    })
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
    return next({
      status: 401,
      message: 'Missing required fields: username and password'
    })
  }
  Student.findOne({email: req.body.email})
    .then(user => {
      if ( !user ) {
        Teacher.findOne({email: req.body.email})
        .then(user => {
          if(!user || !user.verifyPasswordSync(req.body.password)) {
            return next({
              message: 'User not found or password incorrect.',
              status: 403
            });
          } else {
            let token = jwt.sign({ user: user }, secret, jwtOptions);
            return res.json({
              token: token
            });
          }
        });
      } else {
        if (!user.verifyPasswordSync(req.body.password) ) {
          return next({
            message: 'User not found or password incorrect.',
            status: 403
          });
        } else {
          let token = jwt.sign({ user: user }, secret, jwtOptions);
          return res.json({
            token: token
          });
        }
      }
    });
}


module.exports = {
 create:       create,
 authenticate:  authenticate
};
