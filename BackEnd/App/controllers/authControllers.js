const {hash} = require("../utils/encrypt.js");
const db = require('../db');
const {generateAccessToken} = require("../utils/generateAccessToken");

exports.login = async (req, res) => {

    console.log(req.accountability);

    if (!req.body?.email || !req.body?.password) {
        res.status(400).send({
            message: "Required values : 'email', 'password'"
        });
        return;
    }

    const encryptedPassword = hash(req.body.password);
    const email = req.body.email;

    await db.select('*').from('users').where('email', email)
        .then(async (results) => {
            if (results.length > 0) {
                const loggedUser = results.filter(user => user.password === encryptedPassword);
                if(loggedUser.length){
                    let token = generateAccessToken(loggedUser[0].id);
                    await db('users').where('id', '=', loggedUser[0].id).update({
                        auth: token
                    }).then(() => {
                        res.status(200).send({
                            data: {
                                access_token : token
                            }
                        });
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
