const connection = require("../database.js");

exports.getAllUsers = (req, res) => {
    connection.query("select * from users", (err, data) => {
        if(err) {
            res.send(err.message);
        }
        else {
            res.send(data);
        }
    })
}

exports.createUser = (req, res) => {
    connection.query("insert into user (email, password) values (?, ?)", [req.body.email, req.body.password], (err, data) => {
        if(err) {
            res.send(err.message);
        }
        else {
            res.send("User created successfully");
        }
    })
}

exports.updateUser = (req, res) => {
    connection.query("update user set email = ?, password = ? where id = ?", [req.body.email, req.body.password, req.params.id], (err, data) => {
        if(err) {
            res.send(err.message);
        }
        else {
            res.send("User updated successfully");
        }
    })
}

exports.deleteUser = (req, res) => {
    connection.query("delete from user where id = ?", [req.params.id], (err, data) => {
        if(err) {
            res.send(err.message);
        }
        else {
            res.send("User deleted successfully");
        }
    })
}