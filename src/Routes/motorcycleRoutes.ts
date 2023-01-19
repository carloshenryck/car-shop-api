import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import { errorHandlerWrapper } from '../Middlewares/errorHandler';

const routes = Router();
routes.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).findAll(),
);

routes.get(
  '/:id',
  errorHandlerWrapper((req, res, next) => new MotorcycleController(req, res, next).findById()),
);

routes.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).register(),
);

routes.put(
  '/:id',
  errorHandlerWrapper((req, res, next) => new MotorcycleController(req, res, next).updateById()),
);

export default routes;
