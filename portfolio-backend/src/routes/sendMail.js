const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController'); // Import the contact controller

// Define a route for handling contact form submissions (POST /api/send-mail)
router.post('/send-mail', emailController);

module.exports = router;
