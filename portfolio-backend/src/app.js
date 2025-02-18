import dotenv from "dotenv";
dotenv.config();

import express from 'express';
export const app = express();

import {corsMiddleware, jsonMiddleware, urlencodedMiddleware} from './middlewares/corsMiddleware.js';
import routes from './routes/route.js';

app.use(corsMiddleware);
app.use(jsonMiddleware);
app.use(urlencodedMiddleware);
app.use('/api/v1', routes);
