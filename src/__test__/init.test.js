const request = require('supertest');
const routesProject = require('../routes/index');

describe('GET return test', () => {
  test('should return 200 OK, init route', () => {
    const response = request(routesProject).get('/').send();
    expect(response.statusCode);
  });

  test('should return 404, test route', () => {
    const response = request(routesProject).get('/test').send();
    expect(response.statusCode);
  });
})
