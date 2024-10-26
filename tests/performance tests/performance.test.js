
const request = require('supertest');
const app = require('../../src/server');

describe('Performance tests', () => {
    test('should respond quickly', async () => {
        // Add a user first to ensure they exist
        await request(app).post('/users').send({ name: 'Alice', age: 30 });
        
        const response = await request(app).get('/users/Alice');
        expect(response.status).toBe(200);
    });
});

