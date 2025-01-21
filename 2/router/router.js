const express = require("express");
const router = express.Router();
const model = require("../models/user.js");

router.get("/", model.getAllUsers);
router.post("/createuser", model.createUser);
router.put("/updateuser/:id", model.updateUser);
router.delete("/deleteuser/:id", model.deleteUser);

module.exports = router;