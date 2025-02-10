import { Router } from "express";
import { mailRouter } from "./api/sendMail.route.js";
import { projectsRouter } from "./api/projects.route.js";

const routes = Router()

routes.use('/mail', mailRouter);
routes.use('/project', projectsRouter);

export default routes;