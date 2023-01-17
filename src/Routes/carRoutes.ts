import { Router } from 'express';
import CarController from '../Controllers/CarController';
import { errorHandlerWrapper } from '../Middlewares/errorHandler';

const routes = Router();

routes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

routes.get(
  '/:id',
  errorHandlerWrapper((req, res, next) => new CarController(req, res, next).findById()),
);

routes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).register(),
);

export default routes;
