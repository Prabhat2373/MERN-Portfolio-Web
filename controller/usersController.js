const fs = require('fs');
const usersModel = require('./../model/userModel');
const redirect = fs.readFileSync('static/redirect.html', 'utf-8');
const nodemailer = require('nodemailer');

exports.homePage = (req, res) => {
  res.status(200).send('index.html');
};
exports.submitUser = async (req, res) => {
  try {
    const newUser = await usersModel.create(req.body);
    newUser.save().then(() => {
      res.send(redirect);
      // res.redirect()
    });

    // Nodemailer initialization and Authorization
    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    });

    // Mail Message
    let mailDetails = {
      from: 'Dev.Prabhat',
      to: req.body.email,
      subject: `Hello! ${req.body.name}, Thanks For Reaching Me`,
      text: `Hello ${req.body.name}!
            Thanks for reaching me out. Hope You find some interest on me.
            if you have any Queries about me then get back to me.
            for hiring process you can directly get me at this email.
            
            
            Thanks and Regards,
            Prabhat`,
    };

    // Actually sending Mail To Client
    mailTransporter.sendMail(mailDetails, (err, data) => {
      if (err) console.log(err.message);
      else {
        console.log('Mail sent Successfully!');
      }
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
    });
    clientinfo.save().then(() => {
      res.status(200).send(redirect);
    });

    // Nodemailer initialization and Authorization
    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    });

    // Mail Message
    let mailDetails = {
      from: 'Dev.Prabhat',
      to: req.body.email,
      subject: `Hello! ${req.body.name}, Thanks For Reaching Me`,
      text: `Hello ${req.body.name}!
      Thanks for reaching me out. Hope You find some interest on me.
      if you have any Queries about me then get back to me.
      for hiring process you can directly get me at this email.
      
      
      Thanks and Regards,
      Prabhat`,
    };
    let sendMailToPrabhat = {
      from:'Dev.Prabhat',
      to: "prabhattambe10@gmail.com",
      subject: "New User On Portfolio",
      text:`Hey Prabhat!
      New User Name : ${req.body.name} is tries to reach you out
      User's Email : ${req.body.email}
      User's Message For You : ${req.body.message}
      Contact That User on : ${req.body.number}

      Thanks`
    }

    // Actually sending Mail To Client
    mailTransporter.sendMail(mailDetails, (err, data) => {
      if (err) console.log(err.message);
      else {
        console.log(data);
      }
    });
    mailTransporter.sendMail(sendMailToPrabhat, (err, data) => {
      if (err) console.log(err.message);
      else {
        console.log(data);
      }
    });
  } catch (err) {
    res.status(404).send(`<h1>bad Request :</h1>  <h2>${err.message}</h2>`);
  }
};
