const { Router } = require('express');
const express = require('express');
const usersController = require('./../controller/usersController');
const route = express.Router();

const { homePage, submitUser, hireme } = usersController;

route.route('/').get(homePage);
route.route('/contact').post(submitUser);
route.route('/post').post((req, res) => {
  console.log('Connected');
  res.redirect();
});
route.post('/hireme', hireme);
module.exports = route;
