const http = require('http');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'imansyaefulloh.testing@gmail.com',
    pass: 'your-password'
  }
});

let mailOptions = {
  from: 'imansyaefulloh.testing@gmail.com',
  // to: 'imansyaefulloh@gmail.com', // single receiver
  to: 'imansyaefulloh@gmail.com, imansyaefulloh.crypto@gmail.com', // multiple receiver
  subject: 'Sending email using NodeJS',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }

})