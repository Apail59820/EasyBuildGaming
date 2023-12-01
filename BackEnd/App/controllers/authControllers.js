const {hash} = require("../utils/encrypt.js");

exports.login = (req, res) => {
    if (!req.body?.email || !req.body?.password) {
        res.status(400).send({
            message: "Required values : 'email', 'password'"
        });
        return;
    }

    const encryptedPassword = hash(req.body.password);

    const payload = {
        email: req.body.email,
        password: encryptedPassword,
    };

    res.status(200);
};
