const transporter  = require('../services/emailService'); // Import your email service

const sendEmail = async (req, res) => {
  try {
    // Extract form data from the request body
    const { name, email, message } = req.body;

    // Create an email message
    const mailOptions = { 
      from: email,
      to: 'akkudadjie@gmail.com', 
      subject: "A new message from your portfolio contact form",
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client
    res.status(200).json({ message: 'Message sent successfully.' });
    console.log( `Received a mail from ${name}, ${email}. Check your email account`)
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred while sending the email.' });
  }
};

module.exports = sendEmail;
