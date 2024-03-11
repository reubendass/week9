const User = require("./model");

const signupUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).json({
            message: `Successfully added user: ${req.body.username} to the DB`,
            user: user,
        });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(201).json({ message: "All users in DB", users: users });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.update(
            { username: req.body.username },
            { where: { username: null } }
        );
        res.status(201).json({ message: `Updated username to ${user}` });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

const login = async (req, res) => {
    try {
        console.log("Login successfull", req.user);
        res.status(201).json({ message: "Login successful", user: req.user });
    } catch (error) {
        res.status(500).json({ error: error, message: error.message });
    }
};

module.exports = {
    signupUser: signupUser,
    getAllUsers: getAllUsers,
    updateUser: updateUser,
    login: login,
};
