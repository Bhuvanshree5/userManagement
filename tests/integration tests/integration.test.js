// tests/integration/integration.test.js
const request = require('supertest');
const app = require('../../src/server');

let server;

beforeAll((done) => {
    const PORT = process.env.TEST_PORT || 4000; // Use a different port for tests
    server = app.listen(PORT, () => {
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

test('should add user and retrieve from database', async () => {
    const user = { name: 'Bob', age: 25 };
    await request(server).post('/users').send(user);
    const response = await request(server).get('/users/Bob');
    expect(response.body).toEqual(user);
});
