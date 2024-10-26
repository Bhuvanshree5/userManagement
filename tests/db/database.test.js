const { saveData, getData } = require('../../src/db/database');
const connection = require('../../src/db/database'); // assuming your connection is exported
describe('Database operations', () => {
    test('should save and retrieve data', async () => {
        const key = 'testKey27';
        const value = 'testValue';

        await saveData(key, value);

        const retrievedValue = await getData(key); // Assuming getData is now an async function
        expect(retrievedValue).toBe(value);   
    }); // Increase timeout to 10000 ms
});

