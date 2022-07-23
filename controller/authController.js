const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const sign = (userID) => {
    return jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
};

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const token = sign(newUser.id) 
  newUser
    .save()
    .then(() => {
      console.log('User Signed up');
    })
    .catch((err) => {
      console.log(err.message);
    });
};
