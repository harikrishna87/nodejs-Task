const connection = require("../database.js");

exports.getAllUsers = (req, res) => {
    return new Promise((resolve, reject) => {
        connection.query("select * from users", (err, data) => {
            if(err) {
                reject(err.message);
            }
            else{
                resolve(data)
            }
        })
    })
}

exports.createUser = (req, res) => {
    return new Promise((resolve, reject) => {
        connection.query("insert into user (email, password) values (?, ?)", [req.body.eamil, req.body.password], (err, data) => {
            if(err) {
                reject(err.message);
            }
            else {
                resolve(data);
            }
        })
    })
}