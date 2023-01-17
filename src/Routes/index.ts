import { Router } from 'express';
import CarRoutes from './carRoutes';

const routes = Router();

routes.use('/cars', CarRoutes);

export default routes;