const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const router = express.Router();

const User = mongoose.model('User');

router.post('/', (req, res, next) => {
    const newUser = new User(req.body);

    newUser.save()
        .then(user => res.json(user))
        .catch(next);
});

module.exports = router;
