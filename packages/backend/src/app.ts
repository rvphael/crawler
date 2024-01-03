import cors from 'cors';
import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middlewares/errorHandler';
import requestLogger from './middlewares/requestLogger';
import routes from './routes';
import swaggerDocument from './swagger';


const app: Express = express();

app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));

app.use(routes);
app.use(errorHandler);
app.use(requestLogger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
