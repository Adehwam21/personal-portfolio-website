require('dotenv').config();
const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;


// Nodemailer setup (configure with your email service)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser, 
      pass: emailPass,
    },
  });

  module.exports = transporter;
