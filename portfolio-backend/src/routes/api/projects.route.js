import { Router } from 'express';
import { getAllProjects } from '../../controllers/projectsController.js';

export const projectsRouter = Router();

projectsRouter.route('/all')
    .get(getAllProjects);

