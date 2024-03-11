const { Router } = require("express");
const userRouter = Router();
const { hashPass, comparePass } = require("../middleware/auth");
const { signupUser, getAllUsers, updateUser, login } = require("./controllers");

userRouter.post("/signup", hashPass, signupUser);
userRouter.post("/login", comparePass, login);
userRouter.get("/getUsers", getAllUsers);
userRouter.put("/update-user", updateUser);

module.exports = userRouter;
