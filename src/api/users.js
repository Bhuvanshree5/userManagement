
const users = [];

function addUser(user) {
    const invalidNamePattern = /[\'\";]+|--/;
    if (!user.name || user.age < 0 || invalidNamePattern.test(user.name)) {
        throw new Error("Invalid user data");
    }
    users.push(user);
}

function getUser(name) {
    return users.find(user => user.name === name);
}

module.exports = { addUser, getUser };


