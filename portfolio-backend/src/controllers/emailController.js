const transporter  = require('../services/emailService'); // Import your email service

const sendEmail = async (req, res) => {
  try {
    // Extract form data from the request body
    const { firstName, lastName, email, subject, message } = req.body;

    // Create an email message
    const mailOptions = { 
      to: 'akkudadjie@gmail.com', 
      subject: subject,
      text: `From: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client
    res.status(200).json({ message: 'Message sent successfully.' });
    console.log( `Received a mail from ${firstName}, ${email}. Check your email account`)
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred while sending the email.' });
  }
};

module.exports = sendEmail;
