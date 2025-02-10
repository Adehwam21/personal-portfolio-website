import { Router } from 'express';
import { sendEmail } from '../../controllers/emailController.js';

export const mailRouter = Router();


mailRouter.route('/send-mail')
    .post(sendEmail);
