var nodemailer = require('nodemailer');

var transporter  = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 456,
  secure: true,
  auth: {
    user: 'oun1982@gmail.com',
    pass: 'Cisco@1982'
  }
});
var mailOptions = {
    from: 'oun1982@gmail.com',
    to: 'pongsakont@osd.co.th',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response)});