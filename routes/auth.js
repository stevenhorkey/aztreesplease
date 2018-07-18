var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");

getToken = function (headers) {
  if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
          return parted[1];
      } else {
          return null;
      }
  } else {
      return null;
  }
};

router.post('/signup', function(req, res) {
    // check if they passed email, password, and full name
    if (!req.body.email || !req.body.password ||!req.body.firstName || !req.body.lastName) {
      res.json({success: false, msg: 'Please pass email, full name, and password.'});
    } else {
      var newUser = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.send({success: false, msg: 'That email is already registered. Please use a different one or login.'});
        }
        res.json({success: true, msg: 'Successfully created new user.'});
      });
    }
});

router.post('/login', function(req, res) {
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
});

router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log("inside router jwt route");
  var token = getToken(req.headers);
  if (token) {
      console.log(req.user)
      res.status(200).send({
          success: true,
          user: req.user
      })
  }
  else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }

});

module.exports = router;
