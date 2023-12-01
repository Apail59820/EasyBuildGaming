const {hash} = require("../utils/encrypt.js");
const db = require('../db');

exports.login = async (req, res) => {

    if (!req.body?.email || !req.body?.password) {
        res.status(400).send({
            message: "Required values : 'email', 'password'"
        });
        return;
    }

    const encryptedPassword = hash(req.body.password);
    const email = req.body.email;

    await db.select('*').from('users').where('email', email)
        .then((results) => {
            if (results.length > 0) {
                const loggedUser = results.filter(user => user.password === encryptedPassword);
                if(loggedUser.length){
                    res.status(200).send({
                        //TODO auth token
                        data: loggedUser[0]
                    });
                }else {
                    res.status(403).send({
                        data: `Incorrect password.`
                    });
                }
            }else {
                res.status(404).send({
                    data: `Cannot find user with email : '${email}'`
                });
            }
        });
};
