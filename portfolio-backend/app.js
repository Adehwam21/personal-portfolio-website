// Required modules
const express = require('express');
const app = express();
const corsMiddleware = require('./middlewares/corsMiddleware'); 
const sendMailRouter = require('./src/routes/sendMail'); 


app.use(corsMiddleware) // middlware setup
app.use(sendMailRouter); // email route setup

module.exports = app;
