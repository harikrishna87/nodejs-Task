const express = require("express");
const app = express();

const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_database
})

app.get("/", (req, res) => {
    connection.connect((err) => {
        if(err) {
            res.send("Error connecting to database")
        }
        else {
            res.send("Connected to database")
        }
    })
})

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})