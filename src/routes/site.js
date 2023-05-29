import { Router } from 'express';
import SiteController from '../app/controllers/SiteController';
const siteController = new SiteController();
const siteRouter = Router();

siteRouter.use('/search', siteController.search);
siteRouter.use('/', siteController.home);

export default siteRouter;
