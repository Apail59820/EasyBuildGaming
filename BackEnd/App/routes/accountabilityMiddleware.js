const jwt = require("jsonwebtoken");
const db = require('../db');

require('dotenv').config()
const accountabilityMiddleware = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];

    if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1];

        try{
            const webtoken = jwt.verify(token, process.env.SECRET_TOKEN);

            db.select('*').from('users').where('id', webtoken.userId)
                .then( (results) => {
                if(results.length) {
                    let user = results[0];
                    req.accountability = {
                        user: {
                            first_name: user.first_name,
                            last_name: user.last_name
                        },
                        role: user.role,
                        id: user.id
                    }
                    next();
                }
            })
        }catch(e) {
            // TokenExpired
        }
    }
};

module.exports = {
    extractAccountability: accountabilityMiddleware,
};
