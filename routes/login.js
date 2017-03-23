const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const router = express.Router();

const User = mongoose.model('User');

router.post('/', (req, res, next) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (user) {
        if(user.password === req.body.password){
          res.json({
            status: 200,
            message: 'Logging in...',
          });
        } else {
          res.json({
            status: 500,
            message: 'Invalid email / password combination.',
          });
        }
      } else {
        res.json({
          status: 500,
          message: 'Invalid email / password combination.',
        });
      }
    })
    .catch(next);
});

module.exports = router;
