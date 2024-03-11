require("dotenv").config();
const express = require("express");
const userRouter = require("./users/routes");
const User = require("./users/model");

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(userRouter);

const syncTables = () => {
    User.sync();
};

app.listen(port, () => {
    syncTables();
    console.log(`Server is running on port ${port}`);
});
