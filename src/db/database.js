
// const mysql = require('mysql2');

// // Create a connection to the database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // replace with your MySQL username
//     password: 'Bhuvi@922', // replace with your MySQL password
//     database: 'users_info',
//     charset: 'utf8mb4' // the database you created
// });

// // Connect to the database
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the MySQL database');
// });

// function saveData(key, value) {
//     const sql = 'INSERT INTO data (`key`, value) VALUES (?, ?)';
//     connection.execute(sql,[key,value],  (err, results) => {
//         if (err) {
//             console.error('Error saving data:', err);
//         } else {
//             console.log('Data saved:', results);
//         }
//     });
    
// }


// function getData(key, callback) {
//     const sql = 'SELECT value FROM data WHERE `key` = ?';
//     connection.execute(sql,[key], (err, results) => {
//         if (err) {
//             console.error('Error retrieving data:', err);
//             callback(err, null);
//         } else if (results.length > 0) {
//             callback(null, results[0].value);
//         } else {
//             callback(null, null); 
//         }
//     });
// }


// module.exports = { saveData, getData };
const mysql = require('mysql2/promise');


async function createConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password: 'Bhuvi@922', 
        database: 'users_info' 
    });
}

// Function to save data
async function saveData(key, value) {
    const connection = await createConnection();
    try {
        const sql = 'INSERT INTO data (`key`, value) VALUES (?, ?)';
        await connection.execute(sql, [key, value]);
    } finally {
        await connection.end(); 
    }
}

// Function to get data
async function getData(key) {
    const connection = await createConnection();
    try {
        const sql = 'SELECT value FROM data WHERE `key` = ?';
        const [results] = await connection.execute(sql, [key]);
        return results.length > 0 ? results[0].value : null; 
    } finally {
        await connection.end();
    }
}

module.exports = { saveData, getData };


