const express = require('express');
const { addUser, getUser } = require('./api/users');

const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
    try {
        addUser(req.body);
        res.status(201).send("User added");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get('/users/:name', (req, res) => {
    const user = getUser(req.params.name);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});

// Export the app for testing
module.exports = app;

// Start the server if this file is run directly
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
