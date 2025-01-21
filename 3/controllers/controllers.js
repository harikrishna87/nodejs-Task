const model = require("../models/models.js");

exports.getAllUser = async(req, res) => {

    let data = await model.getAllUsers();

    if(data) {
        res.json(data);
    } 
    else {
        res.status(404).json({message: "No users found"});
    }
}

exports.createUser = async (req, res) => {
    let data = await model.createUser();

    if(data) {
        res.json(data);
    }
    else {
        res.status(404).json({message: "User not created"});
    }
}

