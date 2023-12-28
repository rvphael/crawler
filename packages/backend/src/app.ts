import express, { Express } from 'express';
import errorHandler from './middlewares/errorHandler';
import requestLogger from './middlewares/requestLogger';
import routes from './routes';

const app: Express = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.use(requestLogger);

export default app;
