const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers.js")

router.get("/userdata", controller.getAllUser)
router.post("/createUser", controller.createUser)

module.exports = router;