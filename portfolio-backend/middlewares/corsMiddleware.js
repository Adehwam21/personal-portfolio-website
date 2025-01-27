const cors = require('cors');
const bodyParser = require('body-parser');
const frontEndUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

const corsMiddleware = cors({
  origin: [
    'http://localhost:3000', 
    'http://192.168.43.49:3000', 
    'https://aaronkudadjie.vercel.app',
    'http://localhost:5173',
    frontEndUrl
  ]
});

const urlencodedMiddleware = bodyParser.urlencoded({ extended: false });
const jsonMiddleware = bodyParser.json();

module.exports = [corsMiddleware, urlencodedMiddleware, jsonMiddleware];
