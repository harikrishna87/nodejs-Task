const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hari@9550",
    database: "register"
})

connection.connect((err) => {
    if(err) {
        console.log('Error connecting to database: ', err);
    }
    else {
        console.log('Connected to database');
    }
})

module.exports = connection;