import { NextFunction, Request, Response } from 'express';
import requestLogger from '../../../src/middlewares/requestLogger';

describe('requestLogger Middleware', () => {
  it('should log the request method and path', () => {
    const mockRequest = {
      method: 'GET',
      path: '/test-path',
    } as Request;
    const mockResponse = {} as Response;
    const mockNext = jest.fn() as NextFunction;

    const consoleSpy = jest.spyOn(console, 'log');

    requestLogger(mockRequest, mockResponse, mockNext);

    expect(consoleSpy).toHaveBeenCalledWith('GET /test-path');
    expect(mockNext).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
