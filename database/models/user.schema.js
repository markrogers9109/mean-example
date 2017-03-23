const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    deleted: Boolean
});

mongoose.model('User', UserSchema);
