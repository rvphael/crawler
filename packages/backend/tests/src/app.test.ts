import request from 'supertest';
import app from "../../src/app";

describe('app', () => {
  it('should use JSON middleware', async () => {
    const response = await request(app)
      .post('/')
      .send({ test: 'test' });

    expect(response.status).not.toBe(415);
  });

  it('should correctly set up routes', async () => {
    const response = await request(app).get('/product');
    expect(response.status).not.toBe(404);
  });
});
