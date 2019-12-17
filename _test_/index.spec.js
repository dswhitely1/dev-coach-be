const request = require('supertest');
const server = require('../index');

describe('index file', () => {
  it('should return a message when the server is up', () => {
    return request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.message).toBe('Welcome to the Dev Coach API');
        expect(res.body).toHaveProperty('message');
      });
  });
});
