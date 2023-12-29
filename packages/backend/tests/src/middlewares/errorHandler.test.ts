import express, { Express } from 'express';
import request from 'supertest';
import errorHandler from '../../../src/middlewares/errorHandler';

describe('errorHandler Middleware', () => {
  let app: Express;

  beforeEach(() => {
    app = express();

    // Rota de teste que gera um erro
    app.get('/error', (req, res, next) => {
      const error = new Error('Test Error');
      next(error);
    });

    // Usando o errorHandler
    app.use(errorHandler);
  });

  it('should handle errors', async () => {
    const response = await request(app).get('/error');

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message', 'Test Error');
    expect(response.body).toHaveProperty('stack');
  });

  it('should hide error stack in production', async () => {
    process.env.NODE_ENV = 'production';
    const response = await request(app).get('/error');
    process.env.NODE_ENV = 'test'; // Restaurando o ambiente de teste

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message', 'Test Error');
    expect(response.body.stack).toBe('🥞');
  });
});
