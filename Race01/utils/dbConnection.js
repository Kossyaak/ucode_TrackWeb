const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'tochkuYnamoskvu1488',
    database: 'race01'
});

module.exports = dbConnection.promise();