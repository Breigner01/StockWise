import request from 'supertest';
import app from '../src/index.js';

describe('GraphQL API Gateway', () => {
  // Test cases for the authMiddleware
  it('should return 401 if no token is provided', () => {
    return request(app)
      .post('/graphql')
      .send({ query: '{ exampleQuery }' })
      .then((response) => {
        expect(response.status).toBe(401);
      });
  });

  it('should return 401 if an invalid token is provided', () => {
    return request(app)
      .post('/graphql')
      .set('Authorization', 'Bearer invalid_token')
      .send({ query: '{ exampleQuery }' })
      .then((response) => {
        expect(response.status).toBe(401);
      });
  });
});