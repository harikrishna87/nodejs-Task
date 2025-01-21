const express = require("express");
const app = express();
const router = require("./router/router.js")
app.use(express.json())


app.use("/users", router)

const port = 3008;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

