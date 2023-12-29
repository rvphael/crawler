jest.mock('../../src/app', () => ({
  listen: jest.fn(),
}));

describe('server', () => {
  it('should start the server on the correct port', () => {
    const app = require('../../src/app');
    require('../../src/server');

    const PORT = process.env.PORT || 3000;

    expect(app.listen).toHaveBeenCalledWith(PORT, expect.any(Function));
  });
});
