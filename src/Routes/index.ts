import { Router } from 'express';
import CarRoutes from './carRoutes';
import MotorcycleRoutes from './motorcycleRoutes';

const routes = Router();

routes.use('/cars', CarRoutes);
routes.use('/motorcycles', MotorcycleRoutes);

export default routes;