const fs = require('fs');
const usersModel = require('./../model/userModel');
const redirect = fs.readFileSync('static/redirect.html', 'utf-8');


exports.homePage = (req, res) => {
  res.status(200).send("index.html");
};
exports.submitUser = async (req, res) => {
  try {
    const newUser = await usersModel.create(req.body);
    newUser.save().then(() => {
      res.send(redirect);
      // res.redirect()
    });
  } catch (err) {
    res.status(404).send(`<h1>bad Request :</h1>  <h2>${err.message}</h2>`);
  }
};
exports.hireme = async (req, res) => {
  try {
    const clientinfo = await usersModel.create({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      message: req.body.message,
    })
    clientinfo.save().then(() => {
      res.status(200).send(redirect)
    })
  } catch (err) {
    res.status(404).send(`<h1>bad Request :</h1>  <h2>${err.message}</h2>`);
  }
};
