const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jacashira@gmail.com', // Your Gmail address
        pass: 'ilod ngwy gznw drcr' // Your Gmail password
    }
});

// Set up email data
let mailOptions = {
    from: 'jacashira@gmail.com', // Sender address
    to: 'jacashira@gmail.com', // Receiver address
    subject: 'Test Email', // Subject line
    text: 'Hello from Nodemailer!' // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
