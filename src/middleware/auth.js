const bcrypt = require("bcrypt");

const User = require("../users/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        next();
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};

const comparePass = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { username: req.body.username },
        });

        const matched = await bcrypt.compare(
            req.body.password,
            user.dataValues.password
        );

        if (!matched) {
            res.status(401).json({ message: "Incorrect password" });
            return;
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};

module.exports = { hashPass: hashPass, comparePass: comparePass };
