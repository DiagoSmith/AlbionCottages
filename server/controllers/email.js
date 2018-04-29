const nodemailer = require("nodemailer");

//transport/config
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    type: "OAuth2",
    clientId:
      "587483617536-vegrtcotmc2kd9fhbk986isssottkcps.apps.googleusercontent.com",
    clientSecret: process.env.GMAIL_CLIENT_SECRET
  }
});

// Message Templates

//Send Mail
const mailOptions = {
  from: "Albion Cottages Mailman 🤖 <albionmailer@gmail.com>",
  to: "rmfloris@gmail.com",
  subject: "New Enquiry Albion Cottages"
};

const SendEnquiryMail = ({ name, email, phonenumber, message }) => {
  return new Promise((resolve, reject) => {
    transporter
      .sendMail({
        ...mailOptions,
        text: `I hope this message from ${name} at ${email} with the number ${phonenumber} gets through!`,
        auth: {
          user: "albionmailer@gmail.com",
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: process.env.ACCESS_TOKEN,
          expires: 1484314697598
        }
      })
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};

module.exports.SendEnquiryMail = SendEnquiryMail;
