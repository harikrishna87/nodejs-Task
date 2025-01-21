const mysql = require('mysql2');
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_database
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