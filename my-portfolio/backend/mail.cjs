const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'yewandeadeyemi84@gmail.com',
      pass: 'mhngtvvmvmwxteyl'
    }
  });

  const mailOptions = {
    from: 'yewandeadeyemi84@gmail.com',
    to: 'yewandeadeyemi14@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
    resl
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
