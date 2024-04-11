const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const PORT = 5000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));








app.post("/api/mail", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Function to send email
  const sendMail = (name, email, subject, message) => {
    return new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "yewandeadeyemi84@gmail.com", 
          pass: process.env.MAIL_PASSWORD,
        }
      });

      const mailOptions = {
        from: name,
        to: "yewandeadeyemi84@gmail.com", 
        subject: subject,
        text: `hi my name is ${name},${email},${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
          reject({ message: "An error occurred while sending the email" });
        } else {
          
          resolve({ message: "Email sent successfully" });
        }
      });
    });
  };

  // Call sendMail function to send email
  sendMail(name, email, subject, message)
    .then((response) => res.send(response))
    .catch((error) => res.status(500).send(error));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});