const express = require("express");
const app = express();
app.use(express.json());

const database = require("./database.js");
const router = require("./router/router.js")

app.use("/user", router);

const port = 3005;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})