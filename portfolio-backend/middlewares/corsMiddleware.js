const cors = require('cors');
const bodyParser = require('body-parser');

const corsMiddleware = cors({
  origin: ['http://localhost:3000', 'http://192.168.43.49:3000'],
});

const urlencodedMiddleware = bodyParser.urlencoded({ extended: false });
const jsonMiddleware = bodyParser.json();

module.exports = [corsMiddleware, urlencodedMiddleware, jsonMiddleware];
