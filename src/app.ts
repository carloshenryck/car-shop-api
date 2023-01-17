import express from 'express';
import { createErrorHandler } from './Middlewares/errorHandler';
import routes from './Routes';

const app = express();

app.use(express.json());
app.use(routes);
createErrorHandler(app);

export default app;
