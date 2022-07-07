const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

exports.signup = async (req, res, next) => {
    const newUser = await User.create({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    
};
