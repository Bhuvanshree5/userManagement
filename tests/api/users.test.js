// tests/api/user.test.js
const { addUser, getUser } = require('../../src/api/users');

test('should add a user', () => {
    addUser({ name: 'Alice', age: 30 });
    expect(getUser('Alice')).toEqual({ name: 'Alice', age: 30 });
});

test('should throw an error for invalid user data', () => {
    expect(() => addUser({ name: '', age: -1 })).toThrow("Invalid user data");
});
