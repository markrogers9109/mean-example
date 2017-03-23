const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const router = express.Router();

const User = mongoose.model('User');

router.get('/', (req, res, next) => {
    User.find({})
        .then(users => {
            res.json(users);
        })
        .catch(next);
});

module.exports = router;
