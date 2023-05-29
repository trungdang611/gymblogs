import { Router } from 'express';
import NewsController from '../app/controllers/NewsController';
const newsController = new NewsController();
const newsRouter = Router();

newsRouter.use('/:slug', newsController.show);
newsRouter.use('/', newsController.index);

export default newsRouter;
