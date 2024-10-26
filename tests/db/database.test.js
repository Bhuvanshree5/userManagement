// tests/db/database.test.js
const { saveData, getData } = require('../../src/db/database');

test('should save and retrieve data', () => {
    saveData('key1', 'value1');
    expect(getData('key1')).toBe('value1');
});
